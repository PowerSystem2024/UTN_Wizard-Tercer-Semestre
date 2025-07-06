package src;

public class Persona {
    // Atributos
    private int id; // ID único de la persona
    private String nombre;
    private String tel;
    private String email;

    // Atributo estático para autoincrementar el ID
    private static int numeroPersonas = 0;

    // Constructor vacío
    public Persona() {
        this.id = ++Persona.numeroPersonas;
    }

    // Constructor con parámetros
    public Persona(String nombre, String tel, String email) {
        this(); // Llama al constructor vacío para asignar ID
        this.nombre = nombre;
        this.tel = tel;
        this.email = email;
    }

    // Getters y setters
    public int getId() {
        return id;
    }

    public void setId(int id) { // opcional
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // Método estático para obtener el número total de personas creadas
    public static int getNumeroPersonas() {
        return numeroPersonas;
    }

    // Representación textual del objeto Persona
    @Override
    public String toString() {
        return "Persona{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", tel='" + tel + '\'' +
                ", email='" + email + '\'' +
                '}';
    }

    // Método de prueba
    public static void main(String[] args) {
        Persona persona1 = new Persona("Juan Pérez", "123456789", "jperez@gmail.com");
        System.out.println(persona1);
    }
}
