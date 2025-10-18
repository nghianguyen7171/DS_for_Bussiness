// Answer Keys Page JavaScript

// Sample questions data (in a real implementation, this would come from a JSON file or API)
const questionsData = [
    {
        id: 1,
        exam: "DS_CLC-1",
        question: "What is the output of the following Python code?\n\nx = [1, 2, 3, 4, 5]\nprint(x[1:4])",
        code: "x = [1, 2, 3, 4, 5]\nprint(x[1:4])",
        options: [
            "[1, 2, 3]",
            "[2, 3, 4]",
            "[1, 2, 3, 4]",
            "[2, 3, 4, 5]"
        ],
        correct: 1,
        explanation: "Python slicing uses [start:end] where start is inclusive and end is exclusive. x[1:4] returns elements from index 1 to 3 (inclusive), which are [2, 3, 4]."
    },
    {
        id: 2,
        exam: "DS_CLC-1",
        question: "Which NumPy function creates an array of zeros?",
        code: "",
        options: [
            "np.zeros()",
            "np.empty()",
            "np.ones()",
            "np.array()"
        ],
        correct: 0,
        explanation: "np.zeros() creates an array filled with zeros. np.empty() creates an array with uninitialized values, np.ones() creates an array filled with ones, and np.array() creates an array from existing data."
    },
    {
        id: 3,
        exam: "DS_CLC-2",
        question: "What does the following Pandas code do?\n\ndf.dropna()",
        code: "df.dropna()",
        options: [
            "Removes columns with missing values",
            "Removes rows with missing values",
            "Fills missing values with zeros",
            "Counts missing values"
        ],
        correct: 1,
        explanation: "df.dropna() removes rows that contain any missing values (NaN). It's a common data cleaning operation in Pandas."
    },
    {
        id: 4,
        exam: "DS_CLC-2",
        question: "Which method is used to read a CSV file in Pandas?",
        code: "",
        options: [
            "pd.read_csv()",
            "pd.load_csv()",
            "pd.import_csv()",
            "pd.open_csv()"
        ],
        correct: 0,
        explanation: "pd.read_csv() is the correct method to read CSV files in Pandas. It returns a DataFrame containing the data from the CSV file."
    },
    {
        id: 5,
        exam: "DS_CLC-3",
        question: "What is the output of this code?\n\nimport numpy as np\narr = np.array([1, 2, 3, 4, 5])\nprint(arr * 2)",
        code: "import numpy as np\narr = np.array([1, 2, 3, 4, 5])\nprint(arr * 2)",
        options: [
            "[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]",
            "[2, 4, 6, 8, 10]",
            "Error",
            "[1, 2, 3, 4, 5]"
        ],
        correct: 1,
        explanation: "NumPy arrays support element-wise operations. When you multiply an array by a scalar (2), each element is multiplied by 2, resulting in [2, 4, 6, 8, 10]."
    },
    {
        id: 6,
        exam: "DS_CLC-3",
        question: "What does df.head() do in Pandas?",
        code: "",
        options: [
            "Shows the last 5 rows",
            "Shows the first 5 rows",
            "Shows column names",
            "Shows data types"
        ],
        correct: 1,
        explanation: "df.head() displays the first 5 rows of a DataFrame by default. You can specify a different number of rows by passing an argument like df.head(10)."
    },
    {
        id: 7,
        exam: "DS_CLC-4",
        question: "Which library is commonly used for web scraping in Python?",
        code: "",
        options: [
            "requests",
            "BeautifulSoup",
            "scrapy",
            "All of the above"
        ],
        correct: 3,
        explanation: "All three libraries are commonly used for web scraping: requests for HTTP requests, BeautifulSoup for parsing HTML/XML, and scrapy for large-scale web scraping projects."
    },
    {
        id: 8,
        exam: "DS_CLC-4",
        question: "What is the correct way to read a JSON file in Pandas?",
        code: "",
        options: [
            "pd.read_json()",
            "pd.load_json()",
            "pd.import_json()",
            "pd.open_json()"
        ],
        correct: 0,
        explanation: "pd.read_json() is the correct method to read JSON files in Pandas. It can read JSON files, URLs, or JSON strings and convert them to DataFrames."
    },
    {
        id: 9,
        exam: "DS_CLC-5",
        question: "What does df.fillna(0) do?",
        code: "",
        options: [
            "Removes rows with missing values",
            "Fills missing values with 0",
            "Counts missing values",
            "Creates a new column"
        ],
        correct: 1,
        explanation: "df.fillna(0) replaces all missing values (NaN) in the DataFrame with 0. This is a common data preprocessing technique."
    },
    {
        id: 10,
        exam: "DS_CLC-5",
        question: "Which method is used to remove duplicate rows in Pandas?",
        code: "",
        options: [
            "df.drop_duplicates()",
            "df.remove_duplicates()",
            "df.unique()",
            "df.distinct()"
        ],
        correct: 0,
        explanation: "df.drop_duplicates() removes duplicate rows from a DataFrame. It keeps the first occurrence of each duplicate by default."
    },
    {
        id: 11,
        exam: "DS_CLC-6",
        question: "What is the output of this code?\n\nimport pandas as pd\ndf = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\nprint(df.shape)",
        code: "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\nprint(df.shape)",
        options: [
            "(2, 2)",
            "(4, 2)",
            "(2, 4)",
            "Error"
        ],
        correct: 0,
        explanation: "df.shape returns a tuple (rows, columns). The DataFrame has 2 rows and 2 columns, so the output is (2, 2)."
    },
    {
        id: 12,
        exam: "DS_CLC-6",
        question: "What does df.describe() do?",
        code: "",
        options: [
            "Shows data types",
            "Shows statistical summary",
            "Shows column names",
            "Shows missing values"
        ],
        correct: 1,
        explanation: "df.describe() provides a statistical summary of the DataFrame including count, mean, std, min, max, and quartiles for numerical columns."
    },
    {
        id: 13,
        exam: "DS_CLC-7",
        question: "Which method is used to merge two DataFrames in Pandas?",
        code: "",
        options: [
            "pd.merge()",
            "df.join()",
            "df.concat()",
            "All of the above"
        ],
        correct: 3,
        explanation: "All three methods can be used to combine DataFrames: pd.merge() for database-style joins, df.join() for index-based joins, and df.concat() for concatenation."
    },
    {
        id: 14,
        exam: "DS_CLC-7",
        question: "What is the purpose of df.groupby()?",
        code: "",
        options: [
            "Sorts the DataFrame",
            "Groups rows by values",
            "Removes duplicates",
            "Fills missing values"
        ],
        correct: 1,
        explanation: "df.groupby() groups rows of a DataFrame by the values in one or more columns, allowing you to perform operations on each group separately."
    },
    {
        id: 15,
        exam: "DS_CLC-8",
        question: "What does df.pivot_table() do?",
        code: "",
        options: [
            "Creates a pivot table",
            "Rotates the DataFrame",
            "Sorts the DataFrame",
            "Removes columns"
        ],
        correct: 0,
        explanation: "df.pivot_table() creates a pivot table from a DataFrame, allowing you to summarize and aggregate data across different dimensions."
    },
    {
        id: 16,
        exam: "DS_CLC-8",
        question: "Which library is commonly used for data visualization in Python?",
        code: "",
        options: [
            "matplotlib",
            "seaborn",
            "plotly",
            "All of the above"
        ],
        correct: 3,
        explanation: "All three libraries are commonly used for data visualization: matplotlib for basic plotting, seaborn for statistical visualizations, and plotly for interactive plots."
    },
    {
        id: 17,
        exam: "DS_CLC-1",
        question: "What is the output of this code?\n\nx = 'Hello World'\nprint(x.lower())",
        code: "x = 'Hello World'\nprint(x.lower())",
        options: [
            "HELLO WORLD",
            "hello world",
            "Hello World",
            "Error"
        ],
        correct: 1,
        explanation: "The .lower() method converts all characters in a string to lowercase, so 'Hello World' becomes 'hello world'."
    },
    {
        id: 18,
        exam: "DS_CLC-2",
        question: "What does df.info() do?",
        code: "",
        options: [
            "Shows data types and memory usage",
            "Shows first 5 rows",
            "Shows statistical summary",
            "Shows column names only"
        ],
        correct: 0,
        explanation: "df.info() provides a concise summary of the DataFrame including data types, non-null counts, and memory usage."
    },
    {
        id: 19,
        exam: "DS_CLC-3",
        question: "What is the output of this code?\n\nimport numpy as np\narr = np.array([[1, 2], [3, 4]])\nprint(arr.shape)",
        code: "import numpy as np\narr = np.array([[1, 2], [3, 4]])\nprint(arr.shape)",
        options: [
            "(2, 2)",
            "(4,)",
            "(2,)",
            "Error"
        ],
        correct: 0,
        explanation: "The array has 2 rows and 2 columns, so arr.shape returns (2, 2)."
    },
    {
        id: 20,
        exam: "DS_CLC-4",
        question: "What does df.to_csv() do?",
        code: "",
        options: [
            "Reads a CSV file",
            "Writes DataFrame to CSV",
            "Shows CSV format",
            "Validates CSV data"
        ],
        correct: 1,
        explanation: "df.to_csv() writes the DataFrame to a CSV file. You can specify the filename and various parameters like index, header, etc."
    },
    {
        id: 21,
        exam: "DS_CLC-5",
        question: "What is the output of this code?\n\nimport pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})\nprint(df['A'].sum())",
        code: "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})\nprint(df['A'].sum())",
        options: [
            "6",
            "15",
            "21",
            "Error"
        ],
        correct: 0,
        explanation: "df['A'].sum() calculates the sum of column A, which is 1 + 2 + 3 = 6."
    },
    {
        id: 22,
        exam: "DS_CLC-6",
        question: "What does df.sort_values() do?",
        code: "",
        options: [
            "Sorts rows by column values",
            "Sorts columns alphabetically",
            "Removes sorted data",
            "Creates sorted copy"
        ],
        correct: 0,
        explanation: "df.sort_values() sorts the DataFrame rows based on the values in one or more columns. You can specify ascending/descending order."
    },
    {
        id: 23,
        exam: "DS_CLC-7",
        question: "What is the output of this code?\n\nimport pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})\nprint(df.mean())",
        code: "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})\nprint(df.mean())",
        options: [
            "A    2.0\nB    5.0",
            "3.5",
            "6",
            "Error"
        ],
        correct: 0,
        explanation: "df.mean() calculates the mean of each column: A = (1+2+3)/3 = 2.0, B = (4+5+6)/3 = 5.0."
    },
    {
        id: 24,
        exam: "DS_CLC-8",
        question: "What does df.corr() do?",
        code: "",
        options: [
            "Shows correlation matrix",
            "Counts correlations",
            "Removes correlations",
            "Creates correlations"
        ],
        correct: 0,
        explanation: "df.corr() computes the correlation matrix of the DataFrame, showing the correlation coefficients between numerical columns."
    },
    {
        id: 25,
        exam: "DS_CLC-1",
        question: "What is the output of this code?\n\nx = [1, 2, 3]\ny = [4, 5, 6]\nprint(x + y)",
        code: "x = [1, 2, 3]\ny = [4, 5, 6]\nprint(x + y)",
        options: [
            "[5, 7, 9]",
            "[1, 2, 3, 4, 5, 6]",
            "Error",
            "[1, 2, 3]"
        ],
        correct: 1,
        explanation: "For Python lists, the + operator concatenates the lists, so [1, 2, 3] + [4, 5, 6] = [1, 2, 3, 4, 5, 6]."
    }
];

