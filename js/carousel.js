//Array de objetos imagenes para el slider representa cada diapositiva del carrusel
const slides = [
  {
    img: "img/gallery1.jpg",
    title: "Café Especial",
    text: "El aroma que despierta tus sentidos"
  },
  {
    img: "img/gallery2.jpg",
    title: "La mejor Calidad",
    text: "Granos tratados y el mejor proceso de selección."
  },
  {
    img: "img/gallery5.jpg",
    title: "Con la mejor preparación",
    text: "Baristas expertos a tu servicio."
  },
  {
    img: "img/gallery4.jpg",
    title: "El mejor ambiente",
    text: "Para que compartas momentos inolvidables."
  }
];
//Variable que sostiene el índice actual del carrusel lo inicializamos en 0 podemos poner +1 si queremos que inicie en la segunda imagen.
//o -1 si queremos que inicie en la última imagen.
let currentIndex = 0;

//esta constante busca en el DOM el primer elemento que coincida con el selector CSS .carousel
const carousel = document.querySelector(".carousel");

// mediante esta funcion flecha recorremos el array slides y por cada elemento del array (slide) y su índice (index)
//creamos un div que contendrá cada item del carrusel y le agregamos la clase carousel-item
//si el índice es 0 (la primera imagen) le agregamos también la clase active para que se muestre al cargar la página
//luego usamos innerHTML para insertar el contenido HTML de cada item del carrusel, incluyendo la imagen y el texto
//finalmente agregamos cada item al contenedor del carrusel usando appendChild
slides.forEach((slide, index) => {
  const item = document.createElement("div");
  item.classList.add("carousel-item");
  if (index === 0) item.classList.add("active");

  item.innerHTML = `
    <img src="${slide.img}" alt="${slide.title}" />
    <div class="carousel-caption">
      <h2>${slide.title}</h2>
      <p>${slide.text}</p>
    </div>
  `;
  carousel.appendChild(item);
});

const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function showSlide(index) {
  items[currentIndex].classList.remove("active");
  currentIndex = (index + totalItems) % totalItems;
  items[currentIndex].classList.add("active");
}

function showNextSlide() {
  showSlide(currentIndex + 1);
}

function showPrevSlide() {
  showSlide(currentIndex - 1);
}

// autoplay genera un evento que cambia la imagen cada 4 segundos automaticamente
setInterval(showNextSlide, 4000);

// eventos botones solo para generar el cambio de imagen al hacer click
document.querySelector(".carousel-btn.next").addEventListener("click", showNextSlide);
document.querySelector(".carousel-btn.prev").addEventListener("click", showPrevSlide);