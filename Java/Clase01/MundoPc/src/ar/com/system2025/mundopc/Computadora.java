/*
En este video se creará la clase computadora. Luego se pondrán todos los atributos. 
A continuación se creará el constructor vacío. Posteriormente se crea el constructor 
que llamará primero al constructor vacío para empezar a declarar los objetos. 
Se colocará el get pero el set no porque la variable es de tipo final, es constante, 
por lo que no puede modificarse. Esta clase no utilizará la clase padre. 
Hay ciertas clases que sólo sirven para el modelado, es decir, para heredar ciertas 
características; pero ya dentro del programa se utilizarán sólo las clases hijas. 
La relación de agregación es cuando se comienzan a mezclar las class creadas. 
El toString muestra la relación entre todos los métodos, con ésto se imprimirá un 
objeto completo. 
*/
package ar.com.system2025.mundopc;


public class Computadora {
    private final int idComputadora;
    private String nombre;
    private Monitor monitor;
    private Teclado teclado;
    private Raton raton;
    private static int contadorComputadoras;
    
    //Contructor vacio
    private Computadora(){
        this.idComputadora = ++Computadora.contadorComputadoras;
    }
    
    //Constructor 2
    public Computadora(String nombre, Monitor monitor, Teclado teclado, Raton raton){
        this();
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }
    
    public int getIdComputadora(){
        return this.idComputadora;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Monitor getMonitor() {
        return this.monitor;
    }

    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }

    public Teclado getTeclado() {
        return this.teclado;
    }

    public void setTeclado(Teclado teclado) {
        this.teclado = teclado;
    }

    public Raton getRaton() {
        return this.raton;
    }

    public void setRaton(Raton raton) {
        this.raton = raton;
    }

    @Override
    public String toString() {
        return "Computadora{" + "idComputadora=" + idComputadora + ", nombre=" + nombre + ", monitor=" + monitor + ", teclado=" + teclado + ", raton=" + raton + '}';
    }  
}
