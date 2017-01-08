// JavaScript Document

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "449px";
    document.getElementById("main").style.transform = "translateX(-449px)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.transform = "translateX(0)";
}


function openNav_2() {
    document.getElementById("mySidenav 2").style.width = "449px";
  document.getElementById("main").style.transform = "translateX(-449px)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav_2() {
    document.getElementById("mySidenav 2").style.width = "0";
    document.getElementById("main").style.transform = "translateX(0)";
}

function openNav_3() {
    document.getElementById("mySidenav 3").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav_3() {
    document.getElementById("mySidenav 3").style.width = "0";
}


function openNav_4(e) {
    e.preventDefault()
    document.getElementById("mySidenav 4").style.width = "449px";
    document.getElementById("main").style.transform = "translateX(-449px)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav_4() {
    document.getElementById("mySidenav 4").style.width = "0";
    document.getElementById("main").style.transform = "translateX(0)";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}



/*SLIDER MAIN CARD*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var sticksl = document.getElementsByClassName("sticksl");
  var picksl = document.getElementsByClassName("picksl");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
      slides[slideIndex-1].classList.remove('animated');
  }
  for (i = 0; i < sticksl.length; i++) {
      sticksl[i].classList.remove('active');
  }

  for (i = 0; i < picksl.length; i++){
    picksl[i].classList.remove('active'); 
  }
  slides[slideIndex-1].classList.add('animated');
  slides[slideIndex-1].style.display = "block"; 
  sticksl[slideIndex-1].classList.add("active");
  picksl[slideIndex-1].classList.add('active');
}





/*UP BUTTON*/

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
