import psycopg2 
#Actualización de registro, en esta clase sólo se actualizará un solo registro
conexion = psycopg2.connect(
    user="postgres",
    password="admin",
    host="127.0.0.1",
    port="5432",
    database="test_bd"
)
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
            valores = ("Juan Carlos", "Roldan", "rcarlos@mail.com", 1) # Es una tupla
            cursor.execute(sentencia, valores) # de esta manera ejecutamos la sentecia
            registros_actualizados = cursor.rowcount
            print(f"Los registros actualizados son: {registros_actualizados}")


except Exception as e:
    print(f"Ocurrió un error: {e}")
finally: #siempre se ejecute al terminar el cierre de la ejecucion
    conexion.close()

