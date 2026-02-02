//oderCard.js
export function orderCard(item){
    let cantidad = 1;
    const inner =  `
    <div class="border rounded p-2 mb-2 d-flex justify-content-between align-items-center">
    <div>
        <h6 class="mb-1">${item.nombre}</h6>
        <small class="text-muted">$${item.precio}</small>
    </div>

    <div id="botonesContainer" class="d-flex align-items-center gap-1">
        <button id="restCantidad" class="btn btn-sm btn-outline-secondary">−</button>
        <span id="cantidad" class="fw-semibold">${cantidad} </span>
        <button id="addCantidad" class="btn btn-sm btn-outline-secondary">+</button>
        <button id="deleteOrder"  class="btn btn-sm btn-outline-danger ms-1">🗑</button>
    </div>
    </div>

    
    `
    const div = document.createElement("div");
    div.id = "orderCard";
    div.dataset.id = item.id;

    div.innerHTML = inner
   
    const restCantidad = div.querySelector("#restCantidad");
    const addCantidad = div.querySelector("#addCantidad");
    const cantidadSpan = div.querySelector("#cantidad");
    
    const deleteOrder = div.querySelector("#deleteOrder");
    deleteOrder.dataset.id = item.id;
    
    restCantidad.addEventListener("click", ()=>{
        if (cantidad <= 1) {return}
        cantidad --;
        cantidadSpan.innerHTML = cantidad
        
    })

    addCantidad.addEventListener("click", ()=>{
        cantidad++;
        cantidadSpan.innerHTML = cantidad
        
    })

    deleteOrder.addEventListener("click", ()=>{
        console.log(item)
        div.remove()
    })

    return div
}