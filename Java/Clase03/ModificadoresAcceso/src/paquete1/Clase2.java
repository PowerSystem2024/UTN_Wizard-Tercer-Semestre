
package paquete1;


class Clase2 { //clase defoult
    String atributoDefault = "Valor del atributo default";
    
    //Clase2(){ //Constructor vacio
    //    System.out.println("Constructor Default");   
    //}
    
    public Clase2(){
        super();
        this.atributoDefault = "Modificado del atributo default";
        System.out.println("atributoDefault = " + this.atributoDefault);
        this.metodoDefault();
    }
    
    void metodoDefault() {//método
        System.out.println("Método Default");
    }
}
