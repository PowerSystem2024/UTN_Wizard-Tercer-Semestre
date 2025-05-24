import psycopg2 # Esto es para poder concectarnos a Postgre
# Dinamización del código con la utilización de un parámetro, se pasa una variable en tupla de tuplas
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
            sentencia = "SELECT * FROM persona WHERE id_persona IN %s" #Placeholder
            entrada = input("Digite los id_personas a buscar (separados por coma): ")
            llaves_primarias = (tuple(entrada.split(", ")),)
            cursor.execute(sentencia, llaves_primarias) # de esta manera ejecutamos la sentecia
            registros = cursor.fetchall() #Recuperamos todos los registros que serán una lista
            for registro in registros:
                print(registro)

except Exception as e:
    print(f"Ocurrió un error: {e}")
finally: #siempre se ejecute al terminar el cierre de la ejecucion
    conexion.close()
