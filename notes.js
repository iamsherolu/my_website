var overlay = document.getElementById('show_menu_overlay');

function show_menu_overlay(){
    document.getElementById("show_menu_overlay").style.display="block";
}
function off_menu_overlay(){
    document.getElementById("show_menu_overlay").style.display="none";
}
function scrollToSection(sectionId) {
    // 滾動到相應的位置
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

//在menu按下任意按鈕，除了跳轉到對應div外，也關閉overlay
function close_overlay(){
    overlay.style.display='none';
}


// 在螢幕大小變化時檢測並自動隱藏overlay
window.addEventListener('resize', function () {
    if (window.innerWidth >= 600) {
        off_menu_overlay();
    }
});


function showDiv(divId) {
    hideAllDivs();

    // 如果 divId 是 '_all'，顯示所有 div
    if (divId === '_all') {
        var allDivs = document.querySelectorAll('.hidden');
        allDivs.forEach(function (div) {
            div.style.display = 'grid';
        });
    } else {
        // 顯示指定的 div
        var divToShow = document.getElementById('div' + divId);
        if (divToShow) {
            divToShow.style.display = 'grid';
        }
    }
}

function hideAllDivs() {
    // 將所有的 div 隱藏
    var allDivs = document.querySelectorAll('.hidden');
    allDivs.forEach(function (div) {
        div.style.display = 'none';
    });
}

showDiv('_all');

//menu按鈕被點選之後會換顏色
function changeBtn_color(btnId) {
    var menu_btn = document.querySelector('.notes_menu_btn.clicked');

    if (menu_btn) {
        menu_btn.classList.remove('clicked');
    }

    var change_color = document.getElementById(btnId);
    change_color.classList.add('clicked');
}

//調整每個content裡，第一個以外的subtitle（調整與上方文字的間距）
var contents=document.querySelectorAll('.content');

contents.forEach(function(content){
    var subtitles=content.querySelectorAll('.subtitle');
    var i;

    for(i=1;i<subtitles.length;i++){
        subtitles[i].style.marginTop='30px';
    }
})

//顯示最後更新日期

// 日期格式化函數
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('zh-TW', options);
}

// 取得目前日期
const currentDate = new Date();

// 使用 jQuery 更新具有 id 為 'lastUpdated' 的元素的內容
$(document).ready(function() {
    $('#updated').text('最後更新日期：' + formatDate(currentDate));
    $('#updated').css('paddingLeft','60px');
    $('#updated').css('color','#6C3365');
    $('#updated').css('fontFamily','Amatic SC ');
});