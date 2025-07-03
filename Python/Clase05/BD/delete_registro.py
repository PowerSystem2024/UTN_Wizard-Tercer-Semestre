import psycopg2 
#Eliminación de un registro
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
            sentencia = "DELETE FROM persona WHERE id_persona IN %s"
            entrada = input("Digite los números de registros a eliminar (separado por cima): ")
            valores = (entrada, ) #Es una tupla de valores
            cursor.execute(sentencia, valores) # de esta manera ejecutamos la sentecia
            registros_eliminados = cursor.rowcount
            print(f"Los registros eliminados son: {registros_eliminados}")


except Exception as e:
    print(f"Ocurrió un error: {e}")
finally: #siempre se ejecute al terminar el cierre de la ejecucion
    conexion.close()