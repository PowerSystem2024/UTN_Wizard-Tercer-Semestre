package test;

public class TestAutoboxingUnboxing {
    public static void main(String[] args) {
        // 💡 Clases envolventes (Wrappers) para tipos primitivos:
        /*
            Cada tipo primitivo en Java tiene una clase envolvente (wrapper), que permite
            trabajar con ellos como objetos. Las más comunes son:

            - int     → Integer
            - long    → Long
            - double  → Double
            - boolean → Boolean (corregido "booblean")
            - byte    → Byte
            - char    → Character
            - short   → Short

            Estas clases permiten convertir entre tipos primitivos y objetos,
            lo cual es útil en estructuras como colecciones, donde solo se permiten objetos.
        */

        int enteroPrim = 10; // Variable de tipo primitivo
        System.out.println("enteroPrim = " + enteroPrim);

        Integer entero = 10; // Autoboxing: el valor primitivo se convierte automáticamente en objeto Integer
        System.out.println("entero (como Double) = " + entero.doubleValue()); // Podemos usar métodos de la clase envolvente

        int entero2 = entero; // Unboxing: el objeto Integer se convierte automáticamente a int
        System.out.println("entero2 = " + entero2);
    }
}
