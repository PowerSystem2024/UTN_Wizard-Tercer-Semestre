import psycopg2 as bd  # Esto es para poder conectarnos a PostgreSQL

# Una transacción puede contener una o más sentencias que modifican el estado de la base de datos.
# En este ejemplo, primero se realiza una operación de inserción (INSERT) y luego una de actualización (UPDATE).
# Ambas sentencias se ejecutan dentro de una misma transacción, lo que garantiza que se apliquen juntas o ninguna (atómicas).

# Establecimiento de la conexión con la base de datos PostgreSQL
conexion = bd.connect(
    user="postgres",         # Usuario de la base de datos
    password="admin",        # Contraseña del usuario
    host="127.0.0.1",        # Dirección del servidor (localhost)
    port="5432",             # Puerto por defecto de PostgreSQL
    database="test_bd"       # Nombre de la base de datos
)

try:
    # Desactivamos el autocommit para manejar la transacción de forma manual
    # Esto permite agrupar varias sentencias en una única transacción
    conexion.autocommit = False  # Esto no debería estar activado si se quiere controlar la transacción manualmente

    # Se crea un cursor para ejecutar comandos SQL
    cursor = conexion.cursor()

    # Primera sentencia: insertar un nuevo registro en la tabla persona
    sentencia = "INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)"
    valores = ("Jorge", "Prol", "jprol@mail.com")
    cursor.execute(sentencia, valores)  # Se ejecuta la sentencia de inserción

    # Segunda sentencia: actualizar un registro existente en la tabla persona
    sentencia = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
    valores = ("Juan Carlos", "Perez", "jcperez@gmail.com", 1)
    cursor.execute(sentencia, valores)  # Se ejecuta la sentencia de actualización

    # Confirmamos de manera explícita los cambios realizados en la base de datos
    conexion.commit()  # Se realiza el commit manual, lo que finaliza exitosamente la transacción
    print("Termina la transacción")

# Si ocurre un error durante cualquiera de las operaciones, se deshacen todos los cambios
except Exception as e:
    conexion.rollback()  # Rollback revierte todos los cambios hechos durante la transacción
    print(f"Ocurrió un error, se hizo rollback: {e}")

# Este bloque se ejecuta siempre al final del script
finally:  # Siempre se ejecuta al terminar la ejecución, haya o no errores
    conexion.close()
