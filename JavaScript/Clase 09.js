// Torres de Hanoi con número de disco en consola (compatible con Quokka.js)

function hanoi(n, origen, auxiliar, destino, pasos) {
  if (n === 1) {
    pasos.push([origen, destino]);
  } else {
    hanoi(n - 1, origen, destino, auxiliar, pasos);
    pasos.push([origen, destino]);
    hanoi(n - 1, auxiliar, origen, destino, pasos);
  }
}

// Inicializa las torres con los discos numerados
function inicializarTorres(n) {
  return {
    A: Array.from({ length: n }, (_, i) => n - i), // Discos del más grande (n) arriba al más chico (1) abajo
    B: [],
    C: []
  };
}

// Imprime visualmente el estado de las torres
function imprimirTorres(torres) {
  console.log("Estado actual:");
  console.log("Torre A:", torres.A.join(" "));
  console.log("Torre B:", torres.B.join(" "));
  console.log("Torre C:", torres.C.join(" "));
  console.log("---------------\n");
}

// Espera de forma asíncrona
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Ejecuta animadamente los pasos en consola
async function ejecutarHanoi(n) {
  const pasos = [];
  hanoi(n, "A", "B", "C", pasos);

  const torres = inicializarTorres(n);
  imprimirTorres(torres);

  for (let i = 0; i < pasos.length; i++) {
    const [origen, destino] = pasos[i];
    const disco = torres[origen].pop();      
    torres[destino].push(disco);             // Lo colocamos en la torre destino

    console.log(`Paso ${i + 1}: mover disco ${disco} de ${origen} a ${destino}`);
    imprimirTorres(torres);

    await esperar(800); // Esperar 800 ms entre pasos
  }

  console.log("¡Resuelto!");
}

// Número de discos (puedes cambiarlo)
const cantidadDeDiscos = 3;
ejecutarHanoi(cantidadDeDiscos);
