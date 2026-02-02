export function myTaskCard(task){
    const myTaskCard = document.createElement("tr");
    myTaskCard.className = "myTaskCard";
    myTaskCard.dataset.id = task.id;
    myTaskCard.innerHTML = 
    `
         <td> </td>
                        <td>
                            <div class="fw-semibold">${task.nombre}</div>
                            <small class="text-muted">ID: PHYS-301</small>
                        </td>
                        <td><span class="badge bg-light text-dark">${task.categoria}</span></td>
                        <td><span id="prio" class="badge  text-dark">${task.prioridad}</span></td>
                        <td><span class="badge bg-primary">${task.estado}</span></td>
    
    `

    const prioridad = myTaskCard.querySelector("#prio");
    if (task.prioridad === "high") {prioridad.classList.add("bg-danger")}

    if (task.prioridad === "low") {prioridad.classList.add("bg-success")}

    if (task.prioridad === "medium") {prioridad.classList.add("bg-warning")}

    return myTaskCard
}

//bg-warning