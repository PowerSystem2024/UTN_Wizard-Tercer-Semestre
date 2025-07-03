"use strict";

// Ejemplo 1: Manejo básico de errores con try-catch
try {
  let x = 10;
  // miFuncion(); // Si se descomenta y la función no existe, lanzará un ReferenceError

  throw "Mi Error"; // Lanzamos un error personalizado (string)
} catch (e) {
  console.log("Error capturado:", e);         // Muestra el mensaje de error
  console.log("Tipo de error:", typeof e);    // Muestra el tipo del error (en este caso, "string")
} finally {
  console.log("→ Bloque finally: esto siempre se ejecuta, haya o no error.");
}

console.log("Continuamos con el resto del programa...\n");

// Ejemplo 2: Validaciones con throw personalizado
let resultado = -5;

try {
  // y = 5; // Si se descomenta, generará ReferenceError porque 'y' no está declarada (modo estricto)

  if (isNaN(resultado)) {
    throw "El resultado no es un número";
  } else if (resultado === "") {
    throw "El resultado es una cadena vacía";
  } else if (resultado >= 0) {
    throw "El valor es positivo"; // Para fines de demostración, se lanza como error
  } else if (resultado <= 0) {
    throw "El valor es negativo"; // En este caso, entrará aquí
  }
} catch (error) {
  // Captura del error lanzado en el bloque try
  console.log("Error capturado:", error);

  // Si lanzaras objetos Error reales, podrías usar:
  // console.log(error.name);
  // console.log(error.message);
} finally {
  console.log("→ Finaliza la validación de resultado.");
}
