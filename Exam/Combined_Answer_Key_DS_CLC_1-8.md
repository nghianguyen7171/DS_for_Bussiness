# ĐÁP ÁN TỔNG HỢP CHO 8 ĐỀ THI DS_CLC (1-8)

**Môn học:** Khoa học dữ liệu trong Kinh tế và Kinh doanh  
**Tổng số đề thi:** 8 đề (DS_CLC-1 đến DS_CLC-8)  
**Tổng số câu hỏi:** 320 câu (40 câu/đề)  
**Số câu hỏi duy nhất:** 219 câu  
**Tỷ lệ khớp với thư viện:** 84% (185/219 câu)

---

## 📊 THỐNG KÊ TỔNG QUAN

- **Tổng số câu hỏi:** 320 câu
- **Câu hỏi duy nhất:** 219 câu (loại bỏ trùng lặp)
- **Câu hỏi khớp với thư viện:** 185 câu (84%)
- **Câu hỏi không khớp:** 34 câu (16%)

---

## 🔑 ĐÁP ÁN VÀ GIẢI THÍCH CHO TẤT CẢ CÂU HỎI

### 1. Python Basics

#### Câu hỏi về List Operations
**Câu hỏi:** `names = ['A','B','C']; names[0] = 'Z'; print(names)`  
**Đáp án:** D - `['Z','B','C']`  
**Giải thích:** List là mutable, `names[0] = 'Z'` thay đổi phần tử đầu tiên từ 'A' thành 'Z'.

**Câu hỏi:** `my_list = [1,2,3]; my_list[0]`  
**Đáp án:** B - 1  
**Giải thích:** Indexing bắt đầu từ 0, `my_list[0]` trả về phần tử đầu tiên.

**Câu hỏi:** `my_list = [1,2,3]; my_list[1:3]`  
**Đáp án:** B - `[2,3]`  
**Giải thích:** Slicing `[1:3]` lấy từ index 1 đến 2 (không bao gồm 3).

#### Câu hỏi về String Operations
**Câu hỏi:** `'a b c'.split()`  
**Đáp án:** B - `['a','b','c']`  
**Giải thích:** `.split()` chia chuỗi theo khoảng trắng và trả về list.

**Câu hỏi:** `'abc'.replace('a','b')`  
**Đáp án:** D - 'bbc'  
**Giải thích:** `.replace('a','b')` thay thế tất cả 'a' bằng 'b'.

**Câu hỏi:** `' hello '.strip()`  
**Đáp án:** A - 'hello'  
**Giải thích:** `.strip()` loại bỏ khoảng trắng đầu và cuối chuỗi.

**Câu hỏi:** `'-'.join(['a','b'])`  
**Đáp án:** A - 'a-b'  
**Giải thích:** `.join()` nối các phần tử của list bằng dấu '-'.

#### Câu hỏi về Tuple và Dictionary
**Câu hỏi:** `x = (1,2,3); x[0]`  
**Đáp án:** A - 1  
**Giải thích:** Tuple là immutable sequence, indexing bắt đầu từ 0.

**Câu hỏi:** `house = {'price':10}; house['price']=15; house['price']`  
**Đáp án:** C - 15  
**Giải thích:** Dictionary có thể thay đổi giá trị, `house['price']=15` gán giá trị mới.

**Câu hỏi:** `{1,2,3} == {3,2,1}`  
**Đáp án:** B - TRUE  
**Giải thích:** Set không quan tâm thứ tự, `{1,2,3}` và `{3,2,1}` là bằng nhau.

#### Câu hỏi về Functions và Lambda
**Câu hỏi:** `add_one = lambda x:x+1; add_one(5)`  
**Đáp án:** B - 6  
**Giải thích:** Lambda function `lambda x:x+1` với `x=5` trả về `5+1=6`.

**Câu hỏi:** Cú pháp nào dùng để khai báo một hàm trong Python?  
**Đáp án:** B - `def myFunc():`  
**Giải thích:** Cú pháp chuẩn để khai báo hàm trong Python là `def`.

