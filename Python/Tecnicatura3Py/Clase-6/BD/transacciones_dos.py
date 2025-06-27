import psycopg2 as bd  # Se importa la librería necesaria para trabajar con bases de datos PostgreSQL

# Este bloque prepara una transacción que agrupa varias operaciones sobre la base de datos.
# Si todas las consultas se ejecutan sin errores, se confirman los cambios; si no, se cancelan.

conexion = bd.connect(
    user="postgres",
    password="admin",
    host="127.0.0.1",
    port="5432",
    database="test_bd"
)

try:
    conexion.autocommit = False  # Se desactiva el autocommit para tener control total sobre la transacción
    cursor = conexion.cursor()

    # Primera consulta: se inserta un nuevo registro en la tabla persona
    sentencia = "INSERT INTO persona(nombre, apellido, email) VALUES(%s, %s, %s)"
    valores = ("Jorge", "Prol", "jprol@mail.com")
    cursor.execute(sentencia, valores)

    # Segunda consulta: se actualiza un registro existente (id_persona = 1)
    sentencia = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s" 
    valores = ("Juan Carlos", "Perez", "jcperez@gmail.com", 1)
    cursor.execute(sentencia, valores)

    conexion.commit()  # Si todo sale bien, se confirman los cambios en la base
    print("La transacción se completó correctamente")

except Exception as e:
    conexion.rollback()  # Si ocurre un error, se revierte todo lo que se hizo dentro de la transacción
    print(f"Algo salió mal, se cancelaron los cambios: {e}")

finally:
    conexion.close()  # Esta línea siempre se ejecuta, para liberar la conexión con la base
