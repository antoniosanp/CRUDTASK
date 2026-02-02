//notfound.js
export function notfoundView(){


    const notfound = document.createElement("div");
    notfound.innerHTML = 
    `
        
    <div class="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        
        <h1 class="display-1 fw-bold text-danger">404</h1>
        <h3 class="mb-3">Not found</h3>

        <p class="text-muted mb-4">
          
    The route you are trying to visit does not exist.
        </p>

        <a href="#/dashboard" class="btn btn-outline-primary">
            Dashboard
        </a>

    </div>
`;


    return notfound
}