//menu.js
import { store } from "../store/store.js";
import { productoCardAdmin } from "../components/productoCardAdmin.js";
import { productoCardUser } from "../components/productoCardUser.js";
import { orderCard } from "../components/oderCard.js";
import { Item } from "../store/store.js";
import { Orden } from "../store/store.js";
import { postOrden } from "../services/ordenes.services.js";


export function menuView() {
    

    const section = document.createElement("section");
    section.className = "container-fluid mt-4";

    if (!store.current_user) {
        location.hash = "#/login";
        return null;
    }
    if (store.current_user.rol === "admin"){
        
           section.innerHTML = `
        <!-- TÍTULO -->
        <h1 class="text-center mb-4 fw-bold">Mi restaurante</h1>

        <!-- FILTROS -->
        <div class="d-flex justify-content-center gap-3 mb-4">
            <button class="btn btn-outline-primary">Todo</button>
            <button class="btn btn-outline-primary">Hamburguesa</button>
            <button class="btn btn-outline-primary">Bebidas</button>
            <button class="btn btn-outline-primary">Postres</button>
        </div>

        <!-- CONTENIDO PRINCIPAL -->
        <div class="row">
            

            <!-- GRID DE PRODUCTOS -->
            <main class="col-12 col-md-9">
                <div class="border rounded p-3">
                    
                    <div  id = "grid" class="row g-3 ">
                        
                        <!-- PRODUCTO PLACEHOLDER -->
                    

                    </div>

                </div>
            </main>

        </div>
    `;
    const grid = section.querySelector("#grid");
    renderProductosAdmin(grid)
    return section;
}

    if (store.current_user.rol === "visitante"){
        const items = new Map()
        
        section.innerHTML = `
        <!-- TÍTULO -->
        <h1 class="text-center mb-4 fw-bold">Mi restaurante</h1>

        <!-- FILTROS -->
        <div class="d-flex justify-content-center gap-3 mb-4">
            <button   id ="btnFiltro" data-filtro=""  class="btn btn-outline-primary">Todo</button>
            <button  id ="btnFiltro" data-filtro="hamburguesa"   class="btn btn-outline-primary">Hamburguesa</button>
            <button  id ="btnFiltro" data-filtro="bebida"    class="btn btn-outline-primary">Bebidas</button>
            <button id ="btnFiltro" data-filtro="postre" class="btn btn-outline-primary">Postres</button>
        </div>

        <!-- CONTENIDO PRINCIPAL -->
        <div class="row">
            
            <!-- SIDEBAR -->



            <aside id="side" class="col-12 col-md-3 mb-3">
                 <div class="border rounded p-3 h-100 d-flex flex-column">

                   <h5 class="fw-semibold mb-3">Orden</h5>

        <!-- CONTENEDOR DE ÓRDENES -->
                      <div id="order-list" class="flex-grow-1 mb-3 overflow-auto">
            <!-- aquí van las cards -->
                     </div>

                 <button id="btnAceptarOrden" class="btn btn-outline-primary w-100">
            Aceptar Orden
          </button>

    </div>
    </aside>






            <!-- GRID DE PRODUCTOS -->
            <main class="col-12 col-md-9">
                <div class="border rounded p-3">
                    
                    <div  id = "grid" class="row g-3 ">
                        
                        <!-- PRODUCTO PLACEHOLDER -->
                    

                    </div>

                </div>
            </main>

        </div>
    `;

    const side = section.querySelector("#order-list");
    const grid = section.querySelector("#grid");
    const btnAceptarOrden = section.querySelector("#btnAceptarOrden");


//eventos menu - comprar---------------------------------------------------------------
    grid.addEventListener("click", (e)=>{
        const btn = e.target
        if (btn.id === "btnComprar")
        {
            const id = btn.dataset.id
            const prod = getProductById(id)
            const card = orderCard(prod);
            const item = new Item(prod,1)

            if (!items.has(id))
            {side.appendChild(card)

            items.set(id, item);
            }
        }})



// eventos sidebar--------------------------------------------------------------
    side.addEventListener("click", (e)=>{
        const btn = e.target;
        if(items.has(btn.dataset.id)) { items.delete(btn.dataset.id)}

        if(e.target.id == "addCantidad") {
            const cardId = e.target.closest("#orderCard").dataset.id;
            items.get(cardId).cantidad += 1;
            console.log(items.get(cardId).cantidad)
        }

        if(e.target.id == "restCantidad") {
            const cardId = e.target.closest("#orderCard").dataset.id;
            if(items.get(cardId).cantidad >= 2 ) {items.get(cardId).cantidad -= 1};
            console.log(items.get(cardId).cantidad)
        }
        

    })
// eventos aceptar orden-----------------------------------------------------


btnAceptarOrden.addEventListener("click", async ()=>{
  if(items.size > 0){
    const orden = new Orden(store.current_user.id,  Array.from(items.values()));
    console.log(orden )
    await postOrden(orden);
    
    side.innerHTML = "";
    items.clear();
    alert("Orden generada correctamente")
  }
})

//---------------------------------------------------------------------------
// filtros

section.addEventListener("click", (e)=>{
    if (e.target.id === "btnFiltro") {
        renderProductosUser(grid,e.target.dataset.filtro)    
    }
})

//---------------------------------------------------------------------------- 
    renderProductosUser(grid)
    return section;
        
} //final if current_user.rol == visitante

 } //final función menuView()

 

function renderProductosAdmin(divisor, filtro = ""){
    for (const p of store.productos.data){ divisor.appendChild(productoCardAdmin(p))}
    }
function renderProductosUser(divisor, filtro = ""){
    divisor.innerHTML = "";
    for (const p of store.productos.data){ 
        
        if (filtro === "")
        {divisor.appendChild(productoCardUser(p))}
        if (filtro)
        {
            if (p.categoria === filtro) 
            {divisor.appendChild(productoCardUser(p))}
        }
    }
    }

function getProductById(id){
    const prod = store.productos.data.find(a => a.id == id);
    return prod
}