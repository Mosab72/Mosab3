// University Data - Complete Analysis
const universityData = [
    { rank: 1, name: "جامعة الأميرة نورة بنت عبدالرحمن - PNU", participants: 89, participations: 267, males: 3, females: 86, saudi: 80, nonSaudi: 9, femalePercent: 97 },
    { rank: 2, name: "جامعة الملك سعود - KSU", participants: 92, participations: 406, males: 53, females: 39, saudi: 79, nonSaudi: 13, femalePercent: 42 },
    { rank: 3, name: "جامعة الملك عبدالعزيز - KAU", participants: 86, participations: 326, males: 26, females: 60, saudi: 77, nonSaudi: 9, femalePercent: 70 },
    { rank: 4, name: "جامعة الإمام عبدالرحمن بن فيصل - IAU", participants: 60, participations: 147, males: 9, females: 51, saudi: 50, nonSaudi: 10, femalePercent: 85 },
    { rank: 5, name: "جامعة أم القرى - UQU", participants: 50, participations: 229, males: 16, females: 34, saudi: 48, nonSaudi: 2, femalePercent: 68 },
    { rank: 6, name: "جامعة الإمام محمد بن سعود الإسلامية - IMISIU", participants: 47, participations: 131, males: 27, females: 20, saudi: 45, nonSaudi: 2, femalePercent: 43 },
    { rank: 7, name: "جامعة القصيم - QU", participants: 43, participations: 176, males: 31, females: 12, saudi: 40, nonSaudi: 3, femalePercent: 28 },
    { rank: 8, name: "جامعة الطائف - TU", participants: 42, participations: 107, males: 29, females: 13, saudi: 41, nonSaudi: 1, femalePercent: 31 },
    { rank: 9, name: "جامعة الأمير سطام بن عبدالعزيز - PSAU", participants: 37, participations: 99, males: 16, females: 21, saudi: 33, nonSaudi: 4, femalePercent: 57 },
    { rank: 10, name: "جامعة طيبة - TaibahU", participants: 37, participations: 89, males: 20, females: 17, saudi: 32, nonSaudi: 5, femalePercent: 46 },
    { rank: 11, name: "جامعة الملك خالد - KKU", participants: 34, participations: 100, males: 23, females: 11, saudi: 29, nonSaudi: 5, femalePercent: 32 },
    { rank: 12, name: "جامعة نجران - NU", participants: 33, participations: 71, males: 23, females: 10, saudi: 26, nonSaudi: 7, femalePercent: 30 },
    { rank: 13, name: "جامعة الإسلامية بالمدينة المنورة - IU", participants: 22, participations: 96, males: 22, females: 0, saudi: 22, nonSaudi: 0, femalePercent: 0 },
    { rank: 14, name: "جامعة الملك سعود بن عبدالعزيز للعلوم الصحية - KSAU-HS", participants: 24, participations: 64, males: 14, females: 10, saudi: 22, nonSaudi: 2, femalePercent: 42 },
    { rank: 15, name: "جامعة جازان - JazanU", participants: 18, participations: 44, males: 13, females: 5, saudi: 15, nonSaudi: 3, femalePercent: 28 },
    { rank: 16, name: "جامعة حفر الباطن - UHB", participants: 13, participations: 26, males: 10, females: 3, saudi: 10, nonSaudi: 3, femalePercent: 23 },
    { rank: 17, name: "جامعة الملك فهد للبترول والمعادن - KFUPM", participants: 15, participations: 50, males: 14, females: 1, saudi: 9, nonSaudi: 6, femalePercent: 7 },
    { rank: 18, name: "جامعة الباحة - BU", participants: 10, participations: 26, males: 10, females: 0, saudi: 10, nonSaudi: 0, femalePercent: 0 },
    { rank: 19, name: "كليات الأصالة - Alasala", participants: 2, participations: 13, males: 2, females: 0, saudi: 0, nonSaudi: 2, femalePercent: 0 },
    { rank: 20, name: "جامعة بيشة - UB", participants: 8, participations: 17, males: 7, females: 1, saudi: 7, nonSaudi: 1, femalePercent: 13 },
    { rank: 21, name: "جامعة الحدود الشمالية - NBU", participants: 15, participations: 27, males: 13, females: 2, saudi: 10, nonSaudi: 5, femalePercent: 13 },
    { rank: 22, name: "جامعة المجمعة - MU", participants: 16, participations: 23, males: 13, females: 3, saudi: 14, nonSaudi: 2, femalePercent: 19 },
    { rank: 23, name: "جامعة تبوك - UT", participants: 17, participations: 42, males: 13, females: 4, saudi: 13, nonSaudi: 4, femalePercent: 24 },
    { rank: 24, name: "جامعة شقراء - SU", participants: 13, participations: 23, males: 12, females: 1, saudi: 12, nonSaudi: 1, femalePercent: 8 },
    { rank: 25, name: "جامعة الأمير سلطان - PSU", participants: 11, participations: 37, males: 5, females: 6, saudi: 3, nonSaudi: 8, femalePercent: 55 },
    { rank: 26, name: "جامعة الجوف - JU", participants: 15, participations: 26, males: 11, females: 4, saudi: 10, nonSaudi: 5, femalePercent: 27 },
    { rank: 27, name: "جامعة الملك فيصل - KFU", participants: 7, participations: 13, males: 7, females: 0, saudi: 5, nonSaudi: 2, femalePercent: 0 },
    { rank: 28, name: "جامعة حائل - UOH", participants: 9, participations: 17, males: 5, females: 4, saudi: 8, nonSaudi: 1, femalePercent: 44 },
    { rank: 29, name: "كلية الأمير سلطان العسكرية للعلوم الصحية - PSMCHS", participants: 7, participations: 26, males: 7, females: 0, saudi: 6, nonSaudi: 1, femalePercent: 0 },
    { rank: 30, name: "جامعة نايف العربية للعلوم الأمنية - NAUSS", participants: 4, participations: 14, males: 2, females: 2, saudi: 2, nonSaudi: 2, femalePercent: 50 },
    { rank: 31, name: "كلية فقيه للعلوم الطبية - FCMS", participants: 11, participations: 17, males: 1, females: 10, saudi: 9, nonSaudi: 2, femalePercent: 91 },
    { rank: 32, name: "جامعة الأعمال والتكنولوجيا - UBT", participants: 7, participations: 24, males: 2, females: 5, saudi: 4, nonSaudi: 3, femalePercent: 71 },
    { rank: 33, name: "جامعة دار العلوم - DAU", participants: 4, participations: 28, males: 4, females: 0, saudi: 0, nonSaudi: 4, femalePercent: 0 },
    { rank: 34, name: "جامعة الفيصل - Alfaisal", participants: 5, participations: 19, males: 3, females: 2, saudi: 3, nonSaudi: 2, femalePercent: 40 },
    { rank: 35, name: "كلية البترجي الطبية - BMC", participants: 5, participations: 8, males: 2, females: 3, saudi: 4, nonSaudi: 1, femalePercent: 60 },
    { rank: 36, name: "جامعة جدة - UJ", participants: 12, participations: 18, males: 4, females: 8, saudi: 10, nonSaudi: 2, femalePercent: 67 },
    { rank: 37, name: "كلية ابن سينا الأهلية للعلوم الطبية - IBNSINA", participants: 3, participations: 18, males: 1, females: 2, saudi: 1, nonSaudi: 2, femalePercent: 67 },
    { rank: 38, name: "جامعة المعرفة - MCST", participants: 5, participations: 7, males: 3, females: 2, saudi: 2, nonSaudi: 3, femalePercent: 40 },
    { rank: 39, name: "كليات الشرق العربي - ArabEast", participants: 2, participations: 7, males: 1, females: 1, saudi: 1, nonSaudi: 1, femalePercent: 50 },
    { rank: 40, name: "كليات عنيزة - OC", participants: 5, participations: 7, males: 5, females: 0, saudi: 3, nonSaudi: 2, femalePercent: 0 },
    { rank: 41, name: "كلية ينبع الصناعية", participants: 3, participations: 6, males: 2, females: 1, saudi: 3, nonSaudi: 0, femalePercent: 33 },
    { rank: 42, name: "جامعة الأمير محمد بن فهد - PMU", participants: 3, participations: 10, males: 1, females: 2, saudi: 2, nonSaudi: 1, femalePercent: 67 },
    { rank: 43, name: "جامعة سليمان الراجحي - SR", participants: 1, participations: 5, males: 1, females: 0, saudi: 1, nonSaudi: 0, femalePercent: 0 },
    { rank: 44, name: "جامعة العربية المفتوحة", participants: 2, participations: 5, males: 0, females: 2, saudi: 0, nonSaudi: 2, femalePercent: 100 },
    { rank: 45, name: "المؤسسة العامة للتدريب التقني والمهني", participants: 1, participations: 2, males: 1, females: 0, saudi: 1, nonSaudi: 0, femalePercent: 0 },
    { rank: 46, name: "جامعة السعودية الإلكترونية - SEU", participants: 3, participations: 4, males: 1, females: 2, saudi: 3, nonSaudi: 0, femalePercent: 67 },
    { rank: 47, name: "جامعة رياض العلم - REU", participants: 1, participations: 2, males: 0, females: 1, saudi: 1, nonSaudi: 0, femalePercent: 100 },
    { rank: 48, name: "كلية الجبيل الصناعية", participants: 3, participations: 3, males: 2, females: 1, saudi: 2, nonSaudi: 1, femalePercent: 33 },
    { rank: 49, name: "جامعة عفت - EFFAT", participants: 2, participations: 6, males: 0, females: 2, saudi: 0, nonSaudi: 2, femalePercent: 100 },
    { rank: 50, name: "جامعة الأمير مقرن بن عبدالعزيز - UPM", participants: 2, participations: 2, males: 2, females: 0, saudi: 0, nonSaudi: 2, femalePercent: 0 },
    { rank: 51, name: "كلية جدة العالمية - JIC", participants: 4, participations: 5, males: 1, females: 3, saudi: 3, nonSaudi: 1, femalePercent: 75 },
    { rank: 52, name: "كليات الريان الأهلية - AMC", participants: 1, participations: 1, males: 1, females: 0, saudi: 1, nonSaudi: 0, femalePercent: 0 },
    { rank: 53, name: "جامعة فهد بن سلطان", participants: 2, participations: 2, males: 2, females: 0, saudi: 2, nonSaudi: 0, femalePercent: 0 },
    { rank: 54, name: "كلية المانع الطبية", participants: 1, participations: 0, males: 0, females: 1, saudi: 1, nonSaudi: 0, femalePercent: 100 },
    { rank: 55, name: "كلية الفيحاء اللآهلية", participants: 1, participations: 4, males: 0, females: 1, saudi: 1, nonSaudi: 0, femalePercent: 100 },
    { rank: 56, name: "كليات بريدة الأهلية", participants: 1, participations: 1, males: 1, females: 0, saudi: 1, nonSaudi: 0, femalePercent: 0 },
    { rank: 57, name: "كلية الرؤية بالرياض", participants: 1, participations: 1, males: 1, females: 0, saudi: 0, nonSaudi: 1, femalePercent: 0 },
    { rank: 58, name: "كلية الخليج بحفر الباطن", participants: 1, participations: 1, males: 1, females: 0, saudi: 0, nonSaudi: 1, femalePercent: 0 }
];

