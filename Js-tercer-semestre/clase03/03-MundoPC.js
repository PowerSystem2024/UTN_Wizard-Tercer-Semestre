// Clase base
class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

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

// Ratón hereda de DispositivoEntrada
class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    toString() {
        return `Ratón [ID: ${this._idRaton}, Entrada: ${this.tipoEntrada}, Marca: ${this.marca}]`;
    }
}

// Teclado hereda de DispositivoEntrada
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

// Monitor
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

// Computadora
class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString() {
        return `
Computadora [ID: ${this._idComputadora}, Nombre: ${this._nombre}]
   ${this._monitor.toString()}
   ${this._teclado.toString()}
   ${this._raton.toString()}
        `;
    }
}

// Orden
class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let computadorasStr = '';
        for (let compu of this._computadoras) {
            computadorasStr += compu.toString();
        }
        return `Orden [ID: ${this._idOrden}] \nComputadoras: ${computadorasStr}`;
    }
}

// ------------------------- PRUEBAS -------------------------

// Crear dispositivos
const raton1 = new Raton("USB", "IBM");
const teclado1 = new Teclado("USB", "Redragon");
const monitor1 = new Monitor("LG", "24 pulgadas");

// Crear computadora
const computadora1 = new Computadora("Xeon Silver", monitor1, teclado1, raton1);

// Crear orden
const orden1 = new Orden();
orden1.agregarComputadora(computadora1);

console.log(orden1.mostrarOrden());

// ------------------------- Polimorfismo -------------------------

function describirDispositivo(dispositivo) {
    // Este método funciona con cualquier objeto que tenga toString()
    console.log(dispositivo.toString());
}

/* Proyecto MundoPC - Aplicación de Polimorfismo
==============================================

En este proyecto se aplica el polimorfismo mediante herencia y sobrescritura:

1. Las clases Raton y Teclado heredan de la clase base DispositivoEntrada.
   Ambas sobrescriben el método toString() para mostrar su información específica.
   Esto permite que, aunque se usen como DispositivoEntrada, cada clase tenga un comportamiento distinto.

2. La clase Computadora recibe objetos como monitor, teclado y raton.
   No necesita saber el tipo exacto de cada uno, simplemente llama a toString()
   y se ejecuta la versión correspondiente según el tipo real del objeto.

3. La clase Orden contiene una lista de Computadoras.
   Cuando muestra una orden, llama a toString() de cada computadora,
   que a su vez llama a toString() de sus componentes (ratón, teclado, monitor).
   Así, la Orden usa polimorfismo indirectamente para mostrar todos los datos correctamente,
   sin conocer la lógica interna de cada clase.
*/