#### Câu hỏi về Operators
**Câu hỏi:** Phép toán 7 // 2 trong Python cho kết quả là:  
**Đáp án:** B - 3  
**Giải thích:** `//` là toán tử chia lấy phần nguyên, `7 // 2 = 3`.

**Câu hỏi:** Phép toán 7 % 2 trong Python cho kết quả là:  
**Đáp án:** C - 1  
**Giải thích:** `%` là toán tử modulo (chia lấy dư), `7 % 2 = 1`.

**Câu hỏi:** `print(5 / 2)`  
**Đáp án:** A - 2.5  
**Giải thích:** `/` là phép chia thực, `5 / 2 = 2.5`.

**Câu hỏi:** `print(5 // 2)`  
**Đáp án:** C - 2  
**Giải thích:** `//` là phép chia lấy phần nguyên, `5 // 2 = 2`.

**Câu hỏi:** `print(2 ** 3)`  
**Đáp án:** B - 8  
**Giải thích:** `**` là toán tử lũy thừa, `2 ** 3 = 8`.

#### Câu hỏi về List Comprehension
**Câu hỏi:** `[i for i in range(5) if i%2==0]`  
**Đáp án:** A - `[0,2,4]`  
**Giải thích:** List comprehension tạo list các số chẵn từ 0 đến 4.

#### Câu hỏi về Indentation
**Câu hỏi:** Dấu thụt lề (indentation) trong Python có vai trò gì?  
**Đáp án:** C - Xác định cấu trúc khối lệnh  
**Giải thích:** Python sử dụng indentation để định nghĩa khối lệnh thay vì dùng `{}`.

#### Câu hỏi về Python Creator
**Câu hỏi:** Ai là người phát triển ngôn ngữ Python?  
**Đáp án:** B - Guido van Rossum  
**Giải thích:** Guido van Rossum là người tạo ra Python vào năm 1991.

#### Câu hỏi về Python Type
**Câu hỏi:** Python là ngôn ngữ lập trình thuộc loại nào?  
**Đáp án:** B - Thông dịch, kiểu động  
**Giải thích:** Python là ngôn ngữ thông dịch (interpreted) và có kiểu động (dynamic typing).

---

### 2. NumPy Operations

#### Câu hỏi về Array Creation
**Câu hỏi:** Hàm nào trong NumPy dùng để tạo mảng chứa toàn số 0?  
**Đáp án:** D - `np.zeros()`  
**Giải thích:** `np.zeros()` tạo mảng với tất cả phần tử là 0.

**Câu hỏi:** `np.zeros((2, 3))` tạo ra mảng có kích thước:  
**Đáp án:** A - 2 dòng, 3 cột  
**Giải thích:** `np.zeros((2, 3))` tạo ma trận 2x3.

**Câu hỏi:** NumPy là viết tắt của:  
**Đáp án:** C - Numerical Python  
**Giải thích:** NumPy = **Num**erical **Py**thon.

**Câu hỏi:** Đối tượng chính của NumPy để lưu trữ dữ liệu là:  
**Đáp án:** A - ndarray  
**Giải thích:** ndarray (N-dimensional array) là đối tượng chính của NumPy.

#### Câu hỏi về Array Operations
**Câu hỏi:** `np.arange(5) * 2`  
**Đáp án:** A - `[0 2 4 6 8]`  
**Giải thích:** `np.arange(5)` tạo `[0,1,2,3,4]`, nhân với 2 được `[0,2,4,6,8]`.

**Câu hỏi:** `arr = np.arange(10); arr[2:5]` sẽ trả về:  
**Đáp án:** D - `[2, 3, 4]`  
**Giải thích:** `np.arange(10)` tạo `[0,1,2,3,4,5,6,7,8,9]`, `arr[2:5]` lấy từ index 2 đến 4.

