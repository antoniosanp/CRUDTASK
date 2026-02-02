//administrarProducto.js
import { postProducto } from "../services/productos.sercives.js";
import { Producto } from "../store/store.js";
export function nuevoProductoView() {

    const nuevoProducto = document.createElement("section");
    nuevoProducto.className = "container mt-5";

    nuevoProducto.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-12 col-md-6">

                <div class="card shadow-sm p-4">
                    
                    <h3 class="text-center mb-4 fw-bold">
                        Nuevo producto
                    </h3>

                    <form>

                        <div class="mb-3">
                            <label class="form-label">Nombre</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="npNombre"
                                placeholder="Nombre del producto"
                                required
                            >
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Precio</label>
                            <input 
                                type="number" 
                                class="form-control" 
                                id="npPrecio"
                                placeholder="0"
                                min="0"
                                required
                            >
                        </div>

                        <div class="mb-4">
                            <label class="form-label">Categoría</label>
                            <select 
                                class="form-select" 
                                id="npCategoria"
                                required
                            >
                                <option value="" selected disabled>
                                    Selecciona una categoría
                                </option>
                                <option value="hamburguesa">Hamburguesa</option>
                                <option value="bebida">Bebidas</option>
                                <option value="postre">Postres</option>
                            </select>
                        </div>

                        <button type="submit" class="btn btn-success w-100">
                            Crear producto
                        </button>

                    </form>

                </div>

            </div>
        </div>
    `;

    const form = nuevoProducto.querySelector("form")
    const name = nuevoProducto.querySelector("#npNombre");
    const precio = nuevoProducto.querySelector("#npPrecio");
    const categoria = nuevoProducto.querySelector("#npCategoria");

    form.addEventListener("submit", async (e)=>{

        e.preventDefault();
        const producto = new Producto(name.value, Number(precio.value), categoria.value)
        const res = await postProducto(producto)
        alert("producto creado");
        name.value = "";
        precio.value = "";
        categoria.value = "";
    })
    return nuevoProducto;
}
