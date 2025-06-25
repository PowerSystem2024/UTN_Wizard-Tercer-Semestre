import psycopg2 as bd  # Esto es para poder conectarnos a PostgreSQL

# Manejo de transacciones utilizando la estructura 'with', lo que permite gestionar automáticamente los recursos.
# Primero se encapsula la conexión en un bloque 'with' y dentro de este, otro 'with' para el cursor.
# Esta forma de trabajar es considerada una buena práctica porque se encarga del commit o rollback automáticamente,
# evitando la necesidad de manejarlo manualmente y reduciendo el riesgo de errores.

# Establecimiento de la conexión a la base de datos
conexion = bd.connect(
    user="postgres",         # Usuario de la base de datos
    password="admin",        # Contraseña del usuario
    host="127.0.0.1",        # Dirección del servidor (localhost)
    port="5432",             # Puerto por defecto de PostgreSQL
    database="test_bd"       # Nombre de la base de datos
)

# Manejo de excepciones ante cualquier posible error durante la ejecución de las sentencias SQL
try:
    # Bloque 'with' para manejar la transacción automáticamente.
    # Si todo sale bien, se hace commit; si hay un error, se hace rollback automáticamente.
    with conexion:
        # Bloque 'with' para manejar el cursor automáticamente (apertura y cierre)
        with conexion.cursor() as cursor:
            # Primera sentencia: inserción de un nuevo registro
            sentencia = "INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)"
            valores = ("Alex", "Rojas", "arojas@mail.com")
            cursor.execute(sentencia, valores)  # Ejecutamos la sentencia de inserción

            # Segunda sentencia: actualización de un registro existente
            sentencia = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
            valores = ("Juan Carlos", "Roldan", "jcroldan@gmail.com", 1)
            cursor.execute(sentencia, valores)  # Ejecutamos la sentencia de actualización

# Captura de excepciones y mensaje de error en caso de que falle alguna sentencia
except Exception as e:
    print(f"Ocurrió un error, se hizo rollback: {e}")

# Cierre de la conexión, siempre se ejecuta al finalizar el bloque try-except
finally:  # Siempre se ejecuta al terminar la ejecución, haya o no errores
    conexion.close()

# Mensaje final indicando que la transacción ha concluido
print("Termina la transacción")
