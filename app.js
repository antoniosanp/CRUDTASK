//ap.js
import { iniciarDatos } from "./src/store/auth.js";
import { router } from "./src/router/router.js";

export const app = document.getElementById("app");
app.className = "d-flex min-vh-100";


await iniciarDatos()
location.hash = "#/dashboard"
router();
window.addEventListener("hashchange", router)

