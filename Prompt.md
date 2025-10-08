

Goal

- Produce a working GitHub repository that can be deployed to GitHub Pages (username.github.io/<repo>) with a modern static site (no server code), similar structure and UX to the referenced Intro_to_AI site.
- Reuse the strengths of the reference (templating with Handlebars, YAML-driven content, responsive layout, simple build pipeline) but keep code original (no copying text or proprietary assets).
- Convert DS_BUSS.md content into modular YAML/Markdown sections for lectures, assignments, schedule, assessment, CLOs, and instructor bios.

References

- Live reference: https://nghianguyen7171.github.io/Intro_to_AI/\#home
- Repo reference: https://github.com/nghianguyen7171/Intro_to_AI
- Content source (attached file): DS_BUSS.md (English translation of the course syllabus)
- In folder Quiz, we have quiz by lectute buiding by .js, .html and .css files, each folder can build a quiz under webpage. Create quiz section for user can use to practive from created quiz webpage.

Important: Use the structure as inspiration; do not copy any original text, images, or asset licenses.

Tech stack

- Static build with Node.js.
- Handlebars for templating.
- YAML for data (lectures, assignments, this-week, course-info).
- Stylus or SCSS for styles (choose one; prefer SCSS).
- Vanilla JS for interactivity (anchors, mobile menu).
- GitHub Pages friendly: output to /docs or use a gh-pages branch.

Repository structure

- /
    - package.json
    - README.md
    - build.sh
    - deploy.sh
    - src/
        - index.hbs
        - partials/
            - header.hbs
            - footer.hbs
            - navbar.hbs
            - hero.hbs
            - sections/
                - overview.hbs
                - instructors.hbs
                - outcomes.hbs
                - assessment.hbs
                - schedule.hbs
                - resources.hbs
        - styles/
            - main.scss
            - _variables.scss
            - _layout.scss
            - _components.scss
        - scripts/
            - main.js
        - data/
            - course.yml
            - instructors.yml
            - lectures.yml
            - assignments.yml
            - this-week.yml
        - pages/
            - syllabus.md
            - policies.md
            - grading.md
            - resources.md
        - assets/
            - images/
                - placeholders for instructor photos
- /docs (build output if using docs/ for GitHub Pages)

Build and tooling

- Add scripts:
    - "dev": live-reload static server for src (optional).
    - "build": compile Handlebars with YAML data into static HTML, copy assets, compile SCSS into CSS, write output to /docs.
    - "deploy": if using gh-pages, push /docs to gh-pages branch.
