//router.js
import { loginView } from "../views/login.js";
import { registerView } from "../views/register.js";
import { app } from "../../app.js";
import { cerrarSesion } from "../store/auth.js";
import { store } from "../store/store.js";


import { notfoundView } from "../views/notfound.js";
import { getCurrent_user } from "../store/auth.js";

import { perfilView } from "../views/perfil.js";

import { nuevaTareaView } from "../views/crearTarea.js";

import { taskAdminView } from "../views/dashboard.js";
import { myTaskView } from "../views/myTask.js";
import { navbarLateral } from "../components/navbarLateral.js";
import { navbarSuperior } from "../components/navbarSuperior.js";

export function router(){
    getCurrent_user()
    //------------------------------------------------
    const hash = location.hash;
    console.log("Router called, hash:", hash);
    app.innerHTML = "";

    if (!store.current_user && hash !== "#/register") {location.hash = "#/login"}
    
    //-------------------------------
    const divEspacio = document.createElement("div")
    switch (hash) {
        case "#/login":
            console.log("en login");
            if (store.current_user) {location.hash = "#/dashboard"; console.log("hay usuario");return}
           
           const contentLogin = document.createElement("div");
            contentLogin.className = "flex-grow-1 d-flex flex-column";

            contentLogin.append(
                divEspacio,
                loginView()
            );
            
            app.append(
                divEspacio,
                contentLogin
            );
            break;




        case "#/register":
        
        const contentRegister = document.createElement("div");
            contentRegister.className = "flex-grow-1 d-flex flex-column";

            contentRegister.append(
                divEspacio,
                registerView()
            );
            
            app.append(
                divEspacio,
                contentRegister
            );
            break;

            
       
        case "#/perfil":
            
         const contentPerfil = document.createElement("div");
            contentPerfil.className = "flex-grow-1 d-flex flex-column";

            contentPerfil.append(
                navbarSuperior(),
                perfilView()
            );
            
            app.append(
                navbarLateral(),
                contentPerfil
            );
            break;
      
        case "#/dashboard":
            
            if (!store.current_user) {location.hash = "#/login"; return}
            const contentDashboard = document.createElement("div");
            contentDashboard.className = "flex-grow-1 d-flex flex-column";

            contentDashboard.append(
                navbarSuperior(),
                taskAdminView()
            );

            app.append(
                navbarLateral(),
                contentDashboard
            );
            break;
        
      

        case "#/newTask":
            

            const contentNewTask = document.createElement("div");
            contentNewTask.className = "flex-grow-1 d-flex flex-column";

            contentNewTask.append(
                navbarSuperior(),
                nuevaTareaView()
            );

            app.append(
                navbarLateral(),
                contentNewTask
            );
            break;
        
        case "#/myTasks":
            

            const contentMyTask = document.createElement("div");
            contentMyTask.className = "flex-grow-1 d-flex flex-column";

            contentMyTask.append(
                navbarSuperior(),
                myTaskView()
            );

            app.append(
                navbarLateral(),
                contentMyTask
            );
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