
package domain;


public class Persona {
    private final int idPersona;
    private static int contadorPersona;
    
    static{//Bloque inicializacion estatico
        System.out.println("Ejecucion del bloque estatico");
        ++Persona.contadorPersona;
        //idPersona=10; No es estatico un atributo, por esto tenemos un error
    }
    
    {//Boque de inicializacion No estatico (contexto dinamico)
        System.out.println("Ejecucion del bloque No estatico");
        this.idPersona = Persona.contadorPersona++; // incrementamos el atributo
                
    }
    
    //Los bloques de inicializacion se ejecuta antes del contructor
    
    public Persona(){
        System.out.println("Ejecucion del contructor");
    }
    
    public int getIdPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
    
}
