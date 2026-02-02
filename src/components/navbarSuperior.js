import { store } from "../store/store.js";
export function navbarSuperior(){
    const hash = location.hash
    const header = document.createElement("header")
    header.innerHTML = `
    <div class="d-flex justify-content-between align-items-center px-4 py-3 border-bottom bg-white">

        <!-- Breadcrumb / title -->
        <div class="d-flex align-items-center gap-2 text-muted">
            <i class="bi bi-house"></i>
            <span>${hash}</span>
        </div>

        <!-- Right actions -->
        <div class="d-flex align-items-center gap-3">

           

            <div class="d-flex align-items-center gap-2">
                <img 
                    src="https://i.pravatar.cc/32"
                    class="rounded-circle"
                    alt="avatar"
                >
                <div class="d-none d-md-block">
                    <div class="fw-semibold">${store.current_user.nombre}</div>
                    <small class="text-muted">${store.current_user.rol}</small>
                </div>
                <i class="bi bi-chevron-down"></i>
            </div>

        </div>

    </div>
`;
return header

}