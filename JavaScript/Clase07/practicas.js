/**
 * Problema de las N Reinas
 * Este algoritmo resuelve el clásico problema de colocar N reinas en un tablero de NxN
 * de manera que ninguna se ataque (ni por fila, columna ni diagonal).
 * Se utiliza el enfoque de backtracking (algoritmo de retroceso).
 */

function resolverNReinas(N) {
  const soluciones = []; // Acá se guardarán todas las soluciones posibles
  const tablero = []; // Representa la posición de las reinas: índice = fila, valor = columna

  /**
   * Verifica si se puede colocar una reina en (fila, col) sin ser atacada.
   * Condiciones que se deben cumplir:
   * - No haber otra reina en la misma columna
   * - No haber otra reina en la misma diagonal principal (\)
   * - No haber otra reina en la misma diagonal secundaria (/)
   */
  function esSeguro(fila, col) {
    for (let i = 0; i < fila; i++) {
      if (
        tablero[i] === col || // Misma columna
        tablero[i] - i === col - fila || // Misma diagonal principal
        tablero[i] + i === col + fila // Misma diagonal secundaria
      ) {
        return false;
      }
    }
    return true;
  }

  /**
   * Algoritmo de backtracking:
   * Intenta colocar una reina por fila.
   * Si logra colocar todas, guarda la solución.
   */
  function backtrack(fila = 0) {
    if (fila === N) {
      // Si llegamos a la fila N, significa que colocamos todas sin conflictos
      soluciones.push([...tablero]); // Guardamos una copia del tablero actual
      return;
    }

    for (let col = 0; col < N; col++) {
      if (esSeguro(fila, col)) {
        tablero[fila] = col; // Colocamos la reina
        backtrack(fila + 1); // Vamos a la siguiente fila
        // No es necesario "deshacer" la posición porque se sobrescribe en la próxima iteración
      }
    }
  }

  // Iniciar la búsqueda desde la fila 0
  backtrack();

  // Mostrar los resultados encontrados
  console.log(`Se encontraron ${soluciones.length} soluciones para N = ${N}:\n`);

  soluciones.forEach((solucion, idx) => {
    console.log(`Solución ${idx + 1}:`);
    console.log("Posiciones (columna por fila):", solucion);

    // Imprimir visualmente el tablero
    for (let i = 0; i < N; i++) {
      let fila = "";
      for (let j = 0; j < N; j++) {
        fila += solucion[i] === j ? " Q " : " . ";
      }
      console.log(fila);
    }

    console.log("\n--------------------------\n");
  });
}

// Ejecutamos el algoritmo con N = 8 (tablero de ajedrez clásico)
resolverNReinas(8);
