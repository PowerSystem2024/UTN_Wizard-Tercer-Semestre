
package test;
import domain.*;

public class TestClaseObject {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 50000);
        Empleado empleado2 = new Empleado("Juan", 50000);
        
        if(empleado1 == empleado2){
            System.out.println("Tiene la misma referencia en memoria");
        }
        else{
            System.out.println("Tiene distinta referencia en memoria");
        }
        
        if(empleado1.equals(empleado2)){
            System.out.println("Los objetos son iguales en contenido");
        }
        else{
            System.out.println("Los objetos son distintos en contenido");
        }
        
        if(empleado1.hashCode() == empleado2.hashCode()){
            System.out.println("El valor hashcode es igual");
        }
        else{
            System.out.println("El valor hashcode es diferente");
        }
    }
    
}
