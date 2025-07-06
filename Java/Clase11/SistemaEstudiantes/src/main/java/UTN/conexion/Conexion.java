package UTN.conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {

    // Cambiar este valor a "mysql" o "postgresql" según lo necesites
    private static final String motorBD = "postgresql";

    public static Connection getConnection() {
        Connection conexion = null;

        // Configuración general
        String baseDatos;
        String url;
        String usuario;
        String password;
        String driver;

        if (motorBD.equalsIgnoreCase("mysql")) {
            baseDatos = "estudiantes";
            url = "jdbc:mysql://localhost:3306/" + baseDatos;
            usuario = "root";
            password = "admin";
            driver = "com.mysql.cj.jdbc.Driver";
        } else {
            baseDatos = "Estudiantes2025";
            url = "jdbc:postgresql://localhost:5433/" + baseDatos;
            usuario = "postgres";
            password = "1234";
            driver = "org.postgresql.Driver";
        }

        try {
            Class.forName(driver);
            conexion = DriverManager.getConnection(url, usuario, password);
            System.out.println("✅ Conexión establecida correctamente a " + motorBD.toUpperCase());
        } catch (ClassNotFoundException e) {
            System.out.println("❌ Driver no encontrado: " + e.getMessage());
        } catch (SQLException e) {
            System.out.println("❌ Error de SQL: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("❌ Error inesperado: " + e.getMessage());
        }

        return conexion;
    }

    public static void main(String[] args) {
        Connection conn = getConnection();

        if (conn != null) {
            try {
                conn.close();
                System.out.println("🔒 Conexión cerrada correctamente.");
            } catch (SQLException e) {
                System.out.println("⚠️ Error al cerrar la conexión: " + e.getMessage());
            }
        } else {
            System.out.println("🚫 No se pudo establecer la conexión.");
        }
    }
}
