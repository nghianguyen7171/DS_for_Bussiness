# ĐÁP ÁN VÀ GIẢI THÍCH CHI TIẾT - ĐỀ THI GIỮA KỲ DS_CLC-1

**Môn học:** Khoa học dữ liệu trong Kinh tế và Kinh doanh  
**Mã đề thi:** DS_CLC-1  
**Thời gian:** 60 phút  
**Tổng số câu:** 40 câu hỏi trắc nghiệm  

---

## CÂU 1: Python List Operations
**Câu hỏi:** `names = ['A','B','C']; names[0] = 'Z'; print(names)`

**Đáp án:** D - `['Z','B','C']`

**Giải thích:** 
- Trong Python, list là mutable (có thể thay đổi)
- `names[0] = 'Z'` thay đổi phần tử đầu tiên từ 'A' thành 'Z'
- Kết quả: `['Z','B','C']`

---

## CÂU 2: NumPy Array Creation
**Câu hỏi:** Hàm nào trong NumPy dùng để tạo mảng chứa toàn số 0?

**Đáp án:** D - `np.zeros()`

**Giải thích:**
- `np.zeros()` tạo mảng với tất cả phần tử là 0
- `np.ones()` tạo mảng với tất cả phần tử là 1
- `np.empty()` tạo mảng với giá trị ngẫu nhiên
- `np.full()` tạo mảng với giá trị được chỉ định

---

## CÂU 3: Pandas DataFrame Shape
**Câu hỏi:** `pd.read_csv('sample_data.csv').shape` trả về gì?

**Đáp án:** C - `(số dòng, số cột)`

**Giải thích:**
- Thuộc tính `.shape` của DataFrame trả về tuple `(rows, columns)`
- Format: `(số_dòng, số_cột)`
- Ví dụ: DataFrame có 100 dòng, 5 cột → `(100, 5)`

---

## CÂU 4: Data Engineer Role
**Câu hỏi:** Data Engineer chủ yếu đảm nhận công việc nào?

**Đáp án:** B - Thiết kế hạ tầng và thu thập dữ liệu

**Giải thích:**
- **Data Engineer:** Thiết kế hệ thống, pipeline dữ liệu, thu thập và lưu trữ
- **Data Scientist:** Xây dựng mô hình machine learning
- **Data Analyst:** Phân tích thống kê và trực quan hóa
- **Data Visualization Specialist:** Trực quan hóa dữ liệu

---

## CÂU 5: String Split Method
**Câu hỏi:** `' a b c '.split()`

**Đáp án:** A - `['a','b','c']`

**Giải thích:**
- Phương thức `.split()` mặc định chia chuỗi theo khoảng trắng
- Loại bỏ khoảng trắng đầu và cuối
- Kết quả: `['a','b','c']` (list các từ)

---

## CÂU 6: NumPy Array Operations
**Câu hỏi:** Kết quả của đoạn code: `np.arange(5) * 2`

**Đáp án:** A - `[0 2 4 6 8]`

**Giải thích:**
- `np.arange(5)` tạo mảng `[0, 1, 2, 3, 4]`
- Phép nhân `* 2` áp dụng cho từng phần tử
- Kết quả: `[0*2, 1*2, 2*2, 3*2, 4*2] = [0, 2, 4, 6, 8]`

---

## CÂU 7: Character Encoding
**Câu hỏi:** Encoding UTF-8 thường được sử dụng để:

**Đáp án:** D - Mã hóa ký tự Unicode

**Giải thích:**
- **UTF-8:** Unicode Transformation Format 8-bit
- Hỗ trợ tất cả ký tự Unicode (tiếng Việt, emoji, ký tự đặc biệt)
- Không phải để nén dữ liệu, bảo mật, hay tăng tốc độ

---

## CÂU 8: Pandas Missing Data
**Câu hỏi:** Để xử lý dữ liệu thiếu trong pandas, ta có thể dùng:

**Đáp án:** D - `dropna()` và `fillna()`

**Giải thích:**
- `dropna()`: Xóa các dòng/cột có giá trị thiếu
- `fillna()`: Thay thế giá trị thiếu bằng giá trị khác
- `delete()`, `remove()`, `clear()` không phải phương thức của pandas

---

## CÂU 9: NumPy Boolean Operations
**Câu hỏi:** `arr=np.array([3,-1,2]); (arr>0).sum()`

