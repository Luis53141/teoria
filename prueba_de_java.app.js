        const boton = document.getElementById("botonEnviar");
        const mensaje = document.querySelector(".mensaje");

        boton.addEventListener("click", function() {
            const nombre = document.getElementById("nombre").value;
            if (nombre.trim() === "") {
                mensaje.textContent = "Por favor, ingresa tu nombre.";
                mensaje.style.color = "red";
            } else {
                mensaje.textContent = "¡Hola, " + nombre + "! 😊";
                mensaje.style.color = "gold";
            }
        });