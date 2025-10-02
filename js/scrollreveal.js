//Quise intentar que entraran los features con scrollreveal pero no pude hacer que funcionara
//así que usé Intersection Observer API que es nativa de JS y funciona muy bien
// de todos modos solo logre centrarlos no que se desplacen desde un costado
const features = document.querySelectorAll('.feature');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

features.forEach(feature => observer.observe(feature));


//menu de hamburguesas
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});