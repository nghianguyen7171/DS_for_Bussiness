/**
 * Basic Data Science in Economics and Business — course site builder.
 *
 * Aligned with the NEU FDA course site template:
 *   https://github.com/nghianguyen7171/neu_fda_coursesite
 *
 * This repo is where the template's architecture originated, so the data shapes
 * under src/data/ are unchanged. What the template adds:
 *
 *   1. The build FAILS if assessment weights do not sum to 100%, or if a CLO
 *      maps to an objective that is not declared.
 *   2. The build FAILS if any generated page links to a local file that does
 *      not exist, or to an in-page #anchor with no matching element. The old
 *      navbar linked "#assignments" while that section was commented out of
 *      index.hbs, so the link scrolled nowhere.
 *   3. Solution gating: `::: solution` blocks in Markdown are stripped by the
 *      default build and rendered only by `npm run build:keys`.
 *   4. All pages share one layout (src/templates/base.hbs). The Markdown pages
 *      previously each carried a duplicated hand-written copy of the navbar.
 *
 * Exam/ is copied to docs/ in full, as it always has been. Every file in it is
 * publicly reachable at a guessable URL, including the answer keys and the
 * question bank. That is a reviewed, deliberate choice — not an oversight.
 */

const fs = require('fs-extra');
const path = require('path');
const Handlebars = require('handlebars');
const yaml = require('js-yaml');
const { marked } = require('marked');
const sass = require('sass');
const { globSync } = require('glob');

const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');
const DOCS = path.join(ROOT, 'docs');
const PAGES = path.join(SRC, 'pages');

const WITH_SOLUTIONS = process.env.SOLUTIONS === '1';

const log = (...a) => console.log(...a);
const fail = (msg) => {
  console.error(`\nBuild failed: ${msg}\n`);
  process.exit(1);
};

// ---------------------------------------------------------------- data

function loadData() {
  const dir = path.join(SRC, 'data');
  const data = {};
  for (const file of fs.readdirSync(dir).filter((f) => /\.ya?ml$/.test(f))) {
    const key = path.basename(file, path.extname(file)).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    data[key] = yaml.load(fs.readFileSync(path.join(dir, file), 'utf8'));
  }
  return data;
}

function validateCourse(course) {
  if (!course) fail('src/data/course.yml is missing or empty.');

  const items = (course.assessment && course.assessment.items) || [];
  if (!items.length) fail('course.yml defines no assessment items.');

  const total = items.reduce((sum, item) => {
    const n = parseFloat(String(item.weight).replace('%', ''));
    if (Number.isNaN(n)) fail(`assessment item "${item.name}" has an unparseable weight: ${item.weight}`);
    return sum + n;
  }, 0);

  if (Math.abs(total - 100) > 0.01) {
    fail(
      `assessment weights sum to ${total}%, not 100%.\n` +
        items.map((i) => `    ${String(i.weight).padStart(5)}  ${i.name}`).join('\n')
    );
  }

  const objectives = new Set((course.objectives || []).map((o) => o.id));
  for (const clo of course.learning_outcomes || []) {
    if (!objectives.has(clo.objective)) {
      fail(`${clo.id} maps to objective "${clo.objective}", which is not defined in course.yml.`);
    }
  }

  log(`  validated: ${items.length} assessment items sum to 100%, ${(course.learning_outcomes || []).length} CLOs mapped`);
}

/**
 * Every local href/src in a generated page must resolve to a real file under
 * docs/ (which is the web root), and every "#anchor" must have a matching id.
 */
