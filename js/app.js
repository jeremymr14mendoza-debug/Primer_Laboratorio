// ============================
// WEB STORAGE - Recordar nombre en formulario de contacto
// ============================

const nombreInput = document.getElementById('nombre');

// 1. Al cargar la página, si hay un nombre guardado, lo rellenamos
const nombreGuardado = localStorage.getItem('nombreContacto');

if (nombreGuardado) {
  nombreInput.value = nombreGuardado;
}

// 2. Cada vez que el usuario escriba, guardamos el valor
nombreInput.addEventListener('input', () => {
  localStorage.setItem('nombreContacto', nombreInput.value);
}

);

// ============================
// MENÚ HAMBURGUESA
// ============================

const menuToggle = document.getElementById('menu-toggle');
const menuLista = document.getElementById('menu-lista');

menuToggle.addEventListener('click', () => {

  // Alternar la clase "abierto" en el menú
  menuLista.classList.toggle('abierto');

  // Actualizar aria-expanded según el estado actual
  const estaAbierto = menuLista.classList.contains('abierto');
  menuToggle.setAttribute('aria-expanded', estaAbierto);

  // Cambiar el ícono del botón
  menuToggle.textContent = estaAbierto ? '✕' : '☰';
  menuToggle.setAttribute('aria-label', 
    estaAbierto ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
  );
});

// Cerrar el menú al hacer clic en un link (UX: el menú se cierra solo)
menuLista.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuLista.classList.remove('abierto');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
    menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
  });
});


// ============================
// FORMULARIO - Mensaje de éxito
// ============================

const form = document.querySelector('form');
const mensajeExito = document.getElementById('mensaje-exito');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Mostrar el mensaje de éxito
  mensajeExito.style.display = 'block';

  // Limpiar el formulario
  form.reset();

  // Limpiar el nombre guardado en localStorage
  localStorage.removeItem('nombreContacto');

  // Ocultar el mensaje después de 5 segundos
  setTimeout(() => {
    mensajeExito.style.display = 'none';
  }, 5000);
});