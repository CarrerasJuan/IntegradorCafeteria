//Realizamos el mismo objetivo que buscamos para el carrusel pero esta vez para los productos
//creamos un array de objetos donde cada objeto representa un producto con sus propiedades
const productos = [
  { id: 1, nombre: "Café Australiano", categoria: "Café", precio: 8000, img: "/img/cafe-australiano.jpg" },
  { id: 2, nombre: "Café Helado", categoria: "Café", precio: 7500, img: "/img/cafe-helado.jpg" },
  { id: 3, nombre: "Café Inglés", categoria: "Café", precio: 6000, img: "/img/cafe-ingles.jpg" },
  { id: 4, nombre: "Café Irlandés", categoria: "Café", precio: 8500, img: "/img/cafe-irish.jpg" },
  { id: 5, nombre: "Café Licuado", categoria: "Café", precio: 9500, img: "/img/cafe-liqueurs.jpg" },
  { id: 6, nombre: "Café Vienés", categoria: "Café", precio: 9500, img: "/img/cafe-viena.jpg" },
  { id: 7, nombre: "Red Velvet", categoria: "Pastelería", precio: 7000, img: "/img/red-velvet.jpg" },
  { id: 8, nombre: "Lemon Pie", categoria: "Pastelería", precio: 6500, img: "/img/LemonPie.png" },
  { id: 9, nombre: "Tarta Sacher", categoria: "Pastelería", precio: 6000, img: "/img/tarta-sacher.jpg" },
  { id: 10, nombre: "Torta de Chocolate", categoria: "Pastelería", precio: 7000, img: "/img/torta-chocolate.png" },
  { id: 11, nombre: "Palmeritas", categoria: "Pastelería", precio: 3500, img: "/img/palmeritas-100g.jpg" },
  { id: 12, nombre: "Budín con Chocolate", categoria: "Pastelería", precio: 4000, img: "/img/budin-con-chocolate.jpg" }
];

const contenedor = document.querySelector(".grid-productos");

// Render dinámico - misma lógica que en el carrusel
productos.forEach(producto => {
  const card = document.createElement("div");
  card.classList.add("producto");
  card.innerHTML = `
    <img src="${producto.img}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p class="categoria">${producto.categoria}</p>
    <p class="precio">$${producto.precio}</p>
    <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
  `;
  contenedor.appendChild(card);
});

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