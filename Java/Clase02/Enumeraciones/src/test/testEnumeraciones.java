package test;

import enumeraciones.Continentes;
import enumeraciones.Dias;

public class testEnumeraciones {

    public static void main(String[] args) {
        // Ejemplo de uso de enumeraciones: Días de la semana
        // System.out.println("Dia 1: " + Dias.LUNES);
        // indicarDiaSemana(Dias.LUNES); 
        // Las enumeraciones se tratan como constantes, por eso no se usan comillas,
        // se accede mediante el operador punto (.)

        // Uso de enumeración Continentes
        System.out.println("Continente No. 4: " + Continentes.AMERICA);
        System.out.println("Cantidad de países en América: " + Continentes.AMERICA.getPaises());
        System.out.println("Cantidad de habitantes en América: " + Continentes.AMERICA.getHabitantes());
    }

    // Método auxiliar para mostrar un mensaje según el día recibido
    private static void indicarDiaSemana(Dias dias) {
        switch (dias) {
            case LUNES:
                System.out.println("Primer día de la semana");
                break;
            case MARTES:
                System.out.println("Segundo día de la semana");
                break;
            case MIERCOLES:
                System.out.println("Tercer día de la semana");
                break;
            case JUEVES:
                System.out.println("Cuarto día de la semana");
                break;
            case VIERNES:
                System.out.println("Quinto día de la semana");
                break;
            case SABADO:
                System.out.println("Sexto día de la semana"); // corregido "sesto"
                break;
            case DOMINGO:
                System.out.println("Séptimo día de la semana"); // corregido "septimo dia"
                break;
            default:
                System.out.println("Día no reconocido"); // sugeren
