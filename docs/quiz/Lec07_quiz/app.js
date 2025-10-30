// Quiz data for Lecture 7 - Data Visualization
const quizData = {
  "questions": [
    {"id":1,"category":"Matplotlib","code":"%matplotlib inline\nimport matplotlib.pyplot as plt\nplt.plot([0,1],[0,1])","question":"Mục đích của %matplotlib inline trong Jupyter?","options":["Hiển thị biểu đồ ngay trong notebook","Tăng tốc vẽ biểu đồ","Lưu hình tự động","Đổi backend sang interactive notebook"],"correct":0,"hint":"Inline để render trực tiếp trong cell","explanation":"%matplotlib inline giúp hiển thị biểu đồ ngay trong notebook output."},
    {"id":2,"category":"Matplotlib","code":"import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([1,2,3],[1,4,9])","question":"Đối tượng ax là gì?","options":["Figure","AxesSubplot","Axis","Artist"],"correct":1,"hint":"subplots() trả về (Figure, Axes)","explanation":"plt.subplots() trả về (Figure, Axes). ax là một AxesSubplot để vẽ."},
    {"id":3,"category":"Matplotlib","code":"import numpy as np\nfig, axes = plt.subplots(2,3)\naxes.shape","question":"Kích thước mảng axes?","options":["(2,3)","(3,2)","(6,)","(2,)"],"correct":0,"hint":"2 hàng, 3 cột","explanation":"axes là mảng 2x3 các Axes (2 hàng, 3 cột)."},
    {"id":4,"category":"Matplotlib","code":"import matplotlib.pyplot as plt\nfig = plt.figure()\nax1 = fig.add_subplot(2,2,1)","question":"add_subplot(2,2,1) tạo gì?","options":["Lưới 2x2, chọn ô 1","Lưới 1x2, chọn ô 2","3 subplots ngang","Tự động xác định lưới"],"correct":0,"hint":"(rows, cols, index)","explanation":"add_subplot(2,2,1) nghĩa là lưới 2x2 và chọn subplot thứ 1."},
    {"id":5,"category":"Matplotlib","code":"ax.plot(x, y, linestyle='--', color='blue', marker='o')","question":"marker='o' có tác dụng gì?","options":["Kẻ lưới","Chọn kiểu đường","Vẽ dấu chấm trên điểm","Tô nền"],"correct":2,"hint":"Marker là ký hiệu điểm","explanation":"marker='o' vẽ dấu tròn tại mỗi điểm dữ liệu."},
    {"id":6,"category":"Matplotlib","code":"ax.set_title('My Plot'); ax.set_xlabel('X'); ax.set_ylabel('Y')","question":"Các lệnh trên dùng để?","options":["Thêm legend","Đặt tiêu đề và nhãn trục","Thiết lập màu nền","Lưu hình"],"correct":1,"hint":"title/xlabel/ylabel","explanation":"Đặt tiêu đề subplot và nhãn cho trục x, y."},
    {"id":7,"category":"Matplotlib","code":"fig, ax = plt.subplots()\nax.annotate('Peak', xy=(t0, y0), xytext=(t0, y0+10),\n            arrowprops=dict(facecolor='black'))","question":"annotate dùng để?","options":["Thêm đường lưới","Thêm điểm dữ liệu","Thêm chú thích với mũi tên","Thêm subplot"],"correct":2,"hint":"annotation = chú thích","explanation":"annotate thêm chú thích văn bản kèm mũi tên chỉ vị trí."},
    {"id":8,"category":"Matplotlib","code":"fig.savefig('chart.png', dpi=300)","question":"Tham số dpi=300 nghĩa là?","options":["Kích thước 300x300px","Độ phân giải 300 dots/inch","Tốc độ vẽ 300ms","In đen trắng"],"correct":1,"hint":"dots per inch","explanation":"dpi là độ phân giải theo điểm trên mỗi inch khi lưu hình."},
    {"id":9,"category":"Pandas plot","code":"s = pd.Series([1,2,3], index=[0,10,20])\ns.plot()","question":"Mặc định Series.plot() vẽ kiểu gì?","options":["Bar","Line","Scatter","Pie"],"correct":1,"hint":"Mặc định là line","explanation":"pandas Series.plot() mặc định là biểu đồ đường."},
    {"id":10,"category":"Pandas plot","code":"df[['A','B']].plot()","question":"Khi plot 2 cột A,B mặc định sẽ:","options":["Hai đường trên cùng subplot","Hai subplot riêng","Bar chart","Pie chart"],"correct":0,"hint":"Mặc định line và chung một trục","explanation":"DataFrame.plot() vẽ mỗi cột là một đường trên cùng subplot."},
    {"id":11,"category":"Pandas plot","code":"df.plot(kind='bar')","question":"kind='bar' tạo:","options":["Histogram","Bar chart","Line chart","Violin"],"correct":1,"hint":"bar = cột","explanation":"kind='bar' hiển thị biểu đồ cột."},
    {"id":12,"category":"Seaborn","code":"sns.barplot(x='tip_pct', y='day', data=tips, orient='h')","question":"orient='h' nghĩa là:","options":["Cột đứng","Cột ngang","Đổi palette","Ẩn legend"],"correct":1,"hint":"h = horizontal","explanation":"orient='h' vẽ thanh theo phương ngang."},
    {"id":13,"category":"Seaborn","code":"sns.barplot(x='tip_pct', y='day', hue='time', data=tips)","question":"Tham số hue dùng để:","options":["Chọn cột","Nhóm theo biến phân loại","Thêm tiêu đề","Thêm annotation"],"correct":1,"hint":"hue = phân nhóm màu","explanation":"hue phân nhóm theo biến phân loại bằng màu sắc khác nhau."},
    {"id":14,"category":"Seaborn","code":"sns.histplot(values, bins=100)","question":"histplot vẽ:","options":["Mật độ KDE","Biểu đồ tần suất","Scatter","Boxplot"],"correct":1,"hint":"hist = histogram","explanation":"histplot vẽ histogram (biểu đồ tần suất)."},
    {"id":15,"category":"Seaborn","code":"sns.lineplot(data=df_demo, x='Month', y='Total', marker='o')","question":"lineplot dùng tốt cho:","options":["Dữ liệu danh mục","Dữ liệu chuỗi thời gian/xu hướng","Phân bố","Tương quan"],"correct":1,"hint":"Xu hướng theo thời gian","explanation":"lineplot thể hiện xu hướng theo thời gian hoặc thứ tự."},
    {"id":16,"category":"Seaborn","code":"sns.pairplot(df, diag_kind='kde')","question":"pairplot hiển thị:","options":["Quan hệ cặp biến + phân bố đường chéo","Chỉ histogram","Chỉ line","Chỉ bar"],"correct":0,"hint":"Ma trận scatter","explanation":"pairplot vẽ scatter cho từng cặp biến và phân bố trên đường chéo."},
    {"id":17,"category":"Seaborn","code":"sns.catplot(x='day', y='tip_pct', hue='time', col='smoker', kind='bar', data=tips)","question":"catplot với col='smoker' sẽ:","options":["Thêm legend","Tạo cột mới trong DataFrame","Tạo lưới facet theo smoker","Chuyển sang pie chart"],"correct":2,"hint":"facet grid","explanation":"col tạo các cột facet theo giá trị của smoker."},
    {"id":18,"category":"Seaborn","code":"sns.catplot(x='day', y='tip_pct', row='time', col='smoker', kind='bar', data=tips)","question":"row='time' tác dụng:","options":["Nhóm màu","Tạo hàng facet theo time","Ẩn trục x","Đảo chiều"],"correct":1,"hint":"row facet","explanation":"row tạo các hàng facet theo giá trị time."},
    {"id":19,"category":"Seaborn","code":"sns.histplot(values, bins=100)\n# hoặc sns.kdeplot(values)","question":"KDE thể hiện gì?","options":["Số lượng tuyệt đối","Ước lượng mật độ liên tục","Phân nhóm","Giá trị cực trị"],"correct":1,"hint":"kernel density","explanation":"KDE là ước lượng mật độ xác suất liên tục của dữ liệu."},
    {"id":20,"category":"Styling","code":"sns.set_style('whitegrid')","question":"Tác dụng của set_style('whitegrid')?","options":["Đặt theme có lưới nền trắng","Đổi backend","Lưu mặc định PNG","Tắt lưới"],"correct":0,"hint":"Seaborn style","explanation":"Đặt giao diện whitegrid cho biểu đồ seaborn."},
    {"id":21,"category":"Pandas plot","code":"tips['tip_pct'].plot.hist(bins=50)","question":"plot.hist vẽ gì?","options":["Density","Histogram","Boxplot","Violin"],"correct":1,"hint":"histogram","explanation":"plot.hist vẽ histogram của Series."},
    {"id":22,"category":"Pandas plot","code":"tips['tip_pct'].plot.density()","question":"plot.density() tương đương:","options":["KDE","Histogram","Line","Bar"],"correct":0,"hint":"density == kde","explanation":"plot.density vẽ KDE (ước lượng mật độ)."},
    {"id":23,"category":"Matplotlib","code":"fig, axes = plt.subplots(2,2, sharex=True, sharey=True)\nfig.subplots_adjust(wspace=0, hspace=0)","question":"sharex/sharey để:","options":["Chia legend","Chia sẻ trục","Chia dữ liệu","Chia màu"],"correct":1,"hint":"Share axis limits","explanation":"sharex/sharey giúp các subplot dùng chung trục x/y để so sánh dễ hơn."},
    {"id":24,"category":"Matplotlib","code":"ax.hist(np.random.randn(500), bins=50, alpha=0.5)","question":"alpha=0.5 có nghĩa:","options":["Độ trong suốt 50%","Độ dày đường","Độ phân giải","Số bins"],"correct":0,"hint":"Alpha = opacity","explanation":"alpha điều chỉnh độ trong suốt của phần tử đồ họa."},
    {"id":25,"category":"Matplotlib","code":"ax.set_xlim(['1/1/2007','1/1/2011']); ax.set_ylim([600,1800])","question":"set_xlim/set_ylim dùng để:","options":["Đặt tiêu đề","Đặt giới hạn trục","Đặt nhãn","Đặt legend"],"correct":1,"hint":"Axis limits","explanation":"Đặt giới hạn hiển thị của trục x và y."},
    {"id":26,"category":"Seaborn","code":"sns.barplot(x='tip_pct', y='day', data=tips)\n# khoảng tin cậy","question":"Đường màu đen trên bar thể hiện:","options":["Trung vị","Khoảng tin cậy","Min-max","IQR"],"correct":1,"hint":"confidence interval","explanation":"Thanh đen mặc định là khoảng tin cậy 95% của trung bình."},
    {"id":27,"category":"Seaborn","code":"sns.catplot(x='day', y='tip_pct', kind='box', data=tips)","question":"Boxplot thể hiện:","options":["Phân bố theo bins","Tương quan","Tóm tắt phân bố (median, quartiles, outliers)","Chuỗi thời gian"],"correct":2,"hint":"Median & quartiles","explanation":"Boxplot tóm tắt phân bố: median, Q1, Q3 và outliers."},
    {"id":28,"category":"Matplotlib","code":"fig, ax = plt.subplots(2,3); axes = ax if False else None","question":"plt.subplots(2,3) trả về:","options":["(Figure, ndarray Axes)","Chỉ Figure","Chỉ 6 Axes","Một list Axes"],"correct":0,"hint":"Figure + array Axes","explanation":"plt.subplots trả về (Figure, ndarray các Axes)."},
    {"id":29,"category":"Matplotlib","code":"ax.legend()","question":"legend() yêu cầu gì để hiển thị nhãn?","options":["Bắt buộc gọi set_title","Các plot có tham số label","Gọi trước set_xlabel","Không cần gì"],"correct":1,"hint":"label cho từng series","explanation":"legend dựa vào tham số label của các đường/đối tượng đã vẽ."},
    {"id":30,"category":"Matplotlib","code":"plt.tight_layout()","question":"tight_layout dùng để:","options":["Tăng dpi","Tự động điều chỉnh khoảng cách tránh chồng chéo","Thêm lưới","Lưu hình"],"correct":1,"hint":"Adjust spacing","explanation":"tight_layout() tinh chỉnh layout để hạn chế chồng chéo nhãn/tiêu đề."}
  ]
};

