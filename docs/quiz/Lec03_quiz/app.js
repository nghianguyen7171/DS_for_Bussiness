// Quiz data
const questions = [
  {
    "question": "import numpy as np\narr = np.array([1, 2, 3, 4, 5])\nprint(arr.dtype)",
    "options": ["A. int32", "B. int64", "C. float64", "D. object"],
    "correct": 1,
    "hint": "NumPy tự động chọn dtype phù hợp với hệ thống",
    "explanation": "Trên hệ thống 64-bit, NumPy mặc định sử dụng int64 cho mảng số nguyên."
  },
  {
    "question": "import numpy as np\nprint(np.zeros((2, 3)))",
    "options": ["A. [[0 0 0]\n [0 0 0]]", "B. [[0. 0. 0.]\n [0. 0. 0.]]", "C. [0 0 0 0 0 0]", "D. Error"],
    "correct": 1,
    "hint": "np.zeros tạo mảng với kiểu dữ liệu float64 mặc định",
    "explanation": "np.zeros((2,3)) tạo mảng 2x3 chứa các số 0.0 (float64)."
  },
  {
    "question": "import numpy as np\narr = np.arange(10)\nprint(arr[2:5])",
    "options": ["A. [2 3 4]", "B. [2 3 4 5]", "C. [1 2 3 4]", "D. [3 4 5]"],
    "correct": 0,
    "hint": "Slicing trong Python không bao gồm index cuối",
    "explanation": "arr[2:5] lấy phần tử từ index 2 đến 4 (không bao gồm 5)."
  },
  {
    "question": "import numpy as np\narr = np.array([1, 2, 3])\nprint(arr * 2)",
    "options": ["A. [1 2 3 1 2 3]", "B. [2 4 6]", "C. [3 4 5]", "D. Error"],
    "correct": 1,
    "hint": "Phép toán với scalar được áp dụng cho mọi phần tử",
    "explanation": "Vectorization: nhân scalar 2 với mọi phần tử trong mảng."
  },
  {
    "question": "import numpy as np\narr = np.array([1.7, -2.3, 3.9])\nprint(arr.astype(int))",
    "options": ["A. [2 -2 4]", "B. [1 -2 3]", "C. [1.0 -2.0 3.0]", "D. Error"],
    "correct": 1,
    "hint": "astype(int) cắt bỏ phần thập phân",
    "explanation": "Chuyển đổi sang int sẽ cắt bỏ phần thập phân, không làm tròn."
  },
  {
    "question": "import numpy as np\narr = np.array([[1, 2], [3, 4]])\nprint(arr.shape)",
    "options": ["A. (4,)", "B. (2, 2)", "C. [2, 2]", "D. (1, 4)"],
    "correct": 1,
    "hint": "shape trả về tuple biểu thị kích thước các chiều",
    "explanation": "Mảng 2x2 có shape là (2, 2)."
  },
  {
    "question": "import numpy as np\narr = np.array([1, 2, 3, 4, 5])\nprint(arr[arr > 3])",
    "options": ["A. [4 5]", "B. [True True]", "C. [3 4 5]", "D. [False False False True True]"],
    "correct": 0,
    "hint": "Boolean indexing trả về các phần tử thỏa mãn điều kiện",
    "explanation": "arr > 3 tạo boolean mask, arr[mask] trả về phần tử có giá trị True."
  },
  {
    "question": "import numpy as np\narr = np.array([[1, 2, 3], [4, 5, 6]])\nprint(arr[0, 2])",
    "options": ["A. 3", "B. [1 2 3]", "C. 6", "D. [3 6]"],
    "correct": 0,
    "hint": "Indexing 2D: [hàng, cột]",
    "explanation": "arr[0, 2] lấy phần tử ở hàng 0, cột 2 là số 3."
  },
  {
    "question": "import numpy as np\narr = np.array([[1, 2], [3, 4]])\nprint(arr.T)",
    "options": ["A. [[1 2]\n [3 4]]", "B. [[1 3]\n [2 4]]", "C. [[4 3]\n [2 1]]", "D. [[2 1]\n [4 3]]"],
    "correct": 1,
    "hint": "Transpose hoán đổi hàng và cột",
    "explanation": "Ma trận chuyển vị: hàng thành cột và cột thành hàng."
  },
  {
    "question": "import numpy as np\nprint(np.sqrt(np.array([4, 9, 16])))",
    "options": ["A. [2 3 4]", "B. [2. 3. 4.]", "C. [16 81 256]", "D. Error"],
    "correct": 1,
    "hint": "Universal function áp dụng cho mọi phần tử",
    "explanation": "np.sqrt tính căn bậc hai của mọi phần tử, kết quả là float."
  },
  {
    "question": "import numpy as np\narr = np.array([1, 2, 3, 4, 5])\nprint(arr.sum())",
    "options": ["A. 15", "B. 15.0", "C. [1 2 3 4 5]", "D. 5"],
    "correct": 0,
    "hint": "sum() tính tổng tất cả phần tử trong mảng",
    "explanation": "1 + 2 + 3 + 4 + 5 = 15."
  },
  {
    "question": "import numpy as np\narr = np.array([[1, 2], [3, 4]])\nprint(arr.sum(axis=0))",
    "options": ["A. [4 6]", "B. [3 7]", "C. 10", "D. [[1 2] [3 4]]"],
    "correct": 0,
    "hint": "axis=0 tính tổng theo cột",
    "explanation": "Tổng cột 1: 1+3=4, tổng cột 2: 2+4=6."
  },
  {
    "question": "import numpy as np\narr = np.array([3, 1, 4, 1, 5])\nprint(np.sort(arr))",
    "options": ["A. [3 1 4 1 5]", "B. [1 1 3 4 5]", "C. [5 4 3 1 1]", "D. [1 3 4 1 5]"],
    "correct": 1,
    "hint": "np.sort sắp xếp tăng dần",
    "explanation": "Sắp xếp các phần tử theo thứ tự tăng dần."
  },
  {
    "question": "import numpy as np\nrng = np.random.default_rng(seed=42)\nprint(len(rng.standard_normal(5)))",
    "options": ["A. 1", "B. 5", "C. 42", "D. Error"],
    "correct": 1,
    "hint": "standard_normal(n) tạo n số ngẫu nhiên",
    "explanation": "Tạo mảng 5 phần tử từ phân phối chuẩn, len() trả về 5."
  },
  {
    "question": "import numpy as np\narr1 = np.array([1, 2, 3])\narr2 = np.array([4, 5, 6])\nprint(np.maximum(arr1, arr2))",
    "options": ["A. [4 5 6]", "B. [1 2 3]", "C. [5 7 9]", "D. [[1 2 3] [4 5 6]]"],
    "correct": 0,
    "hint": "np.maximum so sánh từng phần tử và lấy giá trị lớn hơn",
    "explanation": "So sánh từng cặp: max(1,4)=4, max(2,5)=5, max(3,6)=6."
  },
  {
    "question": "import pandas as pd\ns = pd.Series([1, 2, 3, 4])\nprint(s.index)",
    "options": ["A. [0 1 2 3]", "B. RangeIndex(start=0, stop=4, step=1)", "C. [1 2 3 4]", "D. Index([1, 2, 3, 4])"],
    "correct": 1,
    "hint": "Series tự tạo RangeIndex mặc định",
    "explanation": "Khi không chỉ định index, pandas tạo RangeIndex từ 0 đến n-1."
  },
  {
    "question": "import pandas as pd\ns = pd.Series([10, 20, 30], index=['a', 'b', 'c'])\nprint(s['b'])",
    "options": ["A. 10", "B. 20", "C. 30", "D. 1"],
    "correct": 1,
    "hint": "Truy cập Series bằng label index",
    "explanation": "s['b'] trả về giá trị tại index 'b' là 20."
  },
  {
    "question": "import pandas as pd\nimport numpy as np\ns = pd.Series([1, 2, np.nan, 4])\nprint(s.isna().sum())",
    "options": ["A. 0", "B. 1", "C. 3", "D. 4"],
    "correct": 1,
    "hint": "isna() tạo boolean mask, sum() đếm số True",
    "explanation": "Có 1 giá trị NaN trong Series, isna().sum() = 1."
  },
  {
    "question": "import pandas as pd\ndata = {'A': [1, 2, 3], 'B': [4, 5, 6]}\ndf = pd.DataFrame(data)\nprint(df.shape)",
    "options": ["A. (3, 2)", "B. (2, 3)", "C. (6,)", "D. [3, 2]"],
    "correct": 0,
    "hint": "shape của DataFrame là (số hàng, số cột)",
    "explanation": "DataFrame có 3 hàng và 2 cột, shape = (3, 2)."
  },
  {
    "question": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3]})\nprint(type(df['A']))",
    "options": ["A. <class 'list'>", "B. <class 'pandas.core.series.Series'>", "C. <class 'numpy.ndarray'>", "D. <class 'pandas.core.frame.DataFrame'>"],
    "correct": 1,
    "hint": "Một cột của DataFrame là một Series",
    "explanation": "df['A'] trả về một pandas Series."
  },
  {
    "question": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})\nprint(df.loc[0])",
    "options": ["A. 1", "B. A    1\nB    3\nName: 0, dtype: int64", "C. [1 3]", "D. A    1"],
    "correct": 1,
    "hint": "loc[0] trả về hàng đầu tiên dưới dạng Series",
    "explanation": "df.loc[0] trả về hàng có index 0 dưới dạng Series."
  },
  {
    "question": "import numpy as np\narr = np.array([1, 2, 3, 4, 5])\nprint(np.where(arr > 3, arr, 0))",
    "options": ["A. [0 0 0 4 5]", "B. [1 2 3 4 5]", "C. [4 5]", "D. [True True True False False]"],
    "correct": 0,
    "hint": "np.where(condition, x, y): nếu True thì x, nếu False thì y",
    "explanation": "Với điều kiện arr > 3: giữ nguyên nếu True (4,5), thay bằng 0 nếu False (1,2,3)."
  },
  {
    "question": "import numpy as np\narr = np.array([[1, 2, 3], [4, 5, 6]])\nprint(arr.mean(axis=1))",
    "options": ["A. [2. 5.]", "B. [2.5 3.5]", "C. [2.5 5.5]", "D. 3.5"],
    "correct": 0,
    "hint": "axis=1 tính trung bình theo hàng",
    "explanation": "Hàng 1: (1+2+3)/3 = 2.0, Hàng 2: (4+5+6)/3 = 5.0."
  },
  {
    "question": "import numpy as np\narr = np.array([5, 2, 8, 1, 9])\nprint(arr.argmax())",
    "options": ["A. 9", "B. 4", "C. 8", "D. 3"],
    "correct": 1,
    "hint": "argmax() trả về index của giá trị lớn nhất",
    "explanation": "Giá trị lớn nhất là 9 ở vị trí index 4."
  },
  {
    "question": "import numpy as np\narr = np.array([1, 2, 2, 3, 3, 3])\nprint(np.unique(arr))",
    "options": ["A. [1 2 3]", "B. [1 2 2 3 3 3]", "C. 3", "D. [3 2 1]"],
    "correct": 0,
    "hint": "unique() trả về các giá trị duy nhất đã sắp xếp",
    "explanation": "Các giá trị duy nhất trong mảng là [1, 2, 3]."
  },
  {
    "question": "import pandas as pd\ns1 = pd.Series([1, 2, 3])\ns2 = pd.Series([4, 5, 6])\nprint(s1 + s2)",
    "options": ["A. 0    5\n1    7\n2    9\ndtype: int64", "B. [5 7 9]", "C. [1 2 3 4 5 6]", "D. Error"],
    "correct": 0,
    "hint": "Phép cộng Series theo từng phần tử",
    "explanation": "Cộng từng cặp phần tử: 1+4=5, 2+5=7, 3+6=9."
  },
  {
    "question": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3], 'B': [4, 5, 6]})\nprint(len(df.columns))",
    "options": ["A. 3", "B. 2", "C. 6", "D. 1"],
    "correct": 1,
    "hint": "columns trả về danh sách tên cột",
    "explanation": "DataFrame có 2 cột 'A' và 'B', len(df.columns) = 2."
  },
  {
    "question": "import numpy as np\nX = np.array([[1, 2], [3, 4]])\nY = np.array([[5, 6], [7, 8]])\nprint(np.dot(X, Y))",
    "options": ["A. [[19 22]\n [43 50]]", "B. [[5 12]\n [21 32]]", "C. [[6 8]\n [10 12]]", "D. Error"],
    "correct": 0,
    "hint": "np.dot thực hiện phép nhân ma trận",
    "explanation": "Nhân ma trận: [1*5+2*7, 1*6+2*8] = [19, 22]; [3*5+4*7, 3*6+4*8] = [43, 50]."
  },
  {
    "question": "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3]})\ndf['B'] = df['A'] * 2\nprint(df)",
    "options": ["A.    A\n0  1\n1  2\n2  3", "B.    A  B\n0  1  2\n1  2  4\n2  3  6", "C.    B\n0  2\n1  4\n2  6", "D. Error"],
    "correct": 1,
    "hint": "Tạo cột mới bằng cách gán giá trị",
    "explanation": "Cột B được tạo bằng cách nhân cột A với 2."
  },
  {
    "question": "import numpy as np\narr = np.array([1.1, 2.7, 3.3, 4.9])\nprint(np.floor(arr))",
    "options": ["A. [1. 2. 3. 4.]", "B. [1 3 3 5]", "C. [1.0 2.0 3.0 4.0]", "D. [2. 3. 4. 5.]"],
    "correct": 0,
    "hint": "np.floor() làm tròn xuống số nguyên gần nhất",
    "explanation": "floor(1.1)=1.0, floor(2.7)=2.0, floor(3.3)=3.0, floor(4.9)=4.0."
  }
];

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let hasAnswered = false;
let userAnswers = [];

