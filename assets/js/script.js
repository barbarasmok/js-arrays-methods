let tareas = [
  { id: 1, descripcion: 'Aprender JavaScript', realizada: false },
  { id: 2, descripcion: 'Hacer ejercicios de programación', realizada: true },
  { id: 3, descripcion: 'Leer documentación', realizada: false },
];

function actualizarLista() {
  const listaTareas = document.getElementById('listaTareas');
  const totalTareas = document.getElementById('totalTareas');
  const tareasRealizadas = document.getElementById('tareasRealizadas');

  listaTareas.innerHTML = '';

  tareas.forEach(tarea => {
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="contenedor-tarea">
            <div class="contenedor-tarea-realizada">
                <span class="${tarea.realizada ? 'texto-realizado' : ''}">
                    ${
                      tarea.realizada
                        ? `<s>${tarea.descripcion}</s>`
                        : tarea.descripcion
                    }
                </span>
                <div class="boton-realizada">
                    <button onclick="marcarRealizada(${
                      tarea.id
                    })" class="boton ${tarea.realizada ? 'realizada' : ''}">
                        ✔
                    </button>
                    ${tarea.realizada ? '<span>Realizada</span>' : ''}
                </div>
            </div>
            <div class="contenedor-eliminar-tarea">
                <button onclick="eliminarTarea(${
                  tarea.id
                })" id=btn-delete class="boton">❌</button>
            </div>
        </div>
        `;
    listaTareas.appendChild(li);
  });

  totalTareas.innerText = tareas.length;
  tareasRealizadas.innerText = tareas.filter(tarea => tarea.realizada).length;
}

function agregarTarea() {
  const input = document.getElementById('nuevaTarea');
  const descripcion = input.value.trim();

  if (descripcion === '') return;

  const nuevaTarea = {
    id: Date.now(),
    descripcion,
    realizada: false,
  };

  tareas.push(nuevaTarea);
  input.value = '';
  actualizarLista();
}

function eliminarTarea(id) {
  tareas = tareas.filter(tarea => tarea.id !== id);
  actualizarLista();
}

function marcarRealizada(id) {
  const tarea = tareas.find(t => t.id === id);
  if (tarea) tarea.realizada = !tarea.realizada;
  actualizarLista();
}

actualizarLista(); // Mostrar las tareas iniciales
