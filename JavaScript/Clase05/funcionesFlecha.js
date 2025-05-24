


function miFuncion(){
    console.log("saludos desde mi funcion")
}

miFuncion();

let myFuncion = function(){
    console.log("Saludos desde la función anonima")
}

//Ahora vamos a crear uan funcion flecha
let miFuncionFlecha = () => {
    console.log("Saludos desde mi función flecha");
}

//Hay mas variantes para funciones flecha que vamos a ir viendo
miFuncionFlecha();

//Lo hacemos en una línea 
const saludar = () => console.log("Saludos a todos desde esta función flecha");

saludar();

//otro ejemplo
const saludar2 = () => {
    return "Saludar desde la función flecha dos"
}
console.log(saludar2);

//Simplificamos la funcion anterior
const saludar3 = () => "Saludar desde la función flecha tres"

console.log(saludar3);

//Continuamos con otros ejemplo
const regresaObjeto = () => ({nombre: "Juan", apellido: "Lara"});

console.log(regresaObjeto());

//Funciones que reciben parámetros
const funcionesParametros = (mensaje) => console.log(mensaje);

funcionesParametros("Saludos desde esta función con parámetros");

//Una función clásica
const funcionesParametrosClasica = function(mensaje){
    console.log(mensaje);
}

funcionesParametrosClasica("Saludos desde la función clásica");

//Se pueden omitir los paréntisis en la función flecha de la siguiente manera
const funcionConParametros = mensaje => console.log(mensaje);

funcionConParametros("otras forma de trabajar con función flehca");

//Ahora vemos funciones flecha con varios parámetros
//Podems abrir la función y tener más cosas dentro de ella
const funcionConParametros2 = (op1, op2) => {
    let resultado = op1 + op2;
    return resultado;
}

console.log(funcionConParametros2(3, 5));