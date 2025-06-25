
package paquete2;


public class Clase4 {
    private String atributoPrivate = "atributo Privado";
    
    //constructor
    private Clase4(){
        System.out.println("Constructor privado");
    }
    
    //Creamos un construcotr public para poder crear objetod
    public Clase4(String argumento){ //Aqui se llama al construcotr vacio
        this();
        System.out.println("Constructor publico");
    }
    
    //Método private
    private void metodoPrivado(){
        System.out.println("Método privado");
    }

    public String getAtributoPrivate() {
        return atributoPrivate;
    }

    public void setAtributoPrivate(String atributoPrivate) {
        this.atributoPrivate = atributoPrivate;
    }
    
    
}
