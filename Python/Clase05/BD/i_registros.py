# Importación del módulo necesario para conectarse a una base de datos PostgreSQL
import psycopg2

# Configuración de la conexión a la base de datos PostgreSQL
# Se define un objeto de conexión con los parámetros necesarios
conexion = psycopg2.connect(
    user='postgres',            # Usuario de la base de datos
    password='admin',           # Contraseña del usuario
    host='127.0.0.1',           # Dirección del servidor de base de datos (localhost)
    port='5432',                # Puerto por defecto de PostgreSQL
    database='Test_BD',         # Nombre de la base de datos
    client_encoding='utf8'      # Codificación para soportar caracteres especiales
)

# Estructura de manejo de errores para controlar posibles fallos al interactuar con la base de datos
try:
    # Uso de bloque 'with' para que la conexión y el cursor se cierren automáticamente,
    # incluso si ocurre un error. Además, hace commit automático al final si no hubo errores.
    with conexion:
        with conexion.cursor() as cursor:
            # Definición de la sentencia SQL de inserción (INSERT)
            # Se utilizan placeholders (%s) para evitar inyecciones SQL y permitir el uso de parámetros
            sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)'
            
            # Datos que se van a insertar, definidos como una tupla
            valores = ('Flor', 'Fede', 'quiti@gmail.com')
            
            # Ejecución de la sentencia SQL con los valores proporcionados
            cursor.execute(sentencia, valores)
            
            # Se puede usar conexion.commit() para guardar cambios manualmente,
            # pero no es necesario porque el bloque 'with' lo hace automáticamente
            
            # rowcount devuelve la cantidad de registros afectados por la última sentencia ejecutada
            registros_insertados = cursor.rowcount
            
            # Se imprime la cantidad de registros que fueron insertados exitosamente
            print(f'Los registros insertados son: {registros_insertados}')

# Captura y manejo de cualquier excepción que pueda ocurrir durante la conexión o ejecución
except Exception as e:
    print(f'Ocurrió un error: {e}.')

# Bloque que se ejecuta siempre al final del proceso, haya habido error o no
# Se cierra la conexión a la base de datos para liberar recursos
finally: 
    conexion.close()