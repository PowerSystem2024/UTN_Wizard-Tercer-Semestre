/*
Herencia: Se crea la clase hija ratón, desde la clase padre Dispositivo Entrada. Se crea un ID de cada objeto.
Se efectúa un constructor desde clase padre. Con la finalidad de realizar un contador
*/
package ar.com.system2025.mundopc;


public class Raton extends DispositivoEntrada {
    private final int idRaton;
    private static int contadorRatones;
    
    public Raton(String tipoEntrada, String marca) {
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;
    }

    @Override
    public String toString() {
        return "Raton{" + "idRaton=" + idRaton + ", "+super.toString()+ '}';
    }
    
    
}