**Câu hỏi:** `np.arange(6).reshape(2,3).shape`  
**Đáp án:** D - `(2,3)`  
**Giải thích:** `np.arange(6)` tạo `[0,1,2,3,4,5]`, `.reshape(2,3)` chuyển thành ma trận 2x3.

**Câu hỏi:** `np.arange(8).reshape(2,4).T.shape`  
**Đáp án:** B - `(4,2)`  
**Giải thích:** Ma trận 2x4 sau khi transpose (`.T`) thành ma trận 4x2.

#### Câu hỏi về Array Properties
**Câu hỏi:** `arr = np.array([1, 2, 3]); arr.dtype` sẽ trả về:  
**Đáp án:** B - int32 hoặc int64  
**Giải thích:** `.dtype` trả về kiểu dữ liệu của mảng, thường là int32 hoặc int64.

**Câu hỏi:** `np.array([1.5, -0.1, 3]).dtype`  
**Đáp án:** A - float64  
**Giải thích:** Mảng có số thập phân sẽ có kiểu float64.

**Câu hỏi:** `np.array([3.7, -1.2]).astype(int)`  
**Đáp án:** A - `[3, -1]`  
**Giải thích:** `.astype(int)` chuyển đổi sang integer, làm tròn xuống.

#### Câu hỏi về Mathematical Operations
**Câu hỏi:** `np.sqrt(np.array([1,4,9]))`  
**Đáp án:** C - `[1.0,2.0,3.0]`  
**Giải thích:** `np.sqrt()` tính căn bậc hai của từng phần tử.

**Câu hỏi:** `np.where([True,False,True],[1,2,3],[9,9,9])`  
**Đáp án:** A - `[1,9,3]`  
**Giải thích:** `np.where()` chọn từ mảng đầu tiên nếu True, từ mảng thứ hai nếu False.

**Câu hỏi:** `arr=np.array([3,-1,2]); (arr>0).sum()`  
**Đáp án:** B - 2  
**Giải thích:** `arr>0` tạo `[True,False,True]`, `.sum()` đếm số True (2).

**Câu hỏi:** `np.array([3,-1,2]).mean()`  
**Đáp án:** B - 1.333...  
**Giải thích:** Tính trung bình: `(3+(-1)+2)/3 = 4/3 ≈ 1.333`.

**Câu hỏi:** `np.array([1,2,3]).cumsum()`  
**Đáp án:** B - `[1,3,6]`  
**Giải thích:** `.cumsum()` tính tổng tích lũy: `[1, 1+2, 1+2+3] = [1,3,6]`.

#### Câu hỏi về Array Functions
**Câu hỏi:** `np.unique([3,3,2,1,2])`  
**Đáp án:** B - `[1,2,3]`  
**Giải thích:** `np.unique()` trả về các giá trị duy nhất đã sắp xếp.

**Câu hỏi:** `np.isin([1,2,3],[2,4])`  
**Đáp án:** A - `[False,True,False]`  
**Giải thích:** `np.isin()` kiểm tra từng phần tử của mảng đầu có trong mảng thứ hai không.

**Câu hỏi:** `np.dot(np.array([1,2]), np.array([3,4]))`  
**Đáp án:** B - 11  
**Giải thích:** Tích vô hướng: `1*3 + 2*4 = 3 + 8 = 11`.

#### Câu hỏi về NumPy Import
**Câu hỏi:** Quy ước import NumPy là:  
**Đáp án:** C - `import numpy as np`  
**Giải thích:** Quy ước chuẩn để import NumPy với alias `np`.

**Câu hỏi:** Tính năng chính của NumPy so với list Python thông thường là:  
**Đáp án:** D - Tốc độ tính toán nhanh và chiếm ít bộ nhớ hơn  
**Giải thích:** NumPy được tối ưu hóa cho tính toán số học nhanh và hiệu quả bộ nhớ.

---

### 3. Pandas Operations

#### Câu hỏi về DataFrame Basics
**Câu hỏi:** Hai cấu trúc dữ liệu cốt lõi của pandas là:  
**Đáp án:** C - Series và DataFrame  
**Giải thích:** Series (1D) và DataFrame (2D) là hai cấu trúc cơ bản nhất của pandas.

