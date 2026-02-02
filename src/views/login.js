//login.js
import { store } from "../store/store.js";
import { validarLogin } from "../store/auth.js";
import { iniciarSesion } from "../store/auth.js";

export function loginView(){
    const loginDiv = document.createElement("div");
    loginDiv.innerHTML = 

    `
<div class="bg-light vh-100 d-flex flex-column justify-content-center">
    
    <h1 class="text-center fw-bold mb-4">CRUDZADO</h1>

    <div class="container d-flex justify-content-center align-items-center">
        <div class="card shadow-sm p-4" style="max-width: 400px; width: 100%;">
            
            <h3 class="text-center mb-4 fw-bold">Sign In</h3>

            <form id="loginForm">
                <div class="mb-3">
                    <label class="form-label">Email</label>
                    <input type="email" id="email" class="form-control" placeholder="email@example.com" required>
                </div>

                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" id="password" class="form-control" placeholder="••••••••" required>
                </div>

                <button type="submit" class="btn btn-primary w-100 mb-3">
                    Login
                </button>
            </form>

            <div class="text-center">
                <small class="text-muted">
                    Don’t have an account?
                    <a href="#/register" class="text-decoration-none">Sign up</a>
                </small>
            </div>

        </div>
    </div>
</div>
`

    ;

    

    const form = loginDiv.querySelector("#loginForm");
    const email = loginDiv.querySelector("#email");
    const password = loginDiv.querySelector("#password");

    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        console.log(store)
        if (validarLogin(email.value, password.value)){
            console.log("usuario válido");
            const user = store.users.data.find( u => u.email === email.value);
            iniciarSesion(user);
        }

        else {
            alert(" invalid username or password");
            email.value = "";
            password.value = "";
        }

        

    })

    return loginDiv
}

