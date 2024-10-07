// Collapsible navigation menu
const menu = document.querySelector('nav ul');
document.querySelector('header').addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
