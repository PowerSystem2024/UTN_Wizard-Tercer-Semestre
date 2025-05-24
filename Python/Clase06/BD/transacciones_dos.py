
import psycopg2 as bd # Esto es para poder concectarnos a Postgre

# Una transacción puede leer una o más sentencias que modifiquen el estado de la base de datos.
# Al tener una sentencia de tipo INSERT se puden agregar más, por lo que después de ejecutar
# la primer sentencia se ejecutará una más.



conexion = bd.connect(
    user="postgres",
    password="admin",
    host="127.0.0.1",
    port="5432",
    database="test_bd"
)
try:
    conexion.autocommit = False # esto no directamente no debería estar, inicia la transacción
    cursor = conexion.cursor()
    sentencia = "INSERT INTO persona(nombre, apellido, email)VALUES(%s, %s, %s)"
    valores = ("Jorge", "Prol", "jprol@mail.com")
    cursor.execute(sentencia, valores)# hacemos la conexion

    sentencia = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
    valores = ("Juan Carlos", "Perez", "jcperez@gmail.com", 1)
    cursor.execute(sentencia, valores)

    conexion.commit() # Hacemos el commit manualmente, se cierra la transacción
    print("Termina la transaccion")

except Exception as e:
    conexion.rollback()
    print(f"Ocurrió un error, se hizo rollback: {e}")
finally: #siempre se ejecute al terminar el cierre de la ejecucion
    conexion.close()