document.addEventListener("DOMContentLoaded", () => {

    let boton = document.getElementById("boton");
    let body = document.querySelector("body");
    
    boton.onclick = (ev) => {
        ev.preventDefault();
        if (!body.classList.contains("dark-theme")) {
            body.classList.add("dark-theme");
        } else {
            body.classList.remove("dark-theme");
        }
    }

})