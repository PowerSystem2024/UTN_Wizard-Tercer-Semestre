// Función para crear un tablero de tamaño n x n
// El tablero es una matriz (array de arrays) donde cada casilla inicialmente tiene el valor -1
// El valor -1 indica que la casilla no ha sido visitada por el caballo todavía
function crearTablero(n) {
  // Array.from crea un array con 'n' elementos, cada uno es un array de tamaño 'n' lleno de -1
  // Esto representa un tablero vacío donde ninguna casilla fue visitada
  return Array.from({ length: n }, () => Array(n).fill(-1));
}

// Función para imprimir el tablero en consola de forma legible y amigable
// Muestra los números en cada casilla o símbolos especiales según el estado de la casilla
function imprimirTablero(tablero) {
  const n = tablero.length; // Tamaño del tablero (n x n)
  const totalMovimientos = n * n; // Total de casillas para visitar

  // Construimos el encabezado de columnas con números para identificar columnas
  let encabezado = "      "; // Espacio inicial para la fila de números
  for (let col = 0; col < n; col++) {
    // padStart asegura que cada número ocupe 3 espacios para alineación
    encabezado += col.toString().padStart(3, " ") + " ";
  }
  console.log(encabezado);

  // Línea separadora para distinguir encabezado del tablero
  console.log("    " + "-".repeat(n * 4));

  // Iteramos por cada fila para imprimirla
  for (let fila = 0; fila < n; fila++) {
    // Empezamos la línea con el número de fila alineado a la izquierda
    let filaStr = fila.toString().padStart(2, "    ") + " | ";

    // Iteramos por cada columna en la fila actual
    for (let col = 0; col < n; col++) {
      const valor = tablero[fila][col]; // Valor de la casilla actual

      // Según el valor imprimimos diferentes símbolos o números:
      if (valor === -1) {
        // Casilla no visitada, la mostramos como guion "-"
        filaStr += "  - ";
      } else if (valor === 0) {
        // Casilla inicial (primer movimiento del caballo)
        filaStr += "  C ";
      } else if (valor === totalMovimientos - 1) {
        // Casilla final (último movimiento)
        filaStr += "  F ";
      } else {
        // Casillas intermedias muestran el número del paso (orden de visita)
        // padStart para mantener la alineación
        filaStr += valor.toString().padStart(3, " ") + " ";
      }
    }

    // Imprimir la línea completa de la fila actual
    console.log(filaStr);
  }

  // Línea en blanco para separar visualmente
  console.log("");
}

// Función para obtener todos los movimientos válidos del caballo desde una posición (x, y)
// Se consideran sólo movimientos dentro del tablero y hacia casillas no visitadas
function obtenerMovimientosValidos(n, x, y, tablero) {
  // Movimientos posibles del caballo en coordenadas relativas
  // Estos movimientos corresponden a las 8 posiciones posibles de salto en "L"
  const movimientosX = [2, 1, -1, -2, -2, -1, 1, 2];
  const movimientosY = [1, 2, 2, 1, -1, -2, -2, -1];

  let movimientosValidos = []; // Array para guardar los movimientos válidos

  // Revisamos cada movimiento posible
  for (let i = 0; i < 8; i++) {
    const nx = x + movimientosX[i]; // Nueva posición X
    const ny = y + movimientosY[i]; // Nueva posición Y

    // Condición para que el movimiento sea válido:
    // 1. Estar dentro del tablero (coordenadas >= 0 y < n)
    // 2. La casilla no debe haber sido visitada (valor -1)
    if (nx >= 0 && ny >= 0 && nx < n && ny < n && tablero[nx][ny] === -1) {
      movimientosValidos.push([nx, ny]); // Agregamos el movimiento válido
    }
  }

  return movimientosValidos; // Retornamos la lista con los movimientos posibles
}

// Función principal que intenta encontrar un recorrido completo del caballo en el tablero
// Utiliza un algoritmo de backtracking (retroceso) para intentar cubrir todas las casillas
function recorridoCaballo(n, inicioX, inicioY) {
  // Creamos el tablero vacío de tamaño n x n
  const tablero = crearTablero(n);

  // Marcamos la posición inicial del caballo con el paso 0 (primer movimiento)
  tablero[inicioX][inicioY] = 0;

  let retrocesos = 0; // Contador para llevar registro de cuántas veces hacemos backtracking

  // Función recursiva que intenta resolver el recorrido desde la posición (x, y) en el paso 'pasoActual'
  function resolver(x, y, pasoActual) {
    // Caso base: si pasoActual es igual a n*n significa que visitamos todas las casillas exitosamente
    if (pasoActual === n * n) return true;

    // Obtenemos todos los movimientos válidos para el caballo desde la posición actual
    const movimientos = obtenerMovimientosValidos(n, x, y, tablero);

    // Intentamos cada movimiento válido uno por uno
    for (let [nx, ny] of movimientos) {
      tablero[nx][ny] = pasoActual; // Marcamos la casilla con el número de paso actual

      // Llamada recursiva para continuar el recorrido desde la nueva posición
      if (resolver(nx, ny, pasoActual + 1)) return true; // Si se encontró solución, propagamos el éxito

      // Si el recorrido no funciona desde aquí, deshacemos el cambio (backtracking)
      tablero[nx][ny] = -1;
      retrocesos++; // Aumentamos el contador de retrocesos
    }

    // Si no se pudo avanzar desde esta posición con ningún movimiento válido, retornamos false
    return false;
  }

  // Iniciamos la búsqueda recursiva desde la posición inicial, con pasoActual=1 (porque 0 ya está marcado)
  const exito = resolver(inicioX, inicioY, 1);

  if (exito) {
    // Si hubo éxito, devolvemos el tablero con el recorrido, el total de saltos y la cantidad de retrocesos
    return {
      tablero: tablero,
      totalSaltos: n * n - 1, // total de casillas menos la inicial
      retrocesos: retrocesos,
    };
  } else {
    // Si no se encontró solución, avisamos por consola y devolvemos null
    console.log("❌ No se encontró una solución.");
    return null;
  }
}

// =====================
// ⚙️ CONFIGURACIÓN DEL PROGRAMA
// =====================

// Definimos el tamaño del tablero (n x n)
const n = 5;

// Definimos la posición inicial del caballo (fila, columna)
const inicioX = 0;
const inicioY = 0;

// Mostramos el tablero inicial con la casilla inicial marcada con "C"
const tableroParaMostrar = crearTablero(n);
tableroParaMostrar[inicioX][inicioY] = 0;
console.log(`📍 Posición inicial del caballo (${inicioX}, ${inicioY}):`);
imprimirTablero(tableroParaMostrar);

// Ejecutamos el algoritmo para intentar encontrar un recorrido completo
const resultado = recorridoCaballo(n, inicioX, inicioY);

// Si se encontró una solución, mostramos el tablero con el recorrido y los detalles
if (resultado) {
  console.log(
    "🧭 Recorrido completo del caballo (orden de visita de casillas):"
  );
  imprimirTablero(resultado.tablero);
  console.log("C: Inicio de recorrido");
  console.log("F: Fin del recorrido");
  console.log(`🐎 Total de saltos realizados: ${resultado.totalSaltos}`);
  console.log(
    `🔄 Retrocesos realizados (backtracking): ${resultado.retrocesos}`
  );
}
