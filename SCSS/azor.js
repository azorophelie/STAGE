function toggleDarkMode() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("dark-mode");
    darkModeIcon.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';

  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }