import java.util.Scanner;

public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("***** Aplicacion Calculadora ******");
        //Mostramos el munú
        System.out.println("""
                       1. Suma
                       2. Resta
                       3. Multiplicacion
                       4. Division
                       5. Salir
                       """);
        System.out.print("Operacion a realizar? ");
        var operacion = Integer.parseInt(entrada.nextLine());

        if(operacion >= 1 && operacion <= 4){
            System.out.print("Digite el valor para el operando1:");
            var operador1 = Integer.parseInt(entrada.nextLine());
            System.out.print("Digite el valor para el operando2:");
            var operador2 = Integer.parseInt(entrada.nextLine());

            int resultado;
            switch (operacion){
                case 1 -> { //Suma
                    resultado = operador1 + operador2;
                    System.out.println("Resultado de la suma: "+resultado);
                }
                case 2 -> { // Resta
                    resultado = operador1 - operador2;
                    System.out.println("Resultado de la resta: "+resultado);
                }
                case 3 -> { //Multiplicaion
                    resultado = operador1 * operador2;
                    System.out.println("Resultado de la multiplicacion: "+resultado);
                }
                case 4 -> { //Division
                    resultado = operador1 / operador2;
                    System.out.println("Resultado de la division: "+resultado);
                }
                default -> System.out.println("Opcion erronea: "+operacion);
            }//Fin switch
        } // Fin del if
        else if (operacion == 5) {
            System.out.println("Hasta pronto...");
        }
        else {
            System.out.println("Opcion Erronea: "+operacion);
        }
    }// Fin del main
}// Fin clase