- Implement a minimal static site generator step in Node that:
    - Loads data/*.yml.
    - Renders src/index.hbs with partials.
    - Converts pages/*.md into HTML subpages (simple Markdown-to-HTML pipeline).
    - Resolves relative asset paths.

Design and layout

- Top nav: Home, Syllabus, Schedule, Resources, Policies.
- “Hero” section with course title, short tagline, CTA buttons to Syllabus and Schedule.
- Responsive, accessible (skip links, semantic landmarks), mobile nav drawer.
- Keep visual style clean, academic; do not use heavy animations.
- Include dark/light theme toggle (prefers-color-scheme first).

Content modeling from DS_BUSS.md
Parse and structure DS_BUSS.md into:

1) course.yml

- title: "Basic Data Science in Economics and Business"
- code: "FDA.6.1.2.01.V"
- credits: 3
- hours:
    - in_class: 45
    - self_study: 90
- program: "Undergraduate" (use DS_BUSS.md if specified; otherwise default to “Undergraduate”)
- prerequisites:
    - "Mathematics for Economists"
    - "Probability Theory and Mathematical Statistics (or Statistics in Economics and Business)"
- links:
    - slides: "https://fit.neu.edu.vn/room/Le2MmM"
    - book: "https://nct-neu.github.io/Sach_Khoa_hoc_du_lieu_python/README.html"
    - github: "https://github.com/NCT-NEU/Sach_Khoa_hoc_du_lieu_python/tree/main"
- description: One-paragraph abstract from the “COURSE DESCRIPTION” section (rewrite for concision)
- objectives (G1–G5): list extracted from “COURSE OBJECTIVES”
- learning_outcomes (CLOs): structured from “COURSE LEARNING OUTCOMES”
- assessment:
    - items:
        - { name: "Attendance/participation", week: "1–15", weight: "10%", description: "Roll call; homework evaluation; in-class engagement" }
        - { name: "Knowledge Check 1", week: "8", weight: "20%", description: "Quiz/coding/presentation in class" }
        - { name: "Knowledge Check 2", week: "15", weight: "20%", description: "Quiz/coding/presentation in class" }
        - { name: "Final exam", week: "Per schedule", weight: "50%", description: "Computer-based multiple-choice exam" }
- policies:
    - eligibility: "At least 5 points for participation to sit the final exam."
    - attendance: "Attend all scheduled sessions; in force majeure cases, self-study provided materials and assigned readings."
    - conduct: bullet list from “Classroom conduct”.
    - submission: "Late submissions penalized 1 point/day; missing submissions receive 0."
- software: ["Python 13.0+"]

2) instructors.yml

- Define instructors found in DS_BUSS.md:
    -         - name: "Dr. Nguyen Trong Nghia"
email: "nghiant@neu.edu.vn"
role: "Lecture"
image: "/Users/nguyennghia/PROJECT/DS_BUSSINESS/img/Dr.TrongNghiaNguyen.jpeg" (placeholder path) 
bio: rewrite the given short bio into 2–3 concise sentences.
    -         - name: "MSc. Nguyen Thi Minh Trang"
email: "ntmtrang@neu.edu.vn"
role: "Tutorial"
image: "assets/images//Users/nguyennghia/PROJECT/DS_BUSSINESS/img/minhtrang.jpg"
bio: 1–2 sentence bio (concise).
    -         - name: "MSc. Dam Tien Thanh"
email: "thanhtd@neu.edu.vn"
role: "Tutorial"
image: "assets/images//Users/nguyennghia/PROJECT/DS_BUSSINESS/img/damtienthanh.jpg"
bio: 1–2 sentence bio (concise).

3) lectures.yml

- 15 entries, extracted from “TEACHING PLAN”:
    - id: 1..15
    - week: 1..15
    - type: "Lecture" or "Practice" or "Midterm"
    - title: concise title
    - topics: bullet list derived from each week’s subpoints
    - materials: chapter references if present
    - assessment: if any (e.g., Midterm 1/2)
- Normalize Vietnamese to English (already in DS_BUSS.md translation).

4) assignments.yml

- If weekly homework is implied, create placeholders:
    -         - id: "hw1"
title: "Python Basics Practice"
due: "Week 3"
deliverables: ["Notebook (.ipynb) or .py file", "Short reflection (200–300 words)"]
grading: ["Correctness", "Code readability", "Completion"]
- Add 3–4 representative items aligned with DS_BUSS.md scope.

5) this-week.yml

- Data structure:
    - week_current: e.g., 1
    - highlights:
        - "Install Python and Jupyter"
        - "Read Chapters 1–3"
        - "Complete Python basics practice"

6) pages/*.md

- syllabus.md: full structured syllabus combining description, objectives, CLOs, assessment, policies, schedule summary in Markdown (do not duplicate home page entirely).
- policies.md: expand eligibility, attendance, conduct, submission policies.
- grading.md: render assessment table in Markdown, plus grading notes.
- resources.md: list slide/book/GitHub links, software requirements, and recommended libraries.

Templating

- index.hbs composes:
    - hero.hbs (course title, brief pitch, CTA buttons)
    - sections/overview.hbs (summary, links)
    - sections/instructors.hbs (cards from instructors.yml)
    - sections/outcomes.hbs (objectives + CLOs)
    - sections/assessment.hbs (weights table)
    - sections/schedule.hbs (compact 15-week table with anchors to syllabus.md)
    - sections/resources.hbs (books, software)
- Provide accessible headings and skip-to-content link.

Styling

- SCSS variables in _variables.scss (colors, spacing, type).
- _layout.scss for grid, containers, spacing scale.
- _components.scss for cards, tables, nav, buttons, badges, dark mode toggle.
- main.scss imports all partials.

JavaScript (main.js)

- Mobile nav toggle.
- Smooth scroll for in-page anchors.
- Light/dark theme toggle using prefers-color-scheme with a user override stored in localStorage.

Build pipeline details

- package.json dependencies:
    - handlebars, js-yaml, marked (for Markdown), node-sass or sass, chokidar (optional for dev), esbuild (optional).
- Node build script steps:

1) Load YAML files into a single data object.
2) Compile SCSS to CSS into docs/assets/main.css.
3) Render index.hbs with partials to docs/index.html.
4) Convert pages/*.md files to HTML pages in docs/.
5) Copy assets/ to docs/assets/.
- Provide build.sh to run node build and write to /docs.
- Provide deploy.sh that either:
    - uses GitHub Pages “/docs” setting (recommended), or
    - pushes /docs to gh-pages via git subtree push (commented instructions).

Content quality and transformations

- Rewrite sentences for clarity and brevity where needed but maintain meaning of DS_BUSS.md.
- Keep academic tone; ensure consistency in terminology: “Course Learning Outcomes (CLOs), Objectives (G1–G5), Assessment, Teaching Plan (Schedule).”
- Normalize time references (e.g., “Weeks 1–15”).
- For any missing fields, infer reasonable defaults and mark as “TBD” in YAML comments.

Deliverables

- Create all files with working content.
- After generation, print:
    - A tree of the repository.
    - Key files preview (index.hbs, course.yml, instructors.yml, lectures.yml).
    - Exact commands to run:
        - npm install
        - npm run build
        - git init; git add .; git commit -m "init course site"
        - Create repo on GitHub; push
        - Enable GitHub Pages with /docs
- Validate that docs/index.html renders without external build steps.

Edge cases and checks

- Ensure no absolute paths; all assets referenced relatively.
- Ensure anchor IDs are unique and predictable.
- Ensure tables are responsive on mobile.
- Avoid heavy libraries.

Now, perform the following steps:

1) Create the full repository in-memory following the structure above.
2) Fill YAML and Markdown from DS_BUSS.md content accurately.
3) Generate the templated pages.
4) Output the repository tree and the content of the main files inline.
5) Provide the exact terminal commands to build and publish via GitHub Pages using docs/.
6) Provide a short checklist for manual QA (links, responsiveness, dark mode, schedule completeness).][^1]
<span style="display:none">[^2]</span>

<div align="center">⁂</div>

[^1]: DS_BUSS.md

[^2]: DS_bussiness.md

