//notfound.js
export function notfoundView(){


    const notfound = document.createElement("div");
    notfound.innerHTML = 
    `
        
    <div class="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        
        <h1 class="display-1 fw-bold text-danger">404</h1>
        <h3 class="mb-3">Página no encontrada</h3>

        <p class="text-muted mb-4">
            La ruta que estás intentando visitar no existe.
        </p>

        <a href="#/menu" class="btn btn-outline-primary">
            Volver al menú
        </a>

    </div>
`;


    return notfound
}