// DOM elements
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const currentScoreEl = document.getElementById('current-score');
const progressFillEl = document.getElementById('progress-fill');
const questionCodeEl = document.getElementById('question-code');
const optionBtns = [
  document.getElementById('option-0'),
  document.getElementById('option-1'),
  document.getElementById('option-2'),
  document.getElementById('option-3')
];
const hintBtn = document.getElementById('hint-btn');
const answerBtn = document.getElementById('answer-btn');
const nextBtn = document.getElementById('next-btn');
const hintDisplay = document.getElementById('hint-display');
const answerDisplay = document.getElementById('answer-display');
const hintText = document.getElementById('hint-text');
const explanationText = document.getElementById('explanation-text');
const questionSlide = document.getElementById('question-slide');
const resultsScreen = document.getElementById('results-screen');
const finalScoreEl = document.getElementById('final-score');
const correctCountEl = document.getElementById('correct-count');
const accuracyPercentEl = document.getElementById('accuracy-percent');
const restartBtn = document.getElementById('restart-btn');

// Initialize quiz
function initQuiz() {
  totalQuestionsEl.textContent = questions.length;
  resetQuizState();
  loadQuestion();
  updateProgress();
  updateScore();
}

// Reset quiz state completely
function resetQuizState() {
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = null;
  hasAnswered = false;
  userAnswers = [];
}

