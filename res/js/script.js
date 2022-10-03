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
link = document.querySelectorAll('.link');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    container.style.boxShadow = "0px 0px 15px -5px rgba(70, 70, 70, 0.5)";
    link[1].style.color = "#fff";
    link[2].style.color = "#fff";
    
  } else {
    header.classList.remove("sticky");
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
    fade: true,
    dots: true
  });
});
