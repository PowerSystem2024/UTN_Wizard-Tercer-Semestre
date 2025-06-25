# Importación del módulo necesario para conectarse a una base de datos PostgreSQL
import psycopg2  # Esto es para poder conectarnos a PostgreSQL

# Dinamización del código: se permite buscar múltiples registros a partir de una lista de IDs ingresada por el usuario
# Se utiliza un parámetro dentro de una tupla para enviar los valores de forma segura
conexion = psycopg2.connect(
    user="postgres",         # Usuario de la base de datos
    password="admin",        # Contraseña del usuario
    host="127.0.0.1",        # Dirección del servidor (localhost)
    port="5432",             # Puerto por defecto de PostgreSQL
    database="test_bd"       # Nombre de la base de datos
)

try:
    # Uso de 'with' para que tanto la conexión como el cursor se gestionen automáticamente
    with conexion:
        with conexion.cursor() as cursor:
            # Sentencia SQL que selecciona todos los registros cuyo ID esté en la lista proporcionada
            # Se utiliza el operador IN con un placeholder
            sentencia = "SELECT * FROM persona WHERE id_persona IN %s"
            
            # Entrada del usuario: IDs separados por coma y espacio (ejemplo: 1, 2, 3)
            entrada = input("Digite los id_personas a buscar (separados por coma y espacio): ")
            
            # Conversión de la cadena ingresada en una tupla de strings (ej: ('1', '2', '3'))
            # El valor final debe ser una tupla que contenga otra tupla (por la sintaxis del IN %s)
            llaves_primarias = (tuple(entrada.split(", ")),)
            
            # Ejecución de la sentencia SQL con los parámetros indicados
            cursor.execute(sentencia, llaves_primarias)
            
            # Recuperación de todos los registros encontrados
            registros = cursor.fetchall()  # Devuelve una lista de tuplas
            
            # Iteración e impresión de cada registro encontrado
            for registro in registros:
                print(registro)

# Captura de errores durante la ejecución
except Exception as e:
    print(f"Ocurrió un error: {e}")

# Cierre de la conexión, se ejecuta siempre al final del script
finally:  # Siempre se ejecuta al terminar la ejecución, haya o no errores
    conexion.close()
