const fs = require('fs-extra');
const path = require('path');
const Handlebars = require('handlebars');
const yaml = require('js-yaml');
const { marked } = require('marked');
const sass = require('sass');
const { glob } = require('glob');

// Paths
const SRC_DIR = path.join(__dirname, 'src');
const DOCS_DIR = path.join(__dirname, 'docs');
const DATA_DIR = path.join(SRC_DIR, 'data');
const PAGES_DIR = path.join(SRC_DIR, 'pages');
const ASSETS_SRC = path.join(SRC_DIR, 'assets');
const ASSETS_DEST = path.join(DOCS_DIR, 'assets');

// Register Handlebars helpers
Handlebars.registerHelper('eq', function(a, b) {
  return a === b;
});

Handlebars.registerHelper('gt', function(a, b) {
  return a > b;
});

Handlebars.registerHelper('lt', function(a, b) {
  return a < b;
});

// Convert hyphenated string to camelCase
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

// Load all YAML data files
function loadData() {
  console.log('📦 Loading data files...');
  const data = {};
  
  const dataFiles = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  
  dataFiles.forEach(file => {
    const filePath = path.join(DATA_DIR, file);
    const fileName = path.basename(file, path.extname(file));
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Handle different naming conventions
    const parsedData = yaml.load(content);
    
    if (fileName === 'this-week') {
      data.thisWeek = parsedData;
    } else {
      // Convert hyphenated names to camelCase
      const camelCaseName = toCamelCase(fileName);
      data[camelCaseName] = parsedData;
    }
    
    console.log(`  ✓ Loaded ${file}`);
  });
  
  return data;
}

// Register Handlebars partials
function registerPartials() {
  console.log('🔧 Registering Handlebars partials...');
  
  const partialsDir = path.join(SRC_DIR, 'partials');
  
  function registerPartialsInDir(dir, prefix = '') {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        registerPartialsInDir(itemPath, prefix + item + '/');
      } else if (item.endsWith('.hbs')) {
        const partialName = prefix + path.basename(item, '.hbs');
        const content = fs.readFileSync(itemPath, 'utf8');
        Handlebars.registerPartial(partialName, content);
        console.log(`  ✓ Registered partial: ${partialName}`);
      }
    });
  }
  
  registerPartialsInDir(partialsDir);
}

// Compile SCSS to CSS
function compileStyles() {
  console.log('🎨 Compiling SCSS...');
  
  const scssFile = path.join(SRC_DIR, 'styles', 'main.scss');
  const outputFile = path.join(DOCS_DIR, 'assets', 'css', 'main.css');
  
  fs.ensureDirSync(path.dirname(outputFile));
  
  const result = sass.compile(scssFile, {
    style: 'compressed',
    sourceMap: false
  });
  
  fs.writeFileSync(outputFile, result.css);
  console.log(`  ✓ Compiled to ${outputFile}`);
}

// Copy JavaScript files
function copyScripts() {
  console.log('📝 Copying JavaScript files...');
  
  const srcScripts = path.join(SRC_DIR, 'scripts');
  const destScripts = path.join(DOCS_DIR, 'assets', 'js');
  
  fs.ensureDirSync(destScripts);
  fs.copySync(srcScripts, destScripts);
  console.log(`  ✓ Copied scripts to ${destScripts}`);
}

// Copy assets (images, etc.)
function copyAssets() {
  console.log('🖼️  Copying assets...');
  
  // Copy from src/assets if it exists
  if (fs.existsSync(ASSETS_SRC)) {
    fs.copySync(ASSETS_SRC, ASSETS_DEST);
    console.log(`  ✓ Copied src/assets to ${ASSETS_DEST}`);
  }
  
  // Copy instructor images from img/ to docs/assets/images/
  const imgSrc = path.join(__dirname, 'img');
  const imgDest = path.join(DOCS_DIR, 'assets', 'images');
  
  if (fs.existsSync(imgSrc)) {
    fs.ensureDirSync(imgDest);
    
    // Copy specific instructor images
    const images = ['Dr.TrongNghiaNguyen.jpeg', 'minhtrang.jpg', 'damtienthanh.jpg'];
    images.forEach(img => {
      const src = path.join(imgSrc, img);
      const dest = path.join(imgDest, img);
      if (fs.existsSync(src)) {
        fs.copySync(src, dest);
        console.log(`  ✓ Copied ${img}`);
      }
    });
  }
}

