// Quiz Application JavaScript

class PythonQuiz {
    constructor() {
        this.quizData = [
            {
                "question_number": 1,
                "section": "1. Các kiểu dữ liệu cơ bản trong Python",
                "code": "type(\"Hello\")",
                "options": {
                    "A": "<class 'string'>",
                    "B": "<class 'str'>",
                    "C": "<class 'text'>",
                    "D": "<class 'char'>"
                },
                "correct_answer": "B",
                "explanation": "Chuỗi ký tự trong Python thuộc kiểu str."
            },
            {
                "question_number": 2,
                "section": "1. Các kiểu dữ liệu cơ bản trong Python",
                "code": "type([1, 2, 3])",
                "options": {
                    "A": "<class 'tuple'>",
                    "B": "<class 'list'>",
                    "C": "<class 'set'>",
                    "D": "<class 'dict'>"
                },
                "correct_answer": "B",
                "explanation": "Dấu [] tạo một danh sách (list)."
            },
            {
                "question_number": 3,
                "section": "1. Các kiểu dữ liệu cơ bản trong Python",
                "code": "type({\"name\": \"Python\", \"year\": 1991})",
                "options": {
                    "A": "<class 'dict'>",
                    "B": "<class 'tuple'>",
                    "C": "<class 'set'>",
                    "D": "<class 'list'>"
                },
                "correct_answer": "A",
                "explanation": "{key: value} tạo dictionary."
            },
            {
                "question_number": 4,
                "section": "2. Dữ liệu kiểu số & Toán tử số học",
                "code": "3 + 5",
                "options": {
                    "A": "8",
                    "B": "35",
                    "C": "15",
                    "D": "2"
                },
                "correct_answer": "A",
                "explanation": "Phép cộng đơn giản: 3 + 5 = 8"
            },
            {
                "question_number": 5,
                "section": "2. Dữ liệu kiểu số & Toán tử số học",
                "code": "7 // 2",
                "options": {
                    "A": "3",
                    "B": "3.5",
                    "C": "4",
                    "D": "2"
                },
                "correct_answer": "A",
                "explanation": "// chia lấy phần nguyên."
            },
            {
                "question_number": 6,
                "section": "2. Dữ liệu kiểu số & Toán tử số học",
                "code": "2 ** 3",
                "options": {
                    "A": "5",
                    "B": "6",
                    "C": "8",
                    "D": "9"
                },
                "correct_answer": "C",
                "explanation": "** là lũy thừa. 2^3 = 8"
            },
            {
                "question_number": 7,
                "section": "2. Dữ liệu kiểu số & Toán tử số học",
                "code": "type(3 / 2)",
                "options": {
                    "A": "<class 'int'>",
                    "B": "<class 'float'>",
                    "C": "<class 'complex'>",
                    "D": "<class 'str'>"
                },
                "correct_answer": "B",
                "explanation": "/ luôn trả về float."
            },
            {
                "question_number": 8,
                "section": "3. Các kiểu biến (số, chuỗi ký tự, logical)",
                "code": "type(True)",
                "options": {
                    "A": "<class 'bool'>",
                    "B": "<class 'int'>",
                    "C": "<class 'str'>",
                    "D": "<class 'logical'>"
                },
                "correct_answer": "A",
                "explanation": "True thuộc kiểu boolean (bool)."
            },
            {
                "question_number": 9,
                "section": "3. Các kiểu biến (số, chuỗi ký tự, logical)",
                "code": "\"Python\" == \"python\"",
                "options": {
                    "A": "True",
                    "B": "False",
                    "C": "\"True\"",
                    "D": "Lỗi"
                },
                "correct_answer": "B",
                "explanation": "So sánh chuỗi phân biệt hoa/thường."
            },
            {
                "question_number": 10,
                "section": "4. Chuyển đổi kiểu dữ liệu",
                "code": "int(\"5\") + 2",
                "options": {
                    "A": "7",
                    "B": "\"52\"",
                    "C": "25",
                    "D": "Lỗi"
                },
                "correct_answer": "A",
                "explanation": "int(\"5\") chuyển chuỗi \"5\" thành số 5, sau đó 5 + 2 = 7"
            },
            {
                "question_number": 11,
                "section": "4. Chuyển đổi kiểu dữ liệu",
                "code": "str(3.14)",
                "options": {
                    "A": "3.14 (float)",
                    "B": "\"3.14\" (string)",
                    "C": "<class 'str'>",
                    "D": "Lỗi"
                },
                "correct_answer": "B",
                "explanation": "str() chuyển số thành chuỗi."
            },
            {
                "question_number": 12,
                "section": "5. Cấu trúc dữ liệu tuần tự",
                "code": "[10, 20, 30][0]",
                "options": {
                    "A": "10",
                    "B": "20",
                    "C": "30",
                    "D": "Lỗi"
                },
                "correct_answer": "A",
                "explanation": "Chỉ số 0 truy cập phần tử đầu tiên của list."
            },
            {
                "question_number": 13,
                "section": "5. Cấu trúc dữ liệu tuần tự",
                "code": "(1, 2, 3)[-1]",
                "options": {
                    "A": "1",
                    "B": "2",
                    "C": "3",
                    "D": "Lỗi"
                },
                "correct_answer": "C",
                "explanation": "Chỉ số -1 truy cập phần tử cuối cùng."
            },
            {
                "question_number": 14,
                "section": "5. Cấu trúc dữ liệu tuần tự",
                "code": "{1, 2, 2, 3}",
                "options": {
                    "A": "{1, 2, 3}",
                    "B": "{1, 2, 2, 3}",
                    "C": "[1, 2, 3]",
                    "D": "(1, 2, 3)"
                },
                "correct_answer": "A",
                "explanation": "Set loại bỏ trùng lặp."
            },
            {
                "question_number": 15,
                "section": "6. Truy cập phần tử (Indexing & Slicing)",
                "code": "my_list = [10, 20, 30, 40]\nmy_list[0]",
                "options": {
                    "A": "10",
                    "B": "20",
                    "C": "40",
                    "D": "Lỗi"
                },
                "correct_answer": "A",
                "explanation": "Chỉ số 0 lấy phần tử đầu tiên."
            },
            {
                "question_number": 16,
                "section": "6. Truy cập phần tử (Indexing & Slicing)",
                "code": "nums = (5, 6, 7, 8)\nnums[-1]",
                "options": {
                    "A": "5",
                    "B": "8",
                    "C": "7",
                    "D": "Lỗi"
                },
                "correct_answer": "B",
                "explanation": "Chỉ số -1 lấy phần tử cuối cùng."
            },
            {
                "question_number": 17,
                "section": "6. Truy cập phần tử (Indexing & Slicing)",
                "code": "text = \"Python\"\ntext[2]",
                "options": {
                    "A": "'n'",
                    "B": "'t'",
                    "C": "'y'",
                    "D": "'o'"
                },
                "correct_answer": "B",
                "explanation": "Chỉ số 2 lấy ký tự thứ 3 (đếm từ 0): 't'"
            },
            {
                "question_number": 18,
                "section": "6. Truy cập phần tử (Indexing & Slicing)",
                "code": "my_list = ['a', 'b', 'c', 'd', 'e']\nmy_list[1:4]",
                "options": {
                    "A": "['b', 'c', 'd', 'e']",
                    "B": "['b', 'c', 'd']",
                    "C": "['a', 'b', 'c']",
                    "D": "['c', 'd', 'e']"
                },
                "correct_answer": "B",
                "explanation": "Slicing [1:4] lấy từ chỉ số 1 đến 3 (không bao gồm 4)."
            },
            {
                "question_number": 19,
                "section": "6. Truy cập phần tử (Indexing & Slicing)",
                "code": "numbers = [0, 1, 2, 3, 4, 5]\nnumbers[:3]",
                "options": {
                    "A": "[0, 1, 2]",
                    "B": "[1, 2, 3]",
                    "C": "[0, 1, 2, 3]",
                    "D": "Lỗi"
                },
                "correct_answer": "A",
                "explanation": "[:3] lấy từ đầu đến chỉ số 2."
            },
            {
                "question_number": 20,
                "section": "6. Truy cập phần tử (Indexing & Slicing)",
                "code": "numbers = [0, 1, 2, 3, 4, 5]\nnumbers[3:]",
                "options": {
                    "A": "[3, 4, 5]",
                    "B": "[2, 3, 4, 5]",
                    "C": "[3, 4]",
                    "D": "Lỗi"
                },
                "correct_answer": "A",
                "explanation": "[3:] lấy từ chỉ số 3 đến hết."
            },
            {
                "question_number": 21,
                "section": "6. Truy cập phần tử (Indexing & Slicing)",
                "code": "letters = ['a', 'b', 'c', 'd', 'e']\nletters[::2]",
                "options": {
                    "A": "['a', 'b', 'c']",
                    "B": "['a', 'c', 'e']",
                    "C": "['b', 'd']",
                    "D": "Lỗi"
                },
                "correct_answer": "B",
                "explanation": "[::2] lấy các phần tử với bước nhảy 2."
            },
            {
                "question_number": 22,
                "section": "6. Truy cập phần tử (Indexing & Slicing)",
                "code": "word = \"Python\"\nword[::-1]",
                "options": {
                    "A": "\"nohtyP\"",
                    "B": "\"Python\"",
                    "C": "\"Pyth\"",
                    "D": "Lỗi"
                },
                "correct_answer": "A",
                "explanation": "[::-1] đảo ngược chuỗi."
            },
            {
                "question_number": 23,
                "section": "7. Tính bất biến (List vs Tuple)",
                "code": "my_list = [1, 2, 3]\nmy_list[0] = 10\nprint(my_list)",
                "options": {
                    "A": "[1, 2, 3]",
                    "B": "[10, 2, 3]",
                    "C": "(10, 2, 3)",
                    "D": "Lỗi"
                },
                "correct_answer": "B",
                "explanation": "List là mutable, có thể thay đổi phần tử."
            },
            {
                "question_number": 24,
                "section": "7. Tính bất biến (List vs Tuple)",
                "code": "my_tuple = (1, 2, 3)\nmy_tuple[0] = 10",
                "options": {
                    "A": "(10, 2, 3)",
                    "B": "(1, 2, 3)",
                    "C": "Lỗi",
                    "D": "None"
                },
                "correct_answer": "C",
                "explanation": "Tuple là immutable, không thể thay đổi phần tử."
            },
            {
                "question_number": 25,
                "section": "7. Tính bất biến (List vs Tuple)",
                "code": "my_list = [1, 2, 3]\nprint(id(my_list))\nmy_list.append(4)\nprint(id(my_list))",
                "options": {
                    "A": "Khác nhau",
                    "B": "Giống nhau",
                    "C": "Lỗi",
                    "D": "Không in gì"
                },
                "correct_answer": "B",
                "explanation": "List thay đổi tại chỗ, địa chỉ bộ nhớ không đổi."
            },
            {
                "question_number": 26,
                "section": "7. Tính bất biến (List vs Tuple)",
                "code": "my_tuple = (1, 2, 3)\nprint(id(my_tuple))\nmy_tuple += (4,)\nprint(id(my_tuple))",
                "options": {
                    "A": "Giống nhau",
                    "B": "Khác nhau",
                    "C": "Lỗi",
                    "D": "Không in gì"
                },
                "correct_answer": "B",
                "explanation": "Tuple tạo đối tượng mới khi nối, địa chỉ bộ nhớ khác."
            },
            {
                "question_number": 27,
                "section": "7. Tính bất biến (List vs Tuple)",
                "code": "my_list = [1, 2, [3, 4]]\nmy_list[2][0] = 10\nprint(my_list)",
                "options": {
                    "A": "[1, 2, [10, 4]]",
                    "B": "[1, 2, [3, 4]]",
                    "C": "Lỗi",
                    "D": "[10, 2, [3, 4]]"
                },
                "correct_answer": "A",
                "explanation": "List lồng nhau vẫn có thể thay đổi."
            },
            {
                "question_number": 28,
                "section": "7. Tính bất biến (List vs Tuple)",
                "code": "my_tuple = (1, 2, [3, 4])\nmy_tuple[2][0] = 10\nprint(my_tuple)",
                "options": {
                    "A": "(1, 2, [10, 4])",
                    "B": "(1, 2, [3, 4])",
                    "C": "Lỗi",
                    "D": "(10, 2, [3, 4])"
                },
                "correct_answer": "A",
                "explanation": "Tuple bất biến về tham chiếu, nhưng list bên trong vẫn có thể thay đổi."
            },
            {
                "question_number": 29,
                "section": "8. Phương thức chuỗi, từ điển & Cấu trúc điều kiện",
                "code": "\"Hello\".lower()",
                "options": {
                    "A": "\"hello\"",
                    "B": "\"HELLO\"",
                    "C": "\"Hello\"",
                    "D": "Lỗi"
                },
                "correct_answer": "A",
                "explanation": ".lower() chuyển tất cả ký tự thành chữ thường."
            },
            {
                "question_number": 30,
                "section": "8. Phương thức chuỗi, từ điển & Cấu trúc điều kiện",
                "code": "len({\"a\": 1, \"b\": 2})",
                "options": {
                    "A": "2",
                    "B": "1",
                    "C": "\"a\"",
                    "D": "{\"a\": 1, \"b\": 2}"
                },
                "correct_answer": "A",
                "explanation": "len() đếm số cặp key-value trong dictionary."
            },
            {
                "question_number": 31,
                "section": "8. Phương thức chuỗi, từ điển & Cấu trúc điều kiện",
                "code": "x = 5\nif x > 3:\n    print(\"Yes\")",
                "options": {
                    "A": "\"Yes\"",
                    "B": "Không in gì",
                    "C": "Lỗi",
                    "D": "True"
                },
                "correct_answer": "A",
                "explanation": "Điều kiện x > 3 đúng nên in \"Yes\"."
            },
            {
                "question_number": 32,
                "section": "9. Viết vòng lặp",
                "code": "for i in range(3):\n    print(i)",
                "options": {
                    "A": "1 2 3",
                    "B": "0 1 2",
                    "C": "0 1 2 3",
                    "D": "Lỗi"
                },
                "correct_answer": "B",
                "explanation": "range(3) tạo dãy số từ 0 đến 2."
            },
            {
                "question_number": 33,
                "section": "9. Viết vòng lặp",
                "code": "while 0 < 3:\n    print(\"Hi\")\n    break",
                "options": {
                    "A": "\"Hi\" vô hạn",
                    "B": "\"Hi\" một lần",
                    "C": "Không in gì",
                    "D": "Lỗi"
                },
                "correct_answer": "B",
                "explanation": "break khiến vòng lặp dừng sau lần đầu."
            },
            {
                "question_number": 34,
                "section": "10. Viết hàm",
                "code": "def add(a, b):\n    return a + b\nprint(add(2, 3))",
                "options": {
                    "A": "5",
                    "B": "23",
                    "C": "Lỗi",
                    "D": "a+b"
                },
                "correct_answer": "A",
                "explanation": "Hàm add cộng hai số: 2 + 3 = 5."
            },
            {
                "question_number": 35,
                "section": "10. Viết hàm",
                "code": "square = lambda x: x**2\nprint(square(4))",
                "options": {
                    "A": "8",
                    "B": "4",
                    "C": "16",
                    "D": "Lỗi"
                },
                "correct_answer": "C",
                "explanation": "Lambda function tính bình phương: 4^2 = 16."
            }
        ];

        this.currentQuestion = 0;
        this.selectedAnswer = null;
        this.answerRevealed = false;

        this.init();
    }

