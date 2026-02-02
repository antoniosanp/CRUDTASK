//misOrdenes.js
import { store } from "../store/store.js"
import { misOrdenesCard } from "../components/misOrdenesCard.js";


export function misOrdenesView(){

    if (!store.current_user) {return}

    const userId = store.current_user.id;
    const div = document.createElement("div");
    div.innerHTML = 
    `
    
   
        <section class="container my-4">
            <h2 class="mb-4 text-center">🧾 Mis órdenes </h2>

            <div id="ordenesGrid" class="row g-3">
                <!-- Aquí se insertan las cards de órdenes -->
            
            </div>
        </section>

    `
    const divOrdenes = div.querySelector("#ordenesGrid");
    
    renderOrdenes(divOrdenes,userId)

    return div;

}

function renderOrdenes(grid, userId){

    for (const orden of store.ordenes.data.values()){
        if (orden.userId == userId){
            console.log(orden)
        grid.appendChild(misOrdenesCard(orden))
        }
        
    }

}