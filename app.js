//ap.js
import { iniciarDatos } from "./src/store/auth.js";
import { router } from "./src/router/router.js";

export const app = document.getElementById("app");
console.log("hola")

await iniciarDatos()
location.hash = "#/menu"
router();
window.addEventListener("hashchange", router)