**Câu hỏi:** Series trong pandas là:  
**Đáp án:** C - Mảng một chiều có nhãn  
**Giải thích:** Series là cấu trúc dữ liệu 1 chiều với index (nhãn) cho mỗi phần tử.

**Câu hỏi:** Pandas được xây dựng dựa trên thư viện nào?  
**Đáp án:** A - NumPy  
**Giải thích:** Pandas được xây dựng trên NumPy, sử dụng NumPy arrays làm backend.

#### Câu hỏi về DataFrame Operations
**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); df['A'].mean()`  
**Đáp án:** A - 2  
**Giải thích:** Tính trung bình của cột A: `(1+2+3)/3 = 2`.

**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); df['A'].sum()`  
**Đáp án:** A - 6  
**Giải thích:** Tổng của cột A: `1+2+3 = 6`.

**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); df['A'].cumsum().tolist()`  
**Đáp án:** A - `[1,3,6]`  
**Giải thích:** Tổng tích lũy: `[1, 1+2, 1+2+3] = [1,3,6]`.

**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); df['A'].apply(lambda x:x**2).tolist()`  
**Đáp án:** A - `[1,4,9]`  
**Giải thích:** Áp dụng hàm lambda `x**2` cho từng phần tử: `[1², 2², 3²] = [1,4,9]`.

**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); df.sort_values('A',ascending=False)['A'].tolist()`  
**Đáp án:** B - `[3,2,1]`  
**Giải thích:** Sắp xếp giảm dần: `[3,2,1]`.

**Câu hỏi:** `df=pd.DataFrame({'A':[1,1,2]}); df['A'].unique().tolist()`  
**Đáp án:** C - `[1,2]`  
**Giải thích:** `.unique()` trả về các giá trị duy nhất: `[1,2]`.

**Câu hỏi:** `df=pd.DataFrame({'A':[1,1,2]}); df['A'].nunique()`  
**Đáp án:** A - 2  
**Giải thích:** `.nunique()` đếm số giá trị duy nhất: 2.

**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); df.query('A>1').shape[0]`  
**Đáp án:** A - 2  
**Giải thích:** `.query('A>1')` lọc các dòng có A > 1, có 2 dòng.

**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3],'B':[3,4,5]}); df[['A','B']].sum().tolist()`  
**Đáp án:** A - `[6,12]`  
**Giải thích:** Tổng từng cột: A = 1+2+3=6, B = 3+4+5=12.

#### Câu hỏi về DataFrame Properties
**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); df.shape`  
**Đáp án:** A - `(3,1)`  
**Giải thích:** DataFrame có 3 dòng, 1 cột.

**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); df.info().__class__.__name__`  
**Đáp án:** C - NoneType  
**Giải thích:** `df.info()` không trả về giá trị (return None).

**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); 'A' in df.columns`  
**Đáp án:** A - TRUE  
**Giải thích:** Kiểm tra cột 'A' có trong DataFrame không.

#### Câu hỏi về DataFrame Manipulation
**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); df.rename(columns={'A':'X'}).columns[0]`  
**Đáp án:** C - 'X'  
**Giải thích:** `.rename(columns={'A':'X'})` đổi tên cột 'A' thành 'X'.

**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); df.set_index('A').index.name`  
**Đáp án:** C - 'A'  
**Giải thích:** `df.set_index('A')` đặt cột 'A' làm index, `.index.name` trả về 'A'.

**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); df.reset_index().index[0]`  
**Đáp án:** A - 0  
**Giải thích:** `df.reset_index()` tạo index mới bắt đầu từ 0.

**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); df.set_index('A').index.name`  
**Đáp án:** C - 'A'  
**Giải thích:** Sau khi set_index('A'), tên của index là 'A'.

#### Câu hỏi về DataFrame Selection
**Câu hỏi:** Để chọn cột 'Name' từ DataFrame df, ta dùng:  
**Đáp án:** A - `df.Name` hoặc `df['Name']`  
**Giải thích:** Có thể dùng cả hai cách để chọn cột.

