function resolverNReinas(N) {
    const soluciones = []; //Guarda todas las soluciones encontradas
    const tablero = []; //Represente la posicion de las reinas en el tablero

    //Verifica si es seguro poner a una reina en la posicion (fila, col)
    function esSeguro(fila, col) {
        for (let i = 0; i < fila; i++) { //Verificamos tres condiciones
            if (
                tablero[i] === col || //Si hay otra reina en la misma columna          
                tablero[i] - i === col - fila || //Si hay reina en la misma diagonal principal                
                tablero[i] + i === col + fila    // Si hay reina en la misma diagonal secundaria              
            ) {
                return false; // No es seguro colocar aqqui
            }
        }
        return true; //Si no hay conflicto, devuelve true.
    }

    //Busca todas las soluciones posibles (Funcion recursiva backtracking)
    function backtrack(fila = 0) {
        if (fila === N) { //Si hemos colocado todas las n reinas
            soluciones.push([...tablero]); //guardamos una copia del arreglo actual como solucion valida
            return;
        }

        //Intentamos colocar una reina en cada columna de la fila actual
        for (let col = 0; col < N; col++) {
            if (esSeguro(fila, col)) { 
                tablero[fila] = col;//si es seguro, colocamos la reina en esa columna
                backtrack(fila + 1); //Llamamos recursivamente para la siguiente fila
                //No es nescesario "deshacer" el movimiento por que se sobrescribe en cada llamada
            }
        }
    }

    //Inicia la búsqueda desde la fila 0
    backtrack();

    // Mostramos cuantas soluciones se encontraron
    console.log(`Se encontraron ${soluciones.length} soluciones para N = ${N}:\n`); 

    //Recorremos cada solucion encontrada
    soluciones.forEach((solucion, idx) => {
        console.log(`Solución ${idx + 1}:`);
        //Mostramos el arreglo que indica en qué columna está cada reina
        console.log("Arreglo de índices:", solucion);

        //Mostramos el tablero visualmente con letras (Q = reina, . = vacío)
        for (let i = 0; i < N; i++) {
            let fila = "";
            for (let j = 0; j < N; j++) {
                fila += solucion[i] === j ? " Q " : " . ";
            }
            console.log(fila);
        }
        //Línea que divide las soluciones
        console.log("\n----------------------\n");
    });
}

// Usar con N = 8 u otro valor mayor
resolverNReinas(8);