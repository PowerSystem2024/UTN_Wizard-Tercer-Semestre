import psycopg2 # Esto es para poder concectarnos a Postgre
#Recuperación de un sólo registro, utilizando la función fetchall
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
            sentencia = "SELECT * FROM persona WHERE id_persona = %s" #Placeholder
            id_persona = input("Digite un número para el id_persona: ")
            cursor.execute(sentencia, (id_persona,)) # de esta manera ejecutamos la sentecia
            registros = cursor.fetchone() #Recuperamos todos los registros que serán una lista
            print(registros)
except Exception as e:
    print(f"Ocurrió un error: {e}")
finally: #siempre se ejecute al terminar el cierre de la ejecucion
    conexion.close()

# https://www.psycopg.org/docs/usage.html
