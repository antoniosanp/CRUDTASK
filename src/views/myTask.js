import { store } from "../store/store.js";
import { myTaskCard } from "../components/myTaskCard.js";

export function myTaskView(){
    const myTask = document.createElement("div");
    const tasks = getTasksByUserId();
    const estadisticas = getEstadisticasMyCards(tasks);
    console.log(estadisticas)
    myTask.className = "container py-4 mt-6";
    
    myTask.innerHTML = `
    <!-- Header -->
    <div class="mb-4">
        <h3 class="fw-bold mb-1">Task Management</h3>
        <p class="text-muted mb-0">
            View, edit, and organize all academic tasks in one place.
        </p>
    </div>

    <!-- Stats -->
    <div class="row g-3 mb-4">

        <div class="col-12 col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm p-3">
                <p class="text-muted mb-1">Total Tasks</p>
                <h4 class="fw-bold mb-0">${estadisticas.total}</h4>
            </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm p-3">
                <p class="text-muted mb-1">In Progress</p>
                <h4 class="fw-bold mb-0">${estadisticas.progreso}</h4>
            </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm p-3">
                <p class="text-muted mb-1">Completed</p>
                <h4 class="fw-bold mb-0">${estadisticas.finalizadas}</h4>
            </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm p-3">
                <p class="text-muted mb-1">Pending</p>
                <h4 class="fw-bold mb-0">${estadisticas.pendientes}</h4>
            </div>
        </div>

    </div>

    <!-- Search -->
    <div class="mb-3">
        <input 
            type="text"
            class="form-control"
            placeholder="Search by title, ID, or tag..."
        >
    </div>

    <!-- Table -->
    <div class="card border-0 shadow-sm">
        <div class="table-responsive">
            <table class="table align-middle mb-0">
                <thead class="table-light">
                    <tr>
                        <th style="width: 40px;"></th>
                        <th>Task Name</th>
                        <th>Category</th>
                        <th>Priority</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody id="tbody">

             
                </tbody>
            </table>
        </div>
    </div>
`;

const tbody = myTask.querySelector("#tbody");

addMyTaskCards(tbody, tasks);

return myTask
}

function getTasksByUserId(){
    const taskUserID = store.tareas.data.filter(t => t.userID === store.current_user.id);
    return taskUserID
}

function addMyTaskCards(div, tasks){

    for (const t of tasks){
        div.appendChild(myTaskCard(t))
    }

}

function getEstadisticasMyCards(tasks){
    const estadisticas = {
        pendientes : 0,
        progreso : 0,
        finalizadas : 0,
        total : 0
    }
    for (const t of tasks){
        if ( t.estado === "pending") {estadisticas.pendientes ++};
        if ( t.estado === "in-progress") {estadisticas.progreso ++};
        if ( t.estado === "completed") {estadisticas.finalizadas ++};
    }
    estadisticas.total = tasks.length;
    return estadisticas
}