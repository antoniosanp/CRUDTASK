//ordenes.services.js
import { httpGet, httpPost, httpPatch, httpDelete } from "./http.js";
import { store } from "../store/store.js";

export async function getTareas() {
    store.tareas.data = await httpGet(store.tareas.endpoint);
    return store.tareas.data
}

export async function postTarea(tarea) {
    await httpPost(store.tareas.endpoint, tarea);
    return await getTareas()    
}

export async function pathTareaEstado(id, nuevoEstado) {
    await httpPatch(`${store.tareas.endpoint}/${id}`, {estado : nuevoEstado});
    return await getTareas();
    
}