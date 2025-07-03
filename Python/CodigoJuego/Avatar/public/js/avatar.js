let ataqueJugador // Variable global para guardar el ataque del jugador
let ataqueEnemigo // Variable global para guardar el ataque del enemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let botonPersonajeJugador = document.getElementById("boton-personaje");
    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador);

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonReglasJuego = document.getElementById("boton-reglas");
    botonReglasJuego.addEventListener("click", reglasDelJuego);

    //Creamos un escuchar eventos
    let botonPunio = document.getElementById("boton-punio")
    botonPunio.addEventListener("click", ataquePunio)
    let botonPatada = document.getElementById("boton-patada")
    botonPatada.addEventListener("click", ataquePatada)
    let botonBarrida = document.getElementById("boton-barrida")
    botonBarrida.addEventListener("click", ataqueBarrida)

    //Creamos una nueva variable boton reiniciar
    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
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
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    //sectionSeleccionarAtaque.style.display = "block" //mostramos
    let sectionSeleccionarPersonaje = document.getElementById("seleccionar-personaje")
    //sectionSeleccionarPersonaje.style.display = "none" //ocultamos

    // Validar si se eligió algún personaje
    if (!inputZuko.checked && !inputKatara.checked && !inputAang.checked && !inputToph.checked) {
        let mensajeError = document.createElement("p");
        mensajeError.innerHTML = "Seleccioná un personaje";
        mensajeError.style.color = "red";

        sectionSeleccionarPersonaje.appendChild(mensajeError);

        setTimeout(() => {
            sectionSeleccionarPersonaje.removeChild(mensajeError);
        }, 2000);

        return; // Salimos y no dejamos avanzar
    }

    //Asignar personaje seleccionado
    if(inputZuko.checked){
        spanPersonajeJugador.innerHTML = "Zuko"
    }else if(inputKatara.checked){
        spanPersonajeJugador.innerHTML = "Katara"
    }else if(inputAang.checked){
        spanPersonajeJugador.innerHTML = "Aang"
    }else if(inputToph.checked){
        spanPersonajeJugador.innerHTML = "Toph"
    }
    
    //mostramos ataques y ocultamos personajes
    sectionSeleccionarAtaque.style.display = "block";
    sectionSeleccionarPersonaje.style.display = "none";

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
    combate();
}

function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo") 

    //Combate
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    }else if(ataqueJugador == "Punio" && ataqueEnemigo == "Barrida"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == "Patada" && ataqueEnemigo == "Punio"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == "Barrida" && ataqueEnemigo == "Patada"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador

    }
    //revisar vidas
    revisarVidas()
}

//Revisar vidas
function revisarVidas(){
    if(vidasEnemigo == 0){
        //Ganamos
        crearMensajeFinal("Felicitaciones!!! Has GANADO")
    }else if(vidasJugador == 0){
        //Perdimos
        crearMensajeFinal("Que Pena, Has PERDIDO")
    }
}

function crearMensajeFinal(resultado){
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"//mostramos

    let sectionMensaje = document.getElementById("mensajes");
    let parrafo = document.createElement("p");

    parrafo.innerHTML = resultado

    sectionMensaje.appendChild(parrafo)
    
    //desbilitamos los botones de ataque
    let botonPunio = document.getElementById("boton-punio")
    botonPunio.disabled = true
    let botonPatada = document.getElementById("boton-patada")
    botonPatada.disabled = true
    let botonBarrida = document.getElementById("boton-barrida")
    botonBarrida.disabled = true
}


function crearMensaje(resultado){
    let sectionMensaje = document.getElementById("mensajes");
    let parrafo = document.createElement("p");

    parrafo.innerHTML = "Tu personaje atacó con " + ataqueJugador +  ", el personaje del enemigo atacó con " + ataqueEnemigo + " " + resultado;

    sectionMensaje.appendChild(parrafo)
}

function reglasDelJuego() {
    const seccionReglas = document.getElementById("reglas-juego");
    const boton = document.getElementById("boton-toggle-reglas");

    if (seccionReglas.style.display === "none") {
        seccionReglas.style.display = "block";
        boton.textContent = "Ocultar reglas del juego";
    } else {
        seccionReglas.style.display = "none";
        boton.textContent = "Mostrar reglas del juego";
    }
}

//reiniciar juego
function reiniciarJuego(){
    location.reload()
}

function  aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Este evento hace que la función iniciarJuego() se ejecute cuando se termina de cargar la página
window.addEventListener("load", iniciarJuego);