// Global variables
let currentQuestions = [...questionsData];
let currentPage = 1;
const questionsPerPage = 10;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadQuestions();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const examFilter = document.getElementById('examFilter');

    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    examFilter.addEventListener('change', handleFilter);
}

// Handle search functionality
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const examFilter = document.getElementById('examFilter').value;
    
    currentQuestions = questionsData.filter(question => {
        const matchesSearch = !searchTerm || 
            question.question.toLowerCase().includes(searchTerm) ||
            question.explanation.toLowerCase().includes(searchTerm) ||
            question.options.some(option => option.toLowerCase().includes(searchTerm));
        
        const matchesExam = examFilter === 'all' || question.exam === examFilter;
        
        return matchesSearch && matchesExam;
    });
    
    currentPage = 1;
    loadQuestions();
}

// Handle filter functionality
function handleFilter() {
    handleSearch();
}

// Load questions for current page
function loadQuestions() {
    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const pageQuestions = currentQuestions.slice(startIndex, endIndex);
    
    const container = document.getElementById('questionsContainer');
    
    if (pageQuestions.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No questions found</h3>
                <p>Try adjusting your search criteria or filter options.</p>
            </div>
        `;
    } else {
        container.innerHTML = pageQuestions.map(question => createQuestionCard(question)).join('');
    }
    
    updatePagination();
}

// Create question card HTML
function createQuestionCard(question) {
    const optionsHtml = question.options.map((option, index) => {
        const isCorrect = index === question.correct;
        const optionClass = isCorrect ? 'correct' : '';
        return `<div class="option ${optionClass}">${String.fromCharCode(65 + index)}. ${option}</div>`;
    }).join('');
    
    const codeHtml = question.code ? `<div class="question-code">${question.code}</div>` : '';
    
    return `
        <div class="question-card">
            <div class="question-header">
                <span class="question-number">Question ${question.id}</span>
                <span class="question-exam">${question.exam}</span>
            </div>
            <div class="question-content">
                <div class="question-text">${question.question}</div>
                ${codeHtml}
                <div class="question-options">
                    <h4>Options:</h4>
                    ${optionsHtml}
                </div>
                <div class="answer-explanation">
                    <h4>✅ Explanation:</h4>
                    <p>${question.explanation}</p>
                </div>
            </div>
        </div>
    `;
}

// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(currentQuestions.length / questionsPerPage);
    const pagination = document.getElementById('pagination');
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHtml = '';
    
    // Previous button
    paginationHtml += `
        <button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
            ← Previous
        </button>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const isActive = i === currentPage ? 'active' : '';
        paginationHtml += `
            <button class="${isActive}" onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    
    // Next button
    paginationHtml += `
        <button ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
            Next →
        </button>
    `;
    
    pagination.innerHTML = paginationHtml;
}

// Change page
function changePage(page) {
    const totalPages = Math.ceil(currentQuestions.length / questionsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        loadQuestions();
        
        // Scroll to top of questions
        document.getElementById('questionsContainer').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
