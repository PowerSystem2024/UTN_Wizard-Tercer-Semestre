package paquete1;

public class ClaseHija2 extends Clase2 {

    final String atributoDefault;
    public ClaseHija2(){
        super();
        this.atributoDefault = "Modificación del atributo Default";
        System.out.println("atributoDefault = " + this.atributoDefault);
        this.metodoDefault();
    }
}
