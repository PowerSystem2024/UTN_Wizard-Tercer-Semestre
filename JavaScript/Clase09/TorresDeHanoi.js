// 🧩 Función recursiva que resuelve las Torres de Hanoi
// n: cantidad de discos a mover
// origen: torre de donde sale el disco
// auxiliar: torre usada como apoyo
// destino: torre final donde va el disco
// pasos: se guardan todos los movimientos a realizar
function hanoi(n, origen, auxiliar, destino, pasos) {
  if (n === 1) {
    // Caso simple: mover un solo disco directamente
    pasos.push([origen, destino]);
  } else {
    // Mover n-1 discos al auxiliar
    hanoi(n - 1, origen, destino, auxiliar, pasos);

    // Mover el disco grande al destino
    pasos.push([origen, destino]);

    // Mover n-1 discos desde el auxiliar al destino
    hanoi(n - 1, auxiliar, origen, destino, pasos);
  }
}

// 🛠️ Crea las torres con los discos iniciales
function inicializarTorres(n) {
  return {
    A: Array.from({ length: n }, (_, i) => n - i), // Torre A empieza con todos los discos
    B: [],
    C: [],
  };
}

// 👀 Muestra el estado de las torres por consola
function imprimirTorres(torres) {
  console.log("Estado actual:");
  console.log("Torre A:", torres.A.join(" "));
  console.log("Torre B:", torres.B.join(" "));
  console.log("Torre C:", torres.C.join(" "));
  console.log("---------------\n");
}

// ⏱️ Simula una espera (pausa entre pasos)
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 🚀 Función principal que anima paso a paso el proceso de mover los discos
async function ejecutarHanoi(n) {
  const pasos = [];
  hanoi(n, "A", "B", "C", pasos); // Calculamos todos los movimientos

  const torres = inicializarTorres(n); // Creamos el estado inicial del juego
  imprimirTorres(torres); // Mostramos el inicio

  // Recorremos cada paso
  for (let i = 0; i < pasos.length; i++) {
    const [origen, destino] = pasos[i];
    const disco = torres[origen].pop(); // Sacamos el disco desde la torre origen
    torres[destino].push(disco);        // Lo colocamos en la torre destino

    console.log(`Paso ${i + 1}: mover disco ${disco} de ${origen} a ${destino}`);
    imprimirTorres(torres);

    await esperar(800); // Esperamos un poco para simular animación
  }

  console.log("¡Resuelto!"); // Final del juego
}

// 🎯 Elegimos cuántos discos