**Đáp án:** B - 2

**Giải thích:**
- `arr>0` tạo mảng boolean: `[True, False, True]`
- `.sum()` đếm số `True` (True = 1, False = 0)
- Kết quả: `1 + 0 + 1 = 2`

---

## CÂU 10: NumPy Full Name
**Câu hỏi:** NumPy là viết tắt của:

**Đáp án:** C - Numerical Python

**Giải thích:**
- **NumPy** = **Num**erical **Py**thon
- Thư viện tính toán số học cho Python
- Không phải "Number Python", "Numeric Python", hay "Numerical Processing"

---

## CÂU 11: Python Tuple Indexing
**Câu hỏi:** `x = (1,2,3); x[0]`

**Đáp án:** A - 1

**Giải thích:**
- Tuple là immutable sequence
- Indexing bắt đầu từ 0
- `x[0]` trả về phần tử đầu tiên: `1`

---

## CÂU 12: Lambda Functions
**Câu hỏi:** `add_one = lambda x:x+1; add_one(5)`

**Đáp án:** B - 6

**Giải thích:**
- Lambda function: `lambda x: x+1`
- Áp dụng cho `x=5`: `5+1 = 6`
- Lambda là cách viết hàm ngắn gọn

---

## CÂU 13: Pandas Foundation
**Câu hỏi:** Pandas được xây dựng dựa trên thư viện nào?

**Đáp án:** A - NumPy

**Giải thích:**
- Pandas được xây dựng trên NumPy
- DataFrame và Series sử dụng NumPy arrays làm backend
- NumPy cung cấp tính toán số học nhanh

---

## CÂU 14: Pandas DataFrame Shape
**Câu hỏi:** Giả sử file sample_data.csv có 3 dòng 5 cột. `pd.read_csv('sample_data.csv').head(3).shape[0]` trả về gì?

**Đáp án:** B - 3

**Giải thích:**
- File có 3 dòng, `.head(3)` lấy 3 dòng đầu
- `.shape[0]` trả về số dòng
- Kết quả: `3`

---

## CÂU 15: Python Dictionary
**Câu hỏi:** `house = {'price':10}; house['price']=15; house['price']`

**Đáp án:** C - 15

**Giải thích:**
- Dictionary có thể thay đổi giá trị
- `house['price']=15` gán giá trị mới
- Kết quả: `15`

---

## CÂU 16: List Comprehension
**Câu hỏi:** `[i for i in range(5) if i%2==0]`

**Đáp án:** A - `[0,2,4]`

**Giải thích:**
- `range(5)` tạo `[0,1,2,3,4]`
- `i%2==0` kiểm tra số chẵn
- Kết quả: `[0,2,4]` (các số chẵn từ 0 đến 4)

---

## CÂU 17: Pandas Data Structures
**Câu hỏi:** Hai cấu trúc dữ liệu cốt lõi của pandas là:

**Đáp án:** C - Series và DataFrame

**Giải thích:**
- **Series:** Mảng 1 chiều có nhãn (index)
- **DataFrame:** Bảng 2 chiều (dòng và cột)
- Đây là 2 cấu trúc cơ bản nhất của pandas

---

## CÂU 18: NumPy Array Reshape
**Câu hỏi:** Kết quả của đoạn code: `np.arange(6).reshape(2,3).shape`

**Đáp án:** D - `(2,3)`

**Giải thích:**
- `np.arange(6)` tạo `[0,1,2,3,4,5]`
- `.reshape(2,3)` chuyển thành ma trận 2x3
- `.shape` trả về `(2,3)`

---

## CÂU 19: Pandas DataFrame Info
**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); df.info().__class__.__name__`

**Đáp án:** C - NoneType

**Giải thích:**
- `df.info()` hiển thị thông tin DataFrame
- Phương thức này không trả về giá trị (return None)
- `None.__class__.__name__` = `'NoneType'`

---

## CÂU 20: Pandas Series Definition
**Câu hỏi:** Series trong pandas là:

**Đáp án:** C - Mảng một chiều có nhãn

**Giải thích:**
- Series là cấu trúc dữ liệu 1 chiều
- Có index (nhãn) cho mỗi phần tử
- Khác với DataFrame (2 chiều)

---

## CÂU 21: Pandas Index Name
**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); df.set_index('A').index.name`

**Đáp án:** A - 'A'

