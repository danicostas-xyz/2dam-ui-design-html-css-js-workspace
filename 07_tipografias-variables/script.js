document.addEventListener("DOMContentLoaded", () => {

    var boton = document.getElementById("boton");
    var body = document.querySelector("body");  // o bien: var body = document.body;
    
    boton.onclick = (ev) => {
        ev.preventDefault();
        if (!body.classList.contains("dark-theme")) {
            body.classList.add("dark-theme");
        } else {
            body.classList.remove("dark-theme");
        }
    }

})