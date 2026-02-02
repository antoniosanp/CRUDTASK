import { registrarUsuario } from "../store/store.js"
import { validarUsuario } from "../store/store.js"
// import { router } from "../router/router.js"
export function registrar() {
    return `
    <main class="auth-body">
        <section class="scl">
        <form action="" class="formm" id='registerForm'>
        <h2 class='cen' >Registra nuevo Usuario</h2>

            <div>
            <label for="email">Correo</label>
            <input id="email" type="email" placeholder="Ingresa tu correo" required>
            </div>

            <div>
            <label for="password">Contraseña</label>
            <input id="password" type="password" placeholder="••••••••" required>
            </div>

            <button type="submit">Crear Usuario</button>
            <a href="#/login" class="btn"> Login  </a>
            <p class="auth-error hidden">
         El correo electronico ya se encuentra registrado
        </p>
        </form>
    </section>
    </main>
    `
}

document.addEventListener('submit',async (e) => {
    e.preventDefault()
    if (e.target.id == 'registerForm') {

        const form = e.target
        const auth = form.querySelector('.auth-error')
        const name = form.querySelector('#email')
        const password = form.querySelector('#password')
        if (await validarUsuario(name.value)) {
            console.log(validarUsuario(name.value));
            name.value = ''
            password.value = ''
            auth.classList.remove('hidden')
            return
        }
        registrarUsuario({ user: name.value, password: password.value });
        name.value = ''
        password.value = ''
        auth.classList.add('hidden')
        location.hash = "#/login"
        // window.addEventListener('hashchange',router)
    }
})
