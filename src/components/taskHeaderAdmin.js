import { store } from "../store/store.js";
export function taskHeaderAdmin(){
    const taskHeader = document.createElement("div");
    const estadisticas = getEstadisticas()
    taskHeader.innerHTML = 

    `
 <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
            <h2 class="fw-bold mb-1">Task Manager</h2>
            <p class="text-muted mb-0">
                Overview of your current academic performance tasks.
            </p>
        </div>

        <a href= "#/newTask"><button class="btn btn-primary">
            <i class="bi bi-plus-lg me-1"></i> New Task
        </button></a>
    </div>

    <!-- Stats cards -->
    <div class="row g-4">

        <div class="col-12 col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm p-3 h-100">
                <p class="text-muted mb-1">Total Tasks</p>
                <h3 class="fw-bold">${estadisticas.total}</h3>
                <small class="text-success">
                    ↑ +12% from last week
                </small>
            </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm p-3 h-100">
                <p class="text-muted mb-1">Completed</p>
                <h3 class="fw-bold">${estadisticas.finalizadas}</h3>
                <small class="text-success">
                    ✓ On track
                </small>
            </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm p-3 h-100">
                <p class="text-muted mb-1">Pending</p>
                <h3 class="fw-bold">${estadisticas.total - estadisticas.finalizadas}</h3>
                <small class="text-warning">
                    ● 2 High Priority
                </small>
            </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
            <div class="card border-0 shadow-sm p-3 h-100">
                <p class="text-muted mb-1">Overall Progress</p>
                <h3 class="fw-bold">${(estadisticas.finalizadas/estadisticas.total)*100}%</h3>
                <small class="text-success">
                    ↑ Keep it up
                </small>
            </div>
        </div>
    <br>
    </div>
    
    `

    return taskHeader
}

function getEstadisticas(){
    const estadisticas = {
        total : 0,
        pendientes : 0,
        finalizadas : 0,
        progreso: 0
    }
    estadisticas.total = store.tareas.data.length
    for (const t of store.tareas.data)
    {
        if ( t.estado === "pending") {estadisticas.pendientes ++};
        if ( t.estado === "in-progress") {estadisticas.progreso ++};
        if ( t.estado === "completed") {estadisticas.finalizadas ++};
    }
    return estadisticas

}