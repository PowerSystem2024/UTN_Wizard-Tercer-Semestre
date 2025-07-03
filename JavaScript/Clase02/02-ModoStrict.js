"use strict"; // Activa el modo estricto: ayuda a detectar errores y evita malas prácticas

let x = 10; // Se declara una variable con alcance de bloque (let)
console.log(x); // Muestra en consola el valor de x

// Definición de una función que también está en modo estricto
function miFuncion() {
  "use strict"; // No es necesario repetirlo si ya está activado globalmente, pero no afecta
  let y = 10; // Variable local declarada dentro de la función
  console.log(y); // Imprime el valor de y en consola
}

miFuncion(); // Se ejecuta la función