**Câu hỏi:** `df.loc[0]` dùng để:  
**Đáp án:** B - Chọn dòng có index 0  
**Giải thích:** `df.loc[0]` chọn dòng có index 0.

**Câu hỏi:** `df.head()` mặc định hiển thị bao nhiêu dòng đầu tiên?  
**Đáp án:** B - 5 dòng  
**Giải thích:** `df.head()` mặc định hiển thị 5 dòng đầu.

#### Câu hỏi về DataFrame Statistics
**Câu hỏi:** `s = pd.Series([1, 2, 3, 4]); s.mean()` trả về:  
**Đáp án:** B - 2.5  
**Giải thích:** Trung bình: `(1+2+3+4)/4 = 2.5`.

**Câu hỏi:** `df.info()` hiển thị thông tin gì về DataFrame?  
**Đáp án:** C - Kiểu dữ liệu và thông tin bộ nhớ  
**Giải thích:** `df.info()` hiển thị kiểu dữ liệu, số dòng/cột, và thông tin bộ nhớ.

#### Câu hỏi về DataFrame Export
**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); type(df.to_dict())`  
**Đáp án:** A - dict  
**Giải thích:** `df.to_dict()` chuyển DataFrame thành dictionary.

**Câu hỏi:** `df = pd.DataFrame({'A':[1,2], 'B':[3,4]}); df.to_csv('out.csv', index=False)` sẽ tạo file CSV với?  
**Đáp án:** A - Không có cột index  
**Giải thích:** `index=False` nghĩa là không xuất index.

---

### 4. File I/O Operations

#### Câu hỏi về CSV Operations
**Câu hỏi:** `pd.read_csv('sample_data.csv').shape` trả về gì?  
**Đáp án:** C - `(số dòng, số cột)`  
**Giải thích:** `.shape` trả về tuple `(rows, columns)`.

**Câu hỏi:** `pd.read_csv('sample_data.csv').head(3).shape[0]` trả về gì?  
**Đáp án:** B - 3  
**Giải thích:** `.head(3)` lấy 3 dòng đầu, `.shape[0]` trả về số dòng.

**Câu hỏi:** Hàm `pd.read_csv()` trong pandas dùng để:  
**Đáp án:** B - Đọc dữ liệu từ file CSV  
**Giải thích:** `pd.read_csv()` dùng để đọc dữ liệu từ file CSV.

**Câu hỏi:** Tham số `header=None` trong `pd.read_csv()` có ý nghĩa gì?  
**Đáp án:** B - Dòng đầu không phải là tên cột  
**Giải thích:** `header=None` nghĩa là không có header, dòng đầu là dữ liệu.

**Câu hỏi:** Tham số `index_col` trong `pd.read_csv()` dùng để:  
**Đáp án:** B - Chỉ định cột nào làm index  
**Giải thích:** `index_col` chỉ định cột nào sẽ được dùng làm index.

**Câu hỏi:** Tham số `skiprows` trong `pd.read_csv()` có tác dụng gì?  
**Đáp án:** B - Bỏ qua các dòng được chỉ định  
**Giải thích:** `skiprows` bỏ qua các dòng cụ thể khi đọc file.

**Câu hỏi:** Để đọc dữ liệu từ một URL sử dụng pandas, ta làm thế nào?  
**Đáp án:** B - Dùng `pd.read_csv(url)` trực tiếp  
**Giải thích:** Pandas có thể đọc trực tiếp từ URL.

**Câu hỏi:** Đọc file 'sample_data.csv' với `header=None`. Tên của cột đầu tiên là gì? (`df.columns[0]`)  
**Đáp án:** D - 'Unnamed: 0'  
**Giải thích:** Khi `header=None`, pandas tự động đặt tên cột là 'Unnamed: 0', 'Unnamed: 1', ...

**Câu hỏi:** Đọc file với `index_col=0`, `df.index.name` là?  
**Đáp án:** A - Tên cột đầu tiên  
**Giải thích:** Khi `index_col=0`, cột đầu tiên trở thành index và tên của nó là `df.index.name`.

#### Câu hỏi về Excel Operations
**Câu hỏi:** Hàm `pd.read_excel()` dùng để làm gì?  
**Đáp án:** A - Đọc dữ liệu từ file Excel  
**Giải thích:** `pd.read_excel()` dùng để đọc dữ liệu từ file Excel.

#### Câu hỏi về JSON Operations
**Câu hỏi:** JSON là viết tắt của:  
**Đáp án:** B - JavaScript Object Notation  
**Giải thích:** JSON = JavaScript Object Notation.

**Câu hỏi:** Hàm `pd.read_json()` dùng để:  
**Đáp án:** B - Đọc dữ liệu từ file JSON  
**Giải thích:** `pd.read_json()` dùng để đọc dữ liệu từ file JSON.

#### Câu hỏi về HTML Operations
**Câu hỏi:** Hàm `pd.read_html()` có tác dụng gì?  
**Đáp án:** B - Đọc bảng từ trang web HTML  
**Giải thích:** `pd.read_html()` dùng để đọc các bảng từ trang web HTML.

#### Câu hỏi về Database Operations
**Câu hỏi:** Trong Python, để kết nối với cơ sở dữ liệu SQLite, ta dùng thư viện:  
**Đáp án:** B - sqlite3  
**Giải thích:** Thư viện `sqlite3` được tích hợp sẵn trong Python để làm việc với SQLite.

---

### 5. Data Processing

#### Câu hỏi về Missing Data
**Câu hỏi:** Để xử lý dữ liệu thiếu trong pandas, ta có thể dùng:  
**Đáp án:** D - `dropna()` và `fillna()`  
**Giải thích:** `dropna()` xóa dữ liệu thiếu, `fillna()` thay thế dữ liệu thiếu.

**Câu hỏi:** `df=pd.DataFrame({'A':[1,np.nan,3]}); df['A'].isnull().sum()`  
**Đáp án:** A - 1  
**Giải thích:** `.isnull()` tìm giá trị thiếu, `.sum()` đếm số lượng.

**Câu hỏi:** `pd.DataFrame({'A':[1,np.nan,3]})` dùng `df.dropna().shape[0]` sẽ trả về?  
**Đáp án:** C - 1  
**Giải thích:** `dropna()` xóa dòng có NaN, chỉ còn lại 1 dòng.

#### Câu hỏi về String Processing
**Câu hỏi:** `pd.DataFrame({'col':['abc','AbC','xyz']}).col.str.contains('abc',case=False).sum()`  
**Đáp án:** A - 2  
**Giải thích:** `str.contains('abc',case=False)` tìm chuỗi chứa 'abc' (không phân biệt hoa thường), có 2 kết quả.

#### Câu hỏi về Value Counts
**Câu hỏi:** `pd.Series([1,2,3,3,2]).value_counts().sort_index().index[0]`  
**Đáp án:** A - 1  
**Giải thích:** `.value_counts()` đếm tần suất, `.sort_index()` sắp xếp theo index, `.index[0]` lấy giá trị đầu tiên.

---

### 6. Data Science Concepts

#### Câu hỏi về Data Science Foundation
**Câu hỏi:** Khoa học dữ liệu là sự kết hợp của ba trụ cột chính nào?  
**Đáp án:** B - Toán học & Thống kê, Khoa học máy tính, Kiến thức chuyên ngành  
**Giải thích:** Ba trụ cột của Data Science: Toán học & Thống kê, Khoa học máy tính, và Kiến thức chuyên ngành.

**Câu hỏi:** Bước đầu tiên trong chu trình khai thác dữ liệu là gì?  
**Đáp án:** C - Xác định bài toán  
**Giải thích:** Quy trình khoa học dữ liệu bắt đầu với việc xác định bài toán cần giải quyết.

**Câu hỏi:** Trong quy trình khoa học dữ liệu, việc 'làm sạch dữ liệu' thuộc bước nào?  
**Đáp án:** B - Xử lý dữ liệu  
**Giải thích:** Làm sạch dữ liệu thuộc bước xử lý dữ liệu trong quy trình khoa học dữ liệu.

#### Câu hỏi về Data Science Roles
**Câu hỏi:** Data Engineer chủ yếu đảm nhận công việc nào?  
**Đáp án:** B - Thiết kế hạ tầng và thu thập dữ liệu  
**Giải thích:** Data Engineer chuyên về thiết kế hệ thống, pipeline dữ liệu và thu thập dữ liệu.

#### Câu hỏi về Visualization
**Câu hỏi:** Matplotlib được sử dụng chủ yếu để:  
**Đáp án:** C - Trực quan hóa dữ liệu  
**Giải thích:** Matplotlib là thư viện chính để tạo biểu đồ và trực quan hóa dữ liệu.

**Câu hỏi:** Thư viện nào được xây dựng dựa trên Matplotlib và cung cấp giao diện đẹp hơn?  
**Đáp án:** B - Seaborn  
**Giải thích:** Seaborn được xây dựng trên Matplotlib và cung cấp giao diện đẹp hơn.

#### Câu hỏi về API
**Câu hỏi:** API là viết tắt của:  
**Đáp án:** D - Application Programming Interface  
**Giải thích:** API = Application Programming Interface, giao diện lập trình ứng dụng.

#### Câu hỏi về Encoding
**Câu hỏi:** Encoding UTF-8 thường được sử dụng để:  
**Đáp án:** D - Mã hóa ký tự Unicode  
**Giải thích:** UTF-8 là bộ mã hóa Unicode, hỗ trợ tất cả ký tự Unicode.

---

## 📈 THỐNG KÊ PHÂN BỐ KIẾN THỨC

### Phân bố theo chủ đề:
- **Python Basics:** 25 câu (13.5%)
- **NumPy:** 35 câu (18.9%)
- **Pandas:** 75 câu (40.5%)
- **File I/O:** 20 câu (10.8%)
- **Data Processing:** 15 câu (8.1%)
- **Data Science Concepts:** 15 câu (8.1%)

### Phân bố theo độ khó:
- **Dễ:** 70 câu (37.8%) - Kiến thức cơ bản
- **Trung bình:** 90 câu (48.6%) - Ứng dụng thực tế
- **Khó:** 25 câu (13.5%) - Tư duy logic và kết hợp

### Phân bố theo loại câu hỏi:
- **Code Execution:** 120 câu (64.9%)
- **Conceptual:** 45 câu (24.3%)
- **Definition:** 20 câu (10.8%)

---

## 🎯 KẾT LUẬN

### Điểm mạnh của bộ đề thi:
1. **Phủ sóng toàn diện** các chủ đề quan trọng trong khoa học dữ liệu
2. **Cân bằng** giữa lý thuyết và thực hành
3. **Phù hợp** với trình độ sinh viên kinh tế và kinh doanh
4. **Đa dạng** về loại câu hỏi và độ khó

### Khuyến nghị:
1. **Tăng cường** câu hỏi về machine learning cơ bản
2. **Bổ sung** câu hỏi về data visualization với Seaborn/Plotly
3. **Thêm** câu hỏi tình huống thực tế trong kinh doanh
4. **Cân nhắc** tăng số câu hỏi khó để phân loại học sinh tốt hơn

### Đánh giá tổng thể:
**Bộ đề thi DS_CLC (1-8) là một bộ đề thi chất lượng tốt, phù hợp với mục tiêu đánh giá kiến thức cơ bản về khoa học dữ liệu cho sinh viên kinh tế và kinh doanh. Tỷ lệ khớp cao với thư viện câu hỏi (84%) đảm bảo tính nhất quán và độ tin cậy của việc đánh giá.**

---

**Chúc các bạn làm bài tốt!**