// Load current question
function loadQuestion() {
  const question = questions[currentQuestionIndex];
  
  // Update question counter
  currentQuestionEl.textContent = currentQuestionIndex + 1;
  
  // Display question code
  questionCodeEl.textContent = question.question;
  
  // Reset and display options
  question.options.forEach((option, index) => {
    const optionBtn = optionBtns[index];
    const optionText = optionBtn.querySelector('.option-text');
    optionText.textContent = option.substring(3); // Remove "A. ", "B. ", etc.
    
    // Completely reset button state
    optionBtn.classList.remove('selected', 'correct', 'incorrect');
    optionBtn.disabled = false;
    optionBtn.style.borderColor = '';
    optionBtn.style.backgroundColor = '';
  });
  
  // Reset interaction state
  selectedAnswer = null;
  hasAnswered = false;
  
  // Reset UI elements
  hintDisplay.classList.add('hidden');
  answerDisplay.classList.add('hidden');
  answerBtn.disabled = true;
  nextBtn.disabled = true;
  
  // Update hint and explanation text
  hintText.textContent = question.hint;
  explanationText.textContent = question.explanation;
  
  // Force a small delay to ensure DOM updates are complete
  setTimeout(() => {
    console.log(`Loaded question ${currentQuestionIndex + 1}`);
  }, 10);
}

