
package test;

import domain.Empleado;
import domain.Gerente;


public class testSobreescritura {
    public static void main(String[] args) {
        //Polimorfismo, creamos variables
        Empleado empleado1 = new Empleado("Juan", 10000); //constructor de la clase padre
        imprimir(empleado1);
        //System.out.println("empleado1 = " + empleado1.obtenerDetalles());
        
        //Creamos un objeto de tipo gerente
        empleado1 = new Gerente("José", 5000, "Sistemas");
        imprimir(empleado1);
        //System.out.println("gerente1 = " + gerente1.obtenerDetalles());
        
    }
    
    public static void imprimir(Empleado empleado){
        String detalles = empleado.obtenerDetalles();
        System.out.println("detalles = " + detalles);
    }
}
