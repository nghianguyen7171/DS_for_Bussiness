// Quiz data
const quizData = {
  "questions": [
    {
      "id": 1,
      "category": "CSV Basic",
      "code": "import pandas as pd\ndf = pd.read_csv('ex1.csv')\nprint(df.head(2))",
      "question": "Output của đoạn code trên khi file ex1.csv có header là gì?",
      "options": [
        "   Diem 1  Diem 2  Diem 3  Diem 4                Nhan xet\n0       1       2       3       4             Hoc luc yeu\n1       5       6       7       8  Hoc luc trung binh kha",
        "0  1  2  3  4  Hoc luc yeu\n1  5  6  7  8  Hoc luc trung binh kha",
        "Diem 1,Diem 2,Diem 3,Diem 4,Nhan xet\n1,2,3,4,Hoc luc yeu\n5,6,7,8,Hoc luc trung binh kha",
        "Error: File not found"
      ],
      "correct": 0,
      "hint": "read_csv() mặc định coi dòng đầu tiên là header và tạo DataFrame với index 0,1,2..."
    },
    {
      "id": 2,
      "category": "CSV Header",
      "code": "import pandas as pd\ndf = pd.read_csv('ex2.csv', header=None)\nprint(df.columns.tolist())",
      "question": "Kết quả của đoạn code khi file không có header:",
      "options": [
        "[0, 1, 2, 3, 4]",
        "['0', '1', '2', '3', '4']",
        "[1, 2, 3, 4, 5]",
        "['A', 'B', 'C', 'D', 'E']"
      ],
      "correct": 0,
      "hint": "header=None khiến pandas gán tên cột là số nguyên bắt đầu từ 0"
    },
    {
      "id": 3,
      "category": "CSV Names",
      "code": "import pandas as pd\nnames = ['So luong', 'Don gia', 'Thanh tien', 'Ten san pham', 'ID']\ndf = pd.read_csv('ex2.csv', names=names)\nprint(len(df.columns))",
      "question": "Kết quả in ra là:",
      "options": [
        "4",
        "5",
        "6",
        "Error"
      ],
      "correct": 1,
      "hint": "names parameter định nghĩa tên cho tất cả các cột, ở đây có 5 tên"
    },
    {
      "id": 4,
      "category": "CSV Index",
      "code": "import pandas as pd\nnames = ['So luong', 'Don gia', 'Thanh tien', 'Ten san pham', 'ID']\ndf = pd.read_csv('ex2.csv', names=names, index_col='ID')\nprint(df.index.name)",
      "question": "Output của đoạn code:",
      "options": [
        "None",
        "'ID'",
        "ID",
        "0"
      ],
      "correct": 2,
      "hint": "index_col='ID' đặt cột ID làm index, nên df.index.name sẽ trả về 'ID'"
    },
    {
      "id": 5,
      "category": "CSV Separator",
      "code": "import pandas as pd\ndf = pd.read_csv('ex3.txt', sep=r'\\s+')\nprint(type(df.sep))",
      "question": "Kết quả của code trên:",
      "options": [
        "<class 'str'>",
        "AttributeError: 'DataFrame' object has no attribute 'sep'",
        "<class 'pandas.DataFrame'>",
        "regex"
      ],
      "correct": 1,
      "hint": "DataFrame không có attribute 'sep', sep chỉ là parameter của read_csv()"
    },
    {
      "id": 6,
      "category": "CSV Skip Rows",
      "code": "import pandas as pd\ndf = pd.read_csv('ex4.csv', skiprows=[0, 2, 3])\nprint(df.shape[0])",
      "question": "Nếu file ex4.csv có 10 dòng ban đầu, kết quả in ra là:",
      "options": [
        "7",
        "6",
        "9",
        "10"
      ],
      "correct": 1,
      "hint": "skiprows=[0,2,3] bỏ 3 dòng, nhưng dòng 1 trở thành header, nên còn lại 10-3-1=6 dòng dữ liệu"
    },
    {
      "id": 7,
      "category": "Missing Data",
      "code": "import pandas as pd\ndf = pd.read_csv('ex5.csv')\nprint(df.isnull().sum().sum())",
      "question": "Code này dùng để:",
      "options": [
        "Đếm số cột có giá trị null",
        "Đếm tổng số giá trị null trong toàn bộ DataFrame",
        "Kiểm tra xem có null value nào không",
        "Xóa tất cả null values"
      ],
      "correct": 1,
      "hint": "isnull().sum().sum() tính tổng số lượng giá trị null trong tất cả các cột"
    },
    {
      "id": 8,
      "category": "JSON Basic",
      "code": "import pandas as pd\ndf = pd.read_json('student.json')\nprint(df.dtypes['diem_toan'])",
      "question": "Kiểu dữ liệu của cột diem_toan là:",
      "options": [
        "object",
        "int64",
        "float64",
        "string"
      ],
      "correct": 1,
      "hint": "Pandas tự động suy luận kiểu dữ liệu, điểm toán là số nguyên nên sẽ là int64"
    },
    {
      "id": 9,
      "category": "JSON Missing Data",
      "code": "import pandas as pd\ndf = pd.read_json('student.json')\ndf_clean = df.dropna()\nprint(len(df_clean))",
      "question": "Nếu df có 10 hàng và 3 hàng có giá trị null, kết quả là:",
      "options": [
        "10",
        "7",
        "3",
        "Error"
      ],
      "correct": 1,
      "hint": "dropna() xóa tất cả hàng có chứa ít nhất 1 giá trị null"
    },
    {
      "id": 10,
      "category": "JSON Fill Forward",
      "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, None, 3]})\ndf_filled = df.fillna(method='ffill')\nprint(df_filled.iloc[1, 0])",
      "question": "Giá trị tại vị trí [1,0] sau khi fillna:",
      "options": [
        "None",
        "1.0",
        "3.0",
        "Error"
      ],
      "correct": 1,
      "hint": "ffill (forward fill) điền giá trị trước đó vào chỗ null"
    },
    {
      "id": 11,
      "category": "Web HTML",
      "code": "import pandas as pd\ntables = pd.read_html('https://example.com')\nprint(type(tables))",
      "question": "Kiểu dữ liệu của biến tables:",
      "options": [
        "<class 'pandas.DataFrame'>",
        "<class 'list'>",
        "<class 'dict'>",
        "<class 'tuple'>"
      ],
      "correct": 1,
      "hint": "⚠️ ĐÂY LÀ LỖI PHỔ BIẾN NHẤT! read_html() trả về LIST các DataFrame, không phải DataFrame đơn lẻ. Xem lại Section 3.1 trong notebook!"
    },
    {
      "id": 12,
      "category": "Web HTML Access",
      "code": "import pandas as pd\ntables = pd.read_html('https://example.com')\ndf = tables[0]\nprint(df.__class__.__name__)",
      "question": "Kết quả in ra:",
      "options": [
        "'list'",
        "'DataFrame'",
        "'Table'",
        "'HTML'"
      ],
      "correct": 1,
      "hint": "tables[0] lấy phần tử đầu tiên (BƯỚC 5 trong Section 3.1). Vì tables là list chứa DataFrame, nên tables[0] sẽ là DataFrame"
    },
    {
      "id": 13,
      "category": "DataFrame Info",
      "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\nprint(df.shape)",
      "question": "Output của code:",
      "options": [
        "(2, 2)",
        "[2, 2]",
        "2x2",
        "4"
      ],
      "correct": 0,
      "hint": "shape trả về tuple (số hàng, số cột)"
    },
    {
      "id": 14,
      "category": "DataFrame Save",
      "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2]})\ndf.to_csv('output.csv', index=False)\nprint('Done')",
      "question": "Tác dụng của index=False:",
      "options": [
        "Không lưu index vào file CSV",
        "Đặt index thành False",
        "Tạo index mới",
        "Xóa tất cả index"
      ],
      "correct": 0,
      "hint": "index=False ngăn pandas ghi cột index (0,1,2...) vào file CSV. Xem Section 3.3 - chúng ta lưu dữ liệu web ra CSV với index=False!"
    },
    {
      "id": 15,
      "category": "XML BeautifulSoup",
      "code": "from bs4 import BeautifulSoup\nimport requests\nres = requests.get('https://example.rss')\nsoup = BeautifulSoup(res.content, 'xml')\nprint(type(soup))",
      "question": "Kiểu dữ liệu của soup:",
      "options": [
        "<class 'str'>",
        "<class 'bs4.BeautifulSoup'>",
        "<class 'requests.Response'>",
        "<class 'xml.etree.ElementTree'>"
      ],
      "correct": 1,
      "hint": "BeautifulSoup() tạo object BeautifulSoup để parse XML/HTML. Đây là BƯỚC 4 trong quy trình RSS (Section 4.2) - Parse XML!"
    },
    {
      "id": 16,
      "category": "XML Find All",
      "code": "from bs4 import BeautifulSoup\nxml_content = '<root><item>A</item><item>B</item></root>'\nsoup = BeautifulSoup(xml_content, 'xml')\nitems = soup.find_all('item')\nprint(len(items))",
      "question": "Kết quả in ra:",
      "options": [
        "0",
        "1",
        "2",
        "Error"
      ],
      "correct": 2,
      "hint": "find_all('item') tìm TẤT CẢ thẻ <item> (BƯỚC 5 trong Section 4.2). Có 2 thẻ <item> → len = 2"
    },
    {
      "id": 17,
      "category": "Excel File",
      "code": "import pandas as pd\nxlsx = pd.ExcelFile('data.xlsx')\nprint(type(xlsx.sheet_names))",
      "question": "Kiểu dữ liệu của xlsx.sheet_names:",
      "options": [
        "<class 'str'>",
        "<class 'list'>",
        "<class 'dict'>",
        "<class 'tuple'>"
      ],
      "correct": 1,
      "hint": "sheet_names trả về LIST tên các sheet. Giống như read_html() trả về list, Excel cũng có thể có nhiều sheet! (Section 5.1)"
    },
    {
      "id": 18,
      "category": "Excel Parse",
      "code": "import pandas as pd\nxlsx = pd.ExcelFile('data.xlsx')\ndf = xlsx.parse(sheet_name='Sheet1')\nprint(type(df))",
      "question": "Kiểu dữ liệu của df:",
      "options": [
        "<class 'pandas.ExcelFile'>",
        "<class 'pandas.DataFrame'>",
        "<class 'dict'>",
        "<class 'list'>"
      ],
      "correct": 1,
      "hint": "parse() method trả về DataFrame từ sheet được chỉ định"
    },
    {
      "id": 19,
      "category": "Excel Writer",
      "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2]})\nwriter = pd.ExcelWriter('output.xlsx')\ndf.to_excel(writer, sheet_name='MySheet')\nwriter.close()\nprint('Success')",
      "question": "Tác dụng của writer.close():",
      "options": [
        "Xóa file Excel",
        "Lưu và đóng file Excel",
        "Tạo sheet mới",
        "Không có tác dụng"
      ],
      "correct": 1,
      "hint": "close() lưu tất cả thay đổi và đóng file Excel"
    },
    {
      "id": 20,
      "category": "API Requests",
      "code": "import requests\nresponse = requests.get('https://api.example.com')\nprint(response.status_code == 200)",
      "question": "Kết quả True có nghĩa là:",
      "options": [
        "Request thất bại",
        "Request thành công",
        "Server lỗi",
        "Không có dữ liệu"
      ],
      "correct": 1,
      "hint": "Status code 200 = Thành công! Luôn kiểm tra status_code trước khi xử lý dữ liệu (Section 6 - API)"
    },
    {
      "id": 21,
      "category": "API JSON",
      "code": "import requests\nresponse = requests.get('https://api.example.com')\ndata = response.json()\nprint(type(data))",
      "question": "Nếu API trả về JSON object, type(data) sẽ là:",
      "options": [
        "<class 'str'>",
        "<class 'dict'>",
        "<class 'list'>",
        "<class 'json'>"
      ],
      "correct": 1,
      "hint": "response.json() chuyển JSON string thành dict Python"
    },
    {
      "id": 22,
      "category": "SQLite Connection",
      "code": "import sqlite3\ncon = sqlite3.connect('test.db')\nprint(type(con))",
      "question": "Kiểu dữ liệu của con:",
      "options": [
        "<class 'sqlite3.Connection'>",
        "<class 'sqlite3.Database'>",
        "<class 'str'>",
        "<class 'sqlite3.Cursor'>"
      ],
      "correct": 0,
      "hint": "sqlite3.connect() trả về Connection object"
    },
    {
      "id": 23,
      "category": "SQL Execute",
      "code": "import sqlite3\ncon = sqlite3.connect(':memory:')\ncursor = con.execute('SELECT 1 as test')\nresult = cursor.fetchone()\nprint(result)",
      "question": "Kết quả in ra:",
      "options": [
        "1",
        "(1,)",
        "[1]",
        "{test: 1}"
      ],
      "correct": 1,
      "hint": "fetchone() trả về tuple, ở đây là tuple có 1 phần tử"
    },
    {
      "id": 24,
      "category": "SQL DataFrame",
      "code": "import pandas as pd\nimport sqlite3\ncon = sqlite3.connect(':memory:')\ndf = pd.read_sql('SELECT 1 as A, 2 as B', con)\nprint(df.columns.tolist())",
      "question": "Output của code:",
      "options": [
        "[1, 2]",
        "['1', '2']",
        "['A', 'B']",
        "['SELECT', '1', 'as', 'A']"
      ],
      "correct": 2,
      "hint": "read_sql tạo DataFrame với tên cột từ SQL query, ở đây là A và B"
    },
    {
      "id": 25,
      "category": "DataFrame Basic",
      "code": "import pandas as pd\ndf = pd.DataFrame({'Name': ['An', 'Binh'], 'Age': [25, 30]})\nprint(df.loc[0, 'Name'])",
      "question": "Kết quả in ra:",
      "options": [
        "'An'",
        "An",
        "0",
        "Name"
      ],
      "correct": 1,
      "hint": "df.loc[0, 'Name'] truy cập giá trị tại hàng 0, cột 'Name'"
    },
    {
      "id": 26,
      "category": "DataFrame iloc",
      "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})\nprint(df.iloc[1, 1])",
      "question": "Giá trị được in ra:",
      "options": [
        "2",
        "5",
        "1",
        "4"
      ],
      "correct": 1,
      "hint": "iloc[1,1] truy cập hàng thứ 1 (index 1), cột thứ 1 (index 1), tức là giá trị 5"
    },
    {
      "id": 27,
      "category": "String Contains",
      "code": "import pandas as pd\ndf = pd.DataFrame({'text': ['Hello World', 'Python Code', 'Data Science']})\nresult = df[df['text'].str.contains('Data')]\nprint(len(result))",
      "question": "Kết quả in ra:",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "correct": 1,
      "hint": "str.contains('Data') tìm chuỗi chứa 'Data', chỉ match với 'Data Science' → 1 kết quả. Kỹ thuật này được dùng trong Section 4.3 để lọc tin về Vietnam Airlines!"
    },
    {
      "id": 28,
      "category": "DateTime Conversion",
      "code": "import pandas as pd\ndf = pd.DataFrame({'date': ['2023-01-01', '2023-01-02']})\ndf['date'] = pd.to_datetime(df['date'])\nprint(df['date'].dt.year.iloc[0])",
      "question": "Kết quả in ra:",
      "options": [
        "'2023'",
        "2023",
        "1",
        "23"
      ],
      "correct": 1,
      "hint": "dt.year trích xuất năm từ datetime, trả về integer (BƯỚC 2 trong Section 3.4 - Phân tích ngân hàng phá sản theo năm)"
    },
    {
      "id": 29,
      "category": "Data Analysis",
      "code": "import pandas as pd\ndf = pd.DataFrame({'category': ['A', 'B', 'A', 'B', 'A']})\nprint(df['category'].value_counts()['A'])",
      "question": "Kết quả in ra:",
      "options": [
        "2",
        "3",
        "1",
        "5"
      ],
      "correct": 1,
      "hint": "value_counts() đếm tần suất xuất hiện (BƯỚC 3 trong Section 3.4). 'A' xuất hiện 3 lần → kết quả = 3"
    },
    {
      "id": 30,
      "category": "Complex Operation",
      "code": "import pandas as pd\ndf1 = pd.DataFrame({'key': ['A', 'B'], 'val1': [1, 2]})\ndf2 = pd.DataFrame({'key': ['A', 'B'], 'val2': [3, 4]})\nmerged = pd.merge(df1, df2, on='key')\nprint(merged.shape)",
      "question": "Kết quả của merge operation:",
      "options": [
        "(2, 2)",
        "(2, 3)",
        "(4, 2)",
        "(1, 4)"
      ],
      "correct": 1,
      "hint": "merge trên 'key' tạo DataFrame với 2 hàng và 3 cột (key, val1, val2)"
    }
  ]
};

