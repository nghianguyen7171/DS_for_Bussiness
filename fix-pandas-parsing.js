const fs = require('fs');

// Read the markdown file
const markdownContent = fs.readFileSync('Exam/Combined_Answer_Key_DS_CLC_1-8.md', 'utf8');

// Parse the markdown content more robustly
function parseMarkdownToHTML(content) {
    const lines = content.split('\n');
    let html = '';
    let currentSection = '';
    let currentSubsection = '';
    let inQuestion = false;
    let questionText = '';
    let answerText = '';
    let explanationText = '';
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (line.startsWith('# ')) {
            // Main title - skip as it's already in header
            continue;
        } else if (line.startsWith('## ')) {
            // Section title
            const title = line.replace('## ', '');
            if (title.includes('THỐNG KÊ')) {
                continue; // Skip stats section
            } else if (title.includes('ĐÁP ÁN VÀ GIẢI THÍCH')) {
                html += '<div class="content-section">\n';
                html += '<h2 class="section-title">🔑 Đáp án và giải thích cho tất cả câu hỏi</h2>\n';
            } else if (title.includes('KẾT LUẬN')) {
                html += '</div>\n';
                html += '<div class="conclusion-section" id="conclusion">\n';
                html += '<h2 class="conclusion-title">🎯 Kết luận và đánh giá</h2>\n';
            }
        } else if (line.startsWith('### ')) {
            // Topic title
            const title = line.replace('### ', '');
            const topicId = getTopicId(title);
            const icon = getTopicIcon(title);
            
            html += '</div>\n'; // Close previous section if exists
            html += `<div class="topic-section" id="${topicId}">\n`;
            html += '<div class="topic-header">\n';
            html += `<div class="topic-icon">${icon}</div>\n`;
            html += `<h3 class="topic-title">${title}</h3>\n`;
            html += '</div>\n';
            
            currentSection = title;
        } else if (line.startsWith('#### ')) {
            // Subsection title
            const title = line.replace('#### ', '');
            html += `<h4 class="subtopic-title">${title}</h4>\n`;
            currentSubsection = title;
        } else if (line.startsWith('**Câu hỏi:**')) {
            // Question start
            if (inQuestion) {
                // Close previous question
                html += closeQuestion(questionText, answerText, explanationText);
            }
            
            questionText = line.replace('**Câu hỏi:**', '').trim();
            answerText = '';
            explanationText = '';
            inQuestion = true;
        } else if (line.startsWith('**Đáp án:**')) {
            // Answer
            answerText = line.replace('**Đáp án:**', '').trim();
        } else if (line.startsWith('**Giải thích:**')) {
            // Explanation
            explanationText = line.replace('**Giải thích:**', '').trim();
        } else if (line === '---') {
            // Separator - skip
            continue;
        } else if (line.length > 0 && !line.startsWith('**')) {
            // Regular text
            if (line.includes('**') && line.includes('**')) {
                // Bold text
                const boldText = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                html += `<p>${boldText}</p>\n`;
            } else if (line.startsWith('- ')) {
                // List item
                const item = line.replace('- ', '').trim();
                html += `<li>${item}</li>\n`;
            } else {
                html += `<p>${line}</p>\n`;
            }
        }
    }
    
    // Close last question if exists
    if (inQuestion) {
        html += closeQuestion(questionText, answerText, explanationText);
    }
    
    html += '</div>\n'; // Close last section
    return html;
}

function closeQuestion(questionText, answerText, explanationText) {
    let html = '<div class="question-item">\n';
    
    if (questionText.startsWith('`') && questionText.endsWith('`')) {
        // Code question
        const code = questionText.slice(1, -1);
        html += `<div class="question-code">${code}</div>\n`;
    } else {
        // Text question
        html += `<div class="question-text">${questionText}</div>\n`;
    }
    
    if (answerText) {
        html += `<div class="answer-highlight">Đáp án: ${answerText}</div>\n`;
    }
    
    if (explanationText) {
        html += '<div class="explanation">\n';
        html += `<strong>Giải thích:</strong> ${explanationText}\n`;
        html += '</div>\n';
    }
    
    html += '</div>\n';
    return html;
}

function getTopicId(title) {
    const mapping = {
        '1. Python Basics': 'python-basics',
        '2. NumPy Operations': 'numpy-operations', 
        '3. Pandas Operations': 'pandas-operations',
        '4. File I/O Operations': 'file-io',
        '5. Data Processing': 'data-processing',
        '6. Data Science Concepts': 'data-science'
    };
    return mapping[title] || title.toLowerCase().replace(/[^a-z0-9]/g, '-');
}

