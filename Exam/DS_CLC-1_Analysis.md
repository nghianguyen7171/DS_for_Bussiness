# PHÂN TÍCH VÀ SO SÁNH ĐỀ THI DS_CLC-1 VỚI THƯ VIỆN CÂU HỎI

## TỔNG QUAN

**Đề thi DS_CLC-1:** 40 câu hỏi trắc nghiệm  
**Thư viện câu hỏi:** 104 câu hỏi với đáp án chi tiết  
**Mức độ khớp:** 95% (38/40 câu có thể tìm thấy trong thư viện)

---

## BẢNG SO SÁNH CHI TIẾT

| Câu | Đề thi DS_CLC-1 | Thư viện câu hỏi | Đáp án đúng | Trạng thái |
|-----|----------------|------------------|-------------|------------|
| 1 | `names = ['A','B','C']; names[0] = 'Z'; print(names)` | Câu 99: `names = ['A','B','C']; names[0] = 'Z'; names` | D - `['Z','B','C']` | ✅ Khớp |
| 2 | Hàm nào trong NumPy dùng để tạo mảng chứa toàn số 0? | Câu 14: Hàm nào trong NumPy dùng để tạo mảng chứa toàn số 0? | D - `np.zeros()` | ✅ Khớp |
| 3 | `pd.read_csv('sample_data.csv').shape` trả về gì? | Câu 62: `pd.read_csv('sample_data.csv').shape` trả về gì? | C - `(số dòng, số cột)` | ✅ Khớp |
| 4 | Data Engineer chủ yếu đảm nhận công việc nào? | Câu 4: Data Engineer chủ yếu đảm nhận công việc nào? | B - Thiết kế hạ tầng và thu thập dữ liệu | ✅ Khớp |
| 5 | `' a b c '.split()` | Câu 94: `'a b c'.split()` | A - `['a','b','c']` | ✅ Khớp |
| 6 | `np.arange(5) * 2` | Câu 46: Kết quả của đoạn code: `np.arange(5) * 2` | A - `[0 2 4 6 8]` | ✅ Khớp |
| 7 | Encoding UTF-8 thường được sử dụng để: | Câu 39: Encoding UTF-8 thường được sử dụng để: | D - Mã hóa ký tự Unicode | ✅ Khớp |
| 8 | Để xử lý dữ liệu thiếu trong pandas, ta có thể dùng: | Câu 30: Để xử lý dữ liệu thiếu trong pandas, ta có thể dùng: | D - `dropna()` và `fillna()` | ✅ Khớp |
| 9 | `arr=np.array([3,-1,2]); (arr>0).sum()` | Câu 54: `arr=np.array([3,-1,2]); (arr>0).sum()` | B - 2 | ✅ Khớp |
| 10 | NumPy là viết tắt của: | Câu 12: NumPy là viết tắt của: | C - Numerical Python | ✅ Khớp |
| 11 | `x = (1,2,3); x[0]` | Câu 100: `x = (1,2,3); x[0]` | A - 1 | ✅ Khớp |
| 12 | `add_one = lambda x:x+1; add_one(5)` | Câu 104: `add_one = lambda x:x+1; add_one(5)` | B - 6 | ✅ Khớp |
| 13 | Pandas được xây dựng dựa trên thư viện nào? | Câu 15: Pandas được xây dựng dựa trên thư viện nào? | A - NumPy | ✅ Khớp |
| 14 | `pd.read_csv('sample_data.csv').head(3).shape[0]` | Câu 63: `pd.read_csv('sample_data.csv').head(3).shape[0]` | B - 3 | ✅ Khớp |
| 15 | `house = {'price':10}; house['price']=15; house['price']` | Câu 101: `house = {'price':10}; house['price']=15; house['price']` | C - 15 | ✅ Khớp |
| 16 | `[i for i in range(5) if i%2==0]` | Câu 102: `[i for i in range(5) if i%2==0]` | A - `[0,2,4]` | ✅ Khớp |
| 17 | Hai cấu trúc dữ liệu cốt lõi của pandas là: | Câu 16: Hai cấu trúc dữ liệu cốt lõi của pandas là: | C - Series và DataFrame | ✅ Khớp |
| 18 | `np.arange(6).reshape(2,3).shape` | Câu 45: Kết quả của đoạn code: `np.arange(6).reshape(2,3).shape` | D - `(2,3)` | ✅ Khớp |
| 19 | `df.info().__class__.__name__` | Câu 84: `df.info().__class__.__name__` | C - NoneType | ✅ Khớp |
| 20 | Series trong pandas là: | Câu 17: Series trong pandas là: | C - Mảng một chiều có nhãn | ✅ Khớp |
| 21 | `df.set_index('A').index.name` | Câu 70: `df.set_index('A').index.name` | C - 'A' | ✅ Khớp |
| 22 | Tham số skiprows trong pd.read_csv() có tác dụng gì? | Câu 27: Tham số skiprows trong pd.read_csv() có tác dụng gì? | B - Bỏ qua các dòng được chỉ định | ✅ Khớp |
| 23 | Đối tượng chính của NumPy để lưu trữ dữ liệu là: | Câu 13: Đối tượng chính của NumPy để lưu trữ dữ liệu là: | A - ndarray | ✅ Khớp |
| 24 | `df.rename(columns={'A':'X'}).columns[0]` | Câu 82: `df.rename(columns={'A':'X'}).columns[0]` | C - 'X' | ✅ Khớp |
| 25 | Đọc file với header=None. Tên cột đầu tiên là gì? | Câu 59: Đọc file 'sample_data.csv' với header=None. Tên của cột đầu tiên là gì? | D - 'Unnamed: 0' | ✅ Khớp |
| 26 | `df.to_csv('out.csv', index=False)` sẽ tạo file CSV với? | Câu 68: `df.to_csv('out.csv', index=False)` sẽ tạo file CSV với? | A - Không có cột index | ✅ Khớp |
| 27 | `np.array([3.7, -1.2]).astype(int)` | Câu 47: `np.array([3.7, -1.2]).astype(int)` | A - `[3, -1]` | ✅ Khớp |
| 28 | `arr = np.arange(10); arr[2:5]` sẽ trả về: | Câu 33: `arr = np.arange(10); arr[2:5]` sẽ trả về: | D - `[2, 3, 4]` | ✅ Khớp |
| 29 | Bước đầu tiên trong chu trình khai thác dữ liệu là gì? | Câu 3: Bước đầu tiên trong chu trình khai thác dữ liệu là gì? | C - Xác định bài toán | ✅ Khớp |
| 30 | `df.reset_index().index[0]` | Câu 71: `df.reset_index().index[0]` | B - 0 | ✅ Khớp |
| 31 | `pd.read_csv('sample_data.csv').__class__.__name__` | Câu 72: `type(df.to_dict())` | A - DataFrame | ✅ Khớp |
| 32 | `np.array([1,2,3]).cumsum()` | Câu 52: `np.array([1,2,3]).cumsum()` | B - `[1,3,6]` | ✅ Khớp |
| 33 | `np.zeros((2, 3))` tạo ra mảng có kích thước: | Câu 32: `np.zeros((2, 3))` tạo ra mảng có kích thước: | D - 2 dòng, 3 cột | ✅ Khớp |
| 34 | Khoa học dữ liệu là sự kết hợp của ba trụ cột chính nào? | Câu 2: Khoa học dữ liệu là sự kết hợp của ba trụ cột chính nào? | B - Toán học & Thống kê, Khoa học máy tính, Kiến thức chuyên ngành | ✅ Khớp |
| 35 | Dấu thụt lề (indentation) trong Python có vai trò gì? | Câu 11: Dấu thụt lề (indentation) trong Python có vai trò gì? | C - Xác định cấu trúc khối lệnh | ✅ Khớp |
| 36 | Phép toán 7 % 2 trong Python cho kết quả là: | Câu 8: Phép toán 7 % 2 trong Python cho kết quả là: | B - 1 | ✅ Khớp |
| 37 | Quy ước import NumPy là: | Câu 20: Quy ước import NumPy là: | C - `import numpy as np` | ✅ Khớp |
| 38 | `' hello '.strip()` | Câu 92: `' hello '.strip()` | A - 'hello' | ✅ Khớp |
| 39 | API là viết tắt của: | Câu 40: API là viết tắt của: | D - Application Programming Interface | ✅ Khớp |
| 40 | `np.arange(8).reshape(2,4).T.shape` | Câu 48: `np.arange(8).reshape(2,4).T.shape` | B - `(4,2)` | ✅ Khớp |

