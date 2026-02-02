import { pathTareaEstado } from "../services/tareas.services.js";
import { store } from "../store/store.js";
export function detallesTaskView(id){
    const task = getTaskById(id);
    const detalles = document.createElement("div");
    detalles.className = "container py-4 mt-6";
    detalles.innerHTML = 

    `
        <h1> ${task.nombre} </h1>
        <br>
        <p> ${task.descripcion}</p>
        <br>
        <h2>due date: ${task.fecha} <h2>
        <br>
        <h2>priority: ${task.prioridad} <h2>
        <br>
        <h2>category: ${task.categoria} <h2>
        <br>
        <h2>state: ${task.estado} <h2>
        <br>
        <label class="form-label mb-1">State: ${task.estado}</label>
                    <select class="form-select orden-estado" data-id="${task.id}">
                        <option value="pending" ${task.estado === "pending" ? "selected" : ""}>pending</option>
                        <option value="in-progress" ${task.estado === "in-progress" ? "selected" : ""}>in-progress</option>
                        <option value="completed" ${task.estado === "completed" ? "selected" : ""}>completed</option>
        </select>
        <br>
        <a href="#/dashboard"> <button> save changes </button>
 </a>
            
    `
   
        detalles.addEventListener("click", async (e)=>{
        
        if (e.target.tagName == "SELECT") {
            const taskId = id;
         
            await pathTareaEstado(id, e.target.value);
            console.log("estado actualizado")
        }
    
    })
    return detalles


}

function getTaskById(id){
    const task = store.tareas.data.find(t => t.id === id);
    return task
}
