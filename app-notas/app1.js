const form = document.querySelector('#form-nota');
const inputNota = document.querySelector('#texto-nota');
const btnGuardar = document.querySelector('#btn-guardar');
const listaNotas = document.querySelector('#lista-notas');
const feedback = document.querySelector('#feedback');

let ultimaNotaEliminada = null;

// Prevención de errores: Desactivar botón si está vacío
inputNota.addEventListener('input', () => {
  btnGuardar.disabled = inputNota.value.trim() === '';
});

// Mostrar feedback de estado
function mostrarFeedback(mensaje, sePuedeDeshacer = false) {
  feedback.classList.remove('oculto');
  feedback.innerHTML = `
    <span>${mensaje}</span>
    ${sePuedeDeshacer ? '<button id="btn-deshacer" class="btn btn-deshacer">Deshacer</button>' : ''}
  `;

  if (sePuedeDeshacer) {
    document.querySelector('#btn-deshacer').addEventListener('click', deshacerEliminacion);
  }

  setTimeout(() => {
    feedback.classList.add('oculto');
  }, 4000);
}

// Agregar nueva nota
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const texto = inputNota.value.trim();
  if (!texto) return;

  crearElementoNota(texto);
  inputNota.value = '';
  btnGuardar.disabled = true;

  mostrarFeedback('Nota agregada correctamente');
});

// Crear elemento visual de la nota
function crearElementoNota(texto) {
  const li = document.createElement('li');
  li.className = 'tarjeta-nota';
  li.innerHTML = `
    <span>${texto}</span>
    <button class="btn btn-eliminar" aria-label="Eliminar nota">Eliminar</button>
  `;

  li.querySelector('.btn-eliminar').addEventListener('click', () => {
    ultimaNotaEliminada = { texto, elemento: li };
    li.remove();
    mostrarFeedback('Nota eliminada', true);
  });

  listaNotas.appendChild(li);
}

// Deshacer eliminación (Control y libertad)
function deshacerEliminacion() {
  if (ultimaNotaEliminada) {
    crearElementoNota(ultimaNotaEliminada.texto);
    ultimaNotaEliminada = null;
    mostrarFeedback('Eliminación cancelada');
  }
}