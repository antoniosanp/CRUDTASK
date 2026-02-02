//register.js
import { User } from "../store/store.js";
import { postUsers } from "../services/users.services.js";



export function registerView(){
    const registerDiv = document.createElement("div");
    registerDiv.innerHTML = 

    `
    <div  class="container d-flex justify-content-center align-items-center vh-100">
        <div class="card shadow-sm p-4" style="max-width: 400px; width: 100%;">
            
            <h3 class="text-center mb-4 fw-bold">Registro</h3>

            <form  id="registerForm" >

                <div class="mb-3">
                    <label class="form-label">Nombre</label>
                    <input type="text" id= "userName" class="form-control" placeholder="nombre de usuario" required>
                </div>


                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" id= "email" class="form-control" placeholder="correo@ejemplo.com" required>
                </div>

                <div class="mb-3">
                    <label class="form-label">Contraseña</label>
                    <input type="password" id= "password" class="form-control" placeholder="••••••••" required>
                </div>

                <button type="submit"  class="btn btn-primary w-100 mb-3">
                    Entrar
                </button>
            </form>

            <div class="text-center">
                <small class="text-muted">
                    
                    <a href="#/login" class="text-decoration-none">volver</a>
                </small>
            </div>

        </div>
    </div>
`;

    


     const form = registerDiv.querySelector("#registerForm");
    const name = registerDiv.querySelector("#userName")
    const email = registerDiv.querySelector("#email");
    const password = registerDiv.querySelector("#password");

    form.addEventListener("submit", async (e)=>{
        e.preventDefault();

        const newUser = new User(name.value, email.value, password.value);
        postUsers(newUser);

        location.hash = "#/login"
    })

    return registerDiv
}

