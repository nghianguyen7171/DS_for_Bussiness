// Comprehensive Answer Keys Page JavaScript
// Based on Combined_Answer_Key_DS_CLC_1-8.md

// Comprehensive questions data from all 8 exams
const questionsData = [
    // Python Basics Questions
    {
        id: 1,
        exam: "DS_CLC-1",
        topic: "Python Basics",
        question: "names = ['A','B','C']; names[0] = 'Z'; print(names)",
        code: "names = ['A','B','C']\nnames[0] = 'Z'\nprint(names)",
        options: [
            "['A','B','C']",
            "['Z','B','C']",
            "Error",
            "['A','Z','C']"
        ],
        correct: 1,
        explanation: "List là mutable, names[0] = 'Z' thay đổi phần tử đầu tiên từ 'A' thành 'Z'."
    },
    {
        id: 2,
        exam: "DS_CLC-1",
        topic: "Python Basics",
        question: "my_list = [1,2,3]; my_list[0]",
        code: "my_list = [1,2,3]\nmy_list[0]",
        options: [
            "0",
            "1",
            "2",
            "Error"
        ],
        correct: 1,
        explanation: "Indexing bắt đầu từ 0, my_list[0] trả về phần tử đầu tiên."
    },
    {
        id: 3,
        exam: "DS_CLC-1",
        topic: "Python Basics",
        question: "my_list = [1,2,3]; my_list[1:3]",
        code: "my_list = [1,2,3]\nmy_list[1:3]",
        options: [
            "[1,2]",
            "[2,3]",
            "[1,2,3]",
            "[2]"
        ],
        correct: 1,
        explanation: "Slicing [1:3] lấy từ index 1 đến 2 (không bao gồm 3)."
    },
    {
        id: 4,
        exam: "DS_CLC-2",
        topic: "Python Basics",
        question: "'a b c'.split()",
        code: "'a b c'.split()",
        options: [
            "['a','b','c']",
            "['a b c']",
            "Error",
            "['a', 'b', 'c']"
        ],
        correct: 0,
        explanation: ".split() chia chuỗi theo khoảng trắng và trả về list."
    },
    {
        id: 5,
        exam: "DS_CLC-2",
        topic: "Python Basics",
        question: "'abc'.replace('a','b')",
        code: "'abc'.replace('a','b')",
        options: [
            "'abc'",
            "'bbc'",
            "'bac'",
            "Error"
        ],
        correct: 1,
        explanation: ".replace('a','b') thay thế tất cả 'a' bằng 'b'."
    },
    {
        id: 6,
        exam: "DS_CLC-2",
        topic: "Python Basics",
        question: "' hello '.strip()",
        code: "' hello '.strip()",
        options: [
            "'hello'",
            "' hello'",
            "'hello '",
            "' hello '"
        ],
        correct: 0,
        explanation: ".strip() loại bỏ khoảng trắng đầu và cuối chuỗi."
    },
    {
        id: 7,
        exam: "DS_CLC-3",
        topic: "Python Basics",
        question: "'-'.join(['a','b'])",
        code: "'-'.join(['a','b'])",
        options: [
            "'a-b'",
            "'ab'",
            "Error",
            "'a','b'"
        ],
        correct: 0,
        explanation: ".join() nối các phần tử của list bằng ký tự phân cách."
    },
    {
        id: 8,
        exam: "DS_CLC-3",
        topic: "Python Basics",
        question: "Dấu thụt lề (indentation) trong Python có vai trò gì?",
        code: "",
        options: [
            "Làm đẹp code",
            "Tăng tốc độ thực thi",
            "Xác định cấu trúc khối lệnh",
            "Không có vai trò gì"
        ],
        correct: 2,
        explanation: "Python sử dụng indentation để định nghĩa khối lệnh thay vì dùng {}."
    },
    {
        id: 9,
        exam: "DS_CLC-3",
        topic: "Python Basics",
        question: "Ai là người phát triển ngôn ngữ Python?",
        code: "",
        options: [
            "Linus Torvalds",
            "Guido van Rossum",
            "Dennis Ritchie",
            "James Gosling"
        ],
        correct: 1,
        explanation: "Guido van Rossum là người tạo ra Python vào năm 1991."
    },
    {
        id: 10,
        exam: "DS_CLC-4",
        topic: "Python Basics",
        question: "Python là ngôn ngữ lập trình thuộc loại nào?",
        code: "",
        options: [
            "Biên dịch, kiểu tĩnh",
            "Thông dịch, kiểu động",
            "Biên dịch, kiểu động",
            "Thông dịch, kiểu tĩnh"
        ],
        correct: 1,
        explanation: "Python là ngôn ngữ thông dịch (interpreted) và có kiểu động (dynamic typing)."
    },

    // NumPy Questions
    {
        id: 11,
        exam: "DS_CLC-1",
        topic: "NumPy",
        question: "Hàm nào trong NumPy dùng để tạo mảng chứa toàn số 0?",
        code: "",
        options: [
            "np.empty()",
            "np.ones()",
            "np.array()",
            "np.zeros()"
        ],
        correct: 3,
        explanation: "np.zeros() tạo mảng với tất cả phần tử là 0."
    },
    {
        id: 12,
        exam: "DS_CLC-1",
        topic: "NumPy",
        question: "np.zeros((2, 3)) tạo ra mảng có kích thước:",
        code: "np.zeros((2, 3))",
        options: [
            "2 dòng, 3 cột",
            "3 dòng, 2 cột",
            "2 phần tử",
            "3 phần tử"
        ],
        correct: 0,
        explanation: "np.zeros((2, 3)) tạo ma trận 2x3."
    },
    {
        id: 13,
        exam: "DS_CLC-2",
        topic: "NumPy",
        question: "NumPy là viết tắt của:",
        code: "",
        options: [
            "Number Python",
            "Numeric Python",
            "Numerical Python",
            "New Python"
        ],
        correct: 2,
        explanation: "NumPy = Numerical Python."
    },
    {
        id: 14,
        exam: "DS_CLC-2",
        topic: "NumPy",
        question: "Đối tượng chính của NumPy để lưu trữ dữ liệu là:",
        code: "",
        options: [
            "ndarray",
            "array",
            "matrix",
            "list"
        ],
        correct: 0,
        explanation: "ndarray (N-dimensional array) là đối tượng chính của NumPy."
    },
    {
        id: 15,
        exam: "DS_CLC-3",
        topic: "NumPy",
        question: "np.arange(5) * 2",
        code: "np.arange(5) * 2",
        options: [
            "[0 2 4 6 8]",
            "[1 2 3 4 5]",
            "[0 1 2 3 4]",
            "Error"
        ],
        correct: 0,
        explanation: "np.arange(5) tạo [0,1,2,3,4], nhân với 2 được [0,2,4,6,8]."
    },
    {
        id: 16,
        exam: "DS_CLC-3",
        topic: "NumPy",
        question: "arr = np.arange(10); arr[2:5] sẽ trả về:",
        code: "arr = np.arange(10)\narr[2:5]",
        options: [
            "[0, 1, 2]",
            "[1, 2, 3]",
            "[2, 3, 4]",
            "[3, 4, 5]"
        ],
        correct: 2,
        explanation: "np.arange(10) tạo [0,1,2,3,4,5,6,7,8,9], arr[2:5] lấy từ index 2 đến 4."
    },
    {
        id: 17,
        exam: "DS_CLC-4",
        topic: "NumPy",
        question: "np.arange(6).reshape(2,3).shape",
        code: "np.arange(6).reshape(2,3).shape",
        options: [
            "(6,)",
            "(3,2)",
            "(2,3)",
            "Error"
        ],
        correct: 2,
        explanation: "np.arange(6) tạo [0,1,2,3,4,5], .reshape(2,3) chuyển thành ma trận 2x3."
    },
    {
        id: 18,
        exam: "DS_CLC-4",
        topic: "NumPy",
        question: "np.arange(8).reshape(2,4).T.shape",
        code: "np.arange(8).reshape(2,4).T.shape",
        options: [
            "(2,4)",
            "(4,2)",
            "(8,)",
            "Error"
        ],
        correct: 1,
        explanation: "Ma trận 2x4 sau khi transpose (.T) thành ma trận 4x2."
    },
    {
        id: 19,
        exam: "DS_CLC-5",
        topic: "NumPy",
        question: "arr = np.array([1, 2, 3]); arr.dtype sẽ trả về:",
        code: "arr = np.array([1, 2, 3])\narr.dtype",
        options: [
            "float64",
            "int32 hoặc int64",
            "str",
            "bool"
        ],
        correct: 1,
        explanation: ".dtype trả về kiểu dữ liệu của mảng, thường là int32 hoặc int64."
    },
    {
        id: 20,
        exam: "DS_CLC-5",
        topic: "NumPy",
        question: "np.array([1.5, -0.1, 3]).dtype",
        code: "np.array([1.5, -0.1, 3]).dtype",
        options: [
            "float64",
            "int64",
            "str",
            "bool"
        ],
        correct: 0,
        explanation: "Mảng có số thập phân sẽ có kiểu float64."
    },

    // Pandas Questions
    {
        id: 21,
        exam: "DS_CLC-1",
        topic: "Pandas",
        question: "df.dropna()",
        code: "df.dropna()",
        options: [
            "Removes columns with missing values",
            "Removes rows with missing values",
            "Fills missing values with zeros",
            "Counts missing values"
        ],
        correct: 1,
        explanation: "df.dropna() removes rows that contain any missing values (NaN)."
    },
    {
        id: 22,
        exam: "DS_CLC-2",
        topic: "Pandas",
        question: "Which method is used to read a CSV file in Pandas?",
        code: "",
        options: [
            "pd.read_csv()",
            "pd.load_csv()",
            "pd.import_csv()",
            "pd.open_csv()"
        ],
        correct: 0,
        explanation: "pd.read_csv() is the correct method to read CSV files in Pandas."
    },
    {
        id: 23,
        exam: "DS_CLC-3",
        topic: "Pandas",
        question: "What does df.head() do in Pandas?",
        code: "",
        options: [
            "Shows the last 5 rows",
            "Shows the first 5 rows",
            "Shows column names",
            "Shows data types"
        ],
        correct: 1,
        explanation: "df.head() displays the first 5 rows of a DataFrame by default."
    },
    {
        id: 24,
        exam: "DS_CLC-4",
        topic: "Pandas",
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
        id: 25,
        exam: "DS_CLC-5",
        topic: "Pandas",
        question: "What does df.fillna(0) do?",
        code: "",
        options: [
            "Removes rows with missing values",
            "Fills missing values with 0",
            "Counts missing values",
            "Creates a new column"
        ],
        correct: 1,
        explanation: "df.fillna(0) replaces all missing values (NaN) in the DataFrame with 0."
    },
    {
        id: 26,
        exam: "DS_CLC-6",
        topic: "Pandas",
        question: "Which method is used to remove duplicate rows in Pandas?",
        code: "",
        options: [
            "df.drop_duplicates()",
            "df.remove_duplicates()",
            "df.unique()",
            "df.distinct()"
        ],
        correct: 0,
        explanation: "df.drop_duplicates() removes duplicate rows from a DataFrame."
    },
    {
        id: 27,
        exam: "DS_CLC-7",
        topic: "Pandas",
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
        id: 28,
        exam: "DS_CLC-8",
        topic: "Pandas",
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

    // File I/O Questions
    {
        id: 29,
        exam: "DS_CLC-4",
        topic: "File I/O",
        question: "What is the correct way to read a JSON file in Pandas?",
        code: "",
        options: [
            "pd.read_json()",
            "pd.load_json()",
            "pd.import_json()",
            "pd.open_json()"
        ],
        correct: 0,
        explanation: "pd.read_json() is the correct method to read JSON files in Pandas."
    },
    {
        id: 30,
        exam: "DS_CLC-5",
        topic: "File I/O",
        question: "What does df.to_csv() do?",
        code: "",
        options: [
            "Reads a CSV file",
            "Writes DataFrame to CSV",
            "Shows CSV format",
            "Validates CSV data"
        ],
        correct: 1,
        explanation: "df.to_csv() writes the DataFrame to a CSV file."
    },

    // Data Science Questions
    {
        id: 31,
        exam: "DS_CLC-6",
        topic: "Data Science",
        question: "What is the purpose of df.groupby()?",
        code: "",
        options: [
            "Sorts the DataFrame",
            "Groups rows by values",
            "Removes duplicates",
            "Fills missing values"
        ],
        correct: 1,
        explanation: "df.groupby() groups rows of a DataFrame by the values in one or more columns."
    },
    {
        id: 32,
        exam: "DS_CLC-7",
        topic: "Data Science",
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

    // Web Scraping Questions
    {
        id: 33,
        exam: "DS_CLC-4",
        topic: "Web Scraping",
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

    // Data Visualization Questions
    {
        id: 34,
        exam: "DS_CLC-8",
        topic: "Data Visualization",
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

    // Machine Learning Questions
    {
        id: 35,
        exam: "DS_CLC-8",
        topic: "Machine Learning",
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
    const topicFilter = document.getElementById('topicFilter');

    searchInput.addEventListener('input', handleSearch);
    searchBtn.addEventListener('click', handleSearch);
    examFilter.addEventListener('change', handleFilter);
    topicFilter.addEventListener('change', handleFilter);
}

// Handle search functionality
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const examFilter = document.getElementById('examFilter').value;
    const topicFilter = document.getElementById('topicFilter').value;
    
    currentQuestions = questionsData.filter(question => {
        const matchesSearch = !searchTerm || 
            question.question.toLowerCase().includes(searchTerm) ||
            question.explanation.toLowerCase().includes(searchTerm) ||
            question.options.some(option => option.toLowerCase().includes(searchTerm)) ||
            question.topic.toLowerCase().includes(searchTerm);
        
        const matchesExam = examFilter === 'all' || question.exam === examFilter;
        const matchesTopic = topicFilter === 'all' || question.topic === topicFilter;
        
        return matchesSearch && matchesExam && matchesTopic;
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
                <h3>Không tìm thấy câu hỏi</h3>
                <p>Hãy thử điều chỉnh tiêu chí tìm kiếm hoặc bộ lọc của bạn.</p>
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
                <span class="question-number">Câu hỏi ${question.id}</span>
                <span class="question-exam">${question.exam}</span>
                <span class="question-topic">${question.topic}</span>
            </div>
            <div class="question-content">
                <div class="question-text">${question.question}</div>
                ${codeHtml}
                <div class="question-options">
                    <h4>Các lựa chọn:</h4>
                    ${optionsHtml}
                </div>
                <div class="answer-explanation">
                    <h4>✅ Giải thích:</h4>
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
            ← Trước
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
            Sau →
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