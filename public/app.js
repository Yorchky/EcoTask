let tareas = [
    {
        id: 1,
        titulo: "Diseñar prototipo",
        estado: "Completada"
    },
    {
        id: 2,
        titulo: "Configurar API",
        estado: "En progreso"
    },
    {
        id: 3,
        titulo: "Documentación",
        estado: "Pendiente"
    }
];


function obtenerClaseEstado(estado) {

    if (estado === "Completada") {
        return "completada";
    }

    if (estado === "En progreso") {
        return "progreso";
    }

    return "pendiente";
}


function mostrarTareas() {

    const contenedor = document.getElementById("tareas");

    const contador = document.getElementById("contador");

    contenedor.innerHTML = "";

    contador.textContent =
        `${tareas.length} ${tareas.length === 1 ? "tarea" : "tareas"}`;


    tareas.forEach(tarea => {

        const clase = obtenerClaseEstado(tarea.estado);

        contenedor.innerHTML += `

            <div class="tarea">

                <h3>${tarea.titulo}</h3>

                <span class="estado ${clase}">
                    ${tarea.estado}
                </span>

                <div class="tarea-acciones">

                    <button onclick="cambiarEstado(${tarea.id})">
                        Cambiar estado
                    </button>

                    <button onclick="eliminarTarea(${tarea.id})">
                        Eliminar
                    </button>

                </div>

            </div>

        `;
    });
}


/* =========================
   CREAR TAREA
========================= */

function crearTarea() {

    const titulo =
        document.getElementById("titulo").value.trim();

    const estado =
        document.getElementById("estado").value;


    if (titulo === "") {

        alert("Escribe un nombre para la tarea");

        return;
    }


    const nuevaTarea = {

        id: Date.now(),

        titulo: titulo,

        estado: estado

    };


    tareas.push(nuevaTarea);

    mostrarTareas();

    cerrarFormulario();

}


/* =========================
   ELIMINAR
========================= */

function eliminarTarea(id) {

    tareas = tareas.filter(tarea => tarea.id !== id);

    mostrarTareas();
}


/* =========================
   CAMBIAR ESTADO
========================= */

function cambiarEstado(id) {

    const tarea =
        tareas.find(tarea => tarea.id === id);


    if (tarea.estado === "Pendiente") {

        tarea.estado = "En progreso";

    } else if (tarea.estado === "En progreso") {

        tarea.estado = "Completada";

    } else {

        tarea.estado = "Pendiente";

    }


    mostrarTareas();
}


/* =========================
   MODAL
========================= */

function mostrarFormulario() {

    document
        .getElementById("modal")
        .classList.remove("oculto");

}


function cerrarFormulario() {

    document
        .getElementById("modal")
        .classList.add("oculto");


    document.getElementById("titulo").value = "";

}


/* =========================
   INICIAR
========================= */

mostrarTareas();