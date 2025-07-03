package test;

import domain.Empleado;
import domain.Gerente;

public class TestInstanceOf {
    public static void main(String[] args) {
        
        // Creamos un objeto de tipo Empleado (superclase)
        Empleado empleado1 = new Empleado("Juan", 10000);
        // determinarTipo(empleado1); // Descomentar para probar con un Empleado común

        // Ahora, reutilizamos la variable pero con un objeto Gerente (subclase)
        empleado1 = new Gerente("José", 5000, "Sistemas");

        // Llamamos al método para determinar el tipo del objeto en tiempo de ejecución
        determinarTipo(empleado1);
    }

    // Método que evalúa el tipo real del objeto utilizando instanceof
    public static void determinarTipo(Empleado empleado) {
        if (empleado instanceof Gerente) {
            System.out.println("Es de tipo Gerente");
            
            // Downcasting: convertimos Empleado a Gerente para acceder a métodos específicos
            Gerente gerente = (Gerente) empleado;
            System.out.println("Departamento: " + gerente.getDepartamento());
        } 
        else if (empleado instanceof Empleado) {
            System.out.println("Es de tipo Empleado");

            // ⚠️ Este casting es incorrecto si el objeto no es realmente un Gerente
            // Gerente gerente = (Gerente)empleado; // Esto puede lanzar ClassCastException
            // System.out.println("Departamento: " + gerente.getDepartamento());

            // En este caso, no debemos hacer el casting. Solo se imprime que es un Empleado.
        } 
        else if (empleado instanceof Object) {
            System.out.println("Es de tipo Object");
        }
    }
}
