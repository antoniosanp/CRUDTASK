import { store } from "../store/store.js";
import { taskCardAdmin } from "./taskCardAdmin.js";
import { deleteTarea } from "../services/tareas.services.js";
export function TaskListAdmin(){
    const taskList = document.createElement("section");
taskList.className = "container mt-4";

taskList.innerHTML = `


    
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-3">
        <input
            type="text"
            class="form-control w-25"
            placeholder="Search tasks..."
        />

        <div class="btn-group">
            <button class="btn btn-outline-primary active">All Tasks</button>
            <button class="btn btn-outline-secondary">Pending</button>
            <button class="btn btn-outline-secondary">Completed</button>
        </div>
    </div>

    <!-- Table -->
    <div class="card border-0 shadow-sm">
        <div class="table-responsive">
            <table class="table align-middle mb-0">
                <thead class="table-light">
                    <tr>
                        <th>TASK NAME</th>
                        <th>ASSIGNEE</th>
                        <th>STATUS</th>
                        <th>PRIORITY</th>
                        <th>DUE DATE</th>
                        <th class="text-end">ACTIONS</th>
                    </tr>
                </thead>

                <tbody id="listaTask">

                   
                    

                </tbody>
            </table>
        </div>
    </div>
`;

const listaTask = taskList.querySelector("#listaTask");
agregarTareas(listaTask)

listaTask.addEventListener("click", async (e)=>{
    if (e.target.id === "btnEliminarTask")
    {   if (store.current_user.rol==="admin")
        {
        const taskId = e.target.dataset.id;
        await deleteTarea(taskId)
        }
        else {
            alert("only the administrator can delete tasks")
        }
    }
})

return taskList
}

function agregarTareas(div){

    for (const t of store.tareas.data){
        div.appendChild(taskCardAdmin(t))
        
    }
}