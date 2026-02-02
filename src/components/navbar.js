//navbar.js
import { store } from "../store/store.js";

export function navbarView() {

    if (!store.current_user) {
        location.hash = "#/login";
        return null;
    }

    const navbar = document.createElement("div");
    

    if (store.current_user.rol === "visitante") {
        navbar.innerHTML = `
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a class="navbar-brand fw-bold" href="#/menu">Mi Restaurante</a>

        <div class="collapse navbar-collapse show">
            <ul class="navbar-nav ms-auto gap-3">

                <li class="nav-item">
                    <a class="nav-link" href="#/menu">Menú</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#/misOrdenes">Mis órdenes</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#/perfil">Perfil</a>
                </li>

                  <li class="nav-item">
                    <a class="nav-link" href="#/logout">cerrar sesion</a>
                </li>

            </ul>
        </div>
    </nav>
`;

    }

    if (store.current_user.rol === "admin") {
      navbar.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a class="navbar-brand fw-bold" href="#/menu">Mi Restaurante</a>

        <div class="collapse navbar-collapse show">
            <ul class="navbar-nav ms-auto gap-3">

                <li class="nav-item">
                    <a class="nav-link" href="#/menu">Menú</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#/productos">productos</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#/ordenes"> todas las ordenes</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#/perfil">Perfil ${store.current_user.nombre}</a>
                </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#/logout">cerrar sesion</a>
                </li>

            </ul>
        </div>
    </nav>
`;

    }

    return navbar;
}
