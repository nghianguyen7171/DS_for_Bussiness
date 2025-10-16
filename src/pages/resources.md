# Course Resources

## Basic Data Science in Economics and Business

---

## Primary Textbook

### Data Science in Economics and Business (Python Applications)

**Authors:** Nguyen Quang Huy, Tran Thi Bich, Pham Xuan Lam, Nguyen Trung Thanh, Nguyen Thi Bach Tuyet

**Publisher:** National Economics University (2025)

📖 **[Access Online Textbook](https://nct-neu.github.io/Sach_Khoa_hoc_du_lieu_python/README.html)**

This comprehensive textbook covers all course topics with practical Python examples tailored for economics and business applications.

---

## Course Materials

### 📊 Lecture Slides

Access weekly lecture slides and presentation materials on the course platform:

🔗 **[SmartDoc Platform](https://fit.neu.edu.vn/room/Le2MmM)**

- Updated before each lecture
- Include code examples and visualizations
- Downloadable in PDF format

### 💻 GitHub Repository

All code examples, datasets, and supplementary materials:

🔗 **[Course GitHub Repository](https://github.com/NCT-NEU/Sach_Khoa_hoc_du_lieu_python/tree/main)**

Contents include:
- Jupyter notebooks for each chapter
- Practice datasets
- Solution templates
- Additional exercises

---

## Software & Tools

### Python Installation

**Required Version:** Python 13.0 or higher

**Installation Options:**

1. **Anaconda Distribution (Recommended for beginners)**
   - Download from: [anaconda.com](https://www.anaconda.com/)
   - Includes Python, Jupyter, and common libraries
   - Easy package management with Conda

2. **Official Python**
   - Download from: [python.org](https://www.python.org/)
   - Manual library installation via pip
   - More lightweight installation

### Development Environments

**Jupyter Notebook (Recommended)**
- Interactive coding environment
- Supports markdown and visualization
- Install via Anaconda or: `pip install notebook`
- Launch with: `jupyter notebook`

**Google Colab (Perfect for Beginners!)**

Google Colab is a **free, web-based** Python environment that requires **no installation**. It's perfect for students who are new to programming!

#### 🎯 Why Choose Google Colab?

✅ **No Installation Required** - Works in any web browser  
✅ **Free to Use** - No cost, no credit card needed  
✅ **Pre-installed Libraries** - All course libraries already available  
✅ **Cloud Storage** - Your work is automatically saved  
✅ **Shareable** - Easy to share notebooks with instructors  
✅ **Mobile Friendly** - Works on phones and tablets  

#### 📋 Step-by-Step Setup Guide

**Step 1: Access Google Colab**
1. Open your web browser (Chrome, Firefox, or Safari)
2. Go to: [colab.research.google.com](https://colab.research.google.com/)
3. You'll see the Google Colab welcome page

**Step 2: Sign In (Required)**
1. Click the **"Sign in"** button in the top-right corner
2. Use your **Google account** (Gmail address)
   - If you don't have a Google account, create one for free
3. After signing in, you'll see the Colab interface

**Step 3: Create Your First Notebook**
1. Click **"New notebook"** button (blue button on the left)
2. A new notebook will open with a single cell
3. You'll see a text box with "Code" written above it

**Step 4: Test Python Installation**
1. Click inside the code cell (the text box)
2. Type this simple code:
   ```python
   print("Hello, Data Science!")
   ```
3. Press **Shift + Enter** (or click the play button ▶️)
4. You should see: `Hello, Data Science!`

**Step 5: Install Required Libraries**
1. Create a new cell by clicking **"+ Code"**
2. Copy and paste this code:
   ```python
   !pip install numpy pandas matplotlib seaborn scikit-learn
   ```
3. Press **Shift + Enter** to run
4. Wait for installation to complete (may take 1-2 minutes)

**Step 6: Verify Libraries Work**
1. Create another new cell
2. Copy and paste this test code:
   ```python
   import numpy as np
   import pandas as pd
   import matplotlib.pyplot as plt
   
   print("✅ All libraries imported successfully!")
   print("NumPy version:", np.__version__)
   print("Pandas version:", pd.__version__)
   ```
3. Run the cell - you should see success messages

#### 🎨 Understanding the Colab Interface

**Main Components:**

1. **Menu Bar** (Top)
   - File: Save, download, share
   - Edit: Copy, paste, find
   - View: Show/hide different panels
   - Insert: Add new cells
   - Runtime: Run code, restart

2. **Toolbar** (Below menu)
   - ▶️ Run: Execute current cell
   - ⏹️ Stop: Stop running code
   - 🔄 Restart: Restart the environment
   - 📁 Files: Access your files

3. **Code Cells** (Main area)
   - White boxes where you write Python code
   - Each cell can be run independently
   - Output appears below each cell

4. **Left Sidebar** (Optional)
   - 📁 Files: Your uploaded files
   - 📊 Table of Contents: Navigate your notebook
   - 🔍 Search: Find text in your notebook

#### 📝 Basic Operations Guide

**Adding New Cells:**
- Click **"+ Code"** to add a code cell
- Click **"+ Text"** to add a text cell (for notes)

**Running Code:**
- **Shift + Enter**: Run current cell and move to next
- **Ctrl + Enter**: Run current cell and stay on it
- **Click ▶️**: Run current cell

**Saving Your Work:**
- **Ctrl + S**: Save automatically
- **File → Save**: Manual save
- Your work is saved to your Google Drive

**Sharing Your Notebook:**
1. Click **"Share"** button (top-right)
2. Copy the link and send to instructors
3. Set permissions: "Anyone with the link can view"

#### 🚀 Your First Data Science Code

**Try this example to see Colab in action:**

```python
# Step 1: Import libraries
import pandas as pd
import matplotlib.pyplot as plt

# Step 2: Create sample data
data = {
    'Student': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Score': [85, 92, 78, 96]
}

# Step 3: Create a DataFrame
df = pd.DataFrame(data)
print("Student Scores:")
print(df)

# Step 4: Create a simple chart
plt.figure(figsize=(8, 4))
plt.bar(df['Student'], df['Score'], color='skyblue')
plt.title('Student Test Scores')
plt.xlabel('Students')
plt.ylabel('Scores')
plt.show()
```

#### 💡 Pro Tips for Beginners

**1. Start Simple**
- Begin with basic print statements
- Don't worry about complex code initially
- Focus on understanding the interface first

**2. Use Text Cells for Notes**
- Add text cells to explain your code
- Write down what you learned
- Keep track of important concepts

**3. Save Frequently**
- Colab auto-saves, but manual saves are good practice
- Download important notebooks to your computer

**4. Don't Panic About Errors**
- Red error messages are normal when learning
- Read the error message carefully
- Ask instructors for help with confusing errors

**5. Explore the Interface**
- Try different menu options
- Experiment with different cell types
- Use the help menu if you get stuck

#### 🔧 Troubleshooting Common Issues

**Problem: "Module not found" error**
- **Solution**: Run the pip install command again
- **Code**: `!pip install [library-name]`

**Problem: Code runs but no output**
- **Solution**: Make sure you have `print()` statements
- **Check**: Look for output below the cell

**Problem: Notebook is slow**
- **Solution**: Restart runtime (Runtime → Restart)
- **Tip**: Close other browser tabs to free memory

**Problem: Can't find my notebook**
- **Solution**: Check your Google Drive
- **Location**: Drive → Colab Notebooks folder

#### 📚 Next Steps

Once you're comfortable with Colab:

1. **Upload Course Notebooks**: Download `.ipynb` files from course schedule
2. **Practice Daily**: Spend 15-30 minutes coding each day
3. **Join Study Groups**: Share notebooks with classmates
4. **Ask Questions**: Use the course discussion forum

#### 🆘 Need Help?

- **Course Forum**: Post questions and get help from classmates
- **Office Hours**: Meet with instructors for personalized assistance
- **Google Colab Help**: [colab.research.google.com/notebooks/intro.ipynb](https://colab.research.google.com/notebooks/intro.ipynb)

**Remember**: Everyone starts as a beginner. Don't be afraid to make mistakes - they're part of learning! 🎓

**VS Code (For advanced users)**
- Full-featured IDE
- Python extension available
- Download from: [code.visualstudio.com](https://code.visualstudio.com/)

---

## Required Python Libraries

Install these libraries for the course:

```bash
# Using pip
pip install numpy pandas matplotlib seaborn scikit-learn

# Using conda
conda install numpy pandas matplotlib seaborn scikit-learn
```

### Core Libraries

**NumPy**
- Numerical computing with arrays
- Mathematical operations
- Documentation: [numpy.org](https://numpy.org/)

**Pandas**
- Data manipulation and analysis
- DataFrame operations
- Documentation: [pandas.pydata.org](https://pandas.pydata.org/)

**Matplotlib**
- Basic plotting and visualization
- Documentation: [matplotlib.org](https://matplotlib.org/)

**Seaborn**
- Statistical data visualization
- Built on Matplotlib
- Documentation: [seaborn.pydata.org](https://seaborn.pydata.org/)

**scikit-learn**
- Machine learning algorithms
- Model evaluation tools
- Documentation: [scikit-learn.org](https://scikit-learn.org/)

---

## Additional Learning Resources

### Python Tutorials

- **Official Python Tutorial:** [docs.python.org/3/tutorial/](https://docs.python.org/3/tutorial/)
- **Real Python:** [realpython.com](https://realpython.com/) - Comprehensive Python tutorials
- **Python for Data Science Handbook:** [jakevdp.github.io/PythonDataScienceHandbook/](https://jakevdp.github.io/PythonDataScienceHandbook/)

### Data Science Resources

- **Kaggle Learn:** [kaggle.com/learn](https://kaggle.com/learn) - Free micro-courses
- **DataCamp:** [datacamp.com](https://datacamp.com/) - Interactive data science courses
- **Coursera - Applied Data Science:** Various Python data science specializations

### Visualization

- **From Data to Viz:** [data-to-viz.com](https://www.data-to-viz.com/) - Chart selection guide
- **Python Graph Gallery:** [python-graph-gallery.com](https://python-graph-gallery.com/) - Visualization examples

### Machine Learning

- **Scikit-learn Tutorials:** [scikit-learn.org/stable/tutorial/](https://scikit-learn.org/stable/tutorial/)
- **Google's Machine Learning Crash Course:** [developers.google.com/machine-learning/crash-course](https://developers.google.com/machine-learning/crash-course)

---

## Practice Datasets

### Recommended Sources

**Kaggle Datasets**
- URL: [kaggle.com/datasets](https://kaggle.com/datasets)
- Wide variety of real-world datasets
- Business and economics focus available

**UCI Machine Learning Repository**
- URL: [archive.ics.uci.edu/ml](https://archive.ics.uci.edu/ml)
- Classic datasets for learning
- Well-documented

**World Bank Open Data**
- URL: [data.worldbank.org](https://data.worldbank.org/)
- Economic indicators
- Global development data

**Vietnam Government Data**
- General Statistics Office: [gso.gov.vn](https://www.gso.gov.vn/)
- Economic and social statistics

---

## Troubleshooting & Help

### Common Issues

**Installation Problems**
- Check Python version: `python --version`
- Update pip: `pip install --upgrade pip`
- Use virtual environments to avoid conflicts

**Library Import Errors**
- Verify installation: `pip list`
- Reinstall if needed: `pip install --force-reinstall [library-name]`

**Jupyter Notebook Issues**
- Clear output and restart kernel
- Update Jupyter: `pip install --upgrade notebook`
- Check browser compatibility (Chrome/Firefox recommended)

### Getting Help

1. **Course Forum/Discussion Board:** Post questions and help classmates
2. **Office Hours:** Meet with instructors for personalized help
3. **Stack Overflow:** [stackoverflow.com](https://stackoverflow.com/) - Use tag `[python]` `[pandas]` etc.
4. **Teaching Assistants:** Email TAs for assignment-specific questions

---

## Study Tips

### Weekly Workflow

1. **Before Class:** Read assigned textbook chapters
2. **During Class:** Take notes, run example code
3. **After Class:** Review slides, practice exercises
4. **Weekly:** Complete homework assignments
5. **Ongoing:** Practice with additional datasets

### Code Practice

- **Code daily:** Even 30 minutes helps build skills
- **Type code manually:** Don't just copy-paste
- **Experiment:** Modify examples to see what happens
- **Debug systematically:** Read error messages carefully
- **Comment your code:** Explain your logic

### Exam Preparation

- **Review practice quizzes:** Identify weak areas
- **Redo homework:** Ensure you understand solutions
- **Create cheat sheets:** Summarize key concepts
- **Form study groups:** Teach concepts to others
- **Ask questions:** Clarify doubts before exams

---

## Contact & Support

### Instructors

**Dr. Nguyen Trong Nghia** (Lecture)  
📧 nghiant@neu.edu.vn

**MSc. Nguyen Thi Minh Trang** (Tutorial)  
📧 ntmtrang@neu.edu.vn

**MSc. Dam Tien Thanh** (Tutorial)  
📧 thanhtd@neu.edu.vn

### Technical Support

For platform or technical issues, contact:
- University IT Help Desk
- Course platform support team

---

[← Back to Home](index.html) | [View Syllabus →](syllabus.html) | [Practice Quizzes →](index.html#quizzes)

