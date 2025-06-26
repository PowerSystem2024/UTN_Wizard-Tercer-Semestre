"use strict"; // Activa el modo estricto para mejorar la calidad del código

let x = 10; // Declaración de una variable con alcance de bloque (let)
console.log(x); // Imprime el valor de x en consola

// Función que también usa 'use strict' (aunque ya está activo globalmente)
function miFuncion() {
  "use strict"; // (No es necesario aquí porque ya está activado arriba, pero válido)
  let y = 10; // Variable local a la función
  console.log(y); // Imprime el valor de y
}
miFuncion(); // Llamada a la función
