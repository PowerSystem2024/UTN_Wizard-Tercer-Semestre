function solveNQueens(n) {
    const soluciones = [];
    const posiciones = new Array(n).fill(-1);

    function isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (
                posiciones[i] === col ||                // Misma columna
                posiciones[i] - i === col - row ||      // Misma diagonal ↘↖
                posiciones[i] + i === col + row         // Misma diagonal ↙↗
            ) {
                return false;
            }
        }
        return true;
    }
    function backtrack(row) {
        if (row === n) {
            soluciones.push([...posiciones]); // copia de solución
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                posiciones[row] = col;
                backtrack(row + 1);
                posiciones[row] = -1; // backtrack
            }
        }
    }
    backtrack(0);
    return soluciones;
}
function imprimirTableroDesdePosiciones(posiciones) {
    const n = posiciones.length;
    const tablero = Array(n).fill().map(() => Array(n).fill('_'));
    posiciones.forEach((col, row) => {
        tablero[row][col] = '&';
    });
    const visual = tablero.map(fila => fila.join(' ')).join('\n');
    console.log(visual);
    console.log('-'.repeat(n * 2));
}
//  N = 8 
const N = 8;
const soluciones = solveNQueens(N);
console.log(`Se encontraron ${soluciones.length} soluciones para N = ${N}\n`);
soluciones.forEach((pos, index) => {
    console.log(`Solución ${index + 1}:`);
    console.log("Índices de columnas:", pos);
    imprimirTableroDesdePosiciones(pos);
});
