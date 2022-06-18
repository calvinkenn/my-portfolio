let slideIndex = 1;

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

var mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  history.replaceState(null, null, " ");
}
