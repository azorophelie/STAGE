function toggleDarkMode() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("dark-mode");
    darkModeIcon.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';

  }
  function toggleDarkMode() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.toggle("dark-mode");
    dark.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
  }
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  document.addEventListener('DOMContentLoaded', function() {
    var dropDownBtn = document.querySelector('.dropbtn');
    var dropDownContent = document.querySelector('.dropdown-content');
  
    dropDownBtn.addEventListener('click', function() {
      if (dropDownContent.style.display === 'block') {
        dropDownContent.style.display = 'none';
      } else {
        dropDownContent.style.display = 'block';
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll(".mobile-menu li");
  
    menuItems.forEach(function(item) {
      item.addEventListener("click", function(e) {
        e.stopPropagation();
        item.classList.toggle("open");
      });
    });
  
    document.addEventListener("click", function() {
      menuItems.forEach(function(item) {
        item.classList.remove("open");
      });
    });
  });