# Deployment Guide

## 📋 Quick Deployment Checklist

- [x] Repository created on GitHub: `https://github.com/nghianguyen7171/DS_for_Bussiness`
- [ ] Local build completed successfully
- [ ] Git repository initialized
- [ ] Code committed to main branch
- [ ] Pushed to GitHub
- [ ] GitHub Pages enabled

## 🚀 Deployment Steps

### Step 1: Build the Site

```bash
# Install dependencies (first time only)
npm install

# Build the static site
npm run build

# Or use the shell script
./build.sh
```

**Expected Output:**
- `docs/` directory created with all HTML, CSS, JS, and assets
- No build errors

### Step 2: Initialize Git Repository (if not already done)

```bash
# Initialize git
git init

# Add remote repository
git remote add origin https://github.com/nghianguyen7171/DS_for_Bussiness.git

# Check remote
git remote -v
```

### Step 3: Commit and Push

```bash
# Add all files
git add .

# Commit with message
git commit -m "Initial commit: Course website with all features"

# Push to GitHub
git push -u origin main
```

**OR use the deploy script:**

```bash
./deploy.sh
```

The script will:
- Check for uncommitted changes
- Prompt for commit if needed
- Push to GitHub
- Display GitHub Pages setup instructions

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub:
   ```
   https://github.com/nghianguyen7171/DS_for_Bussiness
   ```

2. Click on **Settings** (⚙️ icon in top navigation)

3. In the left sidebar, click on **Pages**

4. Under **Source**:
   - Select **Deploy from a branch**
   
5. Under **Branch**:
   - Branch: Select **main**
   - Folder: Select **/docs**
   - Click **Save**

6. Wait 1-2 minutes for deployment

7. Your site will be live at:
   ```
   https://nghianguyen7171.github.io/DS_for_Bussiness/
   ```

### Step 5: Verify Deployment

Visit your site and check:

- [ ] Homepage loads correctly
- [ ] Navigation menu works
- [ ] All sections display (Overview, Instructors, Schedule, etc.)
- [ ] Quizzes load correctly
- [ ] Syllabus page accessible
- [ ] Resources page accessible
- [ ] Policies and Grading pages accessible
- [ ] Dark/light theme toggle works
- [ ] Mobile navigation works
- [ ] All images load
- [ ] External links open correctly

## 🔄 Updating the Site

When you make changes:

```bash
# 1. Make your changes to files in src/

# 2. Rebuild
npm run build

# 3. Test locally (optional)
npm run dev

# 4. Commit and push
git add .
git commit -m "Update: describe your changes"
git push origin main

# OR use the deploy script
./deploy.sh
```

GitHub Pages will automatically redeploy your site within 1-2 minutes.

## 📝 Common Updates

### Update Course Content

1. Edit YAML files in `src/data/`:
   - `course.yml` - Course info
   - `instructors.yml` - Instructor details
   - `lectures.yml` - Schedule
   - `this-week.yml` - Current week

2. Rebuild and deploy:
   ```bash
   npm run build
   ./deploy.sh
   ```

### Add New Quiz

1. Create quiz folder in `Quiz/Lec##_quiz/`
2. Add `index.html`, `app.js`, `style.css`
3. Update `src/data/quizzes.yml`
4. Rebuild and deploy

### Update Styles

1. Edit SCSS in `src/styles/`
2. Rebuild - SCSS automatically compiles to CSS
3. Deploy

### Add New Page

1. Create Markdown file in `src/pages/`
2. Add link in navigation (edit `src/partials/navbar.hbs`)
3. Rebuild and deploy

## 🐛 Troubleshooting

### Build Fails

**Check:**
- Node.js version (14.0+)
- All dependencies installed: `npm install`
- No syntax errors in YAML files
- SCSS syntax is correct

**Fix:**
```bash
# Clean and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Pages Not Working

**Check:**
1. Repository is public
2. Pages is enabled in Settings → Pages
3. Source is set to `main` branch and `/docs` folder
4. Wait 2-3 minutes after push
5. Clear browser cache

**Fix:**
```bash
# Verify docs/ exists and has content
ls -la docs/

# Verify index.html exists
cat docs/index.html | head -20

# Force push if needed
git push -f origin main
```

### Images Not Loading

**Check:**
- Images are in correct path: `docs/assets/images/`
- File names match exactly (case-sensitive)
- Images were copied during build

**Fix:**
```bash
# Rebuild to copy images
npm run build

# Or manually copy
cp img/*.jpg docs/assets/images/
cp img/*.jpeg docs/assets/images/
```

### Quizzes Not Working

**Check:**
- Quiz files exist in `Quiz/` directory
- Quiz links in `quizzes.yml` are correct
- Files were copied to `docs/quiz/`

**Fix:**
```bash
# Verify quiz files
ls -la Quiz/

# Rebuild
npm run build
```

## 🌐 Custom Domain (Optional)

To use a custom domain like `ds-course.yourdomain.com`:

1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)

2. Add DNS records:
   ```
   Type: CNAME
   Name: ds-course (or @)
   Value: nghianguyen7171.github.io
   ```

3. Create `CNAME` file in project root:
   ```bash
   echo "ds-course.yourdomain.com" > CNAME
   ```

4. Update `build.js` to copy CNAME:
   ```javascript
   // In createCNAME() function
   const cnamePath = path.join(DOCS_DIR, 'CNAME');
   fs.writeFileSync(cnamePath, 'ds-course.yourdomain.com');
   ```

5. Rebuild and deploy

6. In GitHub Settings → Pages:
   - Enter custom domain
   - Check "Enforce HTTPS"

## 📊 Analytics (Optional)

To add Google Analytics:

1. Get tracking ID from Google Analytics

2. Add to `src/partials/footer.hbs`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

3. Rebuild and deploy

## 🔒 Security

- All dependencies are from npm
- No server-side code (static site)
- HTTPS enforced via GitHub Pages
- No user data collected (unless you add analytics)

## 📞 Support

If issues persist:
- Check [GitHub Issues](https://github.com/nghianguyen7171/DS_for_Bussiness/issues)
- Contact instructors
- Review build logs

---

**Last Updated:** October 8, 2025  
**Repository:** https://github.com/nghianguyen7171/DS_for_Bussiness  
**Live Site:** https://nghianguyen7171.github.io/DS_for_Bussiness/

