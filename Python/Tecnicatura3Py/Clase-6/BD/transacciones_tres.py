import psycopg2 as bd  # Se importa el módulo para interactuar con PostgreSQL desde Python

# Se utiliza el contexto `with` para manejar la conexión y el cursor de forma segura y automática.
# Esto evita tener que cerrar manualmente recursos y también maneja commits y rollbacks por defecto.

conexion = bd.connect(
    user="postgres",
    password="admin",
    host="127.0.0.1",
    port="5432",
    database="test_bd"
)

try:
    with conexion:  # La conexión queda abierta durante este bloque, se hace commit automático si no hay errores
        with conexion.cursor() as cursor:  # Se abre el cursor solo durante el tiempo necesario

            # Se inserta un nuevo registro en la tabla persona
            sentencia = "INSERT INTO persona(nombre, apellido, email) VALUES(%s, %s, %s)"
            valores = ("Alex", "Rojas", "arojas@mail.com")
            cursor.execute(sentencia, valores)

            # Luego se actualiza otro registro existente usando su ID
            sentencia = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"
            valores = ("Juan Carlos", "Roldan", "jcroldan@gmail.com", 1)
            cursor.execute(sentencia, valores)

except Exception as e:
    # En caso de que algo falle, se revierte todo automáticamente gracias al `with`
    print(f"Ocurrió un problema durante la operación: {e}")

finally:
    conexion.close()  # Se cierra la conexión, pase lo que pase

print("Transacción finalizada")
