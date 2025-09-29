let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
  // Wrap around if index goes out of bounds
  if (index >= slides.length) slideIndex = 0;
  else if (index < 0) slideIndex = slides.length - 1;
  else slideIndex = index;

  // Hide all slides and show only the current one
  slides.forEach((slide, i) => {
    slide.style.display = (i === slideIndex) ? "block" : "none";
  });
}

// Next and Previous controls
function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

// Auto-slide every 2 seconds
setInterval(nextSlide, 2000);

// Manual navigation buttons
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Initial display
showSlide(slideIndex);
