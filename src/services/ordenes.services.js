//ordenes.services.js
import { httpGet, httpPost, httpPatch } from "./http.js";
import { store } from "../store/store.js";

export async function getOrdenes() {
    store.ordenes.data = await httpGet(store.ordenes.endpoint);
    return store.ordenes.data
}

export async function postOrden(orden) {
    await httpPost(store.ordenes.endpoint, orden);
    return await getOrdenes()    
}

export async function pathOrden(id, nuevoEstado) {
    await httpPatch(`${store.ordenes.endpoint}/${id}`, {estado : nuevoEstado});
    return await getOrdenes();
    
}