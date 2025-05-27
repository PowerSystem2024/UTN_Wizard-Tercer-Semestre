// Crea un tablero n x n lleno de -1 (sin visitar)
function createBoard(n) {
  return Array.from({ length: n }, () => Array(n).fill(-1));
}

// Muestra el tablero con formato bonito
function printBoard(board) {
  const n = board.length;
  const totalMoves = n * n;

  // Encabezado de columnas
  let header = '    ';
  for (let col = 0; col < n; col++) {
    header += col.toString().padStart(3, ' ') + ' ';
  }
  console.log(header);

  // Línea separadora horizontal
  console.log('    ' + '-'.repeat(n * 4));

  // Imprime cada fila con su índice al costado
  for (let i = 0; i < n; i++) {
    let rowStr = i.toString().padStart(2, ' ') + ' |'; // Índice de fila
    for (let j = 0; j < n; j++) {
      const val = board[i][j];

      // Formatea según el valor: -1 para '-', 0 como inicio 'C', último como 'F'
      if (val === -1) {
        rowStr += '  - ';
      } else if (val === 0) {
        rowStr += '  C ';
      } else if (val === totalMoves - 1) {
        rowStr += '  F ';
      } else {
        rowStr += val.toString().padStart(3, ' ') + ' ';
      }
    }
    console.log(rowStr);
  }

  console.log('');
}

// Calcula los movimientos válidos del caballo desde una posición
function getValidMoves(n, x, y, board) {
  // Posibles desplazamientos del caballo
  const movesX = [2, 1, -1, -2, -2, -1, 1, 2];
  const movesY = [1, 2, 2, 1, -1, -2, -2, -1];

  let validMoves = [];

  // Verifica que cada movimiento esté dentro del tablero y no visitado
  for (let i = 0; i < 8; i++) {
    const nx = x + movesX[i];
    const ny = y + movesY[i];

    // Dentro de límites y aún no visitado
    if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === -1) {
      validMoves.push([nx, ny]);
    }
  }

  return validMoves;
}

// Intenta resolver el problema del recorrido del caballo desde una posición inicial
function knightTour(n, startX, startY) {
  const board = createBoard(n);         // Crear tablero vacío
  board[startX][startY] = 0;            // Marcar posición inicial como el primer paso

  let backtracks = 0;                   // Contador de retrocesos

  // Función recursiva para hacer el recorrido del caballo
  function solve(x, y, moveCount) {
    // Si ya se visitaron todas las casillas, se terminó con éxito
    if (moveCount === n * n) return true;

    const moves = getValidMoves(n, x, y, board); // Obtener movimientos válidos

    // Probar cada movimiento posible
    for (let [nx, ny] of moves) {
      board[nx][ny] = moveCount;               // Marcar movimiento
      if (solve(nx, ny, moveCount + 1)) return true; // Intentar siguiente paso
      board[nx][ny] = -1;                      // Backtracking: desmarcar si no sirve
      backtracks++;                            // Contamos el retroceso
    }

    return false; // No se encontró solución desde esta posición
  }

  // Ejecutar solución desde la posición inicial
  const success = solve(startX, startY, 1); // Comienza desde el paso 1

  if (success) {
    return {
      board: board,              // Tablero con recorrido
      totalJumps: n * n - 1,     // Total de movimientos realizados (saltos)
      backtracks: backtracks     // Total de retrocesos hechos
    };
  } else {
    console.log("❌ No se encontró una solución.");
    return null;
  }
}

// =============================
// CONFIGURACIÓN DEL PROGRAMA
// =============================

const n = 5;               // Tamaño del tablero
const startX = 0;          // Coordenada X inicial del caballo
const startY = 0;          // Coordenada Y inicial del caballo

// Mostrar el tablero inicial con la posición del caballo marcada
const displayBoard = createBoard(n);
displayBoard[startX][startY] = 0; // Paso inicial
console.log(`📍 Posición inicial del caballo (${startX}, ${startY}):`);
printBoard(displayBoard);

// Ejecutar el recorrido completo del caballo
const result = knightTour(n, startX, startY);

// Si se encontró solución, mostrar el recorrido ordenado
if (result) {
  console.log("🧭 Recorrido completo del caballo (orden de visita de casillas):");
  printBoard(result.board);

  // Mostrar estadísticas del recorrido
  console.log(`🐎 Total de saltos realizados: ${result.totalJumps}`);
  console.log(`🔄 Total de retrocesos realizados (backtracking): ${result.backtracks}`);
}