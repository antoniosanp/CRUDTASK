export function navbarLateral(){

    const sidebar = document.createElement("aside");
    sidebar.className = "border-end bg-white";
    sidebar.style.width = "240px";
    sidebar.innerHTML = `
    <div class="d-flex flex-column h-100 p-3">

        <!-- Logo -->
        <div class="d-flex align-items-center gap-2 mb-4">
            <div class="bg-primary text-white rounded p-2 fw-bold">
                C
            </div>
            <span class="fw-bold fs-5">CRUDZASO</span>
        </div>

        <!-- Menu -->
        <ul class="nav nav-pills flex-column gap-1">

            <li class="nav-item">
                <a href="#" class="nav-link active d-flex align-items-center gap-2">
                    <i class="bi bi-grid"></i>
                    Dashboard
                </a>
            </li>

            <li class="nav-item">
                <a href="#" class="nav-link text-dark d-flex align-items-center gap-2">
                    <i class="bi bi-check2-square"></i>
                    My Tasks
                </a>
            </li>

            <li class="nav-item">
                <a href="#" class="nav-link text-dark d-flex align-items-center gap-2">
                    <i class="bi bi-person"></i>
                    Profile
                </a>
            </li>

        </ul>

    </div>
`;
return sidebar

}