function validateLinks(pages) {
  const missingFiles = [];
  const deadAnchors = [];

  for (const [name, html] of Object.entries(pages)) {
    const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map((m) => m[1]));

    for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const raw = m[1].replace(/&#x3D;/g, '=');
      if (/^(https?:)?\/\//.test(raw) || raw.startsWith('mailto:')) continue;

      if (raw.startsWith('#')) {
        const id = raw.slice(1);
        if (id && !ids.has(id)) deadAnchors.push(`${name} -> #${id}`);
        continue;
      }

      const target = decodeURIComponent(raw.split('#')[0]);
      if (!target) continue;
      // macOS stores Vietnamese filenames decomposed (NFD) while the HTML
      // carries them composed (NFC). Accept either on disk.
      const ok =
        fs.existsSync(path.join(DOCS, target.normalize('NFC'))) ||
        fs.existsSync(path.join(DOCS, target.normalize('NFD')));
      if (!ok) missingFiles.push(`${name} -> ${target}`);
    }
  }

  if (missingFiles.length || deadAnchors.length) {
    let msg = '';
    if (missingFiles.length) {
      msg += `${missingFiles.length} link(s) point at files that do not exist:\n`;
      msg += [...new Set(missingFiles)].map((t) => `    ${t}`).join('\n') + '\n';
    }
    if (deadAnchors.length) {
      msg += `${deadAnchors.length} in-page anchor(s) have no matching element:\n`;
      msg += [...new Set(deadAnchors)].map((t) => `    ${t}`).join('\n');
    }
    fail(msg);
  }

  log('  validated: every local link resolves, every in-page anchor exists');
}

// ------------------------------------------------------- markdown + solutions

const SOLUTION_RE = /^::: *solution *$\n([\s\S]*?)^::: *$/gm;

function processSolutions(md) {
  if (!WITH_SOLUTIONS) return md.replace(SOLUTION_RE, '');
  return md.replace(
    SOLUTION_RE,
    (_, body) => `\n<div class="solution">\n<p class="solution-label">Solution</p>\n\n${body.trim()}\n\n</div>\n`
  );
}

function parseFrontmatter(raw) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!m) return { data: {}, body: raw };
  return { data: yaml.load(m[1]) || {}, body: raw.slice(m[0].length) };
}

// ---------------------------------------------------------------- templating

