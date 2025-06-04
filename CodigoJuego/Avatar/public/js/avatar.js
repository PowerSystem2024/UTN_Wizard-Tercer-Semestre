let ataqueJugador //Variable global
let ataqueEnemigo //Variable global


function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById("boton-personaje");
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);

    //Creamos un escuchar eventos
    let botonPunio = document.getElementById("boton-punio")
    botonPunio.addEventListener("click", ataquePunio)
    let botonPatada = document.getElementById("boton-patada")
    botonPatada.addEventListener("click", ataquePatada)
    let botonBarrida = document.getElementById("boton-barrida")
    botonBarrida.addEventListener("click", ataqueBarrida)
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

    seleccionarPersonajeEnemigo()

}

//tarea parte 2
function seleccionarPersonajeEnemigo(){
    let personajeAleatorio = aleatorio(1, 4)
    let spanPersonajeEnemigo = document.getElementById("personaje-enemigo")
   
    //Comenzamos con la lógica
    if(personajeAleatorio == 1){
        spanPersonajeEnemigo.innerHTML = "Zuko"
    }else if(personajeAleatorio == 2){
        spanPersonajeEnemigo.innerHTML = "Katara"
    }else if(personajeAleatorio == 3){
        spanPersonajeEnemigo.innerHTML = "Aang"
    }else {
        spanPersonajeEnemigo.innerHTML = "Toph"
    }
}

function ataquePunio(){
    ataqueJugador = "Punio"
    ataqueAleatorioEnemigo()
}

function ataquePatada(){
    ataqueJugador = "Patada"
    ataqueAleatorioEnemigo()
}

function ataqueBarrida(){
    ataqueJugador = "Barrida"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){//Ahora ocupando la variable global nueva le decimos el ataque y necesitamos la funcion aleatoria
    let ataqueAleatorio = aleatorio(1, 3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "Punio"
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = "Patada"
    }else{
        ataqueEnemigo = "Barrida"
    }
}

function  aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Este evento hace que la función iniciarJuego() se ejecute cuando se termina de cargar la página
window.addEventListener("load", iniciarJuego);