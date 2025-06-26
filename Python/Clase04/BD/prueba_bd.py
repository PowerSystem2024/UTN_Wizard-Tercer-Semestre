import psycopg2 # Esto es para poder concectarnos a Postgre

conexion = psycopg2.connect(
    user="postgres",
    password="admin",
    host="127.0.0.1",
    port="5432",
    database="test_bd"
)
print("Conexion exitosa a la base de datos")
print(conexion)

cursor = conexion.cursor()

sentencia = "SELECT * FROM persona"
cursor.execute(sentencia) # de esta manera ejecutamos la sentecia
registros = cursor.fetchall() #Recuperamos todos los registros que serán una lista
if registros:
    print(f"Persona encontrada: {registros}")
else:
    print("No se encontró la persona con el id proporcionado.")
print(registros)

cursor.close()
conexion.close()
print("Conexión cerrada")

