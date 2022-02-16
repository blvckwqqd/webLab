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
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

$( function() {
  $( document ).tooltip();
  var NumSpinner = $( "#spinner" ).spinner();
  var StrSpinner = $( "#tags" ).spinner();
  var availableTags = [
    "Bickering", "Bum", "Burrowing", "Command", "Pork", 
    "Portable", "Titus", "Unpack", "Uranium", "Xylography",
    "Cilia", "Colloidal", "Dine", "Get into", "slab",
    "Manly", "Mural", "One-row", "Rain", "Rarity", "Tossit"
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
    });
  $( "#dp" ).datepicker();
  $( "#accordion" ).accordion();
} );
