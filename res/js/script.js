// Toggle Menu
const toggle = document.getElementById("toggle"),
  menu = document.querySelector(".links");

toggle.addEventListener("click", function () {
  menu.classList.toggle('hide');
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.getElementById("fixHead");
var container = document.querySelector('.container'),
link = document.querySelectorAll('.link'),
scrollIcon = document.querySelector('.scroll'),
department = document.querySelector('.depart');

// Get the offset position of the navbar
var sticky = header.offsetTop,
stickyBig = header.offsetHeight;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-top");
    scrollIcon.style.display = "none";
    container.style.boxShadow = "0px 0px 15px -5px rgba(70, 70, 70, 0.5)";
    link[1].style.color = "#fff";
    link[2].style.color = "#fff";
  } else {
    header.classList.remove("sticky");
    scrollIcon.style.display = "block";
    container.style.boxShadow = "0px 0px 15px 0px rgba(0, 0, 0, 0.7)";
    link[1].style.color = "#969696";
    link[2].style.color = "#969696";
  }
}

$(document).ready(function(){
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true
  });
});

$(document).ready(function(){
  $(".de-slide").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true
  });
});

scrollIcon.addEventListener('click', function(){
  var ele = document.getElementById('department');
  window.scrollTo(ele.offsetLeft, ele.offsetTop);
})

window.onscroll = function(){
  if(window.pageYOffset > stickyBig){
    department.classList.add('scrolled'),
    department.classList.remove('js-scroll');
  }else{
    department.classList.remove('scrolled'),
    department.classList.add('js-scroll');
  }
}



