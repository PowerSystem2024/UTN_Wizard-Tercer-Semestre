import psycopg2 as bd  # Se importa el módulo para conectar con la base de datos PostgreSQL

# En este bloque se trabaja con transacciones: o se ejecutan todos los cambios correctamente,
# o no se guarda nada. Así se asegura la integridad de los datos en la base.

conexion = bd.connect(
    user="postgres",
    password="admin",
    host="127.0.0.1",
    port="5432",
    database="test_bd"
)

try:
    # conexion.autocommit = False  # Esto se podría usar, pero acá preferimos controlar el commit manualmente
    cursor = conexion.cursor()
    sentencia = "INSERT INTO persona(nombre, apellido, email) VALUES(%s, %s, %s)"
    valores = ("Maria", "Esparza", "mesparza@mail.com")
    cursor.execute(sentencia, valores)  # Se ejecuta la sentencia SQL con los valores dados
    conexion.commit()  # Confirmamos los cambios realizados en la base
    print("Transacción finalizada con éxito")

except Exception as e:
    conexion.rollback()  # Si algo falla, se revierte todo lo hecho en esta transacción
    print(f"Hubo un problema, se revirtió la transacción: {e}")

finally:
    conexion.close()  # Esta línea se asegura de cerrar la conexión pase lo que pase