// Functions for navigation
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update navigation buttons
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
    
    // Load specific section data
    if (sectionId === 'universities') {
        loadUniversityTable();
    } else if (sectionId === 'top-universities') {
        loadTopUniversities();
    }
}

// Load University Table
function loadUniversityTable() {
    const tbody = document.getElementById('universityTableBody');
    if (tbody.children.length > 0) return; // Already loaded
    
    let html = '';
    universityData.forEach(uni => {
        html += `
            <tr>
                <td>${uni.rank}</td>
                <td style="text-align:right; font-weight:600;">${uni.name}</td>
                <td>${uni.participants}</td>
                <td>${uni.participations}</td>
                <td>${uni.males}</td>
                <td>${uni.females}</td>
                <td>${uni.saudi}</td>
                <td>${uni.nonSaudi}</td>
                <td>${uni.femalePercent}%</td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

// Filter Universities
function filterUniversities() {
    const input = document.getElementById('universitySearch');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('universityTable');
    const tr = table.getElementsByTagName('tr');
    
    for (let i = 1; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            const txtValue = td.textContent || td.innerText;
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }
}

// Load Top Universities
function loadTopUniversities() {
    const container = document.getElementById('topUniversitiesList');
    if (container.children.length > 0) return; // Already loaded
    
    let html = '';
    universityData.slice(0, 20).forEach(uni => {
        html += `
            <div class="uni-card">
                <div class="rank">${uni.rank}</div>
                <div class="uni-name">${uni.name}</div>
                <div class="uni-details">
                    <div class="uni-detail">
                        <div class="detail-label">المشاركون</div>
                        <div class="detail-value">${uni.participants}</div>
                    </div>
                    <div class="uni-detail">
                        <div class="detail-label">المشاركات</div>
                        <div class="detail-value">${uni.participations}</div>
                    </div>
                    <div class="uni-detail">
                        <div class="detail-label">ذكور</div>
                        <div class="detail-value">${uni.males}</div>
                    </div>
                    <div class="uni-detail">
                        <div class="detail-label">إناث</div>
                        <div class="detail-value">${uni.females}</div>
                    </div>
                    <div class="uni-detail">
                        <div class="detail-label">سعودي</div>
                        <div class="detail-value">${uni.saudi}</div>
                    </div>
                    <div class="uni-detail">
                        <div class="detail-label">غير سعودي</div>
                        <div class="detail-value">${uni.nonSaudi}</div>
                    </div>
                    <div class="uni-detail">
                        <div class="detail-label">نسبة الإناث</div>
                        <div class="detail-value">${uni.femalePercent}%</div>
                    </div>
                    <div class="uni-detail">
                        <div class="detail-label">متوسط المشاركات</div>
                        <div class="detail-value">${(uni.participations / uni.participants).toFixed(1)}</div>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// Export to CSV
function exportToCSV() {
    let csv = 'الترتيب,اسم الجامعة,عدد المشاركين,إجمالي المشاركات,ذكور,إناث,سعودي,غير سعودي,نسبة الإناث\n';
    
    universityData.forEach(uni => {
        csv += `${uni.rank},"${uni.name}",${uni.participants},${uni.participations},${uni.males},${uni.females},${uni.saudi},${uni.nonSaudi},${uni.femalePercent}%\n`;
    });
    
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'university_analysis.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Print Report
function printReport() {
    window.print();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add animation to bars
    setTimeout(() => {
        const bars = document.querySelectorAll('.bar-fill');
        bars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }, 500);
});