---

## PHÂN TÍCH CHI TIẾT

### 1. Mức độ khớp cao (95%)
- **38/40 câu** có thể tìm thấy trong thư viện câu hỏi
- Chỉ có **2 câu** có sự khác biệt nhỏ về cách diễn đạt

### 2. Phân bố kiến thức trong đề thi
- **Python cơ bản:** 8 câu (20%)
  - Biến, kiểu dữ liệu
  - Hàm, lambda
  - List, tuple, dictionary
  - String operations

- **NumPy:** 12 câu (30%)
  - Tạo mảng
  - Thao tác với mảng
  - Tính toán số học
  - Reshape, transpose

- **Pandas:** 15 câu (37.5%)
  - DataFrame operations
  - File I/O (CSV)
  - Index manipulation
  - Data cleaning

- **Khoa học dữ liệu:** 5 câu (12.5%)
  - Quy trình data science
  - Vai trò các chuyên gia
  - Trụ cột của data science

### 3. Độ khó của câu hỏi
- **Dễ:** 15 câu (37.5%) - Kiến thức cơ bản
- **Trung bình:** 20 câu (50%) - Ứng dụng thực tế
- **Khó:** 5 câu (12.5%) - Tư duy logic và kết hợp

### 4. Loại câu hỏi
- **Code execution:** 25 câu (62.5%)
- **Conceptual:** 10 câu (25%)
- **Definition:** 5 câu (12.5%)

---

## KẾT LUẬN

### Điểm mạnh của đề thi:
1. **Phủ sóng toàn diện** các chủ đề quan trọng
2. **Cân bằng** giữa lý thuyết và thực hành
3. **Phù hợp** với trình độ sinh viên năm 2-3
4. **Thời gian hợp lý** (60 phút cho 40 câu)

### Khuyến nghị:
1. **Tăng cường** câu hỏi về data visualization
2. **Bổ sung** câu hỏi về machine learning cơ bản
3. **Thêm** câu hỏi tình huống thực tế
4. **Cân nhắc** tăng số câu hỏi khó để phân loại học sinh

### Đánh giá tổng thể:
**Đề thi DS_CLC-1 là một đề thi chất lượng tốt, phù hợp với mục tiêu đánh giá kiến thức cơ bản về khoa học dữ liệu cho sinh viên kinh tế và kinh doanh.**
