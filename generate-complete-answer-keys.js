const fs = require('fs');
const path = require('path');

// Read the markdown file
const markdownFile = path.join(__dirname, 'Exam', 'Combined_Answer_Key_DS_CLC_1-8.md');
const markdownContent = fs.readFileSync(markdownFile, 'utf8');

// Improved parsing function
function parseMarkdown(content) {
    const lines = content.split('\n');
    const sections = [];
    let currentSection = null;
    let currentSubsection = null;
    let currentQuestion = null;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Skip empty lines
        if (!line) continue;
        
        // Main sections (### 1. Python Basics, etc.)
        if (line.match(/^### \d+\./)) {
            if (currentSection) {
                sections.push(currentSection);
            }
            currentSection = {
                title: line.replace(/^### \d+\. /, ''),
                subsections: []
            };
            currentSubsection = null;
            currentQuestion = null;
        }
        // Subsections (#### Câu hỏi về...)
        else if (line.match(/^#### /)) {
            if (currentSubsection) {
                if (currentQuestion) {
                    currentSubsection.questions.push(currentQuestion);
                    currentQuestion = null;
                }
                currentSection.subsections.push(currentSubsection);
            }
            currentSubsection = {
                title: line.replace(/^#### /, ''),
                questions: []
            };
            currentQuestion = null;
        }
        // Questions (**Câu hỏi:**)
        else if (line.match(/^\*\*Câu hỏi:\*\*/)) {
            if (currentQuestion) {
                if (currentSubsection) {
                    currentSubsection.questions.push(currentQuestion);
                }
            }
            currentQuestion = {
                question: line.replace(/^\*\*Câu hỏi:\*\* /, ''),
                answer: '',
                explanation: ''
            };
        }
        // Answers (**Đáp án:**)
        else if (line.match(/^\*\*Đáp án:\*\*/)) {
            if (currentQuestion) {
                currentQuestion.answer = line.replace(/^\*\*Đáp án:\*\* /, '');
            }
        }
        // Explanations (**Giải thích:**)
        else if (line.match(/^\*\*Giải thích:\*\*/)) {
            if (currentQuestion) {
                currentQuestion.explanation = line.replace(/^\*\*Giải thích:\*\* /, '');
            }
        }
    }
    
    // Add the last question and subsection
    if (currentQuestion) {
        if (currentSubsection) {
            currentSubsection.questions.push(currentQuestion);
        }
    }
    if (currentSubsection) {
        if (currentSection) {
            currentSection.subsections.push(currentSubsection);
        }
    }
    if (currentSection) {
        sections.push(currentSection);
    }
    
    return sections;
}

// Alternative parsing method - more comprehensive
function parseMarkdownComprehensive(content) {
    const sections = [];
    
    // Split by main sections
    const sectionMatches = content.match(/### \d+\. [^\n]+/g);
    if (!sectionMatches) return sections;
    
    sectionMatches.forEach((sectionMatch, sectionIndex) => {
        const sectionTitle = sectionMatch.replace(/^### \d+\. /, '');
        const section = {
            title: sectionTitle,
            subsections: []
        };
        
        // Find the content for this section
        const sectionStart = content.indexOf(sectionMatch);
        const nextSectionStart = sectionIndex < sectionMatches.length - 1 
            ? content.indexOf(sectionMatches[sectionIndex + 1])
            : content.length;
        
        const sectionContent = content.substring(sectionStart, nextSectionStart);
        
        // Parse subsections
        const subsectionMatches = sectionContent.match(/#### [^\n]+/g) || [];
        
        subsectionMatches.forEach((subsectionMatch, subsectionIndex) => {
            const subsectionTitle = subsectionMatch.replace(/^#### /, '');
            const subsection = {
                title: subsectionTitle,
                questions: []
            };
            
            // Find content for this subsection
            const subsectionStart = sectionContent.indexOf(subsectionMatch);
            const nextSubsectionStart = subsectionIndex < subsectionMatches.length - 1
                ? sectionContent.indexOf(subsectionMatches[subsectionIndex + 1])
                : sectionContent.length;
            
            const subsectionContent = sectionContent.substring(subsectionStart, nextSubsectionStart);
            
            // Parse questions using regex
            const questionRegex = /\*\*Câu hỏi:\*\* ([^\n]+)\n\*\*Đáp án:\*\* ([^\n]+)\n\*\*Giải thích:\*\* ([^\n]+)/g;
            let questionMatch;
            
            while ((questionMatch = questionRegex.exec(subsectionContent)) !== null) {
                subsection.questions.push({
                    question: questionMatch[1],
                    answer: questionMatch[2],
                    explanation: questionMatch[3]
                });
            }
            
            if (subsection.questions.length > 0) {
                section.subsections.push(subsection);
            }
        });
        
        if (section.subsections.length > 0) {
            sections.push(section);
        }
    });
    
    return sections;
}

// Generate HTML
function generateHTML(sections) {
    const topicIcons = {
        'Python Basics': '🐍',
        'NumPy Operations': '🔢',
        'Pandas Operations': '🐼',
        'File I/O Operations': '📁',
        'Data Processing': '🔧',
        'Data Science Concepts': '📈'
    };
    
    let html = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>📚 Đáp án tổng hợp cho 8 đề thi DS_CLC (1-8)</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .header {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        
        .header h1 {
            color: #2c3e50;
            font-size: 2.5em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .stat-item {
            background: linear-gradient(45deg, #3498db, #2980b9);
            color: white;
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .stat-number {
            font-size: 2em;
            font-weight: bold;
            display: block;
        }
        
        .stat-label {
            font-size: 0.9em;
            opacity: 0.9;
        }
        
        .toc {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 25px;
            margin-bottom: 30px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 20px;
            z-index: 100;
        }
        
        .toc h3 {
            color: #2c3e50;
            margin-bottom: 15px;
            font-size: 1.3em;
        }
        
        .toc-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 10px;
        }
        
        .toc-item {
            background: linear-gradient(45deg, #e74c3c, #c0392b);
            color: white;
            padding: 10px 15px;
            border-radius: 10px;
            text-decoration: none;
            transition: transform 0.3s ease;
            display: block;
        }
        
        .toc-item:hover {
            transform: translateY(-2px);
            text-decoration: none;
            color: white;
        }
        
        .search-box {
            width: 100%;
            padding: 15px;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 1em;
            margin-bottom: 20px;
        }
        
        .topic-section {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .topic-header {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 3px solid #3498db;
        }
        
        .topic-icon {
            font-size: 2.5em;
            margin-right: 15px;
        }
        
        .topic-title {
            color: #2c3e50;
            font-size: 1.8em;
            font-weight: bold;
        }
        
        .subtopic-title {
            color: #34495e;
            font-size: 1.3em;
            margin: 25px 0 15px 0;
            padding: 10px 15px;
            background: linear-gradient(45deg, #f39c12, #e67e22);
            color: white;
            border-radius: 10px;
        }
        
        .question-item {
            background: #f8f9fa;
            border-left: 5px solid #3498db;
            padding: 20px;
            margin: 15px 0;
            border-radius: 0 10px 10px 0;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
        }
        
        .question-text, .question-code {
            font-size: 1.1em;
            margin-bottom: 10px;
            font-weight: 500;
        }
        
        .question-code {
            background: #2c3e50;
            color: #ecf0f1;
            padding: 15px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 0.95em;
            overflow-x: auto;
        }
        
        .answer-highlight {
            background: linear-gradient(45deg, #27ae60, #2ecc71);
            color: white;
            padding: 10px 15px;
            border-radius: 8px;
            font-weight: bold;
            margin: 10px 0;
            font-size: 1.05em;
        }
        
        .explanation {
            background: #ecf0f1;
            padding: 15px;
            border-radius: 8px;
            margin-top: 10px;
            border-left: 4px solid #3498db;
        }
        
        .explanation strong {
            color: #2c3e50;
        }
        
        .footer {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 15px;
            padding: 25px;
            margin-top: 30px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .back-link {
            display: inline-block;
            background: linear-gradient(45deg, #9b59b6, #8e44ad);
            color: white;
            padding: 12px 25px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: bold;
            margin-bottom: 20px;
            transition: transform 0.3s ease;
        }
        
        .back-link:hover {
            transform: translateY(-2px);
            text-decoration: none;
            color: white;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 10px;
            }
            
            .header h1 {
                font-size: 2em;
            }
            
            .stats {
                grid-template-columns: 1fr;
            }
            
            .toc-list {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <a href="../index.html" class="back-link">← Quay lại</a>
        
        <div class="header">
            <h1>📚 Đáp án tổng hợp cho 8 đề thi DS_CLC (1-8)</h1>
            <p><strong>Môn học:</strong> Khoa học dữ liệu trong Kinh tế và Kinh doanh</p>
            
            <div class="stats">
                <div class="stat-item">
                    <span class="stat-number">8</span>
                    <span class="stat-label">Đề thi</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">320</span>
                    <span class="stat-label">Tổng câu hỏi</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">219</span>
                    <span class="stat-label">Câu hỏi duy nhất</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">84%</span>
                    <span class="stat-label">Tỷ lệ khớp</span>
                </div>
            </div>
        </div>
        
        <div class="toc">
            <h3>📋 Mục lục</h3>
            <div class="toc-list">`;
    
    // Generate TOC
    sections.forEach((section, index) => {
        const icon = topicIcons[section.title] || '📝';
        const totalQuestions = section.subsections.reduce((sum, sub) => sum + sub.questions.length, 0);
        html += `<a href="#topic-${index}" class="toc-item">${icon} ${section.title} (${totalQuestions} câu)</a>`;
    });
    
    html += `
            </div>
            <input type="text" class="search-box" placeholder="🔍 Tìm kiếm câu hỏi..." id="searchBox">
        </div>
        
        <div class="content">`;
    
    // Generate sections
    sections.forEach((section, sectionIndex) => {
        const icon = topicIcons[section.title] || '📝';
        const totalQuestions = section.subsections.reduce((sum, sub) => sum + sub.questions.length, 0);
        
        html += `
            <div class="topic-section" id="topic-${sectionIndex}">
                <div class="topic-header">
                    <div class="topic-icon">${icon}</div>
                    <h3 class="topic-title">${sectionIndex + 1}. ${section.title} (${totalQuestions} câu)</h3>
                </div>`;
        
        section.subsections.forEach(subsection => {
            html += `<h4 class="subtopic-title">${subsection.title} (${subsection.questions.length} câu)</h4>`;
            
            subsection.questions.forEach(question => {
                const isCodeQuestion = question.question.includes('`');
                html += `
                    <div class="question-item">
                        <div class="question-${isCodeQuestion ? 'code' : 'text'}">${question.question}</div>
                        <div class="answer-highlight">Đáp án: ${question.answer}</div>
                        <div class="explanation">
                            <strong>Giải thích:</strong> ${question.explanation}
                        </div>
                    </div>`;
            });
        });
        
        html += `</div>`;
    });
    
    html += `
        </div>
        
        <div class="footer">
            <h3>🎯 Kết luận và đánh giá</h3>
            <p><strong>Điểm mạnh của bộ đề thi:</strong></p>
            <ul style="text-align: left; max-width: 600px; margin: 0 auto;">
                <li><strong>Phủ sóng toàn diện</strong> các chủ đề quan trọng trong khoa học dữ liệu</li>
                <li><strong>Cân bằng</strong> giữa lý thuyết và thực hành</li>
                <li><strong>Phù hợp</strong> với trình độ sinh viên kinh tế và kinh doanh</li>
                <li><strong>Đa dạng</strong> về loại câu hỏi và độ khó</li>
            </ul>
            <p style="margin-top: 20px;"><strong>Chúc các bạn làm bài tốt! 🚀</strong></p>
        </div>
    </div>
    
    <script>
        // Search functionality
        document.getElementById('searchBox').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const questionItems = document.querySelectorAll('.question-item');
            
            questionItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
        
        // Smooth scrolling for TOC links
        document.querySelectorAll('.toc-item').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    </script>
</body>
</html>`;
    
    return html;
}

// Parse and generate
console.log('🔄 Parsing markdown content with comprehensive method...');
const sections = parseMarkdownComprehensive(markdownContent);

console.log('📊 Parsed sections:');
let totalQuestions = 0;
sections.forEach((section, index) => {
    const sectionQuestions = section.subsections.reduce((sum, sub) => sum + sub.questions.length, 0);
    totalQuestions += sectionQuestions;
    console.log(`  ${index + 1}. ${section.title}: ${sectionQuestions} questions`);
});

console.log(`📊 Total questions parsed: ${totalQuestions}`);

console.log('🎨 Generating HTML...');
const html = generateHTML(sections);

// Write to file
const outputFile = path.join(__dirname, 'Exam', 'answer-keys.html');
fs.writeFileSync(outputFile, html, 'utf8');

console.log('✅ Complete answer keys HTML generated successfully!');
console.log(`📁 Output file: ${outputFile}`);
console.log(`📊 Total sections: ${sections.length}`);
console.log(`📊 Total questions: ${totalQuestions}`);