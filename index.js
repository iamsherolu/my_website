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


//作品按按鈕切換
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("gallery");
  if (n > slides.length) {
    slideIndex = 1
}    
  if (n < 1) {
    slideIndex = slides.length
}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "grid";  
}

function open_layout_1(){
    document.getElementById('learning_vue').style.display='block';
    document.getElementById('vue_more_icon').style.display='none';
    document.getElementById('vue_less_icon').style.display="block";
}
function open_layout_2(){
    document.getElementById('learning_git').style.display='block';
    document.getElementById('git_more_icon').style.display='none';
    document.getElementById('git_less_icon').style.display="block";
}
