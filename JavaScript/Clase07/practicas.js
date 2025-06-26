/**
 * Problema de las N Reinas
 * Este algoritmo resuelve el problema clásico de colocar N reinas en un tablero de ajedrez de NxN,
 * de modo que ninguna reina se ataque entre sí (ni en la misma fila, columna o diagonal).
 * Se utiliza el enfoque de "backtracking" o retroceso recursivo.
 */

function resolverNReinas(N) {
  const soluciones = []; // Aquí se guardan todas las soluciones válidas
  const tablero = []; // Representa las posiciones de las reinas. Índice = fila, valor = columna

  /**
   * Función que verifica si es seguro colocar una reina en la posición (fila, col)
   * No se permite que una reina esté:
   * - en la misma columna que otra reina
   * - en la misma diagonal principal (\)
   * - en la misma diagonal secundaria (/)
   */
  function esSeguro(fila, col) {
    for (let i = 0; i < fila; i++) {
      if (
        tablero[i] === col || // misma columna
        tablero[i] - i === col - fila || // misma diagonal principal \
        tablero[i] + i === col + fila // misma diagonal secundaria /
      ) {
        return false; // No es seguro colocar aquí
      }
    }
    return true; // Es seguro colocar una reina en esta posición
  }

  /**
   * Función principal de backtracking
   * Intenta colocar una reina por fila, y si encuentra una solución válida,
   * la guarda en el arreglo de soluciones.
   */
  function backtrack(fila = 0) {
    if (fila === N) {
      // Se colocaron todas las reinas sin conflictos: guardamos esta solución
      soluciones.push([...tablero]); // Se guarda una copia del arreglo actual
      return;
    }

    // Intentamos colocar una reina en cada columna de la fila actual
    for (let col = 0; col < N; col++) {
      if (esSeguro(fila, col)) {
        tablero[fila] = col; // Colocamos la reina
        backtrack(fila + 1); // Intentamos con la siguiente fila
        // No necesitamos "deshacer" el movimiento porque se sobrescribe automáticamente
      }
    }
  }

  // Iniciar la búsqueda desde la fila 0
  backtrack();

  // Mostrar los resultados
  console.log(
    `Se encontraron ${soluciones.length} soluciones para N = ${N}:\n`
  );

  soluciones.forEach((solucion, idx) => {
    console.log(`Solución ${idx + 1}:`);
    console.log("Posiciones (columna por fila):", solucion);

    // Visualizamos el tablero con las reinas (Q) y los espacios vacíos (.)
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

// Ejecutamos el algoritmo para N = 8 
resolverNReinas(8);
