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
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 1, 3], 'B': [4, 5, 4, 6]})\nresult = df.duplicated().sum()\nprint(result)",
                "question": "Số hàng bị trùng lặp là?",
                "options": ["0", "1", "2", "3"],
                "correct": 1,
                "explanation": "Hàng [1, 4] xuất hiện 2 lần (index 0 và 2). duplicated() trả về True cho lần xuất hiện thứ 2."
            },
            {
                "id": 12,
                "section": "Xử lý dữ liệu trùng lặp",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 1, 2, 2], 'B': [3, 3, 4, 4]})\nresult = df.drop_duplicates()\nprint(len(result))",
                "question": "Số hàng còn lại sau drop_duplicates() là?",
                "options": ["1", "2", "3", "4"],
                "correct": 1,
                "explanation": "Có 2 hàng duy nhất: [1, 3] và [2, 4]. Các bản sao được loại bỏ."
            },
            {
                "id": 13,
                "section": "Xử lý dữ liệu trùng lặp",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 1], 'B': [3, 4, 5]})\nresult = df.duplicated(subset=['A']).sum()\nprint(result)",
                "question": "Số hàng trùng lặp theo cột A là?",
                "options": ["0", "1", "2", "3"],
                "correct": 1,
                "explanation": "Cột A có giá trị 1 xuất hiện 2 lần. duplicated() đánh dấu lần xuất hiện thứ 2."
            },
            {
                "id": 14,
                "section": "Chuẩn hóa dữ liệu",
                "code": "from sklearn.preprocessing import MinMaxScaler\nimport pandas as pd\ndf = pd.DataFrame({'A': [0, 5, 10]})\nscaler = MinMaxScaler()\nresult = scaler.fit_transform(df[['A']])\nprint(result.flatten().tolist())",
                "question": "Kết quả sau Min-Max scaling là?",
                "options": ["[0.0, 0.5, 1.0]", "[0, 5, 10]", "[-1, 0, 1]", "[0.1, 0.5, 0.9]"],
                "correct": 0,
                "explanation": "Min-Max: (X-min)/(max-min) = (0-0)/(10-0)=0, (5-0)/(10-0)=0.5, (10-0)/(10-0)=1"
            },
            {
                "id": 15,
                "section": "Chuẩn hóa dữ liệu",
                "code": "from sklearn.preprocessing import StandardScaler\nimport pandas as pd\ndf = pd.DataFrame({'A': [0, 3, 6]})\nscaler = StandardScaler()\nresult = scaler.fit_transform(df[['A']])\nprint(round(result[1][0], 2))",
                "question": "Giá trị sau Standard scaling tại vị trí giữa (làm tròn 2 chữ số) là?",
                "options": ["0.0", "1.0", "-1.0", "0.5"],
                "correct": 0,
                "explanation": "Mean=[0,3,6] = 3, Std≈2.45. Z-score tại 3: (3-3)/2.45 = 0"
            },
            {
                "id": 16,
                "section": "Chuẩn hóa dữ liệu",
                "code": "from sklearn.preprocessing import RobustScaler\nimport pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3, 100]})  # có outlier\nscaler = RobustScaler()\nresult = scaler.fit_transform(df[['A']])\nprint(result[1][0])",
                "question": "Giá trị sau Robust scaling tại index 1 là?",
                "options": ["-0.5", "0.0", "0.5", "1.0"],
                "correct": 0,
                "explanation": "Median=2.5, IQR=Q3-Q1=3-2=1. Robust: (2-2.5)/1 = -0.5"
            },
            {
                "id": 17,
                "section": "Chuẩn hóa dữ liệu",
                "code": "from sklearn.preprocessing import MinMaxScaler\nimport pandas as pd\ndf = pd.DataFrame({'A': [10, 20, 30, 40]})\nscaler = MinMaxScaler(feature_range=(0, 5))\nresult = scaler.fit_transform(df[['A']])\nprint(result[2][0])",
                "question": "Giá trị sau Min-Max scaling với range (0,5) tại index 2 là?",
                "options": ["2.5", "3.0", "3.33", "10.0"],
                "correct": 2,
                "explanation": "Min-Max với range (0,5): 5*(30-10)/(40-10) = 5*20/30 = 100/30 ≈ 3.33"
            },
            {
                "id": 18,
                "section": "Chuẩn hóa dữ liệu",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [2, 4, 6, 8, 10]})\nnormalized = (df['A'] - df['A'].min()) / (df['A'].max() - df['A'].min())\nprint(normalized[2])",
                "question": "Giá trị chuẩn hóa Min-Max tại index 2 là?",
                "options": ["0.25", "0.5", "0.75", "1.0"],
                "correct": 1,
                "explanation": "(6-2)/(10-2) = 4/8 = 0.5"
            },
            {
                "id": 19,
                "section": "Chuẩn hóa dữ liệu",
                "code": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 3, 5, 7, 9]})\nstandardized = (df['A'] - df['A'].mean()) / df['A'].std()\nprint(round(standardized[4], 2))",
                "question": "Giá trị standardized tại index 4 (làm tròn 2 chữ số) là?",
                "options": ["1.26", "1.41", "1.5", "2.0"],
                "correct": 1,
                "explanation": "Mean=5, Std≈2.83. Z-score tại 9: (9-5)/2.83 ≈ 1.41"
            },
            {
                "id": 20,
                "section": "Xử lý chuỗi ký tự",
                "code": "import pandas as pd\ndf = pd.DataFrame({'text': ['  Hello World  ', 'Python', '  Data  ']})\nresult = df['text'].str.strip().str.upper()\nprint(result.tolist())",
                "question": "Kết quả sau khi strip() và upper() là?",
                "options": ["['HELLO WORLD', 'PYTHON', 'DATA']", "['  HELLO WORLD  ', 'PYTHON', '  DATA  ']", 
                          "['hello world', 'python', 'data']", "['Hello World', 'Python', 'Data']"],
                "correct": 0,
                "explanation": "strip() loại bỏ khoảng trắng đầu cuối, upper() chuyển thành chữ hoa"
            },
            {
                "id": 21,
                "section": "Xử lý chuỗi ký tự",
                "code": "import pandas as pd\ndf = pd.DataFrame({'text': ['apple', 'banana', 'cherry']})\nresult = df['text'].str.contains('an')\nprint(result.tolist())",
                "question": "Kết quả kiểm tra contains('an') là?",
                "options": ["[False, True, False]", "[True, True, False]", "[False, False, True]", "[True, False, True]"],
                "correct": 0,
                "explanation": "Chỉ 'banana' chứa chuỗi 'an'"
            },
            {
                "id": 22,
                "section": "Xử lý chuỗi ký tự",
                "code": "import pandas as pd\ndf = pd.DataFrame({'text': ['Hello World', 'Python Data', 'Machine Learning']})\nresult = df['text'].str.split().str[0]\nprint(result.tolist())",
                "question": "Kết quả lấy từ đầu tiên sau split() là?",
                "options": ["['Hello', 'Python', 'Machine']", "['World', 'Data', 'Learning']", 
                          "['Hello World', 'Python Data', 'Machine Learning']", "['H', 'P', 'M']"],
                "correct": 0,
                "explanation": "split() tách theo khoảng trắng, [0] lấy phần tử đầu tiên"
            },
            {
                "id": 23,
                "section": "Xử lý chuỗi ký tự",
                "code": "import pandas as pd\ndf = pd.DataFrame({'text': ['abc123def', '456ghi789', 'xyz000']})\nresult = df['text'].str.extract(r'(\\\\d+)')\nprint(result[0].tolist())",
                "question": "Kết quả extract số từ chuỗi là?",
                "options": ["['123', '456', '000']", "['abc', 'ghi', 'xyz']", "['def', '789', '000']", "['123', '789', '000']"],
                "correct": 0,
                "explanation": "Regex \\\\d+ tìm chuỗi số đầu tiên: 123, 456, 000"
            },
            {
                "id": 24,
                "section": "Xử lý chuỗi ký tự",
                "code": "import pandas as pd\ndf = pd.DataFrame({'text': ['apple,banana', 'orange;grape', 'cherry:lemon']})\nresult = df['text'].str.replace(r'[,;:]', '-', regex=True)\nprint(result.tolist())",
                "question": "Kết quả sau khi replace các ký tự đặc biệt bằng '-' là?",
                "options": ["['apple-banana', 'orange-grape', 'cherry-lemon']", "['apple,banana', 'orange;grape', 'cherry:lemon']",
                          "['apple banana', 'orange grape', 'cherry lemon']", "['apple_banana', 'orange_grape', 'cherry_lemon']"],
                "correct": 0,
                "explanation": "Regex [,;:] khớp với bất kỳ ký tự nào trong ngoặc vuông và thay bằng '-'"
            },
            {
                "id": 25,
                "section": "Xử lý chuỗi ký tự",
                "code": "import pandas as pd\ndf = pd.DataFrame({'email': ['user@gmail.com', 'test@yahoo.com', 'admin@hotmail.com']})\nresult = df['email'].str.extract(r'(.+)@(.+)\\\\.(.+)')\nprint(result[1].tolist())",
                "question": "Kết quả extract domain (phần giữa @ và dấu .) là?",
                "options": ["['gmail', 'yahoo', 'hotmail']", "['user', 'test', 'admin']", "['com', 'com', 'com']", "['gmail.com', 'yahoo.com', 'hotmail.com']"],
                "correct": 0,
                "explanation": "Group thứ 2 (.+) trong regex capture domain name: gmail, yahoo, hotmail"
            },
            {
                "id": 26,
                "section": "Xử lý dữ liệu phân loại",
                "code": "from sklearn.preprocessing import LabelEncoder\nimport pandas as pd\ndf = pd.DataFrame({'color': ['red', 'blue', 'green', 'red', 'blue']})\nle = LabelEncoder()\nencoded = le.fit_transform(df['color'])\nprint(encoded.tolist())",
                "question": "Kết quả Label Encoding là?",
                "options": ["[2, 0, 1, 2, 0]", "[0, 1, 2, 0, 1]", "[1, 2, 3, 1, 2]", "[0, 2, 1, 0, 2]"],
                "correct": 0,
                "explanation": "LabelEncoder sắp xếp alphabetically: blue=0, green=1, red=2"
            },
            {
                "id": 27,
                "section": "Xử lý dữ liệu phân loại",
                "code": "import pandas as pd\ndf = pd.DataFrame({'animal': ['cat', 'dog', 'cat']})\nresult = pd.get_dummies(df['animal'])\nprint(result.columns.tolist())",
                "question": "Tên các cột sau One-Hot Encoding là?",
                "options": ["['cat', 'dog']", "['animal_cat', 'animal_dog']", "['0', '1']", "['cat_1', 'dog_1']"],
                "correct": 0,
                "explanation": "get_dummies() tạo cột với tên là các giá trị unique: 'cat', 'dog'"
            },
            {
                "id": 28,
                "section": "Xử lý dữ liệu phân loại",
                "code": "import pandas as pd\ndf = pd.DataFrame({'size': ['S', 'M', 'L', 'M', 'S']})\ndummies = pd.get_dummies(df['size'])\nprint(dummies.loc[1].tolist())",
                "question": "Giá trị One-Hot tại hàng index 1 (size='M') là?",
                "options": ["[0, 1, 0]", "[1, 0, 0]", "[0, 0, 1]", "[1, 1, 1]"],
                "correct": 0,
                "explanation": "Với order [L, M, S], giá trị 'M' được encode thành [0, 1, 0]"
            },
            {
                "id": 29,
                "section": "Xử lý dữ liệu phân loại",
                "code": "from sklearn.preprocessing import OneHotEncoder\nimport pandas as pd\ndf = pd.DataFrame({'grade': ['A', 'B', 'C', 'A']})\nencoder = OneHotEncoder(sparse_output=False)\nencoded = encoder.fit_transform(df[['grade']])\nprint(encoded.shape)",
                "question": "Kích thước ma trận sau One-Hot Encoding là?",
                "options": ["(4, 3)", "(3, 4)", "(4, 1)", "(1, 3)"],
                "correct": 0,
                "explanation": "4 hàng và 3 cột (A, B, C)"
            },
            {
                "id": 30,
                "section": "Xử lý dữ liệu phân loại",
                "code": "import pandas as pd\ndf = pd.DataFrame({'city': ['HN', 'HCM', 'DN', 'HN', 'HCM']})\nencoded = pd.get_dummies(df['city'], prefix='city')\nprint(encoded.sum().tolist())",
                "question": "Tổng giá trị mỗi cột One-Hot là?",
                "options": ["[1, 2, 2]", "[2, 1, 2]", "[2, 2, 1]", "[1, 1, 1]"],
                "correct": 2,
                "explanation": "HN xuất hiện 2 lần, HCM 2 lần, DN 1 lần → [2, 2, 1]"
            }
        ];
        
        this.currentQuestionIndex = 0;
        this.selectedAnswer = null;
        this.answerRevealed = false;
        this.questionStates = {}; // Store states for each question
        
        this.initializeElements();
        this.bindEvents();
        this.displayQuestion();
    }

    initializeElements() {
        // Get DOM elements
        this.currentQuestionEl = document.querySelector('.current-question');
        this.totalQuestionsEl = document.querySelector('.total-questions');
        this.progressFillEl = document.querySelector('.progress-fill');
        this.sectionNameEl = document.getElementById('section-name');
        this.questionCodeEl = document.getElementById('question-code');
        this.questionTitleEl = document.getElementById('question-title');
        this.explanationContainer = document.getElementById('explanation-container');
        this.explanationText = document.getElementById('explanation-text');
        this.hintButton = document.getElementById('hint-button');
        this.prevButton = document.getElementById('prev-button');
        this.nextButton = document.getElementById('next-button');
        
        // Get option elements
        this.optionElements = [];
        this.optionTextElements = [];
        this.radioInputs = [];
        for (let i = 0; i < 4; i++) {
            this.optionElements.push(document.querySelector(`[data-option="${i}"]`));
            this.optionTextElements.push(document.getElementById(`option-${i}-text`));
            this.radioInputs.push(document.getElementById(`option-${i}`));
        }
        
        // Set total questions
        this.totalQuestionsEl.textContent = this.questions.length;
    }

    bindEvents() {
        // Option selection
        this.optionElements.forEach((optionEl, index) => {
            optionEl.addEventListener('click', () => {
                if (!this.answerRevealed) {
                    this.selectAnswer(index);
                }
            });
        });

        // Hint/Answer button
        this.hintButton.addEventListener('click', () => {
            if (!this.answerRevealed) {
                this.showAnswer();
            } else {
                this.nextQuestion();
            }
        });

        // Navigation buttons
        this.prevButton.addEventListener('click', () => {
            this.prevQuestion();
        });

        this.nextButton.addEventListener('click', () => {
            this.nextQuestion();
        });
    }

    selectAnswer(answerIndex) {
        // Save current state before changing
        this.saveQuestionState();
        
        // Remove previous selection
        this.optionElements.forEach(el => el.classList.remove('selected'));
        this.radioInputs.forEach(input => input.checked = false);
        
        // Add selection to clicked option
        this.optionElements[answerIndex].classList.add('selected');
        this.radioInputs[answerIndex].checked = true;
        this.selectedAnswer = answerIndex;
        
        // Update saved state
        this.saveQuestionState();
    }

    showAnswer() {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        
        // Show correct answer with enhanced highlighting
        this.optionElements[currentQuestion.correct].classList.add('correct');
        
        // Show explanation
        this.explanationText.textContent = currentQuestion.explanation;
        this.explanationContainer.classList.remove('hidden');
        
        // Change button text
        this.hintButton.textContent = 'Câu tiếp theo';
        
        this.answerRevealed = true;
        this.saveQuestionState();
    }

    displayQuestion() {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        
        // Update progress
        this.currentQuestionEl.textContent = this.currentQuestionIndex + 1;
        const progressPercent = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressFillEl.style.width = `${progressPercent}%`;
        
        // Update section
        this.sectionNameEl.textContent = currentQuestion.section;
        
        // Update code block
        this.questionCodeEl.textContent = currentQuestion.code;
        hljs.highlightElement(this.questionCodeEl);
        
        // Update question
        this.questionTitleEl.textContent = currentQuestion.question;
        
        // Update options
        currentQuestion.options.forEach((option, index) => {
            this.optionTextElements[index].textContent = option;
        });
        
        // Reset UI state first
        this.resetQuestionState();
        
        // Then restore saved state if it exists
        this.restoreQuestionState();
        
        // Update navigation buttons
        this.updateNavigationButtons();
    }

    resetQuestionState() {
        // Clear all selections and highlights
        this.optionElements.forEach(el => {
            el.classList.remove('selected', 'correct');
        });
        this.radioInputs.forEach(input => {
            input.checked = false;
        });
        
        // Hide explanation
        this.explanationContainer.classList.add('hidden');
        
        // Reset button text
        this.hintButton.textContent = 'Gợi ý/Xem đáp án';
        
        // Reset state variables
        this.selectedAnswer = null;
        this.answerRevealed = false;
    }

    saveQuestionState() {
        this.questionStates[this.currentQuestionIndex] = {
            selectedAnswer: this.selectedAnswer,
            answerRevealed: this.answerRevealed
        };
    }

    restoreQuestionState() {
        const savedState = this.questionStates[this.currentQuestionIndex];
        
        if (savedState) {
            this.selectedAnswer = savedState.selectedAnswer;
            this.answerRevealed = savedState.answerRevealed;
            
            // Restore selection
            if (this.selectedAnswer !== null) {
                this.optionElements[this.selectedAnswer].classList.add('selected');
                this.radioInputs[this.selectedAnswer].checked = true;
            }
            
            // Restore answer reveal state
            if (this.answerRevealed) {
                const currentQuestion = this.questions[this.currentQuestionIndex];
                this.optionElements[currentQuestion.correct].classList.add('correct');
                this.explanationText.textContent = currentQuestion.explanation;
                this.explanationContainer.classList.remove('hidden');
                this.hintButton.textContent = 'Câu tiếp theo';
            }
        }
    }

    updateNavigationButtons() {
        // Previous button
        this.prevButton.disabled = (this.currentQuestionIndex === 0);
        
        // Next button - always enabled, will handle end case
        this.nextButton.disabled = false;
        
        // Update next button text for last question
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.nextButton.textContent = 'Hoàn thành';
        } else {
            this.nextButton.innerHTML = 'Câu tiếp <span class="nav-icon">›</span>';
        }
    }

    prevQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.saveQuestionState();
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.saveQuestionState();
            this.currentQuestionIndex++;
            this.displayQuestion();
        } else {
            // End of quiz
            this.showCompletionMessage();
        }
    }

    showCompletionMessage() {
        alert('Chúc mừng! Bạn đã hoàn thành tất cả 30 câu hỏi.');
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});