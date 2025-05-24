
import psycopg2 as bd # Esto es para poder concectarnos a Postgre

#Manejo de transacciones con with y el manejo de recursos, primero se agregará la conexión
# y a continuación otro with. Ahora todo funcionará de manera automática. Trabajar de manera
#  automática y no de manera manual es buena práctica



conexion = bd.connect(
    user="postgres",
    password="admin",
    host="127.0.0.1",
    port="5432",
    database="test_bd"
)
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "INSERT INTO persona(nombre, apellido, email)VALUES(%s, %s, %s)"
            valores = ("Alex", "Rojas", "arojas@mail.com")
            cursor.execute(sentencia, valores)# hacemos la conexion

            sentencia = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
            valores = ("Juan Carlos", "Roldan", "jcroldan@gmail.com", 1)
            cursor.execute(sentencia, valores)


except Exception as e:
    print(f"Ocurrió un error, se hizo rollback: {e}")
finally: #siempre se ejecute al terminar el cierre de la ejecucion
    conexion.close()

print("Termina la transaccion")