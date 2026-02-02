import { store } from "../store/store.js";
export function taskCardAdmin(tarea){
    const userName = getUserByid(tarea.userID)
    const taskCard = document.createElement("tr");
    taskCard.innerHTML =
    `
    <td class="fw-semibold">${tarea.nombre}</td>
    <td>
        <div class="d-flex align-items-center gap-2">
            <span class="rounded-circle border" style="width:14px;height:14px;"></span>
            ${userName}
        </div>
    </td>
    <td>
        <span class="badge bg-primary-subtle text-primary">
            ${tarea.estado}
        </span>
    </td>
    <td>
        <span class="text-warning">●</span> ${tarea.prioridad}
    </td>
    <td>${tarea.fecha}</td>
    <td class="text-end">
        <button id="btnEditar" class="btn btn-sm btn-light">✏️</button>
        <button id="btnEliminarTask" data-id = "${tarea.id}" class="btn btn-sm btn-light text-danger">🗑️</button>
    </td>
    
    `
    const btnEditar = taskCard.querySelector("#btnEditar");
    btnEditar.addEventListener("click", ()=>{

        if (store.current_user.rol === "admin"){location.hash = `#/detalles/${tarea.id}`} 
        else alert("you can only edit tasks in myTask tab") 

    })

    const btnEliminar = taskCard.querySelector("#btnEliminarTask");
    btnEliminar.addEventListener("click", ()=>
    {
      if (store.current_user.rol === "admin"){taskCard.remove()}  
    
    })
    return taskCard;
}

function getUserByid(id){
    const userName = store.users.data.find(u => u.id === id)
    return userName.nombre

}