// Crea un tablero de tamaño n x n e inicializa todas las casillas con -1.
// El valor -1 significa que la casilla aún no ha sido visitada por el caballo.
function crearTablero(n) {
  return Array.from({ length: n }, () => Array(n).fill(-1));
}

// Muestra el tablero en consola con un formato visual amigable.
// Donde:
// - Las casillas con -1 (no visitadas) se muestran como "-"
// - La casilla inicial se muestra como "C"
// - La última casilla (fin del recorrido) se muestra como "F"
// - Las demás casillas muestran el orden de visita (0 a n*n - 1)
function imprimirTablero(tablero) {
  const n = tablero.length;
  const totalMovimientos = n * n;

  // Encabezado de columnas
  let encabezado = '      ';
  for (let col = 0; col < n; col++) {
    encabezado += col.toString().padStart(3, ' ') + ' ';
  }
  console.log(encabezado);

  // Línea separadora
  console.log('    ' + '-'.repeat(n * 4));

  // Imprimir cada fila con su número
  for (let fila = 0; fila < n; fila++) {
    let filaStr = fila.toString().padStart(2, '    ') + ' | ';
    for (let col = 0; col < n; col++) {
      const valor = tablero[fila][col];

      if (valor === -1) {
        filaStr += '  - '; // Casilla no visitada (solo visualmente se muestra como "-")
      } else if (valor === 0) {
        filaStr += '  C '; // Casilla de inicio
      } else if (valor === totalMovimientos - 1) {
        filaStr += '  F '; // Casilla final
      } else {
        filaStr += valor.toString().padStart(3, ' ') + ' ';
      }
    }
    console.log(filaStr);
  }

  console.log('');
}

// Calcula todos los movimientos válidos que puede hacer un caballo desde una posición (x, y)
// Solo se consideran movimientos que estén dentro del tablero y que no hayan sido visitados
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

// ♞ Intenta resolver el recorrido completo del caballo desde una posición inicial
function recorridoCaballo(n, inicioX, inicioY) {
  const tablero = crearTablero(n);          // Crear tablero vacío
  tablero[inicioX][inicioY] = 0;            // Marcar posición inicial con el número 0 (primer paso)

  let retrocesos = 0;                        // Contador de retrocesos (backtracking)

  // 🔁 Función recursiva para explorar los movimientos del caballo
  function resolver(x, y, pasoActual) {
    if (pasoActual === n * n) return true;  // Si ya visitamos todas las casillas, terminamos

    const movimientos = obtenerMovimientosValidos(n, x, y, tablero);

    for (let [nx, ny] of movimientos) {
      tablero[nx][ny] = pasoActual;               // Marcar el paso en esa casilla
      if (resolver(nx, ny, pasoActual + 1)) return true; // Intentar desde ahí
      tablero[nx][ny] = -1;                       // Si no funciona, deshacer (backtrack)
      retrocesos++;
    }

    return false; // No se pudo completar el recorrido desde esta ruta
  }

  // Ejecutar la resolución
  const exito = resolver(inicioX, inicioY, 1); // Empezamos desde paso 1 

  if (exito) {
    return {
      tablero: tablero,
      totalSaltos: n * n - 1,
      retrocesos: retrocesos
    };
  } else {
    console.log("❌ No se encontró una solución.");
    return null;
  }
}

// =====================
// ⚙️ CONFIGURACIÓN 
// =====================

const n = 5;               // Tamaño del tablero (n x n)
const inicioX = 0;         // Posición X inicial del caballo
const inicioY = 0;         // Posición Y inicial del caballo

// Mostrar el tablero inicial
const tableroParaMostrar = crearTablero(n);
tableroParaMostrar[inicioX][inicioY] = 0;
console.log(`📍 Posición inicial del caballo (${inicioX}, ${inicioY}):`);
imprimirTablero(tableroParaMostrar);

// Ejecutar el recorrido del caballo
const resultado = recorridoCaballo(n, inicioX, inicioY);

// Mostrar resultados si hay solución
if (resultado) {
  console.log("🧭 Recorrido completo del caballo (orden de visita de casillas):");
  imprimirTablero(resultado.tablero);
  console.log("C: Inicio de recorrido");
  console.log("F: Fin del recorrido");
  console.log(`🐎 Total de saltos realizados: ${resultado.totalSaltos}`);
}