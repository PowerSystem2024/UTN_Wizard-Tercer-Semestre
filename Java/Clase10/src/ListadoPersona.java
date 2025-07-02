import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        List<Persona> personas = new ArrayList<>();
        boolean salir = false;

        while (!salir) {
            mostrarMenu();
            try {
                salir = ejecutarOperacion(entrada, personas);
            } catch (Exception e) {
                System.out.println("Ocurrió un error: " + e.getMessage());
            }
            System.out.println(); // Línea de separación visual
        }
    }

    private static void mostrarMenu() {
        System.out.print("""
                ******* Menú de Personas *******
                1. Agregar Persona
                2. Listar Personas
                3. Buscar Persona
                4. Actualizar Persona
                5. Eliminar Persona
                6. Salir
                Seleccione una opción: """);
    }

    private static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas) {
        int opcion = Integer.parseInt(entrada.nextLine());
        boolean salir = false;

        switch (opcion) {
            case 1 -> {
                System.out.print("Ingrese el nombre: ");
                String nombre = entrada.nextLine();
                System.out.print("Ingrese el teléfono: ");
                String tel = entrada.nextLine();
                System.out.print("Ingrese el correo: ");
                String email = entrada.nextLine();

                Persona persona = new Persona(nombre, tel, email);
                personas.add(persona);
                System.out.println("La lista tiene: " + personas.size() + " elementos.");
            }

            case 2 -> {
                System.out.println("Listado de Personas:");
                if (personas.isEmpty()) {
                    System.out.println("No hay personas en la lista.");
                } else {
                    personas.forEach(System.out::println);
                }
            }

            case 3 -> {
                System.out.println("Funcionalidad de 'Buscar Persona' aún no implementada.");
            }

            case 4 -> {
                System.out.println("Funcionalidad de 'Actualizar Persona' aún no implementada.");
            }

            case 5 -> {
                System.out.println("Funcionalidad de 'Eliminar Persona' aún no implementada.");
            }

            case 6 -> {
                System.out.println("Hasta pronto...");
                salir = true;
            }

            default -> System.out.println("Opción no válida: " + opcion + ". Intente nuevamente.");
        }

        return salir;
    }
}
