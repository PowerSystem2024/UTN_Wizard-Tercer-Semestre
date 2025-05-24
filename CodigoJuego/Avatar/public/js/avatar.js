//Esta funcion se ejecuta cuando el usuario hace clic en el botón Seleccionar
function seleccionarPersonajeJugador(){

    //alert("SELECCIONASTE TU PERSONAJE")

    if (document.getElementById("Zuko").checked) {//Verificamos si el botón ZUKO está seleccionado
        alert("Elegiste a Zuko 🔥"); //Mostramos un mensaje si se eligio zuko
    } else if (document.getElementById("Katara").checked) {//Si se eligió KATARA
        alert("Elegiste a Katara 🌊");//Mensaje si se eligió a katara
    } else if (document.getElementById("Aang").checked) {//Si se eligió a AANG
        alert("Elegiste a Aang 🌪"); //Mensaje si se eligió a aang
    } else if (document.getElementById("Toph").checked) {//Si se eligio a TOPH
        alert("Elegiste a Toph ⛰"); //Mensaje si se eligió a toph
    } else { //Si no se eligio a ninguno
        alert("¡selecciona un personaje!"); //Mensaje que pide que se elija un personaje
    }
}

let botonPersonajeJugador = document.getElementById("boton-personaje");
botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);