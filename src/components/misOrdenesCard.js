//misOrdenesCard.js
export function misOrdenesCard(orden){

    const card = document.createElement("div");
    card.classList.add("col-12", "col-md-6", "col-lg-4");
    card.innerHTML = 
    `
    
            <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
                
                <h5 class="card-title">Orden #${orden.id}</h5>

                <p class="mb-2 text-muted">
                    Productos: <strong>${orden.items.length}</strong>
                </p>

                <p class="mt-auto fw-bold text-success">
                    Total: $${orden.total.toLocaleString()}
                </p>

                <p class="mb-2 text-muted">
                    Estado: <strong>${orden.estado}</strong>
                </p>


            </div>
        </div>
    `
    return card
}