// Handle option selection
function selectOption(optionIndex) {
  if (hasAnswered) return;
  
  console.log(`Selected option ${optionIndex}`);
  
  // Clear all previous selections
  optionBtns.forEach(btn => {
    btn.classList.remove('selected');
  });
  
  // Mark current selection
  optionBtns[optionIndex].classList.add('selected');
  selectedAnswer = optionIndex;
  
  // Enable answer button
  answerBtn.disabled = false;
}

// Show hint
function showHint() {
  hintDisplay.classList.remove('hidden');
  // Scroll hint into view
  hintDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Show answer and explanation
function showAnswer() {
  if (selectedAnswer === null) return;
  
  console.log(`Showing answer for question ${currentQuestionIndex + 1}`);
  
  hasAnswered = true;
  const question = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === question.correct;
  
  // Record answer
  userAnswers.push({
    questionIndex: currentQuestionIndex,
    selectedAnswer: selectedAnswer,
    correct: isCorrect
  });
  
  // Update score
  if (isCorrect) {
    score++;
    updateScore();
  }
  
  // Mark correct/incorrect answers with visual feedback
  optionBtns.forEach((btn, index) => {
    btn.disabled = true;
    if (index === question.correct) {
      btn.classList.add('correct');
    } else if (index === selectedAnswer && !isCorrect) {
      btn.classList.add('incorrect');
    }
  });
  
  // Show explanation
  answerDisplay.classList.remove('hidden');
  answerDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  // Enable next button
  nextBtn.disabled = false;
}

// Go to next question
function nextQuestion() {
  console.log(`Moving from question ${currentQuestionIndex + 1} to ${currentQuestionIndex + 2}`);
  
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
    updateProgress();
  } else {
    showResults();
  }
}

