/*
Esta clase no desciende de ninguna otra clase. Primero se crean los atributos. 
Mientras el programa no tenga el constuctor la línea del private final se marcará 
como error. Luego de la creación de los atributos se creará el constructor vacío, 
el cual se creará de manera privada debido a que será llamado desde el constructor 
público que es donde encontramos cargados los atributos. 
El constructor vacío hará el incremento de cada uno de los monitores. 
A continuación se creará el constructor público, luego se agregarán 
los Gette and Setter, el get es el que obtiene el valor y el set es 
sólo para lectura y por último se agregará el toString.
*/
package ar.com.system2025.mundopc;

public class Monitor {
    private final int idMonitor;
    private String marca;
    private double tamanio;
    private static int contadorMonitores;
    
    private Monitor(){
        this.idMonitor = ++Monitor.contadorMonitores;
    }
    
    public Monitor(String marca, double tamanio){
        this(); //llmaddo al contructor vacio
        this.marca = marca;
        this.tamanio = tamanio;
    }

    public String getMarca() {
        return this.marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public double getTamanio() {
        return this.tamanio;
    }

    public void setTamanio(double tamanio) {
        this.tamanio = tamanio;
    }
    
    //Ingresamos manualemnte el getidMonitor
    public int getIdMonitor(){
        return this.idMonitor;
    }

    @Override
    public String toString() {
        return "Monitor{" + "idMonitor=" + idMonitor + ", marca=" + marca + ", tamanio=" + tamanio + '}';
    }   
}
