# Importación del módulo necesario para conectarse a una base de datos PostgreSQL
import psycopg2

# Conexión a la base de datos PostgreSQL con los parámetros correspondientes
conexion = psycopg2.connect(
    user="postgres",        # Usuario de la base de datos
    password="admin",       # Contraseña del usuario
    host="127.0.0.1",       # Dirección del servidor (localhost)
    port="5432",            # Puerto por defecto de PostgreSQL
    database="test_bd"      # Nombre de la base de datos
)

# Bloque try-except para manejar posibles errores durante la conexión o ejecución
try:
    # Uso del contexto 'with' para manejar automáticamente el cierre del cursor y la conexión
    with conexion:
        with conexion.cursor() as cursor:
            # Sentencia SQL con placeholder para evitar inyecciones SQL
            sentencia = "SELECT * FROM persona WHERE id_persona = %s"
            
            # Solicitud de ingreso del ID por parte del usuario
            id_persona = input("Digite un número para el id_persona: ")
            
            # Ejecución de la consulta, pasando el parámetro como una tupla
            cursor.execute(sentencia, (id_persona,))
            
            # Recuperación del primer registro que coincide con la consulta
            registros = cursor.fetchone()  # Devuelve una sola fila como tupla o None si no existe
            
            # Se imprime el resultado obtenido
            print(registros)

# Captura y muestra de cualquier excepción que ocurra durante el proceso
except Exception as e:
    print(f"Ocurrió un error: {e}")

# El bloque finally se ejecuta siempre al finalizar el script
# Se cierra la conexión a la base de datos para liberar recursos
finally:
    conexion.close()

# Documentación oficial: https://www.psycopg.org/docs/usage.html

