// Crea un tablero n x n lleno de -1
// El -1 indica que esa casilla todavía no fue visitada
function crearTablero(n) {
  return Array.from({ length: n }, () => Array(n).fill(-1));
}
// Muestra el tablero de forma ordenada por consola
// Marca con:
//   - "C" la casilla inicial
//   - "F" la última casilla
//   - números el orden de los pasos
function imprimirTablero(tablero) {
  const n = tablero.length;
  const totalMovimientos = n * n;

  let encabezado = "      ";
  for (let col = 0; col < n; col++) {
    encabezado += col.toString().padStart(3, " ") + " ";
  }
  console.log(encabezado);
  console.log("    " + "-".repeat(n * 4));

  for (let fila = 0; fila < n; fila++) {
    let filaStr = fila.toString().padStart(2, "    ") + " | ";
    for (let col = 0; col < n; col++) {
      const valor = tablero[fila][col];
      if (valor === -1) {
        filaStr += "  - ";
      } else if (valor === 0) {
        filaStr += "  C ";
      } else if (valor === totalMovimientos - 1) {
        filaStr += "  F ";
      } else {
        filaStr += valor.toString().padStart(3, " ") + " ";
      }
    }
    console.log(filaStr);
  }

  console.log("");
}

// Calcula todos los movimientos válidos que puede hacer el caballo desde una posición
// Solo devuelve los que están dentro del tablero y en casillas no visitadas
function obtenerMovimientosValidos(n, x, y, tablero) {
  const movimientosX = [2, 1, -1, -2, -2, -1, 1, 2];
  const movimientosY = [1, 2, 2, 1, -1, -2, -2, -1];
  let movimientosValidos = [];

  for (let i = 0; i < 8; i++) {
    const nx = x + movimientosX[i];
    const ny = y + movimientosY[i];
    if (nx >= 0 && ny >= 0 && nx < n && ny < n && tablero[nx][ny] === -1) {
      movimientosValidos.push([nx, ny]);
    }
  }

  return movimientosValidos;
}

// Intenta resolver el problema usando backtracking
// Marca cada paso que hace el caballo y retrocede si no puede continuar
function recorridoCaballo(n, inicioX, inicioY) {
  const tablero = crearTablero(n);
  tablero[inicioX][inicioY] = 0;

  let retrocesos = 0;

  // Backtracking: recursivamente busca un camino hasta completar el recorrido
  function resolver(x, y, pasoActual) {
    if (pasoActual === n * n) return true;

    const movimientos = obtenerMovimientosValidos(n, x, y, tablero);
    for (let [nx, ny] of movimientos) {
      tablero[nx][ny] = pasoActual;
      if (resolver(nx, ny, pasoActual + 1)) return true;
      tablero[nx][ny] = -1; // deshacemos el movimiento si no sirvió
      retrocesos++;
    }

    return false;
  }

  const exito = resolver(inicioX, inicioY, 1);

  if (exito) {
    return {
      tablero: tablero,
      totalSaltos: n * n - 1,
      retrocesos: retrocesos,
    };
  } else {
    console.log("❌ No se encontró una solución.");
    return null;
  }
}

// ============================//
// CONFIGURACIÓN DEL PROGRAMA //
// ==========================//

const n = 5; // tamaño del tablero
const inicioX = 0;
const inicioY = 0;

const tableroParaMostrar = crearTablero(n);
tableroParaMostrar[inicioX][inicioY] = 0;
console.log(`📍 Posición inicial del caballo (${inicioX}, ${inicioY}):`);
imprimirTablero(tableroParaMostrar);

const resultado = recorridoCaballo(n, inicioX, inicioY);

if (resultado) {
  console.log("🧭 Recorrido completo del caballo:");
  imprimirTablero(resultado.tablero);
  console.log("C: Casilla inicial");
  console.log("F: Casilla final");
  console.log(`🐎 Total de saltos: ${resultado.totalSaltos}`);
  console.log(`🔄 Retrocesos realizados: ${resultado.retrocesos}`);
}
