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
                        <td><span class="badge bg-warning text-dark">${task.prioridad}</span></td>
                        <td><span class="badge bg-primary">${task.estado}</span></td>
    
    `
    return myTaskCard
}