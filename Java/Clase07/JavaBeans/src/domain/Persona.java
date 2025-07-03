package domain;

import java.io.Serializable;

public class Persona implements Serializable {
    private String nombre;
    private String apellido;

    // Constructor sin argumentos (necesario para algunas operaciones como serialización o frameworks)
    public Persona() {
    }

    // Constructor que permite inicializar directamente los atributos nombre y apellido
    public Persona(String nombre, String apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Getter para obtener el nombre de la persona
    public String getNombre() {
        return nombre;
    }

    // Setter para modificar el nombre
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    // Getter para obtener el apellido
    public String getApellido() {
        return apellido;
    }

    // Setter para modificar el apellido
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    // Método que devuelve una representación en texto del objeto Persona
    @Override
    public String toString() {
        return "Persona{" + "nombre=" + nombre + ", apellido=" + apellido + '}';
    }
}
