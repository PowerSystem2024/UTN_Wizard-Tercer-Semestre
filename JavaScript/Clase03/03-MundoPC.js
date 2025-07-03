// Clase base para dispositivos de entrada como ratones y teclados
class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    // Getters y setters para tipoEntrada y marca
    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }
}

// Clase Raton, que hereda de DispositivoEntrada
class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    // Sobrescribe toString para mostrar datos específicos del ratón
    toString() {
        return `Ratón [ID: ${this._idRaton}, Entrada: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
}

// Clase Teclado, también hereda de DispositivoEntrada
class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    toString() {
        return `Teclado [ID: ${this._idTeclado}, Entrada: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
}

// Clase Monitor (no hereda de DispositivoEntrada porque es un dispositivo de salida)
class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    toString() {
        return `Monitor [ID: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`;
    }
}

// Clase Computadora que agrupa un monitor, teclado y ratón
class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    // Imprime todos los componentes de la computadora
    toString() {
        return `
Computadora [ID: ${this._idComputadora}, Nombre: ${this._nombre}]
   ${this._monitor.toString()}
   ${this._teclado.toString()}
   ${this._raton.toString()}
        `;
    }
}

// Clase Orden que permite agrupar computadoras (simula una compra)
class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    // Agrega una computadora a la orden
    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    // Devuelve un resumen completo de la orden
    mostrarOrden() {
        let computadorasStr = '';
        for (let compu of this._computadoras) {
            computadorasStr += compu.toString();
        }
        return `Orden [ID: ${this._idOrden}] \nComputadoras: ${computadorasStr}`;
    }
}

// ------------------------- PRUEBAS -------------------------

// Se crean objetos de cada clase
const raton1 = new Raton("USB", "IBM");
const teclado1 = new Teclado("USB", "Redragon");
const monitor1 = new Monitor("LG", "24 pulgadas");

// Se arma una computadora con los componentes
const computadora1 = new Computadora("Xeon Silver", monitor1, teclado1, raton1);

// Se crea una orden y se agrega la computadora
const orden1 = new Orden();
orden1.agregarComputadora(computadora1);

console.log(orden1.mostrarOrden()); // Se muestra la orden completa

// ------------------------- POLIMORFISMO -------------------------

// Función genérica que puede recibir cualquier objeto que tenga toString()
function describirDispositivo(dispositivo) {
    console.log(dispositivo.toString());
}
