
package test;

import domain.Empleado;
import domain.Gerente;


public class TestInstanceOf {
    public static void main(String[] args) {
        
        Empleado empleado1 = new Empleado("Juan", 10000); //constructor de la clase padre
        //determinarTipo(empleado1);
        
        
        empleado1 = new Gerente("José", 5000, "Sistemas");
        determinarTipo(empleado1);
        
    }
    
    public static void determinarTipo(Empleado empleado){
        if(empleado instanceof Gerente){
            System.out.println("Es de tipo Gernete");
            Gerente gerente = (Gerente)empleado;
            //((Gerente) empleado).getDepartamento();
            System.out.println("gerente = " + gerente.getDepartamento());
        }
        else if(empleado instanceof Empleado){
            System.out.println("Es de tipo Empleado");
            Gerente gerente = (Gerente)empleado;
            System.out.println("gerente = " + gerente.getDepartamento());
        }
        else if(empleado instanceof Object){
            System.out.println("Es de tipo Object");
        }
    }
}
