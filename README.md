# Data Science for Business - Course Website

A modern, responsive static website for the **Basic Data Science in Economics and Business** course at National Economics University.

## 🌟 Features

- **Modern Design**: Clean, academic layout with responsive design
- **Dark/Light Theme**: Automatic theme switching with manual override
- **Interactive Quizzes**: Practice quizzes for each lecture
- **Accessible**: WCAG compliant with semantic HTML and ARIA labels
- **Fast Loading**: Optimized static site with minimal dependencies
- **Mobile-Friendly**: Fully responsive with mobile navigation

## 🚀 Quick Start

### Prerequisites

- Node.js 14.0 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Build

```bash
# Build the site
npm run build

# Or use the shell script
chmod +x build.sh
./build.sh
```

### Development

```bash
# Start development server with live reload
npm run dev
```

The site will be available at `http://localhost:8080`

## 📁 Project Structure

```
DS_BUSSINESS/
├── src/                    # Source files
│   ├── index.hbs          # Main template
│   ├── partials/          # Handlebars partials
│   │   ├── navbar.hbs
│   │   ├── hero.hbs
│   │   ├── footer.hbs
│   │   └── sections/      # Section partials
│   ├── styles/            # SCSS stylesheets
│   │   ├── main.scss
│   │   ├── _variables.scss
│   │   ├── _layout.scss
│   │   └── _components.scss
│   ├── scripts/           # JavaScript files
│   │   └── main.js
│   ├── data/              # YAML data files
│   │   ├── course.yml
│   │   ├── instructors.yml
│   │   ├── lectures.yml
│   │   ├── assignments.yml
│   │   ├── this-week.yml
│   │   └── quizzes.yml
│   └── pages/             # Markdown pages
│       ├── syllabus.md
│       ├── policies.md
│       ├── grading.md
│       └── resources.md
├── docs/                  # Build output (GitHub Pages)
├── Quiz/                  # Quiz HTML/CSS/JS files
├── img/                   # Instructor images
├── build.js              # Build script
├── server.js             # Dev server
├── package.json
└── README.md
```

## 🔧 Technology Stack

- **Templating**: Handlebars.js
- **Styling**: SCSS (Sass)
- **Content**: YAML + Markdown
- **Build**: Node.js
- **Deployment**: GitHub Pages

## 📝 Content Management

### Updating Course Data

Edit YAML files in `src/data/`:

- `course.yml` - Course information, objectives, policies
- `instructors.yml` - Instructor details and bios
- `lectures.yml` - Weekly lecture schedule
- `assignments.yml` - Homework and projects
- `this-week.yml` - Current week highlights
- `quizzes.yml` - Practice quiz links

### Updating Pages

Edit Markdown files in `src/pages/`:

- `syllabus.md` - Full course syllabus
- `policies.md` - Course policies
- `grading.md` - Grading details
- `resources.md` - Learning resources

### Adding Quizzes

1. Create quiz folder in `Quiz/` (e.g., `Quiz/Lec06_quiz/`)
2. Add `index.html`, `app.js`, `style.css`
3. Update `src/data/quizzes.yml` with quiz information
4. Rebuild the site

## 🌐 Deployment to GitHub Pages

### Using the Deploy Script

```bash
# Make script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

### Manual Deployment

1. Build the site:
   ```bash
   npm run build
   ```

2. Commit and push:
   ```bash
   git add .
   git commit -m "Update site"
   git push origin main
   ```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`, Folder: `/docs`
   - Save

4. Site will be live at:
   ```
   https://nghianguyen7171.github.io/DS_for_Bussiness/
   ```

## 🎨 Customization

### Theme Colors

Edit `src/styles/_variables.scss`:

```scss
$color-primary: #2563eb;
$color-secondary: #7c3aed;
$color-accent: #f59e0b;
```

### Fonts

Edit `src/styles/_variables.scss`:

```scss
$font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
$font-family-heading: 'Georgia', 'Times New Roman', serif;
```

### Layout

Edit `src/styles/_layout.scss` for spacing, grid, and responsive breakpoints.

## 📚 Scripts

- `npm run build` - Build the static site
- `npm run dev` - Start development server
- `npm run clean` - Clean the docs directory

## 🧪 Testing

### Local Testing

```bash
# Build and serve
npm run build
npm run dev
```

### Checklist

- [ ] All links working
- [ ] Responsive on mobile/tablet/desktop
- [ ] Dark/light theme toggle works
- [ ] Navigation menu works on mobile
- [ ] Quizzes load correctly
- [ ] Images display properly
- [ ] Smooth scrolling works
- [ ] External links open in new tab

## 📄 License

MIT License - See LICENSE file for details

## 👥 Contributors

### Course Instructors

- **Dr. Nguyen Trong Nghia** - nghiant@neu.edu.vn (Lecture)
- **MSc. Nguyen Thi Minh Trang** - ntmtrang@neu.edu.vn (Tutorial)
- **MSc. Dam Tien Thanh** - thanhtd@neu.edu.vn (Tutorial)

### Website Development

Built with ❤️ for the Data Science and Artificial Intelligence Department, National Economics University

## 🐛 Issues & Support

For issues or questions:
- Create an issue on GitHub
- Contact course instructors
- Check the documentation in `src/pages/resources.md`

---

**National Economics University**  
Faculty of Data Science and Artificial Intelligence  
© 2025 All Rights Reserved

