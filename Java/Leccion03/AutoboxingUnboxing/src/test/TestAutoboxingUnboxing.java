
package test;


public class TestAutoboxingUnboxing {
    public static void main(String[] args) {
        //Clases envolvente o Wrapper
        /*
            Clase envolvente de tipo primitivos
            int = la clase envolvente en integer
            long = la clase envolvente es Long
            double = Double
            booblean = Boolean
            byte = Byte
            char = Character
            short = Short
            
        */
        int enteroPrim = 10; //Tipo primitivo
        System.out.println("enteroPrim = " + enteroPrim);
        Integer entero = 10; //Tipo objeto con la clase integer
        System.out.println("entero = " + entero.doubleValue()); //Autoboxing
        
        int entero2 = entero; //Unboxing
        System.out.println("entero2 = " + entero2);
    }
}
