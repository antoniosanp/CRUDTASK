//auth.js
import { store } from "./store.js";
import { getUsers } from "../services/users.services.js";
import { getProductos } from "../services/productos.sercives.js";
import { getOrdenes } from "../services/ordenes.services.js";
//--------------------------------------------------------------
export function iniciarSesion(user){
    const {password, ...userSinPassword} = user;
    store.current_user = userSinPassword;
    localStorage.setItem("current_user", JSON.stringify(store.current_user));
    location.hash = "#/menu"
}

export function cerrarSesion(){
    store.current_user = null;
    localStorage.removeItem("current_user")
}

//--------------------------------------------------------------

export function validarLogin(email, password){
    for (const user of store.users.data){
        if (user.email === email && user.password === password){iniciarSesion(user); return true}
    }
    return false
}


//--------------------------------------------------------------

export function getCurrent_user() {
  const user = localStorage.getItem("current_user");
  if (user) {
    store.current_user = JSON.parse(user);
  } else {
    store.current_user = null;
  }
}


//--------------------------------------------------------------

export async function iniciarDatos() {
   
    await getUsers();
    await getProductos();
    await getOrdenes();
    getCurrent_user();
}