// Copy quiz files
function copyQuizzes() {
  console.log('❓ Copying quiz files...');
  
  const quizSrc = path.join(__dirname, 'Quiz');
  const quizDest = path.join(DOCS_DIR, 'quiz');
  
  if (fs.existsSync(quizSrc)) {
    fs.copySync(quizSrc, quizDest);
    console.log(`  ✓ Copied quiz files to ${quizDest}`);
  }
}

// Copy notebook files
function copyNotebooks() {
  console.log('📓 Copying notebook files...');
  
  const notebookSrc = path.join(__dirname, 'notebook');
  const notebookDest = path.join(DOCS_DIR, 'notebook');
  
  if (fs.existsSync(notebookSrc)) {
    fs.ensureDirSync(notebookDest);
    
    // Copy only .ipynb files (not the guides)
    const notebooks = fs.readdirSync(notebookSrc).filter(f => f.endsWith('.ipynb'));
    
    notebooks.forEach(file => {
      const srcPath = path.join(notebookSrc, file);
      const destPath = path.join(notebookDest, file);
      fs.copySync(srcPath, destPath);
      console.log(`  ✓ Copied ${file}`);
    });
  }
}

// Copy slides/materials (PDFs, etc.) to docs for course supply materials
function copySlides() {
  console.log('📑 Copying slides & supply materials...');
  
  const slidesSrc = path.join(__dirname, 'slides');
  const slidesDest = path.join(DOCS_DIR, 'slides');
  
  if (fs.existsSync(slidesSrc)) {
    fs.ensureDirSync(slidesDest);
    const files = fs.readdirSync(slidesSrc);
    files.forEach(file => {
      const srcPath = path.join(slidesSrc, file);
      if (fs.statSync(srcPath).isFile()) {
        fs.copySync(srcPath, path.join(slidesDest, file));
        console.log(`  ✓ Copied ${file}`);
      }
    });
  }
}

function copyExamFiles() {
  console.log('📚 Copying exam files...');
  
  const examSrc = path.join(__dirname, 'Exam');
  const examDest = path.join(DOCS_DIR, 'Exam');
  
  if (fs.existsSync(examSrc)) {
    fs.ensureDirSync(examDest);
    
    // Copy all files from Exam directory
    const examFiles = fs.readdirSync(examSrc);
    
    examFiles.forEach(file => {
      const srcPath = path.join(examSrc, file);
      const destPath = path.join(examDest, file);
      
      if (fs.statSync(srcPath).isFile()) {
        fs.copySync(srcPath, destPath);
        console.log(`  ✓ Copied ${file}`);
      }
    });
    
    // Also copy the HTML answer keys page
    const htmlAnswerKeysSrc = path.join(examSrc, 'answer-keys.html');
    const htmlAnswerKeysDest = path.join(examDest, 'answer-keys.html');
    if (fs.existsSync(htmlAnswerKeysSrc)) {
      fs.copySync(htmlAnswerKeysSrc, htmlAnswerKeysDest);
      console.log(`  ✓ Copied answer-keys.html`);
    }
  }
}

// Render index.html from Handlebars template
function renderIndex(data) {
  console.log('📄 Rendering index.html...');
  
  const templatePath = path.join(SRC_DIR, 'index.hbs');
  const templateContent = fs.readFileSync(templatePath, 'utf8');
  const template = Handlebars.compile(templateContent);
  
  const html = template(data);
  
  const outputPath = path.join(DOCS_DIR, 'index.html');
  fs.writeFileSync(outputPath, html);
  console.log(`  ✓ Created ${outputPath}`);
}

