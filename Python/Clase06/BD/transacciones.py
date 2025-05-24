import psycopg2 as bd # Esto es para poder concectarnos a Postgre

#Manejo de transacciones, las consultas modifican el estado de la base de datos.
# Dentro de la transacción se ejecutan todos los querys de manera correcta o ninguno de
# ellos se guarda en la base de datos, si todos los querys se ejecutan correctamente
# entonces se hace commits de la transacción


conexion = bd.connect(
    user="postgres",
    password="admin",
    host="127.0.0.1",
    port="5432",
    database="test_bd"
)
try:
    #conexion.autocommit = False # esto no directamente no debería estar
    cursor = conexion.cursor()
    sentencia = "INSERT INTO persona(nombre, apellido, email)VALUES(%s, %s, %s)"
    valores = ("Maria", "Esparza", "mesparza@mail.com")
    cursor.execute(sentencia, valores)# hacemos la conexion
    conexion.commit() # Hacemos el commit manualmente
    print("Termina la transaccion")

except Exception as e:
    conexion.rollback()
    print(f"Ocurrió un error, se hizo rollback: {e}")
finally: #siempre se ejecute al terminar el cierre de la ejecucion
    conexion.close()