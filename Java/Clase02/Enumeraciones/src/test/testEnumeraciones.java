package test;

import enumeraciones.Continentes;
import enumeraciones.Dias;

public class testEnumeraciones {
    
    public static void main(String[] args) {
        //System.out.println("Dia 1: "+Dias.LUNES);
        //indicarDiaSemana(Dias.LUNES); //las enumeraciones se tratan como dadenas
        //ahora nosse debe utilizar comillas, se accede a través de el operador de punto
        
        
        System.out.println("Continentes No. 4: "+Continentes.AMERICA);
        System.out.println("No. de paises en el 4to. continente: "
                +Continentes.AMERICA.getPaises());
        System.out.println("No. de habitantes en el 4to. continente: "
                +Continentes.AMERICA.getHabitantes());
    }
    
    
    private static void indicarDiaSemana(Dias dias){
        switch(dias){
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
                System.out.println("Sesto día de la semana ");
                break;
            case DOMINGO:
                System.out.println("Septimo dia de la semana");
                break;
            //agregar default, se ingreso otro tipo de dato que no corresponde
        }
    }
}
