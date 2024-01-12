//彈跳出div
document.querySelectorAll('.popup').forEach(function (popup) {
    popup.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});

document.addEventListener('click', function () {
    document.querySelectorAll('.popup').forEach(function (popup) {
        popup.style.display = 'none';
    });
});


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


function changeBtn_color(btnId) {
    var menu_btn = document.querySelector('.notes_menu_btn.clicked');

    if (menu_btn) {
        menu_btn.classList.remove('clicked');
    }

    var change_color = document.getElementById(btnId);
    change_color.classList.add('clicked');
}

// 設置默認按鈕狀態
changeBtn_color('btn_all');

// 添加點擊事件，調用 changeBtn_color 函數
document.querySelectorAll('.notes_menu_btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var btnId = btn.getAttribute('id');
        changeBtn_color(btnId);
    });
});

//調整每個content裡，第一個以外的subtitle（調整與上方文字的間距）
var contents=document.querySelectorAll('.content');

contents.forEach(function(content){
    var subtitles=content.querySelectorAll('.subtitle');
    var i;

    for(i=1;i<subtitles.length;i++){
        subtitles[i].style.marginTop='30px';
    }
})


$(document).ready(function() {
    $('.search_icon').css('color','#6C3365');
    $('.search_icon').css('cursor','pointer');
    $('.search_symbol').css('color','#6C3365');
    $('.search_symbol').css('cursor','pointer');
    
    //建立搜尋功能
    $('.search_icon').click(function(){
        var searchInput = $('.search_input').val().toLowerCase();
    
        $('.notes_layout').each(function(){
            var notesContent = $(this).text().toLowerCase();
    
            if(notesContent.includes(searchInput)){
                $(this).show();
            }
            else{
                $(this).hide();
            }
        });
    });
    
    $('.search_symbol').click(function(){
        var searchInput = $('.keywords').val().toLowerCase();
    
        $('.notes_layout').each(function(){
            var notesContent = $(this).text().toLowerCase();
    
            if(notesContent.includes(searchInput)){
                $(this).show();
            }
            else{
                $(this).hide();
            }
        });
    });    
});

