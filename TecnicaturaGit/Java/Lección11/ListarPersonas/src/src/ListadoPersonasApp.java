import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        //Definimos la lista fuera del ciclo while
        List<Persona> personas = new ArrayList<>();
        //Empezamos con el menú
        var salir = false;
        while (!salir){
            mostrarMenu();
            try{
                salir = ejecutarOperacion(entrada, personas);
            } catch (Exception e){
                System.out.println("Ocurrió un error: "+e.getMessage());
            }
            System.out.println();
        }//Fin del ciclo while
    }//Fin del metodo main

    private static void mostrarMenu(){
        //Mostramos las opciones
        System.out.println("""
                ******* Listado de Personas ******
                1. Agregar
                2. Listar
                3. Salir
                """);
        System.out.print("Digite una de las opciones: ");
    }//Fin del metodo mostraMenu

    private static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas){
        var opcion = Integer.parseInt(entrada.nextLine());
        var salir = false;
        //Revisamos la opcion digita a traves de un switch
        switch (opcion){
            case 1 -> {
                System.out.print("Digite el nombre: ");
                var nombre = entrada.nextLine();
                System.out.print("Digite el telefono: ");
                var tel = entrada.nextLine();
                System.out.print("Digite el correo: ");
                var email = entrada.nextLine();
                //Creamos el objeto persona
                var persona = new Persona(nombre, tel, email);
                //Agregamos la persona a la lista
                personas.add(persona);
                System.out.println("La lista tiene: "+personas.size()+" elementos");
            }//Fin caso 1
            case 2 -> { //Listar a las personas
                System.out.println("Listado de personas: ");
                //Mejoras con lambda y el metodo de referencia
                //personas.forEach((persona -> System.out.println(persona)));
                personas.forEach(System.out::println);
            }//Fin del caso 2
            case 3 -> {//Salir del ciclo
                System.out.println("Hasta Pronto...");
                salir = true;
            }//Fin del caso 3
            default -> System.out.println("Opción incorrecta: "+opcion);
        }//Fin del swith
        return salir;
    }//fin del metodo ejecutarOperacion
}//Fin de la clase ListadoPersonasApp