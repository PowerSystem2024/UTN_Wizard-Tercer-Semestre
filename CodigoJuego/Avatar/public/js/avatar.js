function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById("boton-personaje");
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);
}

//Esta funcion se ejecuta cuando el usuario hace clic en el botón Seleccionar
function seleccionarPersonajeJugador(){

    //alert("SELECCIONASTE TU PERSONAJE")

    //Tarea parte01
    let inputZuko = document.getElementById("Zuko")
    let inputKatara = document.getElementById("Katara")
    let inputAang = document.getElementById("Aang")
    let inputToph = document.getElementById("Toph")
    let spanPersonajeJugador = document.getElementById("personaje-jugador")

    if(inputZuko.checked){
        spanPersonajeJugador.innerHTML = "Zuko"
    }else if(inputKatara.checked){
        spanPersonajeJugador.innerHTML = "Katara"
    }else if(inputAang.checked){
        spanPersonajeJugador.innerHTML = "Aang"
    }else if(inputToph.checked){
        spanPersonajeJugador.innerHTML = "Toph"
    }else{
        alert("Selecciona un personaje")
    }

    seleccionarPersonajeEnemigo(); // Elegir personaje enemigo aleatorio
}

//Tarea parte 02
//función para elegir un personaje aleatorio para el enemigo
function seleccionarPersonajeEnemigo() {
    const personajes = ["Zuko", "Katara", "Aang", "Toph"]; //Creamos un arreglo con los nombres de los personajes disponibles
    const numeroAleatorio = Math.floor(Math.random() * personajes.length); //Generamos un número aleatorio entre 0 y la cantidad de personajes
    const personajeAleatorio = personajes[numeroAleatorio]; //Elegimos el personaje usando el número aleatorio como índice del arreglo

    const PersonajeEnemigo = document.getElementById("personaje-enemigo"); //Obtenemos el span donde vamos a mostrar el personaje enemigo
    PersonajeEnemigo.innerHTML = personajeAleatorio; //Mostramos el nombre del personaje enemigo elegido aleatoriamente
}

// Este evento hace que la función iniciarJuego() se ejecute cuando se termina de cargar la página
window.addEventListener("load", iniciarJuego);