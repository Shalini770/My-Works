// Show button on scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const btn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}