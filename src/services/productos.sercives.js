//productos.services.js
import { httpGet, httpPost } from "./http.js";
import { store } from "../store/store.js";

export async function getProductos(){
    store.productos.data = await httpGet(store.productos.endpoint);
    return store.productos.data
}

export async function postProducto(producto) {
    await httpPost(store.productos.endpoint, producto);
    return await getProductos()
    
}