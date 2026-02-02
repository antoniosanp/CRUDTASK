//administrarProducto.js

import { store } from "../store/store.js";
import { Tarea } from "../store/store.js";
import { postTarea } from "../services/tareas.services.js";


export function nuevaTareaView() {
if (store.current_user.rol !== "admin"){
    alert("usuario inválido");
    const textoNodo = document.createElement("div");
    textoNodo.innerHTML = 
    `
        <a href = "#/dashboard"> return <a>

    `
    return textoNodo

}
const nuevaTarea = document.createElement("section");
nuevaTarea.className = "container mt-5";

nuevaTarea.innerHTML = `
    <div class="row justify-content-center">
        <div class="col-12 col-lg-8">

            <div class="card shadow-sm border-0 p-4">

                <h4 class="fw-bold mb-4">
                    Create New Task
                </h4>

                <form>

                    <div class="row g-3">

                        <!-- Task Title -->
                        <div class="col-12">
                            <label class="form-label fw-semibold">
                                Task Title <span class="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="taskTitle"
                                placeholder="e.g., Complete Quarter 3 Report"
                                required
                            >
                        </div>

                        <!-- Category -->
                        <div class="col-12 col-md-6">
                            <label class="form-label fw-semibold">
                                Category
                            </label>
                            <select
                                class="form-select"
                                id="taskCategory"
                            >
                                <option value="" selected disabled>
                                    Select category...
                                </option>
                                <option value="work">Work</option>
                                <option value="personal">Personal</option>
                                <option value="study">Study</option>
                            </select>
                        </div>

                        <!-- Priority -->
                        <div class="col-12 col-md-6">
                            <label class="form-label fw-semibold">
                                Priority
                            </label>
                            <select
                                class="form-select"
                                id="taskPriority"
                            >
                                <option value="medium" selected>Medium</option>
                                <option value="high">High</option>
                                <option value="low">Low</option>
                            </select>
                        </div>

                        <!-- Status -->
                        <div class="col-12 col-md-6">
                            <label class="form-label fw-semibold">
                                Status
                            </label>
                            <select
                                class="form-select"
                                id="taskStatus"
                            >
                                <option value="pending" selected>Pending</option>
                                <option value="in-progress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>

                        <!-- Due Date -->
                        <div class="col-12 col-md-6">
                            <label class="form-label fw-semibold">
                                Due Date
                            </label>
                            <input
                                type="date"
                                class="form-control"
                                id="taskDueDate"
                            >
                        </div>

                        <!-- Assing to -->
                        <div class="col-12 col-md-6">
                            <label class="form-label fw-semibold">
                                Assign To
                            </label>
                            <select
                                class="form-select"
                                id="taskUser"
                            >
                                <option value="" selected disabled>
                                    Select user...
                                </option>
                            </select>
                        </div>


                        <!-- Description -->
                        <div class="col-12">
                            <label class="form-label fw-semibold">
                                Description
                            </label>
                            <textarea
                                class="form-control"
                                id="taskDescription"
                                rows="4"
                                placeholder="Add details about this task..."
                            ></textarea>
                        </div>

                    </div>

                    <hr class="my-4">

                    <!-- Buttons -->
                    <div class="d-flex justify-content-end gap-2">
                        <button
                            type="button"
                            class="btn btn-outline-secondary"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            class="btn btn-primary"
                        >
                            Save Task
                        </button>
                    </div>

                </form>

            </div>

        </div>
    </div>
`;

    const selectUser = nuevaTarea.querySelector("#taskUser");
    cargarUsuarios(selectUser);


//Entradas------------------------------------------------------------------------------
    const form = nuevaTarea.querySelector("form");
    const asignado = nuevaTarea.querySelector("#taskUser");
    const nombre = nuevaTarea.querySelector("#taskTitle");
    const prioridad = nuevaTarea.querySelector("#taskPriority");
    const estado = nuevaTarea.querySelector("#taskStatus");
    const descripcion = nuevaTarea.querySelector("#taskDescription");  
    const fecha = nuevaTarea.querySelector("#taskDueDate");  
    const categoria = nuevaTarea.querySelector("#taskCategory");



    form.addEventListener("submit", async (e)=>{

        e.preventDefault();
        const tarea = new Tarea(asignado.value, nombre.value, prioridad.value, estado.value, descripcion.value, fecha.value, categoria.value);
     
        const res = await postTarea(tarea);
        alert("new Task created");
        
    })



    return nuevaTarea

}

async function cargarUsuarios(div) {
    

    
        store.users.data.forEach(user => {
            const option = document.createElement("option");
            option.value = user.id;      
            option.textContent = user.nombre; 
            div.appendChild(option);
            console.log(user.nombre)
        })

   
}
