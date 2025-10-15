---

# 📚 TỔNG KẾT BÀI HỌC

## 🎯 Kiến thức đã học

### ✅ Phần 1: Xử lý dữ liệu thiếu
- **Phát hiện**: `.isna()`, `.isnull()`, `.isna().sum()`
- **Loại bỏ**: `.dropna(how='any'/'all', axis=0/1)`
- **Thay thế**: `.fillna(value/method/dict)`
- **Dự đoán**: Random Forest, KNN Imputer

### ✅ Phần 2: Xử lý dữ liệu trùng lặp
- **Phát hiện**: `.duplicated()`
- **Loại bỏ**: `.drop_duplicates()`

### ✅ Phần 3: Chuẩn hóa dữ liệu
- **MinMaxScaler**: Đưa về [0,1]
- **StandardScaler**: Mean=0, Std=1
- **RobustScaler**: Median=0, IQR=1

### ✅ Phần 4: Xử lý chuỗi ký tự
- **String methods**: `.str.lower()`, `.str.upper()`, `.str.strip()`
- **Regular Expressions**: Pattern matching với `.str.contains()`, `.str.extract()`

### ✅ Phần 5: Dữ liệu phân loại
- **Label Encoding**: Chuyển thành số nguyên
- **One-Hot Encoding**: Tạo binary columns

---

## 🏆 BÀI TẬP THỰC HÀNH

### 📝 Phần A: Bài tập cơ bản (Dễ)

**Bài 1:** Phát hiện và xử lý missing data
```python
# Tạo DataFrame với missing data
import pandas as pd
import numpy as np

data = {
    'Ten': ['An', 'Bình', 'Chi', 'Dũng'],
    'Tuoi': [25, None, 30, 28],
    'Luong': [15000000, 18000000, None, 22000000]
}
df = pd.DataFrame(data)

# TODO: 
# 1. Kiểm tra số lượng missing values với df.isna().sum()
# 2. Thay thế missing values bằng median
# 3. Hiển thị kết quả
```

**Bài 2:** Loại bỏ duplicate data
```python
# Tạo DataFrame có duplicates
data = {
    'Ten': ['An', 'Bình', 'Chi', 'An'],
    'Tuoi': [25, 30, 35, 25],
    'Luong': [15000000, 18000000, 20000000, 15000000]
}
df = pd.DataFrame(data)

# TODO:
# 1. Phát hiện duplicates với df.duplicated()
# 2. Loại bỏ duplicates với df.drop_duplicates()
# 3. Hiển thị kết quả
```

---

### 📝 Phần B: Bài tập trung bình

**Bài 3:** Chuẩn hóa dữ liệu
```python
from sklearn.preprocessing import MinMaxScaler, StandardScaler

# Dữ liệu nhân viên với các thang đo khác nhau
data = {
    'Ten': ['An', 'Bình', 'Chi', 'Dũng', 'Eva'],
    'Luong': [15000000, 25000000, 30000000, 18000000, 22000000],
    'Tuoi': [25, 35, 40, 28, 32],
    'KinhNghiem': [2, 8, 12, 3, 6]
}
df = pd.DataFrame(data)

# TODO:
# 1. Áp dụng MinMaxScaler cho các cột số
# 2. Áp dụng StandardScaler cho các cột số
# 3. So sánh kết quả và nhận xét
```

**Bài 4:** Xử lý chuỗi ký tự
```python
# Dữ liệu khách hàng lộn xộn
data = {
    'Ten': ['  NGUYỄN VĂN A  ', 'trần thị b', 'LÊ VĂN C'],
    'Email': ['a@gmail.com', 'b@yahoo.com', 'c@hotmail.com'],
    'SDT': ['0123-456-789', '0987654321', '+84-987-654-321']
}
df = pd.DataFrame(data)

# TODO:
# 1. Chuẩn hóa tên: .str.strip(), .str.title()
# 2. Trích xuất domain từ email: .str.extract()
# 3. Chuẩn hóa số điện thoại: loại bỏ ký tự đặc biệt
```

---

### 📝 Phần C: Bài tập nâng cao (Khó)

