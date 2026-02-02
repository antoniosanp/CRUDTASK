//nuevoProyectoView.js
import { Proyecto } from "../store/store.js";
import { agregarProyecto } from "../store/store.js";

export function nuevoProyectoView(){
    const main = document.createElement("main");
    main.className = "container"

    main.innerHTML =
    `
         <section class="create-project-container">

      <header class="create-header">
        <h2>Crear nuevo proyecto</h2>
        <p>Registra un proyecto urbano para monitoreo climático</p>
      </header>

      <form class="create-form" id="createProjectForm">

        <div class="form-group">
          <label for="name">Descripción del proyecto</label>
          <input type="text" id="name" placeholder="Monitoreo Ciudad de Bogotá" required />
        </div>

        <div class="form-group">
          <label for="city">Ciudad</label>
          <input type="text" id="city" placeholder="Bogotá" required />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="lat">Latitud</label>
            <input type="number" id="lat" step="any" placeholder="4.7110" required />
          </div>

          <div class="form-group">
            <label for="lon">Longitud</label>
            <input type="number" id="lon" step="any" placeholder="-74.0721" required />
          </div>
        </div>

        <div class="form-group">
          <label for="status">Estado del proyecto</label>
          <select id="status" required>
            <option value="">Selecciona un estado</option>
            <option value="activo">Activo</option>
            <option value="pendiente">Pendiente</option>
            <option value="finalizado">Finalizado</option>
          </select>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary">
            Guardar proyecto
          </button>
        <button type="button" class="btn btn-outline" id="cancelar">
            Cancelar
        </button>
        </div>

        <p class="form-message success hidden">
          ✅ Proyecto creado exitosamente
        </p>

        <p class="form-message error hidden">
          ❌ Error al crear el proyecto
        </p>


      </form>

    </section>
    
    `
    const descripcion = main.querySelector("#name");
    const ciudad = main.querySelector("#city");
    const lat = main.querySelector("#lat");
    const lon = main.querySelector("#lon");
    const estado = main.querySelector("#status");
    const form = main.querySelector("form");
    const mensajeExito = main.querySelector(".success");
    const mensajeError = main.querySelector(".error")

    const botonCancelar = main.querySelector("#cancelar");
    botonCancelar.addEventListener("click", ()=>{
        location.hash = "#/home"
    })
  
    form.addEventListener("submit", async (e)=>{
     
      e.preventDefault();
      

        try {
            await agregarNuevoProyecto(
            descripcion.value,
            ciudad.value,
            estado.value,
            lon.value,
            lat.value);
            mensajeExito.classList.remove("hidden");
           // location.hash ="#/home"

        } catch (error) {
            mensajeError.classList.remove("hidden");
        }
        

    });

    

    return main;
}

async function agregarNuevoProyecto(descripcion,ciudad,estado,lon, lat){
    const nuevoProyecto = new Proyecto(descripcion,ciudad,estado,Number(lon),Number(lat));
    await agregarProyecto(nuevoProyecto)

}