// Quiz state
let currentQuestion = 0;
let selectedAnswer = null;
let answered = false;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    
    // Get DOM elements
    const startBtn = document.getElementById('startBtn');
    const restartBtn = document.getElementById('restartBtn');
    const hintBtn = document.getElementById('hintBtn');
    const showAnswerBtn = document.getElementById('showAnswerBtn');
    const nextBtn = document.getElementById('nextBtn');
    const optionsContainer = document.getElementById('optionsContainer');
    
    // Check if elements exist
    if (!startBtn || !restartBtn || !hintBtn || !showAnswerBtn || !nextBtn || !optionsContainer) {
        console.error('Some required DOM elements not found');
        return;
    }
    
    console.log('All DOM elements found, binding events...');
    
    // Bind events
    startBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Start button clicked');
        startQuiz();
    });
    
    restartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Restart button clicked');
        restartQuiz();
    });
    
    hintBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Hint button clicked');
        showHint();
    });
    
    showAnswerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Show answer button clicked');
        showAnswer();
    });
    
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Next button clicked');
        nextQuestion();
    });
    
    // Option selection
    optionsContainer.addEventListener('click', handleOptionClick);
    
    console.log('Events bound successfully');
    
    // Show homepage by default
    showScreen('homepage');
});

// Screen navigation
function showScreen(screenName) {
    console.log('Switching to screen:', screenName);
    
    const screens = ['homepage', 'quizpage', 'endpage'];
    
    screens.forEach(name => {
        const screen = document.getElementById(name);
        if (screen) {
            if (name === screenName) {
                screen.classList.add('active');
            } else {
                screen.classList.remove('active');
            }
        }
    });
}