// Convert Markdown pages to HTML and copy HTML files
function renderMarkdownPages(data) {
  console.log('📝 Converting Markdown pages...');
  
  if (!fs.existsSync(PAGES_DIR)) {
    console.log('  ⚠️  No pages directory found');
    return;
  }
  
  // Copy HTML files directly
  const htmlFiles = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.html'));
  htmlFiles.forEach(file => {
    const srcPath = path.join(PAGES_DIR, file);
    const destPath = path.join(DOCS_DIR, file);
    fs.copySync(srcPath, destPath);
    console.log(`  ✓ Copied ${file}`);
  });
  
  const mdFiles = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.md'));
  
  // Create a simple HTML template for markdown pages
  const pageTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}} | Data Science for Business</title>
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="container">
            <div class="navbar-brand">
                <a href="index.html" class="navbar-logo">
                    <span class="logo-text">DS Business</span>
                </a>
                <button class="navbar-toggle" aria-label="Toggle navigation" aria-expanded="false">
                    <span class="hamburger"></span>
                </button>
            </div>
            
            <div class="navbar-menu">
                <ul class="navbar-nav">
                    <li><a href="index.html#home" class="nav-link">Home</a></li>
                    <li><a href="index.html#overview" class="nav-link">Overview</a></li>
                    <li><a href="index.html#instructors" class="nav-link">Instructors</a></li>
                    <li><a href="index.html#schedule" class="nav-link">Schedule</a></li>
                    <li><a href="index.html#quizzes" class="nav-link">Quizzes</a></li>
                    <li><a href="syllabus.html" class="nav-link">Syllabus</a></li>
                    <li><a href="resources.html" class="nav-link">Resources</a></li>
                </ul>
                <button class="theme-toggle" aria-label="Toggle dark mode">
                    <span class="theme-icon">🌙</span>
                </button>
            </div>
        </div>
    </nav>
    
    <main id="main-content" class="markdown-content">
        {{{content}}}
    </main>
    
    <footer class="footer" role="contentinfo">
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2025 National Economics University. All rights reserved.</p>
                <p>Faculty of Data Science and Artificial Intelligence</p>
            </div>
        </div>
    </footer>
    
    <script src="assets/js/main.js"></script>
</body>
</html>`;
  
  const compiledTemplate = Handlebars.compile(pageTemplate);
  
  mdFiles.forEach(file => {
    const mdPath = path.join(PAGES_DIR, file);
    const mdContent = fs.readFileSync(mdPath, 'utf8');
    
    // Convert markdown to HTML
    const htmlContent = marked(mdContent);
    
    // Extract title from first h1 if present
    const titleMatch = mdContent.match(/^# (.+)$/m);
    const title = titleMatch ? titleMatch[1] : path.basename(file, '.md');
    
    const html = compiledTemplate({
      title: title,
      content: htmlContent
    });
    
    const outputPath = path.join(DOCS_DIR, file.replace('.md', '.html'));
    fs.writeFileSync(outputPath, html);
    console.log(`  ✓ Created ${path.basename(outputPath)}`);
  });
}

// Create CNAME file for custom domain (if needed)
function createCNAME() {
  // Uncomment and modify if you have a custom domain
  // const cnamePath = path.join(DOCS_DIR, 'CNAME');
  // fs.writeFileSync(cnamePath, 'yourdomain.com');
  // console.log('  ✓ Created CNAME file');
}

// Main build function
async function build() {
  console.log('🚀 Starting build process...\n');
  
  try {
    // Clean docs directory
    console.log('🧹 Cleaning docs directory...');
    if (fs.existsSync(DOCS_DIR)) {
      fs.removeSync(DOCS_DIR);
    }
    fs.ensureDirSync(DOCS_DIR);
    console.log('  ✓ Cleaned\n');
    
    // Load data
    const data = loadData();
    console.log('');
    
    // Register partials
    registerPartials();
    console.log('');
    
    // Compile styles
    compileStyles();
    console.log('');
    
    // Copy scripts
    copyScripts();
    console.log('');
    
    // Copy assets
    copyAssets();
    console.log('');
    
    // Copy quizzes
    copyQuizzes();
    console.log('');
    
    // Copy slides & supply materials
    copySlides();
    console.log('');
    
    // Copy notebooks
    copyNotebooks();
    console.log('');
    
    // Copy exam files
    copyExamFiles();
    console.log('');
    
    // Render index
    renderIndex(data);
    console.log('');
    
    // Render markdown pages
    renderMarkdownPages(data);
    console.log('');
    
    // Create CNAME if needed
    createCNAME();
    
    console.log('\n✅ Build completed successfully!');
    console.log(`\n📂 Output directory: ${DOCS_DIR}`);
    console.log('\n🌐 To preview locally:');
    console.log('   1. Run: npm run dev');
    console.log('   2. Or open docs/index.html in your browser\n');
    
  } catch (error) {
    console.error('\n❌ Build failed:', error);
    process.exit(1);
  }
}

// Run build
build();