// Quiz application (reused from Lec06)
class QuizApp {
    constructor() {
        this.questions = quizData.questions;
        this.currentQuestion = 0;
        this.totalQuestions = this.questions.length;
        this.userAnswers = new Array(this.totalQuestions).fill(null);
        this.showAnswer = false;
        this.init();
    }
    init() { this.showHomepage(); this.bindEvents(); }
    bindEvents() {
        document.getElementById('startBtn').addEventListener('click', () => this.showQuiz());
        document.getElementById('restartBtn').addEventListener('click', () => this.showHomepage());
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', (e) => {
                if (this.showAnswer) return;
                const optionIndex = parseInt(e.currentTarget.dataset.option);
                this.userAnswers[this.currentQuestion] = optionIndex;
                document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                e.currentTarget.classList.add('selected');
                document.getElementById('showAnswerBtn').disabled = false;
                document.getElementById('nextBtn').classList.remove('hidden');
            });
        });
        document.getElementById('hintBtn').addEventListener('click', () => this.showHint());
        document.getElementById('showAnswerBtn').addEventListener('click', () => { this.showAnswer = !this.showAnswer; this.updateAnswerDisplay(); });
        document.getElementById('nextBtn').addEventListener('click', () => {
            if (this.currentQuestion < this.totalQuestions - 1) { this.currentQuestion++; this.showAnswer = false; this.updateQuestion(); }
            else { this.showEndPage(); }
        });
    }
    showHomepage() {
        document.getElementById('homepage').classList.add('active');
        document.getElementById('quizpage').classList.remove('active');
        document.getElementById('endpage').classList.remove('active');
        this.currentQuestion = 0;
        this.userAnswers = new Array(this.totalQuestions).fill(null);
        this.showAnswer = false;
    }
    showQuiz() {
        document.getElementById('homepage').classList.remove('active');
        document.getElementById('quizpage').classList.add('active');
        document.getElementById('endpage').classList.remove('active');
        this.updateQuestion();
    }
    showEndPage() {
        document.getElementById('homepage').classList.remove('active');
        document.getElementById('quizpage').classList.remove('active');
        document.getElementById('endpage').classList.add('active');
    }
    updateQuestion() {
        const q = this.questions[this.currentQuestion];
        document.getElementById('progressFill').style.width = `${((this.currentQuestion + 1) / this.totalQuestions) * 100}%`;
        document.getElementById('progressText').textContent = `Câu ${this.currentQuestion + 1}/${this.totalQuestions}`;
        document.getElementById('categoryBadge').textContent = q.category;
        document.getElementById('questionTitle').textContent = `Câu ${this.currentQuestion + 1}/${this.totalQuestions}`;
        document.getElementById('codeBlock').textContent = q.code;
        document.getElementById('questionText').textContent = q.question;
        q.options.forEach((opt, idx) => { document.querySelector(`[data-option="${idx}"] .option-text`).textContent = opt; });
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected','correct','incorrect'));
        if (this.userAnswers[this.currentQuestion] !== null) {
            document.querySelector(`[data-option="${this.userAnswers[this.currentQuestion]}"]`).classList.add('selected');
        }
        document.getElementById('showAnswerBtn').disabled = false;
        document.getElementById('nextBtn').classList.add('hidden');
        document.getElementById('hintTooltip').classList.add('hidden');
        document.getElementById('explanationContainer').classList.add('hidden');
        this.showAnswer = false;
        document.getElementById('showAnswerBtn').textContent = '👁️ Xem đáp án';
    }
    showHint() {
        const q = this.questions[this.currentQuestion];
        const t = document.getElementById('hintTooltip');
        document.querySelector('.hint-content').textContent = q.hint;
        t.classList.remove('hidden'); setTimeout(()=>t.classList.add('hidden'), 3000);
    }
    updateAnswerDisplay() {
        const q = this.questions[this.currentQuestion];
        const btn = document.getElementById('showAnswerBtn');
        const exp = document.getElementById('explanationContainer');
        if (this.showAnswer) {
            btn.textContent = '👁️ Ẩn đáp án';
            document.getElementById('explanationText').textContent = q.explanation;
            exp.classList.remove('hidden');
            document.querySelectorAll('.option').forEach((opt, idx)=>{
                opt.classList.remove('correct','incorrect');
                if (idx === q.correct) opt.classList.add('correct');
                else if (this.userAnswers[this.currentQuestion] === idx) opt.classList.add('incorrect');
            });
        } else {
            btn.textContent = '👁️ Xem đáp án';
            exp.classList.add('hidden');
            document.querySelectorAll('.option').forEach(opt=>opt.classList.remove('correct','incorrect'));
        }
    }
}

document.addEventListener('DOMContentLoaded', () => { new QuizApp(); });