    init() {
        this.bindEventListeners();
        this.displayQuestion();
        
        // Initialize syntax highlighting
        if (typeof hljs !== 'undefined') {
            hljs.highlightAll();
        }
    }

    bindEventListeners() {
        // Option buttons
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectOption(e));
        });

        // Show answer button
        document.getElementById('show-answer-btn').addEventListener('click', () => {
            this.toggleAnswer();
        });

        // Navigation buttons
        document.getElementById('prev-btn').addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });
    }

    displayQuestion() {
        const question = this.quizData[this.currentQuestion];
        
        // Update question counter
        document.getElementById('current-question').textContent = this.currentQuestion + 1;
        
        // Update section title
        document.getElementById('section-title').textContent = question.section;
        
        // Update code display
        const codeElement = document.getElementById('code-display');
        codeElement.textContent = question.code;
        
        // Re-highlight syntax
        if (typeof hljs !== 'undefined') {
            hljs.highlightElement(codeElement);
        }
        
        // Update options
        Object.keys(question.options).forEach(key => {
            const optionBtn = document.getElementById(`option-${key}`);
            const optionText = optionBtn.querySelector('.option-text');
            optionText.textContent = question.options[key];
        });
        
        // Update explanation
        document.getElementById('explanation-text').textContent = question.explanation;
        
        // Update progress bar
        this.updateProgressBar();
        
        // Update navigation buttons
        this.updateNavigationButtons();
        
        // Reset state
        this.resetQuestionState();
    }

    selectOption(event) {
        if (this.answerRevealed) return;
        
        // Remove previous selection
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Add selection to clicked button
        const selectedBtn = event.currentTarget;
        selectedBtn.classList.add('selected');
        
        this.selectedAnswer = selectedBtn.dataset.option;
    }

    toggleAnswer() {
        if (this.answerRevealed) {
            this.hideAnswer();
        } else {
            this.showAnswer();
        }
    }

    showAnswer() {
        const question = this.quizData[this.currentQuestion];
        const correctAnswer = question.correct_answer;
        
        // Show correct answer in green
        const correctBtn = document.getElementById(`option-${correctAnswer}`);
        correctBtn.classList.add('correct');
        
        // Show incorrect answer in red if user selected wrong
        if (this.selectedAnswer && this.selectedAnswer !== correctAnswer) {
            const incorrectBtn = document.getElementById(`option-${this.selectedAnswer}`);
            incorrectBtn.classList.add('incorrect');
        }
        
        // Show explanation
        document.getElementById('explanation-container').classList.remove('hidden');
        
        // Update button text
        document.getElementById('show-answer-btn').textContent = 'Ẩn đáp án';
        
        this.answerRevealed = true;
    }

    hideAnswer() {
        // Remove answer styling
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('correct', 'incorrect');
        });
        
        // Hide explanation
        document.getElementById('explanation-container').classList.add('hidden');
        
        // Update button text
        document.getElementById('show-answer-btn').textContent = 'Hiển thị đáp án';
        
        this.answerRevealed = false;
    }

    resetQuestionState() {
        // Remove all option styling
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected', 'correct', 'incorrect');
        });
        
        // Hide explanation
        document.getElementById('explanation-container').classList.add('hidden');
        
        // Reset button text
        document.getElementById('show-answer-btn').textContent = 'Hiển thị đáp án';
        
        // Reset state
        this.selectedAnswer = null;
        this.answerRevealed = false;
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.quizData.length - 1) {
            this.currentQuestion++;
            this.displayQuestion();
        }
    }

    updateProgressBar() {
        const progress = ((this.currentQuestion + 1) / this.quizData.length) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        // Previous button
        if (this.currentQuestion === 0) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }
        
        // Next button
        if (this.currentQuestion === this.quizData.length - 1) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
    }
}

// Initialize the quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PythonQuiz();
});