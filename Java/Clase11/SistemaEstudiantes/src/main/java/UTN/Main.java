package UTN;

import UTN.conexion.Conexion;
import java.sql.Connection;
import java.sql.SQLException;

public class Main {
    public static void main(String[] args) {
        Connection conexion = Conexion.getConnection();

        if (conexion != null) {
            System.out.println("✅ Conexión exitosa: " + conexion);
            try {
                conexion.close();
                System.out.println("🔒 Conexión cerrada correctamente.");
            } catch (SQLException e) {
                System.out.println("⚠️ Error al cerrar conexión: " + e.getMessage());
            }
        } else {
            System.out.println("🚫 Error al conectarse a la base de datos.");
        }
    }
}
