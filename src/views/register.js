//register.js
import { User } from "../store/store.js";
import { postUsers } from "../services/users.services.js";



export function registerView(){
    const registerDiv = document.createElement("div");
    registerDiv.innerHTML = 

    `
<div class="bg-light vh-100 d-flex flex-column justify-content-center">
    
    <h1 class="text-center fw-bold mb-4">CRUDZADO</h1>

    <div class="container d-flex justify-content-center align-items-center">
        <div class="card shadow-sm p-4" style="max-width: 400px; width: 100%;">
            
            <h3 class="text-center mb-4 fw-bold">Create account</h3>
            <h4 class="text-center mb-4 fw-light">Join the academic performance plataform today</h4>

            <form id="registerForm">

                <div class="mb-3">
                    <label class="form-label">Full Name</label>
                    <input type="text" id="userName" class="form-control" placeholder="Jhon Doe" required>
                </div>

                <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" id="email" class="form-control" placeholder="student@university.edu" required>
                </div>

                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" id="password" class="form-control" placeholder="Create a password" required>
                </div>

                 <div class="mb-3">
                    <label class="form-label">Confirm Password</label>
                    <input type="password" id="passwordConfirm" class="form-control" placeholder="Confirm password" required>
                </div>

                <button type="submit" class="btn btn-primary w-100 mb-3">
                    Register
                </button>
            </form>

            <div class="text-center">
                <small class="text-muted">
                    Already have an account?
                    <a href="#/login" class="text-decoration-none">Sign up</a>
                </small>
               
            </div>

        </div>
    </div>
</div>
`


;

    


     const form = registerDiv.querySelector("#registerForm");
    const name = registerDiv.querySelector("#userName")
    const email = registerDiv.querySelector("#email");
    const password = registerDiv.querySelector("#password");
    const passwordConfirm = registerDiv.querySelector("#passwordConfirm");


    form.addEventListener("submit", async (e)=>{
        e.preventDefault();
        
        if (passwordConfirm.value === password.value)
            {
            const newUser = new User(name.value, email.value, password.value);
            postUsers(newUser);
            alert("user created successfully")
            location.hash = "#/login"}
        else {
            alert("passwords do not match")
        }
    })

    return registerDiv
}


/**


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
`

*/