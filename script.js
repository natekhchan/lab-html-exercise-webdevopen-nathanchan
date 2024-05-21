const hamburgerBtn = document.querySelector('.hamburger-btn');
const dropdownContent = document.querySelector('.dropdown-content');

hamburgerBtn.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('.hamburger-btn')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
});