**Bài 5:** Xử lý dữ liệu phân loại
```python
from sklearn.preprocessing import LabelEncoder

# Dữ liệu sản phẩm
data = {
    'TenSP': ['iPhone 14', 'Samsung Galaxy', 'iPhone 13', 'Xiaomi Redmi'],
    'Hang': ['Apple', 'Samsung', 'Apple', 'Xiaomi'],
    'Gia': [25000000, 20000000, 20000000, 8000000],
    'DanhGia': ['Tốt', 'Xuất sắc', 'Tốt', 'Trung bình']
}
df = pd.DataFrame(data)

# TODO:
# 1. Label Encoding cho cột 'Hang'
# 2. One-Hot Encoding cho cột 'DanhGia' với pd.get_dummies()
# 3. Chuẩn hóa cột 'Gia' với StandardScaler
# 4. Tạo DataFrame cuối cùng sẵn sàng cho ML
```

**Bài 6:** Dự án tổng hợp (Homework)
```python
# Dữ liệu khảo sát khách hàng (có nhiều vấn đề)
data = {
    'ID': [1, 2, 3, 4, 5, 6, 7, 8],
    'Ten': ['An', 'Bình', 'Chi', 'Dũng', 'Eva', 'An', 'Bình', 'Giang'],
    'Tuoi': [25, None, 30, 28, None, 25, 35, 32],
    'Luong': [15000000, 18000000, None, 22000000, 16000000, 15000000, 20000000, 25000000],
    'ThanhPho': ['Hà Nội', 'TP.HCM', 'Hà Nội', 'Đà Nẵng', 'TP.HCM', 'Hà Nội', 'TP.HCM', 'Hà Nội'],
    'DanhGia': ['Tốt', 'Xuất sắc', 'Tốt', 'Trung bình', 'Tốt', 'Tốt', 'Xuất sắc', 'Tốt']
}
df = pd.DataFrame(data)

# TODO: Làm sạch dữ liệu hoàn chỉnh
# Bước 1: Phân tích dữ liệu
#   - Kiểm tra thông tin: df.info()
#   - Kiểm tra missing: df.isna().sum()
#   - Kiểm tra duplicates: df.duplicated().sum()

# Bước 2: Xử lý missing values
#   - Quyết định phương pháp: drop hay fill?
#   - Với Tuoi: fillna(median)
#   - Với Luong: fillna(mean)

# Bước 3: Xử lý duplicates
#   - Loại bỏ hàng trùng lặp hoàn toàn

# Bước 4: Chuẩn hóa dữ liệu số
#   - Áp dụng StandardScaler cho Tuoi, Luong

# Bước 5: Encoding dữ liệu phân loại
#   - One-Hot cho ThanhPho
#   - Label Encoding cho DanhGia

# Bước 6: Tạo báo cáo
#   - In kích thước trước/sau
#   - In các cột cuối cùng
#   - Lưu kết quả: df.to_csv('clean_data.csv')
```

---

## 💡 Hướng dẫn làm bài

### 📌 Quy trình làm bài chuẩn:
1. **Đọc yêu cầu** kỹ càng
2. **Chạy code mẫu** để hiểu dữ liệu gốc
3. **Viết code** giải quyết từng TODO
4. **Kiểm tra kết quả** với `.head()`, `.info()`, `.describe()`
5. **Thêm comments** giải thích logic

### ⚠️ Lưu ý quan trọng:
- Luôn tạo **copy** của DataFrame trước khi xử lý: `df_clean = df.copy()`
- Kiểm tra **kiểu dữ liệu** trước khi áp dụng scaler
- Với **One-Hot Encoding**, cẩn thận với số lượng categories
- **Lưu kết quả** để có thể quay lại kiểm tra

---

## 🎯 Mục tiêu học tập

Sau khi hoàn thành các bài tập, bạn sẽ có thể:
- ✅ Xử lý missing data trong dữ liệu thực tế
- ✅ Làm sạch và chuẩn hóa dữ liệu
- ✅ Chuẩn bị dữ liệu cho machine learning
- ✅ Áp dụng các kỹ thuật vào dự án thực tế
- ✅ Tự tin xử lý data cleaning pipeline hoàn chỉnh

---

## 📚 Tài liệu tham khảo

### 📖 Documentation chính thức:
- **Pandas**: https://pandas.pydata.org/docs/
- **Scikit-learn Preprocessing**: https://scikit-learn.org/stable/modules/preprocessing.html
- **Regular Expressions**: https://docs.python.org/3/library/re.html

### 🎓 Tài liệu bổ sung:
- **Missing Data Guide**: https://pandas.pydata.org/docs/user_guide/missing_data.html
- **Data Cleaning Tutorial**: https://realpython.com/python-data-cleaning-numpy-pandas/

---

**Chúc bạn học tập hiệu quả! 🚀**

**Lưu ý**: Hãy nộp Bài 6 (Dự án tổng hợp) qua Google Drive để được chấm điểm!



