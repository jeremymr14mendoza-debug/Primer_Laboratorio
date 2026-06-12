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
});