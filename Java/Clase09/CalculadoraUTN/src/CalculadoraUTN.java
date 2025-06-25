//Importamos la clase Scanner para leer datos desde el teclado
import java.util.Scanner;

//clase principal de la calculadora
public class CalculadoraUTN {

    //Métod principal donde comienza la ejecución de la de la calculadora
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in); //Creamos el objeto Scanner para leer la entrada del usuario
        while (true) { //Ciclo infinito que solo se rompe cuando el usuario elige salir con la opción 5
            System.out.println("**** Aplicacion Calculadora ****");
            mostrarMenu(); //Mostramos el menú de las opciones
            try {
                var operacion = Integer.parseInt(entrada.nextLine()); //Leemos la opcion elegida por el usuario
                if (operacion >= 1 && operacion <= 4) { //verificamos si la opcion esta entre el 1 y el 4
                    ejecutarOperacion(operacion, entrada); //Llamamos al métod que ejecuta la operación
                }
                else if (operacion == 5) { //Si la opción es 5, el usuario quiere salir
                    System.out.println("Hasta pronto");
                    break; //Rompe el ciclo y sale
                } else { //si la opción no está entre el 1 y 5, se considera inválida
                    System.out.println("Opcion erronea: " + operacion);
                }
                System.out.println(); //Impimimos un salto de linea
            } catch (Exception e){ //Fin try, comienzo del catch
                System.out.println("Ocurrió un error: " + e.getMessage()); //Capturamos cualquier error, ej si el usuario escribe un texto
                System.out.println(); //Imprimimos un salto de liena
            }//Fin del catch
        }//Fin del while
    } //Fin del métod main

    //Métod que muestra el menú
    private static void mostrarMenu(){
        //Mostramos el menú
        System.out.println("""
                1. Sumar
                2. Resta
                3. Multiplicacion
                4. Division
                5. Salir
                """);
        System.out.print("Operacion a realizar? ");
    }//Fin métod mostrarMenu

    //Métod que ejecuta la operación matemática elegida
    private static void ejecutarOperacion(int operacion, Scanner entrada){
        System.out.print("Ingrese el valor para el operando1: "); //pedimos el primer número al usuario
        var operando1 = Double.parseDouble(entrada.nextLine());
        System.out.print("Ingrese el valor para el operando2: "); //pedimos el segundo número
        var operando2 = Double.parseDouble(entrada.nextLine());
        Double resultado; //Declaramos una variable para almacenar el resutlado

        switch (operacion) { //Usamos switch para ejecutar la operación elegida
            case 1 -> { //Suma
                resultado = operando1 + operando2;
                System.out.println("Resultado de la suma: " + resultado);
            }
            case 2 -> { // Resta
                resultado = operando1 - operando2;
                System.out.println("Resultado de la resta: " + resultado);
            }
            case 3 -> { //Multiplicación
                resultado = operando1 * operando2;
                System.out.println("Resutlado de la multiplicacion: " + resultado);
            }
            case 4 -> { //División
                //Validamos que el divisor no sea cero
                if (operando2 == 0){
                    System.out.println("Error, no se puede dividir por cero. ");
                }else {
                    resultado = operando1 / operando2;
                    System.out.println("Resultado de la división: " + resultado);
                }
            }
            default -> System.out.println("Opcion erronea" + operacion);
        }//Fin switch
    }//Fin métod ejecutarOperacion

}// Fin de la clase CalculadoraUTN

