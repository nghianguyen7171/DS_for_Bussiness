# 🎯 Using RISE Slideshow in JupyterLab

## ✅ **RISE is Now Installed for JupyterLab!**

You now have `jupyterlab-rise` (version 0.43.1) - the modern RISE extension for JupyterLab.

---

## 🚀 **How to Start Slideshow (3 Ways)**

### **Method 1: Slideshow Button (Easiest)**

1. **Look at the top toolbar** in JupyterLab
2. Find the **"Slideshow"** button (next to Run/Stop buttons)
3. Click it to start presentation
4. Navigate with `Space`, `←`, `→`, `Esc`

### **Method 2: Right-Click Menu**

1. Right-click anywhere in the notebook
2. Select **"Start Slideshow"** from the menu
3. Slideshow starts immediately

### **Method 3: Command Palette**

1. Press `Cmd+Shift+C` (Mac) or `Ctrl+Shift+C` (Windows)
2. Type "slideshow"
3. Select **"Start RISE Slideshow"**
4. Press Enter

---

## 🎨 **Configure Slide Types in JupyterLab**

### **Using the Property Inspector (Right Sidebar)**

1. **Click any cell** you want to configure
2. **Open right sidebar** if not visible (View → Activate Right Sidebar)
3. Look for **"Property Inspector"** tab (🔧 icon)
4. Find **"Slide Type"** section
5. Select from dropdown:
   - **Slide** - Main slide
   - **Sub-slide** - Nested under previous slide
   - **Fragment** - Appears on same slide
   - **Skip** - Hidden from presentation
   - **Notes** - Speaker notes only

### **Quick Selection Method**

1. Select **multiple cells** (Shift+Click)
2. Right-click → **"Slide Type"** → Choose type
3. All selected cells get the same type

---

## 📊 **Visual Guide**

### **What You Should See:**

```
┌─────────────────────────────────────────────────────────────┐
│  JupyterLab                                            [×]   │
├─────────────────────────────────────────────────────────────┤
│  File  Edit  View  Run  Kernel  Settings  Help              │
├─────────────────────────────────────────────────────────────┤
│  📁 ▶ ⏸ ⏹ ↻ [+ Code ▼]  🎬 Slideshow  [More ▼]  │  ← HERE!│
├─────────────────────────────────────────────────────────────┤
│  [Notebook Content]                    │  Property Inspector│
│                                        │  ┌───────────────┐ │
│                                        │  │ Slide Type:   │ │
│                                        │  │  [Slide ▼]    │ │
│                                        │  └───────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## ⌨️ **Keyboard Shortcuts**

| Action | Shortcut |
|--------|----------|
| **Start/Stop Slideshow** | `Cmd+Shift+I` (Mac) |
| Next Slide | `Space` or `→` |
| Previous Slide | `Shift+Space` or `←` |
| Navigate Sub-slides | `↑` / `↓` |
| Fullscreen | `F` |
| Exit | `Esc` |

---

## 🎓 **Recommended Slide Configuration**

### **For Your 90-Minute Lecture:**

**Structure by Section:**

```
📚 LEARNING ROADMAP
└─ Slide Type: "Slide"

📝 Section 1.1: CSV Files
├─ Header → "Slide"
├─ Objectives Box → "Sub-slide"  
├─ Code Example 1 → "Sub-slide"
├─ Output → "Fragment"
└─ Code Example 2 → "Sub-slide"

📝 Section 1.2: JSON Files
├─ Header → "Slide"
├─ JSON Structure → "Sub-slide"
└─ Code Examples → "Sub-slide"

[Continue for all 7 sections...]

🎯 Practice Section
├─ Quiz Questions → "Slide"
└─ Code Exercises → "Sub-slide"

📋 Summary
└─ Summary Card → "Slide"
```

**Total:** ~60-70 configured slides

---

## 🔧 **Additional Settings**

### **Customize RISE Behavior:**

1. Open **Settings** → **Advanced Settings Editor**
2. Search for **"RISE"**
3. Modify JSON settings:

```json
{
  "scroll": true,
  "theme": "simple",
  "transition": "slide",
  "autolaunch": false,
  "enable_chalkboard": true
}
```

### **Available Themes:**
- `simple` (clean, minimal)
- `black` (dark background)
- `white` (light background)
- `league` (bold, professional)
- `sky` (blue gradient)
- `beige` (warm colors)
- `serif` (traditional)
- `night` (dark with contrast)

---

## 🎥 **Live Coding During Presentation**

**RISE allows you to run code during slides!**

1. Start slideshow
2. Click on any code cell
3. Press `Shift+Enter` to execute
4. Output appears immediately
5. Perfect for answering student questions!

---

## 📤 **Export Your Slideshow**

### **Option 1: Share JupyterLab Link**
Students can view and interact with the same notebook in their browser.

### **Option 2: Export to HTML**
```bash
jupyter nbconvert T6_nhập_và_lưu_trữ_dữ_liệu_Python.ipynb \
  --to slides \
  --SlidesExporter.reveal_theme=simple \
  --output lecture4_slides.html
```

### **Option 3: Export to PDF**
```bash
# Install decktape first
npm install -g decktape

# Then export
jupyter lab  # Make sure server is running
decktape rise http://localhost:8888/lab/tree/T6_... lecture4.pdf
```

---

## ✅ **Quick Start Checklist**

- [x] JupyterLab RISE extension installed
- [x] Jupyter Lab restarted with new extension
- [ ] Open your notebook in JupyterLab
- [ ] Look for 🎬 **Slideshow** button in toolbar
- [ ] Click it to test (all cells shown as slides)
- [ ] Configure slide types in Property Inspector (right sidebar)
- [ ] Click Slideshow button again for final presentation

---

## 🆘 **Troubleshooting**

### **Can't Find Slideshow Button?**

1. **Refresh the page:** `Cmd+R` (Mac) or `Ctrl+R` (Windows)
2. **Check installation:**
   ```bash
   jupyter labextension list | grep rise
   ```
   Should show: `jupyterlab-rise`

3. **Rebuild JupyterLab:**
   ```bash
   jupyter lab build
   ```

### **Slide Types Not Showing?**

1. **Enable right sidebar:** View → Show Right Sidebar
2. **Click Property Inspector tab** (🔧 icon)
3. **Click a cell first**, then look for Slide Type dropdown

### **Keyboard Shortcuts Not Working?**

1. Make sure you're **in slideshow mode** (not edit mode)
2. Press `Esc` to exit cell edit mode
3. Then use navigation keys

---

## 🎉 **You're Ready to Present!**

**Your notebook is now a professional slideshow presentation tool!**

1. Open: http://localhost:8888/lab/tree/T6_nhập_và_lưu_trữ_dữ_liệu_Python.ipynb
2. Click: **🎬 Slideshow** button
3. Present: Navigate with `Space` and arrows
4. Engage: Run code live with `Shift+Enter`

**Good luck with your lecture!** 🎓✨




