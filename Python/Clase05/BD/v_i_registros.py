# Importación del módulo necesario para conectarse a una base de datos PostgreSQL
import psycopg2  # Esto es para poder conectarnos a PostgreSQL

# Inserción de varios registros en una tabla.
# Se utilizará una estructura de datos tipo tupla de tuplas para representar múltiples filas
conexion = psycopg2.connect(
    user="postgres",         # Usuario de la base de datos
    password="admin",        # Contraseña del usuario
    host="127.0.0.1",        # Dirección del servidor (localhost)
    port="5432",             # Puerto por defecto de PostgreSQL
    database="test_bd"       # Nombre de la base de datos
)

# Manejo de errores con bloques try-except-finally
try:
    # Uso del contexto 'with' para que tanto la conexión como el cursor se gestionen automáticamente
    with conexion:
        with conexion.cursor() as cursor:
            # Sentencia SQL con placeholders (%s) para valores seguros y parametrizados
            sentencia = "INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)"
            
            # Tupla de tuplas con los registros a insertar
            valores = (
                ("Flor", "Fede", "quiti@gmail.com"),
                ("Franco", "Alonso", "mcanto@gmail.com"),
                ("Vale", "Lopez", "cuencaM@gmail.com")
            )  # Es una tupla de tuplas, donde cada subtupla representa una fila a insertar
            
            # Uso de 'executemany' para insertar múltiples registros de forma eficiente
            cursor.executemany(sentencia, valores)
            
            # No es necesario usar conexion.commit() porque el bloque 'with' lo hace automáticamente
            
            # rowcount devuelve la cantidad total de registros que se insertaron correctamente
            registros_insertados = cursor.rowcount
            print(f"Los registros insertados son: {registros_insertados}")

# Captura de excepciones: muestra un mensaje si ocurre algún error en la ejecución
except Exception as e:
    print(f"Ocurrió un error: {e}")

# Este bloque se ejecuta siempre al final, haya ocurrido o no un error
# Se cierra la conexión para liberar recursos del sistema
finally:  # Siempre se ejecuta al finalizar la ejecución
    conexion.close()
