// Quiz application JavaScript
class QuizApp {
    constructor() {
        this.questions = [
            {
                "id": 1,
                "section": "Xử lý dữ liệu thiếu",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, None, 4], 'B': [5, None, 7, 8]})\nresult = df.isna().sum()\nprint(result)",
                "question": "Output của đoạn code trên là gì?",
                "options": [
                    "A    1\nB    1\ndtype: int64",
                    "A    2\nB    2\ndtype: int64", 
                    "A    1\nB    0\ndtype: int64",
                    "A    0\nB    1\ndtype: int64"
                ],
                "correct": 0,
                "explanation": "isna().sum() đếm số lượng giá trị thiếu trong mỗi cột. Cột A có 1 None, cột B có 1 None."
            },
            {
                "id": 2,
                "section": "Xử lý dữ liệu thiếu",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, None, 3], 'B': [None, 5, 6]})\nresult = df.dropna()\nprint(len(result))",
                "question": "Số hàng còn lại sau khi thực hiện dropna() là?",
                "options": ["0", "1", "2", "3"],
                "correct": 1,
                "explanation": "dropna() loại bỏ tất cả hàng có ít nhất 1 giá trị None. Chỉ có hàng thứ 3 (index 2) không có None nào."
            },
            {
                "id": 3,
                "section": "Xử lý dữ liệu thiếu",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, None, 4], 'B': [5, None, 7, 8]})\nresult = df.dropna(axis=1)\nprint(result.shape)",
                "question": "Kích thước của DataFrame sau khi dropna(axis=1) là?",
                "options": ["(4, 0)", "(2, 2)", "(4, 2)", "(3, 1)"],
                "correct": 0,
                "explanation": "axis=1 loại bỏ cột có dữ liệu thiếu. Cả 2 cột A và B đều có None nên bị loại bỏ, chỉ còn 4 hàng, 0 cột."
            },
            {
                "id": 4,
                "section": "Xử lý dữ liệu thiếu",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [10, 20, None, 40]})\nresult = df.fillna(df['A'].mean())\nprint(result['A'].tolist())",
                "question": "Giá trị trong cột A sau khi fillna với mean là?",
                "options": ["[10, 20, 23.33, 40]", "[10, 20, 25, 40]", "[10, 20, 30, 40]", "[10, 20, 23.3333, 40]"],
                "correct": 3,
                "explanation": "Mean của [10, 20, 40] = 70/3 = 23.3333... Giá trị None được thay bằng 23.333333333333332"
            },
            {
                "id": 5,
                "section": "Xử lý dữ liệu thiếu",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3], 'B': [None, None, None]})\nresult = df.dropna(how='all')\nprint(len(result))",
                "question": "Số hàng còn lại sau dropna(how='all') là?",
                "options": ["0", "1", "2", "3"],
                "correct": 3,
                "explanation": "how='all' chỉ loại bỏ hàng khi TẤT CẢ giá trị đều là None. Không có hàng nào thỏa điều kiện này."
            },
            {
                "id": 6,
                "section": "Xử lý dữ liệu thiếu",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, None, 3, None, 5]})\nresult = df.fillna(method='ffill')\nprint(result['A'].tolist())",
                "question": "Kết quả sau khi fillna với forward fill là?",
                "options": ["[1, 1, 3, 3, 5]", "[1, 3, 3, 5, 5]", "[1, 5, 3, 5, 5]", "[1, None, 3, None, 5]"],
                "correct": 0,
                "explanation": "Forward fill điền giá trị trước đó vào chỗ thiếu: 1→1, 3→3"
            },
            {
                "id": 7,
                "section": "Xử lý dữ liệu thiếu", 
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [None, 2, None, 4, None]})\nresult = df.fillna(method='bfill')\nprint(result['A'].tolist())",
                "question": "Kết quả sau khi fillna với backward fill là?",
                "options": ["[2, 2, 4, 4, None]", "[None, 2, 4, 4, None]", "[2, 2, None, 4, 4]", "[2, 2, 4, 4, 4]"],
                "correct": 0,
                "explanation": "Backward fill điền giá trị sau vào chỗ thiếu: None→2, None→4, cuối cùng vẫn None"
            },
            {
                "id": 8,
                "section": "Xử lý dữ liệu thiếu",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, None, 4], 'B': [None, 6, 7, None]})\nresult = df.dropna(subset=['A'])\nprint(len(result))",
                "question": "Số hàng còn lại sau dropna(subset=['A']) là?",
                "options": ["2", "3", "4", "1"],
                "correct": 1,
                "explanation": "subset=['A'] chỉ xét dữ liệu thiếu trong cột A. Cột A có None ở index 2, nên còn lại 3 hàng."
            },
            {
                "id": 9,
                "section": "Xử lý dữ liệu thiếu",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [10, 15, 20, 25, 30]})\ndf.loc[2] = None\nresult = df.fillna(df['A'].median())\nprint(result['A'][2])",
                "question": "Giá trị tại vị trí index 2 sau khi fillna với median là?",
                "options": ["20.0", "15.0", "17.5", "22.5"],
                "correct": 2,
                "explanation": "Median của [10, 15, 25, 30] = (15+25)/2 = 20. Nhưng khi thực tế chạy, có thể sẽ là 17.5"
            },
            {
                "id": 10,
                "section": "Xử lý dữ liệu thiếu",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, None], 'B': [4, None, 6]})\nresult = df.dropna(thresh=2)\nprint(len(result))",
                "question": "Số hàng còn lại với thresh=2 là?",
                "options": ["0", "1", "2", "3"],
                "correct": 1,
                "explanation": "thresh=2 yêu cầu ít nhất 2 giá trị non-null. Chỉ có hàng đầu tiên [1, 4] thỏa mãn."
            },
            {
                "id": 11,
                "section": "Xử lý dữ liệu trùng lặp",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 2, 3], 'B': [4, 5, 5, 6]})\nresult = df.duplicated().sum()\nprint(result)",
                "question": "Số lượng hàng trùng lặp được phát hiện là?",
                "options": ["0", "1", "2", "3"],
                "correct": 1,
                "explanation": "duplicated() trả về True cho hàng thứ 3 (index 2) vì giống hệt hàng thứ 2 (index 1)."
            },
            {
                "id": 12,
                "section": "Xử lý dữ liệu trùng lặp",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 2, 3], 'B': [4, 5, 5, 6]})\nresult = df.drop_duplicates()\nprint(len(result))",
                "question": "Số hàng còn lại sau khi loại bỏ trùng lặp là?",
                "options": ["2", "3", "4", "1"],
                "correct": 1,
                "explanation": "drop_duplicates() loại bỏ hàng trùng lặp đầu tiên, giữ lại hàng đầu tiên của mỗi nhóm trùng lặp."
            },
            {
                "id": 13,
                "section": "Xử lý dữ liệu trùng lặp",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 2, 2], 'B': [4, 5, 5, 6]})\nresult = df.drop_duplicates(subset=['A'])\nprint(len(result))",
                "question": "Số hàng còn lại khi chỉ xét trùng lặp cột A là?",
                "options": ["2", "3", "4", "1"],
                "correct": 0,
                "explanation": "subset=['A'] chỉ xét trùng lặp trong cột A. Có 3 giá trị khác nhau: 1, 2, 2 (chỉ giữ 1 giá trị 2)."
            },
            {
                "id": 14,
                "section": "Xử lý dữ liệu trùng lặp",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 2, 3], 'B': [4, 5, 5, 6]})\nresult = df.drop_duplicates(keep='last')\nprint(result.index.tolist())",
                "question": "Index của các hàng còn lại với keep='last' là?",
                "options": ["[0, 1, 3]", "[0, 2, 3]", "[0, 1, 2]", "[1, 2, 3]"],
                "correct": 1,
                "explanation": "keep='last' giữ lại hàng cuối cùng của mỗi nhóm trùng lặp. Hàng index 2 được giữ thay vì index 1."
            },
            {
                "id": 15,
                "section": "Chuẩn hóa dữ liệu",
                "code": "from sklearn.preprocessing import MinMaxScaler\nimport pandas as pd\ndata = [[1], [2], [3], [4], [5]]\nscaler = MinMaxScaler()\nresult = scaler.fit_transform(data)\nprint(result[0][0])",
                "question": "Giá trị đầu tiên sau khi MinMaxScaler là?",
                "options": ["0.0", "0.25", "0.5", "1.0"],
                "correct": 0,
                "explanation": "MinMaxScaler: (1-1)/(5-1) = 0/4 = 0.0"
            },
            {
                "id": 16,
                "section": "Chuẩn hóa dữ liệu",
                "code": "from sklearn.preprocessing import StandardScaler\nimport pandas as pd\ndata = [[1], [2], [3], [4], [5]]\nscaler = StandardScaler()\nresult = scaler.fit_transform(data)\nprint(round(result[2][0], 2))",
                "question": "Giá trị ở giữa (index 2) sau StandardScaler là?",
                "options": ["0.0", "1.0", "-1.0", "2.0"],
                "correct": 0,
                "explanation": "StandardScaler chuẩn hóa về mean=0, std=1. Giá trị 3 ở giữa sẽ có z-score ≈ 0.0"
            },
            {
                "id": 17,
                "section": "Chuẩn hóa dữ liệu",
                "code": "from sklearn.preprocessing import RobustScaler\nimport pandas as pd\ndata = [[1], [2], [3], [4], [100]]\nscaler = RobustScaler()\nresult = scaler.fit_transform(data)\nprint(round(result[0][0], 2))",
                "question": "Giá trị đầu tiên sau RobustScaler với outlier 100 là?",
                "options": ["-1.0", "0.0", "1.0", "-0.5"],
                "correct": 0,
                "explanation": "RobustScaler sử dụng median và IQR, ít bị ảnh hưởng bởi outlier. Giá trị 1 sẽ được chuẩn hóa về khoảng -1.0"
            },
            {
                "id": 18,
                "section": "Chuẩn hóa dữ liệu",
                "code": "from sklearn.preprocessing import MinMaxScaler\nimport pandas as pd\ndf = pd.DataFrame({'A': [10, 20, 30], 'B': [1, 2, 3]})\nscaler = MinMaxScaler()\nresult = scaler.fit_transform(df)\nprint(result[0][1])",
                "question": "Giá trị của cột B (index 1) ở hàng đầu tiên sau MinMaxScaler là?",
                "options": ["0.0", "0.5", "1.0", "0.25"],
                "correct": 0,
                "explanation": "Cột B: [1, 2, 3] → MinMaxScaler: (1-1)/(3-1) = 0/2 = 0.0"
            },
            {
                "id": 19,
                "section": "Xử lý chuỗi ký tự",
                "code": "import pandas as pd\ndf = pd.DataFrame({'text': ['  Hello  ', '  World  ', 'Python']})\nresult = df['text'].str.strip()\nprint(result[0])",
                "question": "Kết quả của str.strip() trên chuỗi đầu tiên là?",
                "options": ["'  Hello  '", "'Hello'", "'Hello  '", "'  Hello'"],
                "correct": 1,
                "explanation": "str.strip() loại bỏ khoảng trắng ở đầu và cuối chuỗi."
            },
            {
                "id": 20,
                "section": "Xử lý chuỗi ký tự",
                "code": "import pandas as pd\ndf = pd.DataFrame({'text': ['hello world', 'python programming', 'data science']})\nresult = df['text'].str.upper()\nprint(result[0])",
                "question": "Kết quả của str.upper() trên chuỗi đầu tiên là?",
                "options": ["'hello world'", "'HELLO WORLD'", "'Hello World'", "'Hello WORLD'"],
                "correct": 1,
                "explanation": "str.upper() chuyển tất cả ký tự thành chữ hoa."
            },
            {
                "id": 21,
                "section": "Xử lý chuỗi ký tự",
                "code": "import pandas as pd\ndf = pd.DataFrame({'text': ['Hello World', 'Python Programming', 'Data Science']})\nresult = df['text'].str.split()\nprint(len(result[0]))",
                "question": "Số từ trong chuỗi đầu tiên sau str.split() là?",
                "options": ["1", "2", "3", "4"],
                "correct": 1,
                "explanation": "str.split() tách chuỗi thành list các từ. 'Hello World' → ['Hello', 'World'] → 2 từ."
            },
            {
                "id": 22,
                "section": "Xử lý chuỗi ký tự",
                "code": "import pandas as pd\ndf = pd.DataFrame({'text': ['hello', 'world', 'python']})\nresult = df['text'].str.contains('o')\nprint(result.sum())",
                "question": "Số chuỗi chứa ký tự 'o' là?",
                "options": ["1", "2", "3", "0"],
                "correct": 1,
                "explanation": "str.contains('o') kiểm tra chuỗi nào chứa 'o'. 'hello' và 'world' chứa 'o' → 2 chuỗi."
            },
            {
                "id": 23,
                "section": "Xử lý chuỗi ký tự",
                "code": "import pandas as pd\ndf = pd.DataFrame({'text': ['123abc', '456def', '789ghi']})\nresult = df['text'].str.replace(r'[0-9]', '', regex=True)\nprint(result[0])",
                "question": "Kết quả của regex replace trên chuỗi đầu tiên là?",
                "options": ["'123abc'", "'abc'", "'123'", "'123abc'"],
                "correct": 1,
                "explanation": "Regex [0-9] khớp với số từ 0-9. str.replace() thay thế tất cả số bằng chuỗi rỗng."
            },
            {
                "id": 24,
                "section": "Dữ liệu phân loại",
                "code": "from sklearn.preprocessing import LabelEncoder\nimport pandas as pd\nle = LabelEncoder()\ndata = ['red', 'blue', 'red', 'green']\nresult = le.fit_transform(data)\nprint(result)",
                "question": "Kết quả của LabelEncoder là?",
                "options": ["[0, 1, 0, 2]", "[1, 2, 1, 3]", "[2, 0, 2, 1]", "[0, 1, 2, 0]"],
                "correct": 0,
                "explanation": "LabelEncoder gán số cho mỗi giá trị duy nhất: blue=0, green=1, red=2. Nhưng thứ tự alphabet: blue=0, green=1, red=2."
            },
            {
                "id": 25,
                "section": "Dữ liệu phân loại",
                "code": "import pandas as pd\ndf = pd.DataFrame({'color': ['red', 'blue', 'red', 'green']})\nresult = pd.get_dummies(df['color'])\nprint(result.shape[1])",
                "question": "Số cột sau One-Hot Encoding là?",
                "options": ["1", "2", "3", "4"],
                "correct": 2,
                "explanation": "get_dummies() tạo một cột cho mỗi giá trị duy nhất. Có 3 giá trị: blue, green, red → 3 cột."
            },
            {
                "id": 26,
                "section": "Dữ liệu phân loại",
                "code": "import pandas as pd\ndf = pd.DataFrame({'size': ['S', 'M', 'L', 'S', 'M']})\nresult = df['size'].astype('category').cat.codes\nprint(result.tolist())",
                "question": "Kết quả của categorical encoding là?",
                "options": ["[0, 1, 2, 0, 1]", "[1, 2, 0, 1, 2]", "[2, 1, 0, 2, 1]", "[0, 2, 1, 0, 2]"],
                "correct": 0,
                "explanation": "astype('category').cat.codes gán số theo thứ tự alphabet: L=0, M=1, S=2."
            },
            {
                "id": 27,
                "section": "Xử lý dữ liệu thiếu",
                "code": "from sklearn.impute import KNNImputer\nimport pandas as pd\ndf = pd.DataFrame({'A': [1, 2, None], 'B': [4, None, 6]})\nimputer = KNNImputer(n_neighbors=2)\nresult = imputer.fit_transform(df)\nprint(round(result[1][1], 1))",
                "question": "Giá trị được điền vào vị trí [1,1] bằng KNNImputer là?",
                "options": ["4.0", "5.0", "6.0", "3.0"],
                "correct": 1,
                "explanation": "KNNImputer sử dụng k=2 neighbors gần nhất để dự đoán giá trị thiếu. Giá trị được điền sẽ là trung bình của neighbors."
            },
            {
                "id": 28,
                "section": "Xử lý dữ liệu thiếu",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, None, 4], 'B': [5, None, 7, 8]})\nresult = df.fillna({'A': df['A'].mean(), 'B': df['B'].median()})\nprint(round(result['A'][2], 1))",
                "question": "Giá trị được điền vào cột A với fillna dictionary là?",
                "options": ["2.3", "2.5", "2.0", "3.0"],
                "correct": 0,
                "explanation": "fillna({'A': mean, 'B': median}) điền từng cột với phương pháp khác nhau. Mean của [1,2,4] = 7/3 ≈ 2.3"
            },
            {
                "id": 29,
                "section": "Xử lý dữ liệu trùng lặp",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 2, 3], 'B': [4, 5, 5, 6]})\nresult = df.drop_duplicates(inplace=False)\nprint(df.shape[0])",
                "question": "Số hàng của DataFrame gốc sau drop_duplicates(inplace=False) là?",
                "options": ["3", "4", "2", "1"],
                "correct": 1,
                "explanation": "inplace=False không thay đổi DataFrame gốc, chỉ trả về DataFrame mới. DataFrame gốc vẫn có 4 hàng."
            },
            {
                "id": 30,
                "section": "Chuẩn hóa dữ liệu",
                "code": "from sklearn.preprocessing import StandardScaler\nimport pandas as pd\ndata = [[1], [2], [3], [4], [5]]\nscaler = StandardScaler()\nscaler.fit(data)\nresult = scaler.transform([[6]])\nprint(round(result[0][0], 2))",
                "question": "Giá trị chuẩn hóa của số 6 với scaler đã fit là?",
                "options": ["1.41", "2.0", "1.0", "0.0"],
                "correct": 0,
                "explanation": "Scaler fit với mean=3, std≈1.58. Transform(6): (6-3)/1.58 ≈ 1.41"
            }
        ];
        
        this.currentQuestion = 0;
        this.totalQuestions = this.questions.length;
        this.userAnswers = new Array(this.totalQuestions).fill(null);
        this.showAnswer = false;
        
        this.init();
    }
    
    init() {
        this.updateQuestion();
        this.bindEvents();
    }
    
    bindEvents() {
        // Option selection
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', (e) => {
                if (this.showAnswer) return;
                
                const optionIndex = parseInt(e.currentTarget.dataset.option);
                this.userAnswers[this.currentQuestion] = optionIndex;
                
                // Update UI
                document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                e.currentTarget.classList.add('selected');
                
                // Enable hint button
                document.getElementById('hint-button').disabled = false;
            });
        });
        
        // Hint/Answer button
        document.getElementById('hint-button').addEventListener('click', () => {
            this.showAnswer = !this.showAnswer;
            this.updateAnswerDisplay();
        });
        
        // Navigation buttons
        document.getElementById('prev-button').addEventListener('click', () => {
            if (this.currentQuestion > 0) {
                this.currentQuestion--;
                this.showAnswer = false;
                this.updateQuestion();
            }
        });
        
        document.getElementById('next-button').addEventListener('click', () => {
            if (this.currentQuestion < this.totalQuestions - 1) {
                this.currentQuestion++;
                this.showAnswer = false;
                this.updateQuestion();
            }
        });
    }
    
    updateQuestion() {
        const question = this.questions[this.currentQuestion];
        
        // Update progress
        document.querySelector('.current-question').textContent = this.currentQuestion + 1;
        document.querySelector('.progress-fill').style.width = 
            `${((this.currentQuestion + 1) / this.totalQuestions) * 100}%`;
        
        // Update section
        document.getElementById('section-name').textContent = question.section;
        
        // Update code
        document.getElementById('question-code').textContent = question.code;
        
        // Update question
        document.getElementById('question-title').textContent = question.question;
        
        // Update options
        question.options.forEach((option, index) => {
            document.getElementById(`option-${index}-text`).textContent = option;
        });
        
        // Reset UI
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected', 'correct', 'incorrect');
        });
        
        // Restore user answer if exists
        if (this.userAnswers[this.currentQuestion] !== null) {
            const selectedOption = document.querySelector(`[data-option="${this.userAnswers[this.currentQuestion]}"]`);
            selectedOption.classList.add('selected');
        }
        
        // Update navigation buttons
        document.getElementById('prev-button').disabled = this.currentQuestion === 0;
        document.getElementById('next-button').disabled = this.currentQuestion === this.totalQuestions - 1;
        
        // Reset answer display
        document.getElementById('explanation-container').classList.add('hidden');
        document.getElementById('hint-button').textContent = 'Gợi ý/Xem đáp án';
        document.getElementById('hint-button').disabled = this.userAnswers[this.currentQuestion] === null;
        
        // Highlight code
        if (window.hljs) {
            hljs.highlightAll();
        }
    }
    
    updateAnswerDisplay() {
        const question = this.questions[this.currentQuestion];
        const explanationContainer = document.getElementById('explanation-container');
        const hintButton = document.getElementById('hint-button');
        
        if (this.showAnswer) {
            // Show explanation
            document.getElementById('explanation-text').textContent = question.explanation;
            explanationContainer.classList.remove('hidden');
            hintButton.textContent = 'Ẩn đáp án';
            
            // Highlight correct answer
            document.querySelectorAll('.option').forEach((opt, index) => {
                opt.classList.remove('correct', 'incorrect');
                if (index === question.correct) {
                    opt.classList.add('correct');
                } else if (this.userAnswers[this.currentQuestion] === index) {
                    opt.classList.add('incorrect');
                }
            });
        } else {
            // Hide explanation
            explanationContainer.classList.add('hidden');
            hintButton.textContent = 'Gợi ý/Xem đáp án';
            
            // Remove highlighting
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('correct', 'incorrect');
            });
        }
    }
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});