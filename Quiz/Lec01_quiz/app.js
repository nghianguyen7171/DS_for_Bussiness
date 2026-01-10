// Quiz Application JavaScript for Lecture 1: Introduction to Data Science

class QuizApp {
    constructor() {
        this.questions = [
            {
                "id": 1,
                "section": "1. Khái niệm Khoa học dữ liệu",
                "code": "",
                "question": "Khoa học dữ liệu là gì?",
                "options": [
                    "Một lĩnh vực chỉ tập trung vào lập trình",
                    "Lĩnh vực kết hợp toán học, khoa học máy tính và kiến thức chuyên ngành để trích xuất tri thức từ dữ liệu",
                    "Một ngành chỉ nghiên cứu về thống kê",
                    "Chỉ là quá trình trực quan hóa dữ liệu"
                ],
                "correct": 1,
                "explanation": "Khoa học dữ liệu là một lĩnh vực liên ngành, kết hợp toán học, khoa học máy tính và kiến thức chuyên ngành để áp dụng các phương pháp khoa học nhằm trích xuất tri thức và thông tin có giá trị từ dữ liệu."
            },
            {
                "id": 2,
                "section": "1. Khái niệm Khoa học dữ liệu",
                "code": "",
                "question": "Thành phần nào KHÔNG thuộc quy trình khoa học dữ liệu?",
                "options": [
                    "Thu thập dữ liệu",
                    "Phân tích dữ liệu",
                    "Phát triển phần cứng máy tính",
                    "Trực quan hóa dữ liệu"
                ],
                "correct": 2,
                "explanation": "Phát triển phần cứng máy tính không thuộc quy trình khoa học dữ liệu. Quy trình khoa học dữ liệu bao gồm: xác định vấn đề, thu thập dữ liệu, xử lý dữ liệu, phân tích dữ liệu, xây dựng mô hình, đánh giá mô hình, và truyền đạt kết quả."
            },
            {
                "id": 3,
                "section": "1. Khái niệm Khoa học dữ liệu",
                "code": "",
                "question": "Khoa học dữ liệu dựa trên 3 trụ cột chính nào?",
                "options": [
                    "Lập trình, Toán học, Thống kê",
                    "Toán học, Khoa học máy tính, Kiến thức chuyên ngành",
                    "Thống kê, Kinh tế, Công nghệ",
                    "Dữ liệu, Phân tích, Trực quan hóa"
                ],
                "correct": 1,
                "explanation": "Khoa học dữ liệu dựa trên 3 trụ cột chính: Toán học (thống kê, đại số tuyến tính), Khoa học máy tính (lập trình, cấu trúc dữ liệu, thuật toán), và Kiến thức chuyên ngành (hiểu biết về lĩnh vực ứng dụng)."
            },
            {
                "id": 4,
                "section": "2. Khoa học dữ liệu trong Kinh tế & Kinh doanh",
                "code": "",
                "question": "Khoa học dữ liệu trong kinh tế và kinh doanh khác Khoa học dữ liệu thông thường như thế nào?",
                "options": [
                    "Chỉ sử dụng dữ liệu tài chính",
                    "Tập trung vào tối ưu hóa mô hình học máy hơn",
                    "Ưu tiên giải thích, ra quyết định và hiểu bản chất kinh tế",
                    "Không cần trực quan hóa dữ liệu"
                ],
                "correct": 2,
                "explanation": "Khoa học dữ liệu trong kinh tế và kinh doanh khác biệt ở chỗ ưu tiên giải thích, ra quyết định kinh doanh và hiểu bản chất kinh tế. Tính giải thích được của mô hình rất quan trọng vì cần tuân thủ quy định và ra quyết định có trách nhiệm."
            },
            {
                "id": 5,
                "section": "2. Khoa học dữ liệu trong Kinh tế & Kinh doanh",
                "code": "",
                "question": "Các nguồn dữ liệu phổ biến trong kinh tế và kinh doanh bao gồm?",
                "options": [
                    "Hệ thống ERP, CRM, dữ liệu giao dịch, dữ liệu khách hàng",
                    "Dữ liệu vật lý thiên văn",
                    "Dữ liệu gen và sinh học phân tử",
                    "Dữ liệu mạng máy tính"
                ],
                "correct": 0,
                "explanation": "Trong kinh tế và kinh doanh, các nguồn dữ liệu phổ biến bao gồm: hệ thống ERP (Enterprise Resource Planning), CRM (Customer Relationship Management), dữ liệu giao dịch, dữ liệu khách hàng, dữ liệu bán hàng, dữ liệu marketing, và dữ liệu từ mạng xã hội."
            },
            {
                "id": 6,
                "section": "2. Khoa học dữ liệu trong Kinh tế & Kinh doanh",
                "code": "",
                "question": "Tại sao mô hình học máy trong kinh tế và kinh doanh lại ưu tiên khả năng giải thích?",
                "options": [
                    "Vì độ chính xác luôn là thấp",
                    "Vì cần tuân thủ quy định và ra quyết định có trách nhiệm",
                    "Vì không sử dụng được trong thực tế",
                    "Vì không cần dự báo"
                ],
                "correct": 1,
                "explanation": "Mô hình học máy trong kinh tế và kinh doanh ưu tiên khả năng giải thích vì cần tuân thủ các quy định pháp lý (như GDPR, quy định về tín dụng), ra quyết định có trách nhiệm (hiểu tại sao mô hình đưa ra quyết định), và giải thích cho các bên liên quan (quản lý, khách hàng, nhà đầu tư)."
            },
            {
                "id": 7,
                "section": "3. Các lĩnh vực chuyên sâu",
                "code": "",
                "question": "Khoa học dữ liệu có bao nhiêu lĩnh vực chuyên sâu chính?",
                "options": [
                    "2: Phân tích dữ liệu và Học máy",
                    "3: Kỹ thuật dữ liệu, Phân tích dữ liệu, và Học máy",
                    "4: Thu thập, Xử lý, Phân tích, và Trực quan hóa",
                    "5: Data Engineer, Data Analyst, Data Scientist, ML Engineer, và BI Analyst"
                ],
                "correct": 1,
                "explanation": "Khoa học dữ liệu có 3 lĩnh vực chuyên sâu chính: Kỹ thuật dữ liệu (Data Engineering), Phân tích dữ liệu (Data Analytics), và Học máy (Machine Learning)."
            },
            {
                "id": 8,
                "section": "3. Các lĩnh vực chuyên sâu",
                "code": "",
                "question": "Lĩnh vực Kỹ thuật dữ liệu (Data Engineering) tập trung vào giải quyết bước nào trong chu trình khoa học dữ liệu?",
                "options": [
                    "Tập trung vào xác định, tổ chức, và thu thập dữ liệu",
                    "Trực quan hóa dữ liệu",
                    "Tất cả các bước: từ xác định vấn đề đến truyền đạt kết quả",
                    "Đánh giá mô hình học máy"
                ],
                "correct": 0,
                "explanation": "Kỹ thuật dữ liệu tập trung vào xác định, tổ chức, và thu thập dữ liệu. Cụ thể, Data Engineer thiết kế, xây dựng và quản lý hạ tầng dữ liệu, đảm bảo dữ liệu được thu thập, lưu trữ và xử lý một cách hiệu quả và sẵn sàng cho phân tích."
            },
            {
                "id": 9,
                "section": "3. Các lĩnh vực chuyên sâu",
                "code": "",
                "question": "Phân tích dữ liệu (Data Analytics) là quá trình gì?",
                "options": [
                    "Chỉ xây dựng mô hình học máy",
                    "Khám phá, trực quan hóa và diễn giải dữ liệu để rút ra thông tin có giá trị",
                    "Chỉ thu thập và lưu trữ dữ liệu",
                    "Chỉ tối ưu hóa thuật toán"
                ],
                "correct": 1,
                "explanation": "Phân tích dữ liệu là quá trình khám phá, trực quan hóa và diễn giải dữ liệu để rút ra thông tin có giá trị. Data Analyst sử dụng các công cụ phân tích để trả lời các câu hỏi kinh doanh cụ thể và hỗ trợ ra quyết định."
            },
            {
                "id": 10,
                "section": "3. Các lĩnh vực chuyên sâu",
                "code": "",
                "question": "Học máy (Machine Learning) khác với lập trình truyền thống như thế nào?",
                "options": [
                    "Viết các câu lệnh phức tạp hơn",
                    "Không cần dữ liệu đầu vào",
                    "Học từ dữ liệu thay vì được lập trình rõ ràng",
                    "Không cần kiểm thử"
                ],
                "correct": 2,
                "explanation": "Học máy khác với lập trình truyền thống ở chỗ máy tính học từ dữ liệu thay vì được lập trình rõ ràng với các quy tắc cụ thể. Mô hình học máy tự động phát hiện các mẫu và quy luật từ dữ liệu để đưa ra dự đoán hoặc phân loại."
            },
            {
                "id": 11,
                "section": "4. Quy trình Khoa học dữ liệu",
                "code": "",
                "question": "Quy trình khoa học dữ liệu bao gồm bao nhiêu bước chính?",
                "options": [
                    "5 bước",
                    "6 bước",
                    "7 bước",
                    "8 bước"
                ],
                "correct": 2,
                "explanation": "Quy trình khoa học dữ liệu bao gồm 7 bước chính: 1) Xác định vấn đề, 2) Thu thập dữ liệu, 3) Xử lý dữ liệu, 4) Phân tích dữ liệu, 5) Xây dựng mô hình, 6) Đánh giá mô hình, 7) Truyền đạt kết quả."
            },
            {
                "id": 12,
                "section": "4. Quy trình Khoa học dữ liệu",
                "code": "",
                "question": "Bước đầu tiên trong quy trình khoa học dữ liệu là gì?",
                "options": [
                    "Thu thập dữ liệu",
                    "Xác định vấn đề",
                    "Phân tích dữ liệu",
                    "Xây dựng mô hình"
                ],
                "correct": 1,
                "explanation": "Bước đầu tiên và quan trọng nhất trong quy trình khoa học dữ liệu là xác định vấn đề. Bước này bao gồm làm rõ mục tiêu kinh doanh hoặc câu hỏi nghiên cứu, xác định nhu cầu thực tế từ phía tổ chức hoặc người dùng."
            },
            {
                "id": 13,
                "section": "5. Các loại dữ liệu",
                "code": "",
                "question": "Dữ liệu phi cấu trúc (Unstructured Data) là gì?",
                "options": [
                    "Dữ liệu được tổ chức trong các bảng có hàng và cột",
                    "Dữ liệu không có cấu trúc cố định, ví dụ: văn bản, hình ảnh, video",
                    "Dữ liệu được lưu trữ trong hệ quản trị CSDL quan hệ",
                    "Dữ liệu luôn có dạng số và dễ xử lý"
                ],
                "correct": 1,
                "explanation": "Dữ liệu phi cấu trúc là dữ liệu không có cấu trúc cố định và không được tổ chức theo mô hình dữ liệu chuẩn. Ví dụ: văn bản (email, tài liệu), hình ảnh, video, âm thanh, dữ liệu từ mạng xã hội."
            },
            {
                "id": 14,
                "section": "5. Các loại dữ liệu",
                "code": "",
                "question": "Dữ liệu có cấu trúc (Structured Data) được lưu trữ trong định dạng nào?",
                "options": [
                    "Chỉ trong file CSV",
                    "Các bảng có hàng và cột (CSV, Excel, SQL databases)",
                    "Chỉ trong cơ sở dữ liệu quan hệ",
                    "Chỉ trong file JSON"
                ],
                "correct": 1,
                "explanation": "Dữ liệu có cấu trúc được tổ chức trong các bảng có hàng và cột, có thể được lưu trữ trong nhiều định dạng như CSV, Excel, hoặc các hệ quản trị cơ sở dữ liệu quan hệ (SQL databases như MySQL, PostgreSQL)."
            },
            {
                "id": 15,
                "section": "5. Các loại dữ liệu",
                "code": "",
                "question": "Dữ liệu bán cấu trúc (Semi-structured Data) là gì?",
                "options": [
                    "Dữ liệu hoàn toàn không có cấu trúc",
                    "Dữ liệu có cấu trúc một phần, ví dụ: JSON, XML",
                    "Dữ liệu chỉ có trong cơ sở dữ liệu",
                    "Dữ liệu chỉ có định dạng CSV"
                ],
                "correct": 1,
                "explanation": "Dữ liệu bán cấu trúc có cấu trúc một phần nhưng không tuân theo cấu trúc bảng cứng nhắc. Ví dụ: JSON (JavaScript Object Notation), XML (eXtensible Markup Language), HTML. Chúng có thẻ (tags) hoặc khóa (keys) nhưng cấu trúc có thể thay đổi."
            },
            {
                "id": 16,
                "section": "6. Định dạng dữ liệu",
                "code": "",
                "question": "Định dạng nào sau đây KHÔNG phải là định dạng dữ liệu có cấu trúc?",
                "options": [
                    "CSV (Comma-Separated Values)",
                    "JSON (JavaScript Object Notation)",
                    "Excel (.xlsx)",
                    "SQL Database"
                ],
                "correct": 1,
                "explanation": "JSON là định dạng dữ liệu bán cấu trúc, không phải dữ liệu có cấu trúc hoàn toàn. CSV, Excel và SQL Database là các định dạng dữ liệu có cấu trúc với hàng và cột rõ ràng."
            },
            {
                "id": 17,
                "section": "6. Định dạng dữ liệu",
                "code": "",
                "question": "Nguồn dữ liệu nào sau đây là dữ liệu phi cấu trúc?",
                "options": [
                    "Bảng chấm công nhân viên",
                    "Ảnh và video từ mạng xã hội",
                    "Bảng điểm sinh viên trong Excel",
                    "Danh sách sản phẩm trong cơ sở dữ liệu quan hệ"
                ],
                "correct": 1,
                "explanation": "Ảnh và video từ mạng xã hội là dữ liệu phi cấu trúc vì chúng không có cấu trúc bảng cố định. Các lựa chọn còn lại (bảng chấm công, bảng điểm, danh sách sản phẩm) đều là dữ liệu có cấu trúc với hàng và cột."
            },
            {
                "id": 18,
                "section": "7. Các vai trò trong Khoa học dữ liệu",
                "code": "",
                "question": "Vai trò chính của nhà khoa học dữ liệu (Data Scientist) là gì?",
                "options": [
                    "Chỉ lập trình ứng dụng",
                    "Phân tích, trích xuất và tạo giá trị từ dữ liệu",
                    "Quản lý cơ sở hạ tầng mạng",
                    "Chỉ thiết kế giao diện người dùng"
                ],
                "correct": 1,
                "explanation": "Vai trò chính của Data Scientist là phân tích, trích xuất và tạo giá trị từ dữ liệu. Họ kết hợp kiến thức về thống kê, lập trình và chuyên ngành để xây dựng mô hình học máy, phân tích dữ liệu phức tạp và đưa ra các insights có giá trị."
            },
            {
                "id": 19,
                "section": "7. Các vai trò trong Khoa học dữ liệu",
                "code": "",
                "question": "Kể chuyện bằng dữ liệu (Data Storytelling) là kỹ năng quan trọng nhất của ai?",
                "options": [
                    "Kỹ sư dữ liệu (Data Engineer)",
                    "Chuyên gia phân tích dữ liệu (Data Analyst)",
                    "Kỹ sư học máy (ML Engineer)",
                    "Lập trình viên"
                ],
                "correct": 1,
                "explanation": "Kể chuyện bằng dữ liệu là kỹ năng quan trọng nhất của Data Analyst. Họ sử dụng trực quan hóa dữ liệu và báo cáo để truyền đạt insights từ dữ liệu một cách dễ hiểu cho các bên liên quan, giúp họ ra quyết định dựa trên dữ liệu."
            },
            {
                "id": 20,
                "section": "7. Các vai trò trong Khoa học dữ liệu",
                "code": "",
                "question": "Kỹ sư dữ liệu (Data Engineer) chịu trách nhiệm chính về gì?",
                "options": [
                    "Xây dựng mô hình học máy",
                    "Thiết kế, xây dựng và quản lý hạ tầng dữ liệu",
                    "Trực quan hóa dữ liệu",
                    "Phân tích xu hướng kinh doanh"
                ],
                "correct": 1,
                "explanation": "Data Engineer chịu trách nhiệm thiết kế, xây dựng và quản lý hạ tầng dữ liệu. Họ đảm bảo dữ liệu được thu thập, lưu trữ, xử lý và sẵn sàng cho phân tích. Công việc của họ tập trung vào pipeline dữ liệu và ETL (Extract, Transform, Load)."
            },
            {
                "id": 21,
                "section": "8. Quy trình Kỹ thuật dữ liệu",
                "code": "",
                "question": "Quy trình Kỹ thuật dữ liệu (Data Engineering Lifecycle) bao gồm bao nhiêu bước?",
                "options": [
                    "3 bước",
                    "4 bước",
                    "5 bước",
                    "6 bước"
                ],
                "correct": 2,
                "explanation": "Quy trình Kỹ thuật dữ liệu bao gồm 5 bước: 1) Xác định nhu cầu dữ liệu, 2) Thu thập và tích hợp dữ liệu, 3) Lưu trữ dữ liệu, 4) Xử lý và biến đổi dữ liệu, 5) Phục vụ dữ liệu cho phân tích."
            },
            {
                "id": 22,
                "section": "9. Quy trình Phân tích dữ liệu",
                "code": "",
                "question": "Quy trình Phân tích dữ liệu (Data Analytics Process) bao gồm bao nhiêu bước?",
                "options": [
                    "3 bước",
                    "4 bước",
                    "5 bước",
                    "6 bước"
                ],
                "correct": 1,
                "explanation": "Quy trình Phân tích dữ liệu bao gồm 4 bước: 1) Thu thập và chuẩn bị dữ liệu, 2) Khám phá và phân tích dữ liệu (Exploratory Data Analysis), 3) Trực quan hóa và trình bày (Data Visualization), 4) Diễn giải và đưa ra khuyến nghị."
            },
            {
                "id": 23,
                "section": "10. Học máy",
                "code": "",
                "question": "Học máy có bao nhiêu loại chính?",
                "options": [
                    "2: Học có giám sát và Học không giám sát",
                    "3: Học có giám sát, Học không giám sát, và Học củng cố",
                    "4: Học có giám sát, Học không giám sát, Học củng cố, và Học sâu",
                    "5: Bao gồm tất cả các phương pháp trên"
                ],
                "correct": 1,
                "explanation": "Học máy có 3 loại chính: 1) Học có giám sát (Supervised Learning): học từ dữ liệu đã gán nhãn, 2) Học không giám sát (Unsupervised Learning): tìm cấu trúc ẩn trong dữ liệu không có nhãn, 3) Học củng cố (Reinforcement Learning): học thông qua tương tác với môi trường."
            },
            {
                "id": 24,
                "section": "10. Học máy",
                "code": "",
                "question": "Mục tiêu chính của học không giám sát (Unsupervised Learning) là gì?",
                "options": [
                    "Dự đoán đầu ra từ dữ liệu đã gán nhãn",
                    "Tối ưu hóa phần thưởng thông qua hành động",
                    "Phân nhóm, phát hiện cấu trúc ẩn trong dữ liệu",
                    "Tăng độ chính xác của mô hình học sâu"
                ],
                "correct": 2,
                "explanation": "Mục tiêu chính của học không giám sát là phân nhóm (clustering), phát hiện cấu trúc ẩn và mẫu trong dữ liệu không có nhãn. Ví dụ: phân cụm khách hàng, phát hiện bất thường (anomaly detection), giảm chiều dữ liệu (dimensionality reduction)."
            },
            {
                "id": 25,
                "section": "10. Học máy",
                "code": "",
                "question": "Học có giám sát (Supervised Learning) được sử dụng cho những nhiệm vụ nào?",
                "options": [
                    "Chỉ phân loại (Classification)",
                    "Chỉ hồi quy (Regression)",
                    "Phân loại và hồi quy",
                    "Chỉ phân cụm (Clustering)"
                ],
                "correct": 2,
                "explanation": "Học có giám sát được sử dụng cho cả phân loại (Classification - dự đoán nhãn rời rạc) và hồi quy (Regression - dự đoán giá trị liên tục). Ví dụ: phân loại email spam/không spam, dự đoán giá nhà."
            },
            {
                "id": 26,
                "section": "11. Công cụ và Ngôn ngữ lập trình",
                "code": "",
                "question": "Python được ưa chuộng trong khoa học dữ liệu vì lý do nào?",
                "options": [
                    "Chỉ vì cú pháp ngắn gọn",
                    "Có nhiều thư viện hỗ trợ phân tích và học máy (NumPy, Pandas, Scikit-learn, TensorFlow)",
                    "Không cần học thuật toán cũng lập trình được",
                    "Chỉ chạy nhanh hơn các ngôn ngữ khác"
                ],
                "correct": 1,
                "explanation": "Python được ưa chuộng trong khoa học dữ liệu vì có hệ sinh thái thư viện phong phú: NumPy (tính toán số học), Pandas (xử lý dữ liệu), Matplotlib/Seaborn (trực quan hóa), Scikit-learn (học máy), TensorFlow/PyTorch (học sâu). Python cũng dễ học và có cộng đồng lớn."
            },
            {
                "id": 27,
                "section": "11. Công cụ và Ngôn ngữ lập trình",
                "code": "",
                "question": "SQL được sử dụng chủ yếu để làm gì?",
                "options": [
                    "Xây dựng mô hình học máy",
                    "Truy vấn và quản lý dữ liệu trong cơ sở dữ liệu quan hệ",
                    "Trực quan hóa dữ liệu",
                    "Xử lý dữ liệu phi cấu trúc"
                ],
                "correct": 1,
                "explanation": "SQL (Structured Query Language) là ngôn ngữ được sử dụng để truy vấn và quản lý dữ liệu trong các hệ quản trị cơ sở dữ liệu quan hệ (RDBMS). SQL cho phép thực hiện các thao tác như SELECT, INSERT, UPDATE, DELETE trên dữ liệu có cấu trúc."
            },
            {
                "id": 28,
                "section": "12. Trực quan hóa dữ liệu",
                "code": "",
                "question": "Trực quan hóa dữ liệu (Data Visualization) giúp ích gì trong khoa học dữ liệu?",
                "options": [
                    "Giảm dung lượng lưu trữ dữ liệu",
                    "Giúp hiểu và truyền đạt thông tin từ dữ liệu một cách dễ dàng",
                    "Chỉ phục vụ mục đích làm đẹp báo cáo",
                    "Loại bỏ hoàn toàn dữ liệu nhiễu"
                ],
                "correct": 1,
                "explanation": "Trực quan hóa dữ liệu giúp hiểu và truyền đạt thông tin từ dữ liệu một cách dễ dàng. Nó cho phép phát hiện các mẫu, xu hướng và outliers trong dữ liệu, cũng như trình bày kết quả phân tích một cách trực quan cho các bên liên quan không chuyên về kỹ thuật."
            },
            {
                "id": 29,
                "section": "13. Ứng dụng trong Kinh tế & Kinh doanh",
                "code": "",
                "question": "Các mô hình Học máy trong Khoa học dữ liệu được dùng để làm gì?",
                "options": [
                    "Tự động hóa quá trình ra quyết định dựa trên dữ liệu",
                    "Chỉ để thiết kế website",
                    "Chỉ dùng để vẽ biểu đồ dữ liệu",
                    "Tăng tốc độ truyền dữ liệu trong mạng"
                ],
                "correct": 0,
                "explanation": "Các mô hình Học máy được sử dụng để tự động hóa quá trình ra quyết định dựa trên dữ liệu. Ví dụ: dự đoán doanh số, phân loại khách hàng, phát hiện gian lận, đề xuất sản phẩm, tối ưu hóa giá, và tự động hóa các quy trình kinh doanh."
            },
            {
                "id": 30,
                "section": "13. Ứng dụng trong Kinh tế & Kinh doanh",
                "code": "",
                "question": "Trong bối cảnh kinh tế và kinh doanh, dữ liệu được sử dụng để trả lời câu hỏi nào?",
                "options": [
                    "Chỉ 'Điều gì đã xảy ra?' (Descriptive Analytics)",
                    "Chỉ 'Điều gì sẽ xảy ra?' (Predictive Analytics)",
                    "Cả 'Điều gì đã xảy ra?', 'Tại sao?', 'Điều gì sẽ xảy ra?' và 'Nên làm gì?'",
                    "Chỉ 'Nên làm gì?' (Prescriptive Analytics)"
                ],
                "correct": 2,
                "explanation": "Trong kinh tế và kinh doanh, dữ liệu được sử dụng để trả lời nhiều loại câu hỏi: Descriptive Analytics (Điều gì đã xảy ra?), Diagnostic Analytics (Tại sao?), Predictive Analytics (Điều gì sẽ xảy ra?), và Prescriptive Analytics (Nên làm gì?). Mỗi loại đòi hỏi các kỹ thuật và công cụ khác nhau."
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
            if (this.userAnswers[this.currentQuestion] === null) return;
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
        document.getElementById('section-name-display').textContent = question.section;
        
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
            document.getElementById(`option-${this.userAnswers[this.currentQuestion]}`).checked = true;
        } else {
            // Clear radio buttons
            document.querySelectorAll('input[name="answer"]').forEach(radio => {
                radio.checked = false;
            });
        }
        
        // Update navigation buttons
        document.getElementById('prev-button').disabled = this.currentQuestion === 0;
        document.getElementById('next-button').disabled = this.currentQuestion === this.totalQuestions - 1;
        
        // Reset answer display
        document.getElementById('explanation-container').classList.add('hidden');
        document.getElementById('hint-button').textContent = 'Gợi ý/Xem đáp án';
        document.getElementById('hint-button').disabled = this.userAnswers[this.currentQuestion] === null;
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
