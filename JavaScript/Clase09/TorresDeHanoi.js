// Función recursiva que genera los pasos para resolver las Torres de Hanoi
// Parámetros:
// n = número de discos que queremos mover
// origen = torre desde donde movemos los discos
// auxiliar = torre que utilizamos como apoyo temporal
// destino = torre donde queremos mover los discos
// pasos = array donde guardamos los movimientos a realizar
function hanoi(n, origen, auxiliar, destino, pasos) {
  // Caso base: si solo hay 1 disco, simplemente lo movemos del origen al destino
  if (n === 1) {
    pasos.push([origen, destino]); // Guardamos el paso como un par [origen, destino]
  } else {
    // Caso recursivo:
    // 1. Mover los n-1 discos superiores desde la torre origen a la torre auxiliar
    //    usando la torre destino como apoyo
    hanoi(n - 1, origen, destino, auxiliar, pasos);

    // 2. Mover el disco más grande (el disco n) del origen al destino
    pasos.push([origen, destino]);

    // 3. Mover los n-1 discos desde la torre auxiliar al destino,
    //    usando el origen como apoyo
    hanoi(n - 1, auxiliar, origen, destino, pasos);
  }
}

// Función que inicializa las torres con los discos numerados para mostrar el estado
// Las torres son representadas como objetos con arrays para cada torre A, B y C
// Los discos se representan con números donde el disco más grande es n y el más chico 1
function inicializarTorres(n) {
  return {
    // Torre A inicia con todos los discos ordenados desde el más grande abajo (n) al más chico arriba (1)
    A: Array.from({ length: n }, (_, i) => n - i),
    B: [], // Torre B comienza vacía
    C: [], // Torre C comienza vacía
  };
}

// Función para imprimir en consola el estado actual de las tres torres
function imprimirTorres(torres) {
  console.log("Estado actual:");
  console.log("Torre A:", torres.A.join(" ")); // Mostramos discos en la torre A separados por espacios
  console.log("Torre B:", torres.B.join(" ")); // Torre B
  console.log("Torre C:", torres.C.join(" ")); // Torre C
  console.log("---------------\n"); // Línea divisoria para claridad
}

// Función auxiliar para hacer una pausa asíncrona (delay)
// Permite esperar 'ms' milisegundos antes de continuar la ejecución
function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Función principal que ejecuta animadamente el algoritmo de las Torres de Hanoi
// Utiliza la función hanoi para obtener los pasos, y luego los ejecuta mostrando el estado
async function ejecutarHanoi(n) {
  const pasos = []; // Array donde almacenamos los pasos a realizar
  hanoi(n, "A", "B", "C", pasos); // Calculamos los pasos para resolver el problema

  const torres = inicializarTorres(n); // Inicializamos las torres con discos en la torre A
  imprimirTorres(torres); // Imprimimos el estado inicial

  // Iteramos por cada paso calculado
  for (let i = 0; i < pasos.length; i++) {
    const [origen, destino] = pasos[i]; // Obtenemos de dónde y a dónde mover el disco

    const disco = torres[origen].pop(); // Sacamos el disco de la torre origen (último elemento del array)
    torres[destino].push(disco); // Lo colocamos en la torre destino (al final del array)

    // Imprimimos el movimiento realizado y el estado actual de las torres
    console.log(
      `Paso ${i + 1}: mover disco ${disco} de ${origen} a ${destino}`
    );
    imprimirTorres(torres);

    // Esperamos 800 ms antes de continuar con el siguiente paso para que se vea animado
    await esperar(800);
  }

  console.log("¡Resuelto!"); // Mensaje final cuando todos los discos están en la torre destino
}

// Configuración: cantidad de discos para el problema
const cantidadDeDiscos = 3;

// Ejecutamos la función principal para comenzar la animación y solución
ejecutarHanoi(cantidadDeDiscos);
