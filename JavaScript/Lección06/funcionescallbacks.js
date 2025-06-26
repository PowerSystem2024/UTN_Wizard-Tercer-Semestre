// Ejecución de funciones definidas abajo
mifuncion1();
mifuncion2();

// Declaración tradicional de funciones
function mifuncion1() {
    console.log("Función 1");
}

function mifuncion2() {
    console.log("Función 2");
}

// Función anónima como callback
let imp = function imprimir(mensaje) {
    console.log(mensaje);
}

// Función que utiliza un callback para mostrar un mensaje
function sumar(op1, op2, funcioncallback) {
    let res = op1 + op2;
    funcioncallback(`Resultado: ${res}`);
}

sumar(5, 3, imp);  // Resultado: 8


// Asincronía con setTimeout
function miFuncionCallback() {
    console.log("Saludo asincrono después de 3 segundos");
}

setTimeout(miFuncionCallback, 3000);

setTimeout(function () {
    console.log("Saludos asincrono 2")
}, 4000);

setTimeout(() => console.log("Saludos Asincrono 3"), 5000);


// Reloj con error sutil: muestra mal los minutos/segundos menores a 10
let reloj = () => {
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    console.log(`${horas}:${minutos}:${segundos}`);
    // Ejemplo de salida incorrecta: 14:5:3 (debería ser 14:05:03)
}

setInterval(reloj, 1000);  // Se ejecuta cada segundo
