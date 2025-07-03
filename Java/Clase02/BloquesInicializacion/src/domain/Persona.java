package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersona;
    
    static{ //Bloque de inicialización estático
        System.out.println("Ejecucion del bloque estático");
        ++Persona.contadorPersona;
        //idPersona = 10; No es un atributo estatico, por esto tenemos un error
    }
    
    { //Bloque de inicialización NO estático (contexto dinamico)
        System.out.println("Ejecución del bloque NO estático");
        this.idPersona = Persona.contadorPersona++; //incrementamos el atributo
    }
    
    //Los bloques de inicialización se ejecutan antes del constructor
    
    public Persona(){ //constructor
        System.out.println("Ejecucion del constructor");
    }
    
    public int getIdPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
    
}
