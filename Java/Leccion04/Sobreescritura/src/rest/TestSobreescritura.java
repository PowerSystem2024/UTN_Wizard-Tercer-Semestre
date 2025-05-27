
package rest;

import domain.*;


public class TestSobreescritura {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juam", 100000);
        imprimir(empleado1);
        
        //System.out.println("empleado1 = " + empleado1.ontenerDetalles());
        Gerente gerente1 = new Gerente("Jose", 5000, "Sistemas");
        imprimir(gerente1);
        //System.out.println("gerente1 = " + gerente1.ontenerDetalles());        
    }
    
    public static void imprimir(Empleado empleado){
        System.out.println("empleados = " + empleado.obtenerDetalles);
    }
}
