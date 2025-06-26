// Utilizamos Scanner para recibir datos ingresados por el usuario desde la consola
import java.util.Scanner;

// Clase principal que contiene la lógica de la calculadora
public class CalculadoraUTN {

    // Punto de entrada del programa
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in); // Instanciamos Scanner para capturar input del usuario

        while (true) { // Bucle que se repite hasta que el usuario decida finalizar (opción 5)
            System.out.println("**** Aplicación Calculadora ****");
            mostrarMenu(); // Llamamos al método que imprime el menú de opciones

            try {
                var operacion = Integer.parseInt(entrada.nextLine()); // Convertimos la entrada a entero
                if (operacion >= 1 && operacion <= 4) { // Validamos que la opción esté dentro del rango permitido
                    ejecutarOperacion(operacion, entrada); // Ejecutamos la operación correspondiente
                } else if (operacion == 5) { // Salida del programa
                    System.out.println("Hasta pronto");
                    break; // Terminamos el ciclo
                } else {
                    System.out.println("Opción no válida: " + operacion); // Mensaje para opciones fuera del rango
                }
                System.out.println(); // Línea en blanco por legibilidad
            } catch (Exception e) {
                System.out.println("Se produjo un error: " + e.getMessage()); // Captura de excepciones genéricas
                System.out.println(); // Separación visual
            }
        }
    }

    // Método que imprime las opciones disponibles en pantalla
    private static void mostrarMenu() {
        System.out.println("""
                1. Sumar
                2. Restar
                3. Multiplicar
                4. Dividir
                5. Salir
                """);
        System.out.print("Seleccione una operación: ");
    }

    // Lógica para ejecutar la operación matemática elegida por el usuario
    private static void ejecutarOperacion(int operacion, Scanner entrada) {
        System.out.print("Ingrese el primer número: ");
        var operando1 = Double.parseDouble(entrada.nextLine());

        System.out.print("Ingrese el segundo número: ");
        var operando2 = Double.parseDouble(entrada.nextLine());

        Double resultado; // Variable que contendrá el resultado final

        switch (operacion) {
            case 1 -> {
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma: " + resultado);
            }
            case 2 -> {
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta: " + resultado);
            }
            case 3 -> {
                resultado = operando1 * operando2;
                System.out.println("Resultado de la multiplicación: " + resultado);
            }
            case 4 -> {
                if (operando2 == 0) {
                    System.out.println("No se puede dividir por cero."); // Validación para evitar divisiones inválidas
                } else {
                    resultado = operando1 / operando2;
                    System.out.println("Resultado de la división: " + resultado);
                }
            }
            default -> System.out.println("Opción inválida: " + operacion); // Control de error por si acaso
        }
    }

}
