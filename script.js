let slideIndex = 1;
var slide_1 = "mySlides";
var slide_2 = "mySlides2";

for (let index = 1; index < 2; index++) {
  showSlides(1, "slide_" + index);
}
// showSlides(1, slide_1);
// showSlides(1, slide_2);

// Next/previous controls
function plusSlides(n, slideName) {
  showSlides((slideIndex += n), slideName);
}

// Thumbnail image controls
function currentSlide(n, slideName) {
  showSlides((slideIndex = n), slideName);
}

function showSlides(n, slideName) {
  let i;
  let slides = document.getElementsByClassName(slideName);
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