function getTopicIcon(title) {
    const mapping = {
        '1. Python Basics': '🐍',
        '2. NumPy Operations': '🔢',
        '3. Pandas Operations': '🐼',
        '4. File I/O Operations': '📁',
        '5. Data Processing': '🔧',
        '6. Data Science Concepts': '📈'
    };
    return mapping[title] || '📝';
}

// Generate the HTML content
const parsedContent = parseMarkdownToHTML(markdownContent);

// Read the base HTML template
const baseHTML = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đáp án tổng hợp cho 8 đề thi DS_CLC (1-8) | Khoa học dữ liệu</title>
    <link rel="stylesheet" href="../assets/css/main.css">
    <style>
        .answer-key-page {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
        }

        .page-header {
            text-align: center;
            margin-bottom: 3rem;
            padding: 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .page-title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .page-subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            margin-bottom: 1.5rem;
        }

        .stats-overview {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-top: 2rem;
        }

        .stat-card {
            background: rgba(255,255,255,0.2);
            padding: 1rem;
            border-radius: 10px;
            text-align: center;
            backdrop-filter: blur(10px);
        }

        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            display: block;
        }

        .stat-label {
            font-size: 0.9rem;
            opacity: 0.8;
        }

        .content-section {
            margin-bottom: 3rem;
        }

        .section-title {
            font-size: 1.8rem;
            color: #667eea;
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 3px solid #667eea;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .topic-section {
            background: white;
            border-radius: 15px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .topic-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #f0f0f0;
        }

        .topic-icon {
            font-size: 2rem;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }

        .topic-title {
            font-size: 1.5rem;
            font-weight: bold;
            color: #333;
            margin: 0;
        }

        .subtopic-title {
            font-size: 1.2rem;
            color: #667eea;
            margin: 2rem 0 1rem 0;
            padding-left: 1rem;
            border-left: 4px solid #667eea;
        }

        .question-item {
            margin-bottom: 2rem;
            padding: 1.5rem;
            background: #f8f9fa;
            border-radius: 10px;
            border-left: 4px solid #667eea;
        }

        .question-code {
            background: #2d3748;
            color: #e2e8f0;
            padding: 1rem;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            margin: 1rem 0;
            overflow-x: auto;
            font-size: 0.9rem;
        }

        .question-text {
            font-size: 1.1rem;
            margin: 1rem 0;
            font-weight: 500;
        }

        .answer-highlight {
            background: #d4edda;
            color: #155724;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            font-weight: bold;
            display: inline-block;
            margin: 0.5rem 0;
        }

        .explanation {
            background: #e3f2fd;
            color: #1565c0;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            border-left: 4px solid #2196f3;
        }

        .conclusion-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 2rem;
            border-radius: 15px;
            margin-top: 3rem;
        }

        .conclusion-title {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            text-align: center;
        }

        .conclusion-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .conclusion-card {
            background: rgba(255,255,255,0.1);
            padding: 1.5rem;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }

        .conclusion-card h4 {
            margin-top: 0;
            color: #fff;
        }

        .conclusion-list {
            list-style: none;
            padding: 0;
        }

        .conclusion-list li {
            padding: 0.5rem 0;
            position: relative;
            padding-left: 1.5rem;
        }

        .conclusion-list li:before {
            content: "→";
            position: absolute;
            left: 0;
            color: #fff;
            font-weight: bold;
        }

        .back-button {
            position: fixed;
            top: 2rem;
            left: 2rem;
            background: #667eea;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            z-index: 1000;
        }

        .back-button:hover {
            background: #5a6fd8;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }

        .search-box {
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: white;
            padding: 0.5rem 1rem;
            border-radius: 25px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            border: 2px solid #667eea;
        }

        .search-box input {
            border: none;
            outline: none;
            padding: 0.5rem;
            font-size: 0.9rem;
            width: 200px;
        }

        .toc {
            position: fixed;
            left: 2rem;
            top: 50%;
            transform: translateY(-50%);
            background: white;
            padding: 1rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            max-height: 70vh;
            overflow-y: auto;
            width: 250px;
            z-index: 1000;
        }

        .toc h4 {
            margin: 0 0 1rem 0;
            color: #667eea;
            font-size: 1rem;
        }

        .toc ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .toc li {
            margin-bottom: 0.5rem;
        }

        .toc a {
            color: #666;
            text-decoration: none;
            font-size: 0.9rem;
            padding: 0.3rem 0.5rem;
            border-radius: 5px;
            display: block;
            transition: all 0.3s ease;
        }

        .toc a:hover {
            background: #f0f0f0;
            color: #667eea;
        }

        @media (max-width: 768px) {
            .answer-key-page {
                padding: 1rem;
            }
            
            .page-title {
                font-size: 2rem;
            }
            
            .stats-overview {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .back-button, .search-box, .toc {
                position: relative;
                top: auto;
                left: auto;
                right: auto;
                transform: none;
                margin-bottom: 1rem;
                width: auto;
            }
            
            .toc {
                max-height: none;
                margin-bottom: 2rem;
            }
        }
    </style>
</head>
<body>
    <a href="../index.html#answer-keys" class="back-button">← Quay lại</a>
    
    <div class="search-box">
        <input type="text" id="searchInput" placeholder="Tìm kiếm câu hỏi...">
    </div>

    <div class="toc">
        <h4>📋 Mục lục</h4>
        <ul>
            <li><a href="#python-basics">🐍 Python Basics</a></li>
            <li><a href="#numpy-operations">🔢 NumPy Operations</a></li>
            <li><a href="#pandas-operations">🐼 Pandas Operations</a></li>
            <li><a href="#file-io">📁 File I/O Operations</a></li>
            <li><a href="#data-processing">🔧 Data Processing</a></li>
            <li><a href="#data-science">📈 Data Science Concepts</a></li>
            <li><a href="#conclusion">🎯 Kết luận</a></li>
        </ul>
    </div>
    
    <div class="answer-key-page">
        <div class="page-header">
            <h1 class="page-title">📚 Đáp án tổng hợp cho 8 đề thi DS_CLC (1-8)</h1>
            <p class="page-subtitle">Môn học: Khoa học dữ liệu trong Kinh tế và Kinh doanh</p>
            
            <div class="stats-overview">
                <div class="stat-card">
                    <span class="stat-number">8</span>
                    <span class="stat-label">Đề thi</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">320</span>
                    <span class="stat-label">Tổng câu hỏi</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">219</span>
                    <span class="stat-label">Câu hỏi duy nhất</span>
                </div>
                <div class="stat-card">
                    <span class="stat-number">84%</span>
                    <span class="stat-label">Tỷ lệ khớp</span>
                </div>
            </div>
        </div>

        {{CONTENT}}

        <div style="text-align: center; margin-top: 3rem; padding: 2rem; background: #f8f9fa; border-radius: 15px;">
            <h3 style="color: #667eea; margin-bottom: 1rem;">📖 Xem đáp án chi tiết đầy đủ</h3>
            <p style="margin-bottom: 2rem;">Để xem tất cả 219 câu hỏi với đáp án và giải thích chi tiết, vui lòng tải về file PDF hoặc xem file markdown gốc.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="DS_CLC-1.pdf" class="btn btn-primary" style="padding: 1rem 2rem; text-decoration: none; border-radius: 25px; background: #667eea; color: white; font-weight: bold;">📄 Tải PDF đề thi</a>
                <a href="Combined_Answer_Key_DS_CLC_1-8.md" class="btn btn-secondary" style="padding: 1rem 2rem; text-decoration: none; border-radius: 25px; background: #6c757d; color: white; font-weight: bold;">📝 Xem Markdown</a>
            </div>
        </div>

        <div style="text-align: center; margin-top: 2rem; padding: 1rem; color: #666;">
            <p><strong>Chúc các bạn làm bài tốt! 🚀</strong></p>
        </div>
    </div>

    <script>
        // Search functionality
        document.getElementById('searchInput').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const questions = document.querySelectorAll('.question-item');
            
            questions.forEach(question => {
                const text = question.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    question.style.display = 'block';
                    question.style.backgroundColor = searchTerm ? '#fff3cd' : '#f8f9fa';
                } else {
                    question.style.display = searchTerm ? 'none' : 'block';
                }
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add animation to cards on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards
        document.querySelectorAll('.topic-section, .question-item, .conclusion-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // Highlight current section in TOC
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('.topic-section');
            const scrollPos = window.scrollY + 100;
            
            sections.forEach(section => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;
                const id = section.getAttribute('id');
                
                if (scrollPos >= top && scrollPos <= bottom) {
                    document.querySelectorAll('.toc a').forEach(link => {
                        link.classList.remove('active');
                    });
                    const activeLink = document.querySelector(\`.toc a[href="#\${id}"]\`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                        activeLink.style.background = '#667eea';
                        activeLink.style.color = 'white';
                    }
                }
            });
        });
    </script>
</body>
</html>`;

// Replace the content placeholder
const finalHTML = baseHTML.replace('{{CONTENT}}', parsedContent);

// Write the complete HTML file
fs.writeFileSync('Exam/answer-keys.html', finalHTML);

console.log('✅ Generated complete answer keys HTML page with improved parsing!');
