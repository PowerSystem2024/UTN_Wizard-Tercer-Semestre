// Función recursiva que genera los pasos para resolver las Torres de Hanoi
// Guarda los movimientos necesarios para pasar todos los discos de 'origen' a 'destino'
function hanoi(n, origen, auxiliar, destino, pasos) {
  if (n === 1) {
    pasos.push([origen, destino]); // Caso base: mover el único disco directamente
  } else {
    // Paso 1: mover n-1 discos a la torre auxiliar
    hanoi(n - 1, origen, destino, auxiliar, pasos);
    
    // Paso 2: mover el disco más grande al destino
    pasos.push([origen, destino]);
    
    // Paso 3: mover los n-1 discos desde la auxiliar al destino
    hanoi(n - 1, auxiliar, origen, destino, pasos);
  }
}

// Crea el estado inicial de las torres (A, B y C)
// Los discos están en la torre A, del más grande al más chico
function inicializarTorres(n) {
  return {
    A: Array.from({ length: n }, (_, i) => n - i), // Ej: [3,2,1]
    B: [],
    C: []
  };
}

// Imprime en consola cómo están las torres en el momento actual
function imprimirTorres(torres) {
  console.log("Estado actual:");
  console.log("Torre A:", torres.A.join(" "));
  console.log("Torre B:", torres.B.join(" "));
  console.log("Torre C:", torres.C.join(" "));
  console.log("---------------\n");
}

// Simula una espera (pausa entre pasos)
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Ejecuta el proceso de mover los discos paso a paso con una animación en consola
async function ejecutarHanoi(n) {
  const pasos = [];
  hanoi(n, "A", "B", "C", pasos); // Generamos los pasos a seguir

  const torres = inicializarTorres(n); // Estado inicial de las torres
  imprimirTorres(torres);

  // Ejecutamos cada paso con una pausa visual
  for (let i = 0; i < pasos.length; i++) {
    const [origen, destino] = pasos[i];
    const disco = torres[origen].pop(); // Sacamos disco del origen
    torres[destino].push(disco);        // Lo colocamos en la torre destino

    console.log(`Paso ${i + 1}: mover disco ${disco} de ${origen} a ${destino}`);
    imprimirTorres(torres);

    await esperar(800); // Pausa de 800 ms entre movimientos
  }

  console.log("¡Resuelto!");
}

// Cambiá este valor si querés probar con más discos
const cantidadDeDiscos = 3;
ejecutarHanoi(cantidadDeDiscos);
