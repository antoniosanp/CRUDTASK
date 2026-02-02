//administrarOrden.js
import { adminOrderCard } from "../components/adminOrdenCard.js";
import { store } from "../store/store.js";
import { pathOrden } from "../services/ordenes.services.js";

export function administrarOrdenView(){

    const div = document.createElement("div");
    div.innerHTML = 
    `
        <section class="container my-4">
            <h2 class="mb-4 text-center">📋 Todas las órdenes</h2>

            <div id="ordenesAdminGrid" class="row g-3">
                <!-- Cards de órdenes -->
                <h1>hola</h1>
            </div>
            <a href="#/menu" class="btn btn-outline-primary">
            Guardar Cambios
        </a>
        </section>

    
    
    `
    const grid = div.querySelector("#ordenesAdminGrid");
    //------------------------------------------------
    //actualizar estados

    div.addEventListener("click", async (e)=>{
        
        if (e.target.tagName == "SELECT") {
            const orderId = e.target.closest("#orderCard");
            console.log(orderId);
            console.log(orderId.dataset.id)

            await pathOrden(orderId.dataset.id, e.target.value);
        }
    
    })


    renderOrdenesAdmin(grid)

    return div
    
}

function renderOrdenesAdmin(div){
    for (const order of store.ordenes.data){
        console.log(order)
        div.appendChild(adminOrderCard(order))
    }
}