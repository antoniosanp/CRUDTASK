//perdil.js
import { store } from "../store/store.js";

export function perfilView(){
    const div = document.createElement("div");
    const user = store.current_user;
    div.innerHTML = 
    `
      <section class="container my-4">
            <h2 class="mb-4 text-center">👤 Mi perfil</h2>

            <div class="card mx-auto shadow-sm" style="max-width: 500px;">
                <div class="card-body">

                    <p class="mb-2">
                        <strong>Nombre:</strong> ${user.nombre}
                    </p>

                    <p class="mb-2">
                        <strong>Email:</strong> ${user.email}
                    </p>

                    <p class="mb-3">
                        <strong>Rol:</strong> 
                        <span class="badge bg-primary text-capitalize">
                            ${user.rol}
                        </span>
                    </p>

                    <hr>

                    <p class="text-muted mb-0">
                        Sesión iniciada correctamente
                    </p>

                </div>
            </div>
        </section>
    
    `
    return div
}