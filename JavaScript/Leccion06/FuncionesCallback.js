mifuncion1()
mifuncion2()

function mifuncion1(){
    console.log('Funcion 1'); 'Funcion 1'
}
function mifuncion2(){
    console.log('Funcion 2'); 'Funcion 2'
}

//Funcion de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}
sumar(5,3, imprimir);

// Llamadas asincrono con uso setTimeout

function miFuncionCallback(){
    console.log('Saludos asincrono despues de 3 segundos');
}
setTimeout(miFuncionCallback, 5000);

setTimeout(function(){ console.log('Saludo asincrono 2')}, 3000);

setTimeout( () => console.log('Saludos Asincrono 3'), 4000);

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()};${fecha.getSeconds()}`);
}

setInterval(reloj, 1000); // Cada un segundo se ejecuta
