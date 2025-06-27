"use strict";

// Cómo evitamos errores utilizando Try - Catch
try {
  let x = 10;
  // miFuncion(); // Si la función no existe, lanzará un error
  throw "Mi Error"; // Lanzamos un error de forma manual
} catch (e) {
  // Atrapamos el error
  console.log("Error: " + e); // Muestra el error
  console.log(typeof e); // Muestra el tipo de error (en este caso: string)
} finally {
  // Este bloque se ejecuta siempre, haya o no error
  console.log("Termina la revisión de errores.");
}

// Continuación del programa después del bloque try-catch-finally
console.log("Continuamos...");

let resultado = -5;

try {
  // y = 5; // Esta línea está comentada, pero si no se declara 'y', lanzaría un error en modo estricto

  if (isNaN(resultado)) {
    // Comprobamos si resultado NO es un número
    throw "El resultado no es un número";
  } else if (resultado === "") {
    // Comprobamos si resultado es una cadena vacía
    throw "El resultado es cadena vacía";
  } else if (resultado >= 0) {
    // Comprobamos si el valor es positivo
    throw "El valor es positivo";
  } else if (resultado <= 0) {
    // Comprobamos si el valor es negativo
    throw "El valor es negativo";
  }
} cattch (error) {
  // Capturamos el error lanzado anteriormente
  console.log("Error: " + error); // Muestra el error como texto
  console.log("Error: " + error.name); // Si es un objeto Error, muestra su nombre
  console.log("Error: " + error.message); // Si es un objeto Error, muestra su mensaje
} finally {
  // Este bloque se ejecuta siempre, sin importar si hubo error o no
  console.log("Termina la revisión de errores 2");
}
