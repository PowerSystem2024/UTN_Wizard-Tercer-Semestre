/*
Método Main e importación de clase monitorHP, teclado HP,ratón HP y creación de objetos. 
Se unen todos los objetos a una nueva clase.
Se crea clase monitor con nuevos objetos monitor gamer, teclado gamer,ratón gamer.
*/
package mundopc;

import ar.com.system2025.mundopc.*;

public class mundoPC {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP", 13); //Improtar la clase
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
        //Creamos otros objetos de diferente marca
        Monitor monitorGamer = new Monitor("Gamer", 32); //Improtar la clase
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
        Orden orden1 = new Orden(); //Inicializamos el areglo vacio
        Orden order2 = new Orden(); // Una nueva lista para el objeto orden2
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        orden1.mostrarOrden();
        
        
        Computadora computadoraVarias = new Computadora("Computadoras de diferentes marcas", monitorHP, tecladoGamer, ratonHP); // tenemos armada otra computadora
        order2.agregarComputadora(computadoraVarias);
        
        orden1.mostrarOrden();
        order2.mostrarOrden();
        
        //Crear mas objetos de tipo computadora con todo sus elementes
        //ccompletar una lista en el objeto orden1 que llegue a los 10 elementos
        //probar de esta manera los métodos al maximo rendimiento
    }
}
