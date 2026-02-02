export function navbarSuperior(){
    const header = document.createElement("header")
    header.innerHTML = `
    <div class="d-flex justify-content-between align-items-center px-4 py-3 border-bottom bg-white">

        <!-- Breadcrumb / title -->
        <div class="d-flex align-items-center gap-2 text-muted">
            <i class="bi bi-house"></i>
            <span>Dashboard</span>
        </div>

        <!-- Right actions -->
        <div class="d-flex align-items-center gap-3">

            <button class="btn btn-light position-relative">
                <i class="bi bi-bell"></i>
                <span 
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    3
                </span>
            </button>

            <div class="d-flex align-items-center gap-2">
                <img 
                    src="https://i.pravatar.cc/32"
                    class="rounded-circle"
                    alt="avatar"
                >
                <div class="d-none d-md-block">
                    <div class="fw-semibold">Alex Morgan</div>
                    <small class="text-muted">Product Designer</small>
                </div>
                <i class="bi bi-chevron-down"></i>
            </div>

        </div>

    </div>
`;
return header

}