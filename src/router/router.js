//router.js
import { loginView } from "../views/login.js";
import { registerView } from "../views/register.js";
import { app } from "../../app.js";
import { cerrarSesion } from "../store/auth.js";
import { store } from "../store/store.js";
import { navbarView } from "../components/navbar.js";
import { menuView } from "../views/menu.js";
import { notfoundView } from "../views/notfound.js";
import { nuevoProductoView } from "../views/administrarProducto.js";
import { getCurrent_user } from "../store/auth.js";
import { misOrdenesView } from "../views/misOrdenes.js";
import { perfilView } from "../views/perfil.js";
import { administrarOrdenView } from "../views/administrarOrden.js";

export function router(){
    getCurrent_user()
    //------------------------------------------------
    const hash = location.hash;
    console.log("Router called, hash:", hash);
    app.innerHTML = "";

    if (!store.current_user && hash !== "#/register") {location.hash = "#/login"}
    
    //-------------------------------

    switch (hash) {
        case "#/login":
            console.log("en login");
            if (store.current_user) {location.hash = "#/menu"; console.log("hay usuario");return}
            app.appendChild(loginView());
            
            break;
        case "#/register":
            console.log("en registro")
            app.appendChild(registerView());
            
            break;
       
        case "#/menu":
            console.log("en home");
            if (!store.current_user) {location.hash = "#/login"; return}
            app.append(navbarView(), menuView())
            break;

        case "#/productos":
            app.append(navbarView(), nuevoProductoView());
            break;
        case "#/misOrdenes":
            app.append(navbarView(),misOrdenesView());
            break;
        
        case "#/perfil":
            app.append(navbarView(), perfilView());
            break;

        case "#/ordenes":
            app.append(navbarView(), administrarOrdenView());
            break;


        case "#/logout":
            console.log("cerrando sesion");
            cerrarSesion();
            location.hash = ""
            break;
            
        default:
            console.log("vista no encontrada");
            app.append(notfoundView())
            break;
    }


}