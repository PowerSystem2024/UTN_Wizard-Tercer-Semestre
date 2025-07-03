
package paquete1;


public class Clase1 {
    public String atributoPublic = "Valor de atributo public";
    protected String atributoProtected = "valor atributo protected";
    
    public Clase1(){
        System.out.println("Constructor public");
    }   
    
    protected Clase1 (String atributoPublic){
            System.out.println("Constructor protected");    
    }
    
    public void metodoPublico(){
            System.out.println("Metodo publico");
    }
    protected voidd metodoProtected(){
        System.out.println("Metodo protected");
    }
    
}
