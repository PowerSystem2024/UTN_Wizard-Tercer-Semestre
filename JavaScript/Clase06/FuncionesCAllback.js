// Llamadas normales a funciones declaradas previamente
mifuncion1();
mifuncion2();

function mifuncion1() {
  console.log("Función 1");
}

function mifuncion2() {
  console.log("Función 2");
}

// Función de tipo callback
let imp = function imprimir(mensaje) {
  console.log(mensaje);
};

function sumar(op1, op2, funcioncallback) {
  let res = op1 + op2;
  funcioncallback(`Resultado: ${res}`);
}

// Llamamos a la función sumar con un callback
sumar(5, 3, imp);

// Llamadas asíncronas con setTimeout
function miFuncionCallback() {
  console.log("Saludo asíncrono después de 3 segundos");
}

setTimeout(miFuncionCallback, 3000); // Llamada en 3 segundos

// Función anónima en setTimeout
setTimeout(function () {
  console.log("Saludos asíncrono 2");
}, 4000);

// Función flecha en setTimeout
setTimeout(() => console.log("Saludos asíncrono 3"), 5000);

// Función setInterval que se ejecuta cada segundo
let reloj = () => {
  // Función flecha
  let fecha = new Date();
  console.log(
    `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
  );
};

setInterval(reloj, 1000); // Ejecuta la función cada 1 segundo