**Giải thích:**
- `df.set_index('A')` đặt cột 'A' làm index
- `.index.name` trả về tên của index
- Kết quả: `'A'`

---

## CÂU 22: Pandas CSV Parameters
**Câu hỏi:** Tham số skiprows trong pd.read_csv() có tác dụng gì?

**Đáp án:** B - Bỏ qua các dòng được chỉ định

**Giải thích:**
- `skiprows` bỏ qua các dòng cụ thể khi đọc file
- Ví dụ: `skiprows=[0,2]` bỏ qua dòng 0 và 2
- Không phải để đếm, chọn, hay sắp xếp

---

## CÂU 23: NumPy Main Object
**Câu hỏi:** Đối tượng chính của NumPy để lưu trữ dữ liệu là:

**Đáp án:** A - ndarray

**Giải thích:**
- **ndarray** (N-dimensional array) là đối tượng chính của NumPy
- Có thể có nhiều chiều (1D, 2D, 3D, ...)
- `array`, `matrix`, `vector` không phải tên chính thức

---

## CÂU 24: Pandas Column Rename
**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); df.rename(columns={'A':'X'}).columns[0]`

**Đáp án:** C - 'X'

**Giải thích:**
- `df.rename(columns={'A':'X'})` đổi tên cột 'A' thành 'X'
- `.columns[0]` lấy tên cột đầu tiên
- Kết quả: `'X'`

---

## CÂU 25: Pandas CSV Header
**Câu hỏi:** Đọc file 'sample_data.csv' với header=None. Tên của cột đầu tiên là gì? (df.columns[0])

**Đáp án:** D - 'Unnamed: 0'

**Giải thích:**
- `header=None` nghĩa là không có header
- Pandas tự động đặt tên cột: 'Unnamed: 0', 'Unnamed: 1', ...
- Cột đầu tiên: `'Unnamed: 0'`

---

## CÂU 26: Pandas CSV Export
**Câu hỏi:** `df = pd.DataFrame({'A':[1,2], 'B':[3,4]}); df.to_csv('out.csv', index=False)` sẽ tạo file CSV với?

**Đáp án:** A - Không có cột index

**Giải thích:**
- `index=False` nghĩa là không xuất index
- File CSV chỉ chứa dữ liệu cột A và B
- Không có cột index

---

## CÂU 27: NumPy Type Conversion
**Câu hỏi:** `np.array([3.7, -1.2]).astype(int)`

**Đáp án:** A - `[3, -1]`

**Giải thích:**
- `.astype(int)` chuyển đổi sang integer
- `3.7` → `3` (làm tròn xuống)
- `-1.2` → `-1` (làm tròn xuống)

---

## CÂU 28: NumPy Array Slicing
**Câu hỏi:** `arr = np.arange(10); arr[2:5]` sẽ trả về:

**Đáp án:** D - `[2, 3, 4]`

**Giải thích:**
- `np.arange(10)` tạo `[0,1,2,3,4,5,6,7,8,9]`
- `arr[2:5]` lấy từ index 2 đến 4 (không bao gồm 5)
- Kết quả: `[2,3,4]`

---

## CÂU 29: Data Science Process
**Câu hỏi:** Bước đầu tiên trong chu trình khai thác dữ liệu là gì?

**Đáp án:** C - Xác định bài toán

**Giải thích:**
- Quy trình khoa học dữ liệu:
  1. **Xác định bài toán** (Problem Definition)
  2. Thu thập dữ liệu (Data Collection)
  3. Xử lý dữ liệu (Data Processing)
  4. Xây dựng mô hình (Model Building)

---

## CÂU 30: Pandas Reset Index
**Câu hỏi:** `df=pd.DataFrame({'A':[1,2,3]}); df.reset_index().index[0]`

**Đáp án:** B - 0

**Giải thích:**
- `df.reset_index()` tạo index mới bắt đầu từ 0
- `.index[0]` lấy giá trị index đầu tiên
- Kết quả: `0`

---

## CÂU 31: Pandas DataFrame Class
**Câu hỏi:** Giả sử có file 'sample_data.csv' (3 cột: Name, Age, Score). Kết quả của `pd.read_csv('sample_data.csv').__class__.__name__` là gì?

**Đáp án:** A - DataFrame

**Giải thích:**
- `pd.read_csv()` trả về đối tượng DataFrame
- `.__class__.__name__` lấy tên class
- Kết quả: `'DataFrame'`

---

## CÂU 32: NumPy Cumulative Sum
**Câu hỏi:** `np.array([1,2,3]).cumsum()`

**Đáp án:** B - `[1,3,6]`

**Giải thích:**
- `.cumsum()` tính tổng tích lũy
- `[1, 1+2, 1+2+3] = [1, 3, 6]`
- Mỗi phần tử là tổng của tất cả phần tử trước đó

---

## CÂU 33: NumPy Array Creation
**Câu hỏi:** `np.zeros((2, 3))` tạo ra mảng có kích thước:

**Đáp án:** D - 2 dòng, 3 cột

**Giải thích:**
- `np.zeros((2, 3))` tạo ma trận 2x3
- Format: `(rows, columns)`
- Kết quả: 2 dòng, 3 cột

---

## CÂU 34: Data Science Pillars
**Câu hỏi:** Khoa học dữ liệu là sự kết hợp của ba trụ cột chính nào?

**Đáp án:** B - Toán học & Thống kê, Khoa học máy tính, Kiến thức chuyên ngành

**Giải thích:**
- **3 trụ cột của Data Science:**
  1. **Toán học & Thống kê:** Phân tích, mô hình hóa
  2. **Khoa học máy tính:** Lập trình, thuật toán
  3. **Kiến thức chuyên ngành:** Hiểu biết về lĩnh vực cụ thể

---

## CÂU 35: Python Indentation
**Câu hỏi:** Dấu thụt lề (indentation) trong Python có vai trò gì?

**Đáp án:** C - Xác định cấu trúc khối lệnh

**Giải thích:**
- Python sử dụng indentation để định nghĩa khối lệnh
- Thay vì dùng `{}` như C/Java
- Quan trọng cho cấu trúc code, không chỉ để làm đẹp

---

## CÂU 36: Python Modulo Operator
**Câu hỏi:** Phép toán 7 % 2 trong Python cho kết quả là: 7 % 2

**Đáp án:** B - 1

**Giải thích:**
- `%` là toán tử modulo (chia lấy dư)
- `7 % 2 = 1` (7 chia 2 được 3 dư 1)
- Modulo trả về phần dư của phép chia

---

## CÂU 37: NumPy Import Convention
**Câu hỏi:** Quy ước import NumPy là:

**Đáp án:** C - `import numpy as np`

**Giải thích:**
- Quy ước chuẩn: `import numpy as np`
- `np` là alias ngắn gọn cho numpy
- Được sử dụng rộng rãi trong cộng đồng Python

---

## CÂU 38: String Strip Method
**Câu hỏi:** `' hello '.strip()`

**Đáp án:** A - 'hello'

**Giải thích:**
- `.strip()` loại bỏ khoảng trắng đầu và cuối chuỗi
- `' hello '` → `'hello'`
- Không thay đổi khoảng trắng ở giữa

---

## CÂU 39: API Definition
**Câu hỏi:** API là viết tắt của:

**Đáp án:** D - Application Programming Interface

**Giải thích:**
- **API** = **A**pplication **P**rogramming **I**nterface
- Giao diện lập trình ứng dụng
- Cho phép các ứng dụng giao tiếp với nhau

---

## CÂU 40: NumPy Array Transpose
**Câu hỏi:** `np.arange(8).reshape(2,4).T.shape`

**Đáp án:** B - `(4,2)`

**Giải thích:**
- `np.arange(8).reshape(2,4)` tạo ma trận 2x4
- `.T` là transpose (chuyển vị)
- Ma trận 2x4 → ma trận 4x2
- `.shape` trả về `(4,2)`

---

## TỔNG KẾT

**Điểm tối đa:** 40 điểm (mỗi câu 1 điểm)

**Phân bố kiến thức:**
- **Python cơ bản:** 8 câu (20%)
- **NumPy:** 12 câu (30%)
- **Pandas:** 15 câu (37.5%)
- **Khoa học dữ liệu:** 5 câu (12.5%)

**Lưu ý quan trọng:**
- Tất cả câu hỏi đều có 4 lựa chọn (A, B, C, D)
- Mỗi câu chỉ có 1 đáp án đúng
- Thời gian làm bài: 60 phút
- Không được sử dụng tài liệu

**Chúc các bạn làm bài tốt!**
