// Answer Keys Data - All questions from 8 exams
const answerKeysData = {
    python: {
        title: "🐍 Python Basics",
        icon: "🐍",
        questions: [
            {
                id: 1,
                question: "`names = ['A','B','C']; names[0] = 'Z'; print(names)`",
                answer: "D - ['Z','B','C']",
                explanation: "List là mutable (có thể thay đổi). `names[0] = 'Z'` thay đổi phần tử đầu tiên từ 'A' thành 'Z'. Kết quả: `['Z','B','C']`",
                difficulty: "easy"
            },
            {
                id: 2,
                question: "`my_list = [1,2,3]; my_list[0]`",
                answer: "B - 1",
                explanation: "Indexing bắt đầu từ 0, `my_list[0]` trả về phần tử đầu tiên.",
                difficulty: "easy"
            },
            {
                id: 3,
                question: "`my_list = [1,2,3]; my_list[1:3]`",
                answer: "B - [2,3]",
                explanation: "Slicing `[1:3]` lấy từ index 1 đến 2 (không bao gồm 3).",
                difficulty: "easy"
            },
            {
                id: 4,
                question: "`'a b c'.split()`",
                answer: "B - ['a','b','c']",
                explanation: "Phương thức `.split()` chia chuỗi theo khoảng trắng và trả về list các từ.",
                difficulty: "easy"
            },
            {
                id: 5,
                question: "`'abc'.replace('a','b')`",
                answer: "D - 'bbc'",
                explanation: "`.replace('a','b')` thay thế tất cả 'a' bằng 'b'.",
                difficulty: "easy"
            },
            {
                id: 6,
                question: "`' hello '.strip()`",
                answer: "A - 'hello'",
                explanation: "`.strip()` loại bỏ khoảng trắng đầu và cuối chuỗi.",
                difficulty: "easy"
            },
            {
                id: 7,
                question: "`'-'.join(['a','b'])`",
                answer: "A - 'a-b'",
                explanation: "`.join()` nối các phần tử của list bằng dấu '-'.",
                difficulty: "easy"
            },
            {
                id: 8,
                question: "`x = (1,2,3); x[0]`",
                answer: "A - 1",
                explanation: "Tuple là immutable sequence, indexing bắt đầu từ 0.",
                difficulty: "easy"
            },
            {
                id: 9,
                question: "`house = {'price':10}; house['price']=15; house['price']`",
                answer: "C - 15",
                explanation: "Dictionary có thể thay đổi giá trị, `house['price']=15` gán giá trị mới.",
                difficulty: "easy"
            },
            {
                id: 10,
                question: "`{1,2,3} == {3,2,1}`",
                answer: "B - TRUE",
                explanation: "Set không quan tâm thứ tự, `{1,2,3}` và `{3,2,1}` là bằng nhau.",
                difficulty: "easy"
            },
            {
                id: 11,
                question: "`add_one = lambda x:x+1; add_one(5)`",
                answer: "B - 6",
                explanation: "Lambda function `lambda x:x+1` với `x=5` trả về `5+1=6`.",
                difficulty: "medium"
            },
            {
                id: 12,
                question: "Cú pháp nào dùng để khai báo một hàm trong Python?",
                answer: "B - def myFunc():",
                explanation: "Cú pháp chuẩn để khai báo hàm trong Python là `def`.",
                difficulty: "easy"
            },
            {
                id: 13,
                question: "Phép toán 7 // 2 trong Python cho kết quả là:",
                answer: "B - 3",
                explanation: "`//` là toán tử chia lấy phần nguyên. `7 // 2 = 3` (7 chia 2 được 3 dư 1).",
                difficulty: "easy"
            },
            {
                id: 14,
                question: "Phép toán 7 % 2 trong Python cho kết quả là:",
                answer: "C - 1",
                explanation: "`%` là toán tử modulo (chia lấy dư), `7 % 2 = 1`.",
                difficulty: "easy"
            },
            {
                id: 15,
                question: "`print(5 / 2)`",
                answer: "A - 2.5",
                explanation: "`/` là phép chia thực, `5 / 2 = 2.5`.",
                difficulty: "easy"
            },
            {
                id: 16,
                question: "`print(5 // 2)`",
                answer: "C - 2",
                explanation: "`//` là phép chia lấy phần nguyên, `5 // 2 = 2`.",
                difficulty: "easy"
            },
            {
                id: 17,
                question: "`print(2 ** 3)`",
                answer: "B - 8",
                explanation: "`**` là toán tử lũy thừa, `2 ** 3 = 8`.",
                difficulty: "easy"
            },
            {
                id: 18,
                question: "`[i for i in range(5) if i%2==0]`",
                answer: "A - [0,2,4]",
                explanation: "List comprehension tạo list các số chẵn từ 0 đến 4: `[0,2,4]`.",
                difficulty: "medium"
            },
            {
                id: 19,
                question: "Dấu thụt lề (indentation) trong Python có vai trò gì?",
                answer: "C - Xác định cấu trúc khối lệnh",
                explanation: "Python sử dụng indentation để định nghĩa khối lệnh thay vì dùng `{}`.",
                difficulty: "easy"
            },
            {
                id: 20,
                question: "Ai là người phát triển ngôn ngữ Python?",
                answer: "B - Guido van Rossum",
                explanation: "Guido van Rossum là người tạo ra Python vào năm 1991.",
                difficulty: "easy"
            },
            {
                id: 21,
                question: "Python là ngôn ngữ lập trình thuộc loại nào?",
                answer: "B - Thông dịch, kiểu động",
                explanation: "Python là ngôn ngữ thông dịch (interpreted) và có kiểu động (dynamic typing).",
                difficulty: "easy"
            }
        ]
    },
    numpy: {
        title: "🔢 NumPy Operations",
        icon: "🔢",
        questions: [
            {
                id: 22,
                question: "Hàm nào trong NumPy dùng để tạo mảng chứa toàn số 0?",
                answer: "D - np.zeros()",
                explanation: "`np.zeros()` tạo mảng với tất cả phần tử là 0. `np.ones()` tạo mảng với phần tử là 1.",
                difficulty: "easy"
            },
            {
                id: 23,
                question: "`np.zeros((2, 3))` tạo ra mảng có kích thước:",
                answer: "A - 2 dòng, 3 cột",
                explanation: "`np.zeros((2, 3))` tạo ma trận 2x3.",
                difficulty: "easy"
            },
            {
                id: 24,
                question: "NumPy là viết tắt của:",
                answer: "C - Numerical Python",
                explanation: "NumPy = **Num**erical **Py**thon. Thư viện tính toán số học cho Python.",
                difficulty: "easy"
            },
            {
                id: 25,
                question: "Đối tượng chính của NumPy để lưu trữ dữ liệu là:",
                answer: "A - ndarray",
                explanation: "ndarray (N-dimensional array) là đối tượng chính của NumPy.",
                difficulty: "easy"
            },
            {
                id: 26,
                question: "`np.arange(5) * 2`",
                answer: "A - [0 2 4 6 8]",
                explanation: "`np.arange(5)` tạo `[0,1,2,3,4]`, nhân với 2 được `[0,2,4,6,8]`.",
                difficulty: "medium"
            },
            {
                id: 27,
                question: "`arr = np.arange(10); arr[2:5]` sẽ trả về:",
                answer: "D - [2, 3, 4]",
                explanation: "`np.arange(10)` tạo `[0,1,2,3,4,5,6,7,8,9]`, `arr[2:5]` lấy từ index 2 đến 4.",
                difficulty: "medium"
            },
            {
                id: 28,
                question: "`np.arange(6).reshape(2,3).shape`",
                answer: "D - (2,3)",
                explanation: "`np.arange(6)` tạo `[0,1,2,3,4,5]`, `.reshape(2,3)` chuyển thành ma trận 2x3.",
                difficulty: "medium"
            },
            {
                id: 29,
                question: "`np.arange(8).reshape(2,4).T.shape`",
                answer: "B - (4,2)",
                explanation: "Ma trận 2x4 sau khi transpose (`.T`) thành ma trận 4x2.",
                difficulty: "medium"
            },
            {
                id: 30,
                question: "`arr = np.array([1, 2, 3]); arr.dtype` sẽ trả về:",
                answer: "B - int32 hoặc int64",
                explanation: "`.dtype` trả về kiểu dữ liệu của mảng, thường là int32 hoặc int64.",
                difficulty: "medium"
            },
            {
                id: 31,
                question: "`np.array([1.5, -0.1, 3]).dtype`",
                answer: "A - float64",
                explanation: "Mảng có số thập phân sẽ có kiểu float64.",
                difficulty: "easy"
            },
            {
                id: 32,
                question: "`np.array([3.7, -1.2]).astype(int)`",
                answer: "A - [3, -1]",
                explanation: "`.astype(int)` chuyển đổi sang integer, làm tròn xuống. `3.7 → 3`, `-1.2 → -1`.",
                difficulty: "medium"
            },
            {
                id: 33,
                question: "`np.sqrt(np.array([1,4,9]))`",
                answer: "C - [1.0,2.0,3.0]",
                explanation: "`np.sqrt()` tính căn bậc hai của từng phần tử.",
                difficulty: "easy"
            },
            {
                id: 34,
                question: "`np.where([True,False,True],[1,2,3],[9,9,9])`",
                answer: "A - [1,9,3]",
                explanation: "`np.where()` chọn từ mảng đầu tiên nếu True, từ mảng thứ hai nếu False.",
                difficulty: "medium"
            },
            {
                id: 35,
                question: "`arr=np.array([3,-1,2]); (arr>0).sum()`",
                answer: "B - 2",
                explanation: "`arr>0` tạo `[True,False,True]`, `.sum()` đếm số True (2).",
                difficulty: "medium"
            },
            {
                id: 36,
                question: "`np.array([3,-1,2]).mean()`",
                answer: "B - 1.333...",
                explanation: "Tính trung bình: `(3+(-1)+2)/3 = 4/3 ≈ 1.333`.",
                difficulty: "easy"
            },
            {
                id: 37,
                question: "`np.array([1,2,3]).cumsum()`",
                answer: "B - [1,3,6]",
                explanation: "`.cumsum()` tính tổng tích lũy: `[1, 1+2, 1+2+3] = [1,3,6]`.",
                difficulty: "medium"
            },
            {
                id: 38,
                question: "`np.unique([3,3,2,1,2])`",
                answer: "B - [1,2,3]",
                explanation: "`np.unique()` trả về các giá trị duy nhất đã sắp xếp.",
                difficulty: "easy"
            },
            {
                id: 39,
                question: "`np.isin([1,2,3],[2,4])`",
                answer: "A - [False,True,False]",
                explanation: "`np.isin()` kiểm tra từng phần tử của mảng đầu có trong mảng thứ hai không.",
                difficulty: "medium"
            },
            {
                id: 40,
                question: "`np.dot(np.array([1,2]), np.array([3,4]))`",
                answer: "B - 11",
                explanation: "Tích vô hướng: `1*3 + 2*4 = 3 + 8 = 11`.",
                difficulty: "medium"
            },
            {
                id: 41,
                question: "Quy ước import NumPy là:",
                answer: "C - import numpy as np",
                explanation: "Quy ước chuẩn để import NumPy với alias `np`.",
                difficulty: "easy"
            },
            {
                id: 42,
                question: "Tính năng chính của NumPy so với list Python thông thường là:",
                answer: "D - Tốc độ tính toán nhanh và chiếm ít bộ nhớ hơn",
                explanation: "NumPy được tối ưu hóa cho tính toán số học nhanh và hiệu quả bộ nhớ.",
                difficulty: "easy"
            }
        ]
    },
    pandas: {
        title: "🐼 Pandas Operations",
        icon: "🐼",
        questions: [
            {
                id: 43,
                question: "Hai cấu trúc dữ liệu cốt lõi của pandas là:",
                answer: "C - Series và DataFrame",
                explanation: "Series (1D) và DataFrame (2D) là hai cấu trúc cơ bản nhất của pandas.",
                difficulty: "easy"
            },
            {
                id: 44,
                question: "Series trong pandas là:",
                answer: "C - Mảng một chiều có nhãn",
                explanation: "Series là cấu trúc dữ liệu 1 chiều với index (nhãn) cho mỗi phần tử.",
                difficulty: "easy"
            },
            {
                id: 45,
                question: "Pandas được xây dựng dựa trên thư viện nào?",
                answer: "A - NumPy",
                explanation: "Pandas được xây dựng trên NumPy, sử dụng NumPy arrays làm backend.",
                difficulty: "easy"
            },
            {
                id: 46,
                question: "`df=pd.DataFrame({'A':[1,2,3]}); df['A'].mean()`",
                answer: "A - 2",
                explanation: "Tính trung bình của cột A: `(1+2+3)/3 = 2`.",
                difficulty: "easy"
            },
            {
                id: 47,
                question: "`df=pd.DataFrame({'A':[1,2,3]}); df['A'].sum()`",
                answer: "A - 6",
                explanation: "Tổng của cột A: `1+2+3 = 6`.",
                difficulty: "easy"
            },
            {
                id: 48,
                question: "`df=pd.DataFrame({'A':[1,2,3]}); df['A'].cumsum().tolist()`",
                answer: "A - [1,3,6]",
                explanation: "Tổng tích lũy: `[1, 1+2, 1+2+3] = [1,3,6]`.",
                difficulty: "medium"
            },
            {
                id: 49,
                question: "`df=pd.DataFrame({'A':[1,2,3]}); df['A'].apply(lambda x:x**2).tolist()`",
                answer: "A - [1,4,9]",
                explanation: "Áp dụng hàm lambda `x**2` cho từng phần tử: `[1², 2², 3²] = [1,4,9]`.",
                difficulty: "medium"
            },
            {
                id: 50,
                question: "`df=pd.DataFrame({'A':[1,2,3]}); df.sort_values('A',ascending=False)['A'].tolist()`",
                answer: "B - [3,2,1]",
                explanation: "Sắp xếp giảm dần: `[3,2,1]`.",
                difficulty: "medium"
            },
            {
                id: 51,
                question: "`df=pd.DataFrame({'A':[1,1,2]}); df['A'].unique().tolist()`",
                answer: "C - [1,2]",
                explanation: "`.unique()` trả về các giá trị duy nhất: `[1,2]`.",
                difficulty: "easy"
            },
            {
                id: 52,
                question: "`df=pd.DataFrame({'A':[1,1,2]}); df['A'].nunique()`",
                answer: "A - 2",
                explanation: "`.nunique()` đếm số giá trị duy nhất: 2.",
                difficulty: "easy"
            },
            {
                id: 53,
                question: "`df=pd.DataFrame({'A':[1,2,3]}); df.query('A>1').shape[0]`",
                answer: "A - 2",
                explanation: "`.query('A>1')` lọc các dòng có A > 1, có 2 dòng.",
                difficulty: "medium"
            },
            {
                id: 54,
                question: "`df=pd.DataFrame({'A':[1,2,3],'B':[3,4,5]}); df[['A','B']].sum().tolist()`",
                answer: "A - [6,12]",
                explanation: "Tổng từng cột: A = 1+2+3=6, B = 3+4+5=12.",
                difficulty: "easy"
            },
            {
                id: 55,
                question: "`df=pd.DataFrame({'A':[1,2,3]}); df.shape`",
                answer: "A - (3,1)",
                explanation: "DataFrame có 3 dòng, 1 cột.",
                difficulty: "easy"
            },
            {
                id: 56,
                question: "`df=pd.DataFrame({'A':[1,2,3]}); df.info().__class__.__name__`",
                answer: "C - NoneType",
                explanation: "`df.info()` không trả về giá trị (return None).",
                difficulty: "medium"
            },
            {
                id: 57,
                question: "`df=pd.DataFrame({'A':[1,2,3]}); 'A' in df.columns`",
                answer: "A - TRUE",
                explanation: "Kiểm tra cột 'A' có trong DataFrame không.",
                difficulty: "easy"
            },
            {
                id: 58,
                question: "`df=pd.DataFrame({'A':[1,2,3]}); df.rename(columns={'A':'X'}).columns[0]`",
                answer: "C - 'X'",
                explanation: "`.rename(columns={'A':'X'})` đổi tên cột 'A' thành 'X'.",
                difficulty: "medium"
            },
            {
                id: 59,
                question: "`df=pd.DataFrame({'A':[1,2,3]}); df.set_index('A').index.name`",
                answer: "C - 'A'",
                explanation: "`df.set_index('A')` đặt cột 'A' làm index, `.index.name` trả về 'A'.",
                difficulty: "medium"
            },
            {
                id: 60,
                question: "`df=pd.DataFrame({'A':[1,2,3]}); df.reset_index().index[0]`",
                answer: "A - 0",
                explanation: "`df.reset_index()` tạo index mới bắt đầu từ 0.",
                difficulty: "easy"
            },
            {
                id: 61,
                question: "Để chọn cột 'Name' từ DataFrame df, ta dùng:",
                answer: "A - df.Name hoặc df['Name']",
                explanation: "Có thể dùng cả hai cách để chọn cột.",
                difficulty: "easy"
            },
            {
                id: 62,
                question: "`df.loc[0]` dùng để:",
                answer: "B - Chọn dòng có index 0",
                explanation: "`df.loc[0]` chọn dòng có index 0.",
                difficulty: "easy"
            },
            {
                id: 63,
                question: "`df.head()` mặc định hiển thị bao nhiêu dòng đầu tiên?",
                answer: "B - 5 dòng",
                explanation: "`df.head()` mặc định hiển thị 5 dòng đầu.",
                difficulty: "easy"
            },
            {
                id: 64,
                question: "`s = pd.Series([1, 2, 3, 4]); s.mean()` trả về:",
                answer: "B - 2.5",
                explanation: "Trung bình: `(1+2+3+4)/4 = 2.5`.",
                difficulty: "easy"
            },
            {
                id: 65,
                question: "`df.info()` hiển thị thông tin gì về DataFrame?",
                answer: "C - Kiểu dữ liệu và thông tin bộ nhớ",
                explanation: "`df.info()` hiển thị kiểu dữ liệu, số dòng/cột, và thông tin bộ nhớ.",
                difficulty: "easy"
            },
            {
                id: 66,
                question: "`df=pd.DataFrame({'A':[1,2,3]}); type(df.to_dict())`",
                answer: "A - dict",
                explanation: "`df.to_dict()` chuyển DataFrame thành dictionary.",
                difficulty: "easy"
            },
            {
                id: 67,
                question: "`df = pd.DataFrame({'A':[1,2], 'B':[3,4]}); df.to_csv('out.csv', index=False)` sẽ tạo file CSV với?",
                answer: "A - Không có cột index",
                explanation: "`index=False` nghĩa là không xuất index.",
                difficulty: "easy"
            }
        ]
    },
    fileio: {
        title: "📁 File I/O Operations",
        icon: "📁",
        questions: [
            {
                id: 68,
                question: "`pd.read_csv('sample_data.csv').shape` trả về gì?",
                answer: "C - (số dòng, số cột)",
                explanation: "Thuộc tính `.shape` trả về tuple `(rows, columns)`.",
                difficulty: "easy"
            },
            {
                id: 69,
                question: "`pd.read_csv('sample_data.csv').head(3).shape[0]` trả về gì?",
                answer: "B - 3",
                explanation: "`.head(3)` lấy 3 dòng đầu, `.shape[0]` trả về số dòng.",
                difficulty: "easy"
            },
            {
                id: 70,
                question: "Hàm `pd.read_csv()` trong pandas dùng để:",
                answer: "B - Đọc dữ liệu từ file CSV",
                explanation: "`pd.read_csv()` dùng để đọc dữ liệu từ file CSV vào DataFrame.",
                difficulty: "easy"
            },
            {
                id: 71,
                question: "Tham số `header=None` trong `pd.read_csv()` có ý nghĩa gì?",
                answer: "B - Dòng đầu không phải là tên cột",
                explanation: "`header=None` nghĩa là không có header, dòng đầu là dữ liệu.",
                difficulty: "medium"
            },
            {
                id: 72,
                question: "Tham số `index_col` trong `pd.read_csv()` dùng để:",
                answer: "B - Chỉ định cột nào làm index",
                explanation: "`index_col` chỉ định cột nào sẽ được dùng làm index.",
                difficulty: "easy"
            },
            {
                id: 73,
                question: "Tham số `skiprows` trong `pd.read_csv()` có tác dụng gì?",
                answer: "B - Bỏ qua các dòng được chỉ định",
                explanation: "`skiprows` bỏ qua các dòng cụ thể khi đọc file.",
                difficulty: "easy"
            },
            {
                id: 74,
                question: "Để đọc dữ liệu từ một URL sử dụng pandas, ta làm thế nào?",
                answer: "B - Dùng pd.read_csv(url) trực tiếp",
                explanation: "Pandas có thể đọc trực tiếp từ URL.",
                difficulty: "easy"
            },
            {
                id: 75,
                question: "Đọc file 'sample_data.csv' với `header=None`. Tên của cột đầu tiên là gì? (`df.columns[0]`)",
                answer: "D - 'Unnamed: 0'",
                explanation: "Khi `header=None`, pandas tự động đặt tên cột là 'Unnamed: 0', 'Unnamed: 1', ...",
                difficulty: "medium"
            },
            {
                id: 76,
                question: "Đọc file với `index_col=0`, `df.index.name` là?",
                answer: "A - Tên cột đầu tiên",
                explanation: "Khi `index_col=0`, cột đầu tiên trở thành index và tên của nó là `df.index.name`.",
                difficulty: "easy"
            },
            {
                id: 77,
                question: "Hàm `pd.read_excel()` dùng để làm gì?",
                answer: "A - Đọc dữ liệu từ file Excel",
                explanation: "`pd.read_excel()` dùng để đọc dữ liệu từ file Excel (.xlsx, .xls).",
                difficulty: "easy"
            },
            {
                id: 78,
                question: "JSON là viết tắt của:",
                answer: "B - JavaScript Object Notation",
                explanation: "JSON = JavaScript Object Notation, định dạng trao đổi dữ liệu phổ biến.",
                difficulty: "easy"
            },
            {
                id: 79,
                question: "Hàm `pd.read_json()` dùng để:",
                answer: "B - Đọc dữ liệu từ file JSON",
                explanation: "`pd.read_json()` dùng để đọc dữ liệu từ file JSON.",
                difficulty: "easy"
            },
            {
                id: 80,
                question: "Hàm `pd.read_html()` có tác dụng gì?",
                answer: "B - Đọc bảng từ trang web HTML",
                explanation: "`pd.read_html()` dùng để đọc các bảng từ trang web HTML.",
                difficulty: "easy"
            },
            {
                id: 81,
                question: "Trong Python, để kết nối với cơ sở dữ liệu SQLite, ta dùng thư viện:",
                answer: "B - sqlite3",
                explanation: "Thư viện `sqlite3` được tích hợp sẵn trong Python để làm việc với SQLite.",
                difficulty: "medium"
            }
        ]
    },
    dataprocessing: {
        title: "🔧 Data Processing",
        icon: "🔧",
        questions: [
            {
                id: 82,
                question: "Để xử lý dữ liệu thiếu trong pandas, ta có thể dùng:",
                answer: "D - dropna() và fillna()",
                explanation: "`dropna()` xóa dữ liệu thiếu, `fillna()` thay thế dữ liệu thiếu.",
                difficulty: "easy"
            },
            {
                id: 83,
                question: "`df=pd.DataFrame({'A':[1,np.nan,3]}); df['A'].isnull().sum()`",
                answer: "A - 1",
                explanation: "`.isnull()` tìm giá trị thiếu, `.sum()` đếm số lượng.",
                difficulty: "easy"
            },
            {
                id: 84,
                question: "`pd.DataFrame({'A':[1,np.nan,3]})` dùng `df.dropna().shape[0]` sẽ trả về?",
                answer: "C - 1",
                explanation: "`dropna()` xóa dòng có NaN, chỉ còn lại 1 dòng.",
                difficulty: "easy"
            },
            {
                id: 85,
                question: "`pd.DataFrame({'col':['abc','AbC','xyz']}).col.str.contains('abc',case=False).sum()`",
                answer: "A - 2",
                explanation: "`str.contains('abc',case=False)` tìm chuỗi chứa 'abc' (không phân biệt hoa thường), có 2 kết quả.",
                difficulty: "medium"
            },
            {
                id: 86,
                question: "`pd.Series([1,2,3,3,2]).value_counts().sort_index().index[0]`",
                answer: "A - 1",
                explanation: "`.value_counts()` đếm tần suất, `.sort_index()` sắp xếp theo index, `.index[0]` lấy giá trị đầu tiên.",
                difficulty: "medium"
            }
        ]
    },
    datascience: {
        title: "📊 Data Science Concepts",
        icon: "📊",
        questions: [
            {
                id: 87,
                question: "Khoa học dữ liệu là sự kết hợp của ba trụ cột chính nào?",
                answer: "B - Toán học & Thống kê, Khoa học máy tính, Kiến thức chuyên ngành",
                explanation: "Ba trụ cột của Data Science: Toán học & Thống kê, Khoa học máy tính, và Kiến thức chuyên ngành.",
                difficulty: "medium"
            },
            {
                id: 88,
                question: "Bước đầu tiên trong chu trình khai thác dữ liệu là gì?",
                answer: "C - Xác định bài toán",
                explanation: "Quy trình khoa học dữ liệu bắt đầu với việc xác định bài toán cần giải quyết.",
                difficulty: "medium"
            },
            {
                id: 89,
                question: "Trong quy trình khoa học dữ liệu, việc 'làm sạch dữ liệu' thuộc bước nào?",
                answer: "B - Xử lý dữ liệu",
                explanation: "Làm sạch dữ liệu thuộc bước xử lý dữ liệu trong quy trình khoa học dữ liệu.",
                difficulty: "medium"
            },
            {
                id: 90,
                question: "Data Engineer chủ yếu đảm nhận công việc nào?",
                answer: "B - Thiết kế hạ tầng và thu thập dữ liệu",
                explanation: "Data Engineer chuyên về thiết kế hệ thống, pipeline dữ liệu và thu thập dữ liệu.",
                difficulty: "medium"
            },
            {
                id: 91,
                question: "Matplotlib được sử dụng chủ yếu để:",
                answer: "C - Trực quan hóa dữ liệu",
                explanation: "Matplotlib là thư viện chính để tạo biểu đồ và trực quan hóa dữ liệu.",
                difficulty: "easy"
            },
            {
                id: 92,
                question: "Thư viện nào được xây dựng dựa trên Matplotlib và cung cấp giao diện đẹp hơn?",
                answer: "B - Seaborn",
                explanation: "Seaborn được xây dựng trên Matplotlib và cung cấp giao diện đẹp hơn.",
                difficulty: "easy"
            },
            {
                id: 93,
                question: "API là viết tắt của:",
                answer: "D - Application Programming Interface",
                explanation: "API = Application Programming Interface, giao diện lập trình ứng dụng.",
                difficulty: "easy"
            },
            {
                id: 94,
                question: "Encoding UTF-8 thường được sử dụng để:",
                answer: "D - Mã hóa ký tự Unicode",
                explanation: "UTF-8 là bộ mã hóa Unicode, hỗ trợ tất cả ký tự Unicode.",
                difficulty: "easy"
            }
        ]
    }
};

