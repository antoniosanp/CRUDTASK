//homeView.js
import { store } from "../store/store.js";
import { proyectoCard } from "../components/proyectoCard.js";

export  function homeView(){
    const contador = contarProyectos(store.proyectos);

    const main = document.createElement("main");
    main.innerHTML = 
    `
         <section class="search-section">
            <div class="container">
                <div class="search-container">
                    <form class="search-form">
                        <div class="search-input-wrapper">
                            <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <input type="text" class="search-input" placeholder="Buscar ciudad o proyecto...">
                        </div>
                        <div class="search-filters">
                            <select class="select-input">
                                <option value="">Todos los estados</option>
                                <option value="activo">Activo</option>
                                <option value="finalizado">Finalizado</option>
                                <option value="pendiente">Pendiente</option>
                            </select>
                            <button type="button" class="filter-button">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="container">
            <div class="stats-grid">
                <div class="stat-card green">
                    <p class="stat-label">Proyectos Activos</p>
                    <p class="stat-value">${contador.activos}</p>
                </div>
                <div class="stat-card yellow">
                    <p class="stat-label">Pendiente</p>
                    <p class="stat-value">${contador.pendientes}</p>
                </div>
                <div class="stat-card gray">
                    <p class="stat-label">Finalizados</p>
                    <p class="stat-value">${contador.finalizados}</p>
                </div>
            </div>
        </section>

        <!-- Projects Grid -->
        <section class="container">
            <div class="projects-grid">
          
                
            </div>
        </section>
    
        `
        const projectsGrid = main.querySelector(".projects-grid");

        renderProyectos(projectsGrid)

        const iptFiltroEstado = main.querySelector(".select-input")
        const iptFiltroPalabra = main.querySelector(".search-input")

        const btnFiltro = main.querySelector(".filter-button")
        btnFiltro.addEventListener("click", async()=>{
            renderProyectos(projectsGrid, iptFiltroEstado.value, iptFiltroPalabra.value);
        })
        return main
}

async function renderProyectos(div, filtroEstado = null, filtroPalabra = ""){
    div.innerHTML = "";
    
    for (const pro of store.proyectos){
    
        const card = await proyectoCard(pro);
        const palabra = filtroPalabra.toLowerCase()

        if (!filtroEstado && !filtroPalabra) {div.appendChild(card)}


        else if (filtroPalabra && !filtroEstado)
        {
            
           if (pro.ciudad.toLowerCase().includes(palabra) ||
            pro.descripcion.toLowerCase().includes(palabra))
             
             { div.appendChild(card)}

        }


        else if (filtroPalabra && filtroEstado)
        {
            
           if ((pro.ciudad.toLowerCase().includes(palabra) ||
            pro.descripcion.toLowerCase().includes(palabra)) 
            && pro.estado === filtroEstado)
             
             { div.appendChild(card)}
        }

            else if (!filtroPalabra && filtroEstado)
        {
            
           if (pro.estado === filtroEstado)
             
             { div.appendChild(card)}
        }
    

    }
}

function contarProyectos(proyectos){
    const contador = {
        activos : 0,
        pendientes : 0,
        finalizados : 0
    }
    for (const proyecto of proyectos){


    switch (proyecto.estado) {
        case "activo":
            contador.activos ++
            break;
        
        case "pendiente":
            contador.pendientes ++
            break;
        
        case "finalizado":
            contador.finalizados ++
            break;
    
        default:
            break;
    }

    }
    return contador
}