// Start quiz
function startQuiz() {
    console.log('Starting quiz...');
    currentQuestion = 0;
    selectedAnswer = null;
    answered = false;
    showScreen('quizpage');
    loadQuestion();
}

// Restart quiz
function restartQuiz() {
    console.log('Restarting quiz...');
    currentQuestion = 0;
    selectedAnswer = null;
    answered = false;
    showScreen('quizpage');
    loadQuestion();
}

// Load current question
function loadQuestion() {
    console.log('Loading question:', currentQuestion + 1);
    
    const question = quizData.questions[currentQuestion];
    
    // Reset state
    selectedAnswer = null;
    answered = false;
    
    // Get elements
    const hintTooltip = document.getElementById('hintTooltip');
    const nextBtn = document.getElementById('nextBtn');
    const showAnswerBtn = document.getElementById('showAnswerBtn');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const categoryBadge = document.getElementById('categoryBadge');
    const questionTitle = document.getElementById('questionTitle');
    const codeBlock = document.getElementById('codeBlock');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    
    // Hide hint and next button
    if (hintTooltip) hintTooltip.classList.add('hidden');
    if (nextBtn) nextBtn.classList.add('hidden');
    if (showAnswerBtn) showAnswerBtn.disabled = false;
    
    // Update progress
    updateProgress();
    
    // Update UI elements
    if (categoryBadge) categoryBadge.textContent = question.category;
    if (questionTitle) questionTitle.textContent = `Câu ${currentQuestion + 1}/30`;
    if (codeBlock) codeBlock.textContent = question.code;
    if (questionText) questionText.textContent = question.question;
    
    // Load options
    if (optionsContainer) {
        const options = optionsContainer.querySelectorAll('.option');
        options.forEach((option, index) => {
            const optionText = option.querySelector('.option-text');
            if (optionText) {
                optionText.textContent = question.options[index];
            }
            
            // Reset option styling
            option.classList.remove('selected', 'correct', 'incorrect');
        });
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / 30) * 100;
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
    if (progressText) {
        progressText.textContent = `Câu ${currentQuestion + 1}/30`;
    }
}

