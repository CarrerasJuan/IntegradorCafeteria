// Validación y manejo del formulario
// Selección de elementos
const form = document.getElementById("contactoForm");
const resultadoDiv = document.querySelector(".resultado-envio");

// Expresiones regulares
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTelefono = /^\+?\d{1,3}?\s?\d{2,4}?\s?\d{3,4}-?\d{3,4}$/;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let valido = true;

  // Limpiar mensajes anteriores
  document.querySelectorAll(".help").forEach(div => (div.textContent = ""));
  resultadoDiv.innerHTML = "";

  // Capturamos valores
  const nombre = document.getElementById("nombre").value.trim();
  const genero = document.getElementById("genero").value;
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const nacimiento = document.getElementById("nacimiento").value;
  const mensaje = document.getElementById("mensaje").value.trim();

  // Validar Nombre
  if (!nombre || nombre.length < 10 || nombre.length > 50) {
    document.getElementById("help-nombre").textContent =
      "El nombre debe tener entre 10 y 50 caracteres.";
    valido = false;
  }

  // Validar Género
  if (!genero) {
    document.getElementById("help-genero").textContent =
      "Seleccione un género.";
    valido = false;
  }

  // Validar Email
  if (!regexEmail.test(email)) {
    document.getElementById("help-email").textContent =
      "Ingrese un correo válido (ej: usuario@dominio.com).";
    valido = false;
  }

  // Validar Teléfono
  if (telefono && !regexTelefono.test(telefono)) {
    document.getElementById("help-telefono").textContent =
      "Formato inválido. Ej: +54 9 11 1234-5678";
    valido = false;
  }

  // Validar Fecha
  if (!nacimiento) {
    document.getElementById("help-nacimiento").textContent =
      "Ingrese una fecha válida.";
    valido = false;
  }

  // Si hay errores, frenar
  if (!valido) return;

  // Formatear fecha
  const fechaFormateada = new Date(nacimiento).toLocaleDateString("es-AR");

  // ✅ Mensaje de éxito
  const exito = document.createElement("p");
  exito.textContent = "✅ Enviado correctamente";
  exito.style.color = "green";
  exito.style.fontWeight = "bold";

  // Crear elementos dinámicamente con createElement
  const titulo = document.createElement("h3");
  titulo.textContent = "Datos enviados:";

  const lista = document.createElement("ul");

  const datos = [
    `Nombre: ${nombre}`,
    `Género: ${genero}`,
    `Email: ${email}`,
    `Teléfono: ${telefono || "No especificado"}`,
    `Fecha de Nacimiento: ${fechaFormateada}`,
    `Mensaje: ${mensaje || "Sin mensaje"}`,
  ];

  datos.forEach(texto => {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
  });

  resultadoDiv.appendChild(exito);
  resultadoDiv.appendChild(titulo);
  resultadoDiv.appendChild(lista);

  // ✅ Resetear formulario después de enviar
  form.reset();

  // Limpiar mensajes de error (extra seguridad)
  document.querySelectorAll(".help").forEach(div => (div.textContent = ""));
});

//menu de hamburguesas
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
