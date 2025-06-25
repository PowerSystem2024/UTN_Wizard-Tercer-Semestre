
package domain;


public class Gerente extends Empleado{
    //atributo
    private String departamento;
    
    //Constructor
    public Gerente(String nombre, double sueldo, String departamento){
        super(nombre, sueldo); //Llamamos al constructor de la clase padre
        this.departamento = departamento;
    }
    
    //Sobreescribimos el método
    @Override
    public String obtenerDetalles(){
        return super.obtenerDetalles()+", Departemento: "+this.departamento;
    }
}
