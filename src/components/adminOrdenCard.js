//adminOrdenCard.js
export function adminOrderCard(orden){
    const div = document.createElement("div");
    div.id = "orderCard"
    div.dataset.id = orden.id
     div.classList.add("col-12", "col-md-6", "col-lg-4");

    div.innerHTML = `
        <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">

                <h5 class="card-title">Orden #${orden.id}</h5>

                <p class="mb-2 text-muted">
                    Productos: <strong>${orden.items.length}</strong>
                </p>

                <p class="fw-bold text-success">
                    Total: $${orden.total.toLocaleString()}
                </p>

                <div class="mt-auto">
                    <label class="form-label mb-1">Estado: ${orden.estado}</label>
                    <select class="form-select orden-estado" data-id="${orden.id}">
                        <option value="pendiente" ${orden.estado === "pendiente" ? "selected" : ""}>Pendiente</option>
                        <option value="en proceso" ${orden.estado === "en proceso" ? "selected" : ""}>En proceso</option>
                        <option value="finalizado" ${orden.estado === "finalizado" ? "selected" : ""}>Finalizado</option>
                    </select>
                </div>

            </div>
        </div>`

        return div
}