// Global variables
let currentTopic = 'all';
let currentPage = 1;
const questionsPerPage = 10;
let filteredQuestions = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    loadQuestions();
    updatePagination();
}

function setupEventListeners() {
    // Tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            switchTopic(topic);
        });
    });

    // Search functionality
    document.getElementById('searchBox').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterQuestions(searchTerm);
    });

    // Pagination
    document.getElementById('prevBtn').addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            displayQuestions();
            updatePagination();
        }
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
        const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayQuestions();
            updatePagination();
        }
    });
}

function switchTopic(topic) {
    currentTopic = topic;
    currentPage = 1;
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-topic="${topic}"]`).classList.add('active');
    
    loadQuestions();
    updatePagination();
}

function loadQuestions() {
    if (currentTopic === 'all') {
        // Load all questions from all topics
        filteredQuestions = [];
        Object.keys(answerKeysData).forEach(topic => {
            filteredQuestions = filteredQuestions.concat(answerKeysData[topic].questions);
        });
    } else {
        // Load questions from specific topic
        filteredQuestions = answerKeysData[currentTopic].questions || [];
    }
    
    displayQuestions();
}

function filterQuestions(searchTerm) {
    if (currentTopic === 'all') {
        filteredQuestions = [];
        Object.keys(answerKeysData).forEach(topic => {
            const topicQuestions = answerKeysData[topic].questions.filter(q => 
                q.question.toLowerCase().includes(searchTerm) ||
                q.answer.toLowerCase().includes(searchTerm) ||
                q.explanation.toLowerCase().includes(searchTerm)
            );
            filteredQuestions = filteredQuestions.concat(topicQuestions);
        });
    } else {
        filteredQuestions = answerKeysData[currentTopic].questions.filter(q => 
            q.question.toLowerCase().includes(searchTerm) ||
            q.answer.toLowerCase().includes(searchTerm) ||
            q.explanation.toLowerCase().includes(searchTerm)
        );
    }
    
    currentPage = 1;
    displayQuestions();
    updatePagination();
}

function displayQuestions() {
    const container = document.getElementById('answerContent');
    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const questionsToShow = filteredQuestions.slice(startIndex, endIndex);
    
    if (questionsToShow.length === 0) {
        container.innerHTML = '<div class="no-results">Không tìm thấy câu hỏi nào phù hợp.</div>';
        return;
    }
    
    let html = '';
    
    if (currentTopic === 'all') {
        // Group questions by topic
        const groupedQuestions = {};
        questionsToShow.forEach(q => {
            const topic = findTopicForQuestion(q.id);
            if (!groupedQuestions[topic]) {
                groupedQuestions[topic] = [];
            }
            groupedQuestions[topic].push(q);
        });
        
        Object.keys(groupedQuestions).forEach(topic => {
            const topicData = answerKeysData[topic];
            html += `
                <div class="topic-section">
                    <div class="topic-header">
                        <div class="topic-icon">${topicData.icon}</div>
                        <div>
                            <h2 class="topic-title">${topicData.title}</h2>
                            <div class="topic-stats">${groupedQuestions[topic].length} câu hỏi</div>
                        </div>
                    </div>
            `;
            
            groupedQuestions[topic].forEach(q => {
                html += generateQuestionHTML(q);
            });
            
            html += '</div>';
        });
    } else {
        // Show questions for specific topic
        const topicData = answerKeysData[currentTopic];
        html += `
            <div class="topic-section">
                <div class="topic-header">
                    <div class="topic-icon">${topicData.icon}</div>
                    <div>
                        <h2 class="topic-title">${topicData.title}</h2>
                        <div class="topic-stats">${questionsToShow.length} câu hỏi</div>
                    </div>
                </div>
        `;
        
        questionsToShow.forEach(q => {
            html += generateQuestionHTML(q);
        });
        
        html += '</div>';
    }
    
    container.innerHTML = html;
    
    // Highlight code blocks
    if (typeof hljs !== 'undefined') {
        hljs.highlightAll();
    }
}

function generateQuestionHTML(question) {
    const difficultyClass = `difficulty-${question.difficulty}`;
    const difficultyText = question.difficulty === 'easy' ? 'Dễ' : 
                          question.difficulty === 'medium' ? 'Trung bình' : 'Khó';
    
    return `
        <div class="question-card fade-in">
            <div class="question-number">Câu ${question.id}</div>
            <div class="question-text">
                ${question.question}
                <span class="difficulty-badge ${difficultyClass}">${difficultyText}</span>
            </div>
            <div class="answer-section">
                <div class="correct-answer">Đáp án: ${question.answer}</div>
                <div class="explanation">
                    <strong>Giải thích:</strong> ${question.explanation}
                </div>
            </div>
        </div>
    `;
}

function findTopicForQuestion(questionId) {
    for (const topic in answerKeysData) {
        if (answerKeysData[topic].questions.some(q => q.id === questionId)) {
            return topic;
        }
    }
    return 'python'; // fallback
}

function updatePagination() {
    const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageInfo = document.getElementById('pageInfo');
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    
    pageInfo.textContent = `Trang ${currentPage} / ${totalPages || 1}`;
}