// Update progress bar
function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressFillEl.style.width = progress + '%';
  console.log(`Progress updated: ${progress.toFixed(1)}%`);
}

// Update score display
function updateScore() {
  currentScoreEl.textContent = score;
}

// Show final results
function showResults() {
  questionSlide.classList.add('hidden');
  resultsScreen.classList.remove('hidden');
  
  const correctAnswers = userAnswers.filter(answer => answer.correct).length;
  const accuracy = Math.round((correctAnswers / questions.length) * 100);
  
  finalScoreEl.textContent = score;
  correctCountEl.textContent = correctAnswers;
  accuracyPercentEl.textContent = accuracy + '%';
}

// Restart quiz
function restartQuiz() {
  console.log('Restarting quiz');
  
  // Hide results screen
  resultsScreen.classList.add('hidden');
  questionSlide.classList.remove('hidden');
  
  // Reset all state
  resetQuizState();
  
  // Reload first question
  loadQuestion();
  updateProgress();
  updateScore();
}

// Event listeners
optionBtns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    selectOption(index);
  });
});

hintBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showHint();
});

answerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showAnswer();
});

nextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  nextQuestion();
});

restartBtn.addEventListener('click', (e) => {
  e.preventDefault();
  restartQuiz();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (hasAnswered) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      nextQuestion();
    }
    return;
  }
  
  switch(e.key) {
    case '1':
    case 'a':
    case 'A':
      e.preventDefault();
      selectOption(0);
      break;
    case '2':
    case 'b':
    case 'B':
      e.preventDefault();
      selectOption(1);
      break;
    case '3':
    case 'c':
    case 'C':
      e.preventDefault();
      selectOption(2);
      break;
    case '4':
    case 'd':
    case 'D':
      e.preventDefault();
      selectOption(3);
      break;
    case 'h':
    case 'H':
      e.preventDefault();
      showHint();
      break;
    case 'Enter':
      if (selectedAnswer !== null && !answerBtn.disabled) {
        e.preventDefault();
        showAnswer();
      }
      break;
  }
});

// Initialize the quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
  console.log('Quiz initialized');
  initQuiz();
});