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

    // 關閉overlay
    const overlay = document.getElementById('show_menu_overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
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


function changeBtn_color(btnId) {
    var menu_btn = document.querySelector('.notes_menu_btn.clicked');

    if (menu_btn) {
        menu_btn.classList.remove('clicked');
    }

    var change_color = document.getElementById(btnId);
    change_color.classList.add('clicked');
}