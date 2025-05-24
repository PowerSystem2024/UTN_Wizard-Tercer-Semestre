
mifuncion1()
mifuncion2()

function mifuncion1(){
    console.log("Función 1");
}

function mifuncion2(){
    console.log("Función 2");
}


//Funcion de tipo callback
let imp = function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcioncallback){
    let res = op1 + op2;
    funcioncallback(`Resultado: ${res}`);
}

sumar(5, 3, imp);

//Llamadas asicronas con uso setTimeout
function miFuncionCallback(){
    console.log("Saludo asincrono después de 3 segundos");
}

setTimeout(miFuncionCallback, 3000);

setTimeout(function(){ console.log("Saludos asincrono 2")}, 4000);

setTimeout( () => console.log("Saludos Asincrono 3"), 5000);


//función setInterval llama a la funcon callback varias veces

let reloj = () =>{ //funcion flecha
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000); //Cada 1 segundo se ejecuta

