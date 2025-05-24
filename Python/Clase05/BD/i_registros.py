import psycopg2 # Esto es para poder concectarnos a Postgre

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
            sentencia = "INSERT INTO persona (nombre, apellido, email)VALUES (%s, %s, %s)"
            valores = ("Carlos", "Lara", "clara@mail.com") # Es una tupla
            cursor.execute(sentencia, valores) # de esta manera ejecutamos la sentecia
            # conexion.commit() Esto se utiliza para guardar los cambios en la base de datos
            registros_insertados = cursor.rowcount
            print(f"Los registros insertados son: {registros_insertados}")


except Exception as e:
    print(f"Ocurrió un error: {e}")
finally: #siempre se ejecute al terminar el cierre de la ejecucion
    conexion.close()