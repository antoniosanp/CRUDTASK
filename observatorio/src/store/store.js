//store.js
export const API_SERVER = "http://localhost:3000"

export const store = {
    user : null,
    proyectos : [],
    sesion_iniciada : false
}

//-----------------------------------------------------------
//Funciones Proyecto

export class Proyecto{
    constructor(descripcion, ciudad, estado , lon, lat){
        this.descripcion = descripcion;
        this.ciudad = ciudad,
        this.estado = estado,
        this.lon = lon,
        this.lat = lat
    }
}



//-----------------------------------------------------------
//Funcions JSON-Server
//Proyectos

export async function obtenerProyectos() {
    const response = await fetch(`${API_SERVER}/proyectos`);
    const responseJSON = await response.json();
    return responseJSON;
}

export async function agregarProyecto(proyecto) {
  
    const response = await fetch(`${API_SERVER}/proyectos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(proyecto)
    });
    
    const nuevoProyecto = await response.json();
    store.proyectos.push(nuevoProyecto);
}
//-----------------------------------------------------
//Usuarios
export async function validarUsuario(email){
    const usuarios = await obtenerUsuarios();
    console.log(usuarios);
    
    const user = usuarios.find(user=> user.user == email);
    return user ? true:false
}

export async function obtenerUsuarios() {

    const response = await fetch(`${API_SERVER}/users`);
    const responseJSON = await response.json();
    return responseJSON;

}

export async function registrarUsuario(userData) {
    const response = await fetch(`${API_SERVER}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    });

    const nuevoUsuario = await response.json();
    return nuevoUsuario;
}
//-----------------------------------------------------
//Funciones  inicio de sesión

export function iniciarSesion(){
    store.user = "antonio";
    store.sesion_iniciada = true;
    guardarLocalstorage()
}

export function cerrarSesion(){
    store.user = null;
    store.sesion_iniciada = false;
    guardarLocalstorage()
}

//----------------------------------------------------
//Funciones localstorage

export function guardarLocalstorage(){
    localStorage.setItem("user", JSON.stringify(store.user));
    localStorage.setItem("sesion_iniciada", JSON.stringify(store.sesion_iniciada))
}

export function cargarLocalstorage(){
    const user = JSON.parse(localStorage.getItem("user")) ;
    const sesion_iniciada = JSON.parse(localStorage.getItem("sesion_iniciada")); 
    
    return {user, sesion_iniciada}
}

//---------------------------------------------------
//Inicializar datos

export async function iniciarStore() {

    const {user,sesion_iniciada} = cargarLocalstorage()

    store.user = user;
    store.sesion_iniciada = sesion_iniciada


    const proyectos = await obtenerProyectos();
    if (proyectos) {store.proyectos = proyectos};

   
}