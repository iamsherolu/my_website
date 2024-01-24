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

// intro的文字繞圓動畫
const text= document.querySelector('.circle_text p');
text.innerHTML=text.innerText.split("").map(
    (char,i)=>
    `<span style="transform:rotate(${i*12}deg)">${char}</span> `   //讓circle_text上的文字都分別在一個<span>中
).join("")

//works滑鼠碰到按鈕顯示對應文字
var list_items=document.querySelectorAll('.list_item');
var display_content=document.querySelectorAll('.display_content');

display_content[0].style.display='block';

list_items.forEach((list_item,index)=>{
    list_item.addEventListener('mouseover',function(){
        display_content.style.display='block';
    })
})

function hidden(){
    display_content.forEach((display_content)=>{
        display_content.style.display='none';
    });
}