function registerHelpers(course) {
  const baseurl = (course.baseurl || '').replace(/\/$/, '');

  // docs/ is the web root of …github.io/DS_for_Bussiness/, so internal links
  // stay relative. encodeURI handles the Vietnamese notebook filenames, which
  // contain spaces and diacritics.
  Handlebars.registerHelper('url', (p) => {
    if (!p) return baseurl || './';
    if (/^(https?:)?\/\//.test(p) || p.startsWith('mailto:')) return p;
    const clean = encodeURI(String(p).replace(/^\//, '').normalize('NFC'));
    return baseurl ? `${baseurl}/${clean}` : clean;
  });

  Handlebars.registerHelper('eq', (a, b) => a === b);
  Handlebars.registerHelper('gt', (a, b) => a > b);
  Handlebars.registerHelper('concat', (...args) => args.slice(0, -1).join(''));
  Handlebars.registerHelper('year', () => new Date().getFullYear());
  Handlebars.registerHelper('md', (s) => new Handlebars.SafeString(marked.parse(String(s || ''))));
  Handlebars.registerHelper('mdInline', (s) => new Handlebars.SafeString(marked.parseInline(String(s || ''))));
  Handlebars.registerHelper('isReleased', (status) => (status || 'released') === 'released');
  Handlebars.registerHelper('statusLabel', (status) => ({ draft: 'Draft', tbd: 'TBD' }[status] || ''));
}

function registerPartials() {
  const dir = path.join(SRC, 'partials');
  for (const file of globSync('**/*.hbs', { cwd: dir })) {
    Handlebars.registerPartial(file.replace(/\.hbs$/, ''), fs.readFileSync(path.join(dir, file), 'utf8'));
  }
}

const tpl = (rel) => Handlebars.compile(fs.readFileSync(path.join(SRC, rel), 'utf8'));

// ---------------------------------------------------------------- copy steps

function compileStyles() {
  const out = sass.compile(path.join(SRC, 'styles', 'main.scss'), { style: 'compressed' });
  fs.outputFileSync(path.join(DOCS, 'assets', 'css', 'main.css'), out.css);
  log('  styles: assets/css/main.css');
}

function copyAssets() {
  const src = path.join(SRC, 'assets');
  if (fs.existsSync(src)) fs.copySync(src, path.join(DOCS, 'assets'));

  const imgSrc = path.join(ROOT, 'img');
  const imgDest = path.join(DOCS, 'assets', 'images');
  if (fs.existsSync(imgSrc)) {
    fs.ensureDirSync(imgDest);
    for (const img of ['Dr.TrongNghiaNguyen.jpeg', 'minhtrang.jpg', 'damtienthanh.jpg', 'neu-logo.png', 'fda-logo.png']) {
      const s = path.join(imgSrc, img);
      if (fs.existsSync(s)) fs.copySync(s, path.join(imgDest, img));
    }
  }
  log('  assets copied');
}

/**
 * Copy a top-level directory into docs/.
 *
 * `filter` applies to files. `dirs` controls whether sub-directories are
 * copied: the quiz apps need theirs, but notebook/ has a data/ sub-directory of
 * raw datasets (Walmart CSVs and the like) that has never been published and
 * would add megabytes to the repo.
 */
function copyTree(from, to, label, { filter, dirs = false } = {}) {
  const src = path.join(ROOT, from);
  if (!fs.existsSync(src)) return;
  const dest = path.join(DOCS, to);
  fs.ensureDirSync(dest);
  let n = 0;
  for (const file of fs.readdirSync(src)) {
    if (file.startsWith('.')) continue;
    const s = path.join(src, file);
    if (fs.statSync(s).isDirectory()) {
      if (!dirs) continue;
      fs.copySync(s, path.join(dest, file));
      n++;
      continue;
    }
    if (filter && !filter(file)) continue;
    fs.copySync(s, path.join(dest, file));
    n++;
  }
  log(`  ${label}: ${n} item(s)`);
}

// ---------------------------------------------------------------- main

function main() {
  log(`\nBuilding ${WITH_SOLUTIONS ? 'INSTRUCTOR (with solutions)' : 'PUBLIC'} site -> docs/\n`);

  const data = loadData();
  validateCourse(data.course);

  registerHelpers(data.course);
  registerPartials();

  const ctx = { ...data, withSolutions: WITH_SOLUTIONS };

  fs.ensureDirSync(DOCS);

  compileStyles();
  copyAssets();

  // Quiz/ holds a self-contained app per quiz (index.html + app.js + style.css).
  copyTree('Quiz', 'quiz', 'quizzes', { dirs: true });
  copyTree('notebook', 'notebook', 'notebooks', { filter: (f) => f.endsWith('.ipynb') });
  copyTree('slides', 'slides', 'slides');
  copyTree('Exam', 'Exam', 'exam files');

  const base = tpl('templates/base.hbs');
  const generated = {};

  // `prefix` makes the shared navbar work from every page: on the home page the
  // section links are bare "#overview" fragments; on a sub-page they must be
  // "index.html#overview", or they would scroll nowhere.
  const indexContent = tpl('index.hbs')(ctx);
  generated['index.html'] = base({
    ...ctx,
    content: new Handlebars.SafeString(indexContent),
    page: { nav: 'home', prefix: '' },
  });

  if (fs.existsSync(PAGES)) {
    // Standalone HTML pages pass through untouched (tur7-visualization.html).
    for (const file of fs.readdirSync(PAGES).filter((f) => f.endsWith('.html'))) {
      fs.copySync(path.join(PAGES, file), path.join(DOCS, file));
      log(`  page (verbatim): ${file}`);
    }

    for (const file of fs.readdirSync(PAGES).filter((f) => f.endsWith('.md'))) {
      const slug = path.basename(file, '.md');
      const { data: fm, body } = parseFrontmatter(fs.readFileSync(path.join(PAGES, file), 'utf8'));
      const expanded = Handlebars.compile(body)(ctx);
      const html = marked.parse(processSolutions(expanded));
      // These pages have no frontmatter; fall back to their first heading so the
      // browser tab reads "Grading · …" rather than "grading · …".
      const heading = (/^#\s+(.+)$/m.exec(body) || [])[1];
      generated[`${slug}.html`] = base({
        ...ctx,
        content: new Handlebars.SafeString(`<div class="wrap section"><article class="prose">${html}</article></div>`),
        page: { title: fm.title || heading || slug, nav: slug, prefix: 'index.html' },
      });
    }
  }

  for (const [name, html] of Object.entries(generated)) {
    fs.outputFileSync(path.join(DOCS, name), html);
    log(`  page: ${name}`);
  }

  validateLinks(generated);

  if (WITH_SOLUTIONS) log('\n  NOTE: this build renders solution blocks. Do not publish docs/.');
  log('\nDone.\n');
}

main();