// Handle option selection
function handleOptionClick(event) {
    if (answered) return;
    
    const option = event.target.closest('.option');
    if (!option) return;
    
    console.log('Option clicked:', option.dataset.option);
    
    const optionsContainer = document.getElementById('optionsContainer');
    
    // Remove previous selection
    if (optionsContainer) {
        optionsContainer.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
    }
    
    // Add selection to clicked option
    option.classList.add('selected');
    selectedAnswer = parseInt(option.dataset.option);
}

// Show hint
function showHint() {
    const question = quizData.questions[currentQuestion];
    const hintTooltip = document.getElementById('hintTooltip');
    
    if (hintTooltip) {
        const hintContent = hintTooltip.querySelector('.hint-content');
        if (hintContent) {
            hintContent.textContent = question.hint;
        }
        hintTooltip.classList.remove('hidden');
        
        // Hide hint after 5 seconds
        setTimeout(() => {
            hintTooltip.classList.add('hidden');
        }, 5000);
    }
}

// Show answer
function showAnswer() {
    if (answered) return;
    
    console.log('Showing answer for question:', currentQuestion + 1);
    
    const question = quizData.questions[currentQuestion];
    const optionsContainer = document.getElementById('optionsContainer');
    const showAnswerBtn = document.getElementById('showAnswerBtn');
    const nextBtn = document.getElementById('nextBtn');
    const hintTooltip = document.getElementById('hintTooltip');
    
    if (optionsContainer) {
        const options = optionsContainer.querySelectorAll('.option');
        
        // Show correct/incorrect answers
        options.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedAnswer && selectedAnswer !== question.correct) {
                option.classList.add('incorrect');
            }
        });
    }
    
    answered = true;
    if (showAnswerBtn) showAnswerBtn.disabled = true;
    if (nextBtn) nextBtn.classList.remove('hidden');
    if (hintTooltip) hintTooltip.classList.add('hidden');
}

// Next question
function nextQuestion() {
    console.log('Moving to next question...');
    currentQuestion++;
    
    if (currentQuestion >= quizData.questions.length) {
        console.log('Quiz completed!');
        // Quiz completed
        showScreen('endpage');
    } else {
        // Load next question
        setTimeout(() => {
            loadQuestion();
        }, 300);
    }
}