import psycopg2 as bd  # Esto es para poder conectarnos a PostgreSQL

# Manejo de transacciones: las consultas que se ejecutan dentro de una transacción pueden modificar
# el estado de la base de datos. Todas las operaciones dentro de la transacción deben ejecutarse correctamente
# para que los cambios se reflejen en la base de datos. Si alguna falla, se deshacen todas.
# Es decir, o se ejecutan todas con éxito (commit), o no se guarda ninguna (rollback).

# Establecimiento de la conexión con la base de datos
conexion = bd.connect(
    user="postgres",         # Usuario de la base de datos
    password="admin",        # Contraseña del usuario
    host="127.0.0.1",        # Dirección del servidor (localhost)
    port="5432",             # Puerto por defecto de PostgreSQL
    database="test_bd"       # Nombre de la base de datos
)

try:
    # Se podría desactivar autocommit para asegurar el control manual de la transacción
    # conexion.autocommit = False  # Esto no debería estar activado si queremos manejar commit/rollback manualmente

    # Se crea el cursor para ejecutar sentencias SQL
    cursor = conexion.cursor()

    # Sentencia SQL de inserción: se insertará un nuevo registro en la tabla persona
    sentencia = "INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)"
    valores = ("Maria", "Esparza", "mesparza@mail.com")
    cursor.execute(sentencia, valores)  # Se ejecuta la sentencia con los valores proporcionados

    # Confirmación explícita de los cambios realizados en la base de datos
    conexion.commit()  # Se hace el commit manual, finalizando correctamente la transacción
    print("Termina la transacción")

# En caso de que ocurra un error durante la ejecución, se deshacen todos los cambios realizados
except Exception as e:
    conexion.rollback()  # Revierte cualquier cambio realizado durante la transacción
    print(f"Ocurrió un error, se hizo rollback: {e}")

# Este bloque se ejecuta siempre, al final del script, para cerrar la conexión
finally:  # Siempre se ejecuta al terminar la ejecución, haya o no errores
    conexion.close()
