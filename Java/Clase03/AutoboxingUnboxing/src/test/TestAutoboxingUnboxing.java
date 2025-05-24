
package test;


public class TestAutoboxingUnboxing {
    public static void main(String[] args) {
        //Clase envolventes o Wrapper
        /*
            Clases envolventes de tipo primitivos
            int = la clase envolvente es integer
            long = la clase envolvente s long
            float = la clase envolvente es float
            double = la clase envolvente es Double
            boolean = la clase envolvente es Boolean
            byte = la clase envolvente es Byte
            char = la clase envolvente es character
            Short = la clase envolvente es Short
        */
        int enteroPrimitivo = 10; //Tipo primitivo
        System.out.println("enteroPrimitivo = " + enteroPrimitivo);
        Integer entero = 10; //Tipo Object con la clase Integer
        System.out.println("entero = " + entero.doubleValue());
        
        int entero2 = entero; //Unboxing
        System.out.println("entero2 = " + entero2);
    }
}
