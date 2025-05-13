

function miFuncion(){
    console.log('Saludos desde mi funcion')
}

miFuncion();

let myFuncion = function () {
console.log('Saludos desde funcion anonima')
}

// Ahora vamos a crear una funcion flecha

let miFuncionFlecha = () => {
    console.log('Saludos desde mi funcion flecha');
}

// Hay mas variantes para funciones flecha que vamos a ir viendo
miFuncionFlecha();  

// lo hacemos en una linea

const saludar = () => console.log ('Saludos a todos desde esta funcion');

console.log(saludar);

// Otro ejemplo
const saludar2 = () => {
    return 'Saludos desde la funcion flecha dos'
}

console.log(saludar2);

// Simplificamos la funcion anterior
const saludar3 = () => 'Saludos desde la funcion flechas tres';

console.log(saludar3)

// Continuamos con otro ejemplo
const regresaObjetos = () => ({nombres: 'Juan', appellido: 'Lara'});
console.log(regresaObjetos());

// Funciones que reciben parametros
const funcionParametros = (mensajes) => console.log(mensajes);

funcionParametros('saludos desde esta funcion con parametros');

// Una funcion clasica

const funcionParametrosClasica = function(mensaje){
    console.log(mensaje); 
}

funcionParametrosClasica('Saludos desde una funcion Clasica')

// Se pueden omitir los parenctesis en la funcion flecha de la siguiente manera 
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('Otras formas de trabajar con funcion flecha');

// Ahora vamos funciones flecha con varios parametros
const funcionConParametros2 = (op1, op2) => {
    let resultado = op1 + op2;
    return resultado;
}
console.log(funcionConParametros2(3, 5));