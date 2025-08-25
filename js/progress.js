const scrollProgress = document.getElementById("progress");

function updateBackToTopVisibility() {
  const y = window.scrollY || document.documentElement.scrollTop || 0;
  scrollProgress.style.display = y > 100 ? "flex" : "none";
}

if (scrollProgress) {
  scrollProgress.addEventListener("click", () => {
    window.scrollTo({ top: 0});
  });

  window.addEventListener("load", updateBackToTopVisibility);
  window.addEventListener("resize", updateBackToTopVisibility);
  window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });

  updateBackToTopVisibility();
}
