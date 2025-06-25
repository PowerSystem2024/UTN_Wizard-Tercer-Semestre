import psycopg2 as bd  # Importamos la librería psycopg2 y la renombramos como 'bd' para facilitar su uso
# También podríamos usar: import psycopg2 as db (ambas formas son válidas)

from logger_base import log  # Importamos el sistema de logging personalizado desde otro módulo
import sys  # Importamos sys para poder usar sys.exit() en caso de error crítico

# Clase para gestionar la conexión a la base de datos PostgreSQL
class Conexion:
    # Datos de configuración de la conexión (atributos de clase)
    _DATABASE = 'test_bd'
    _USERNAME = 'postgres'
    _PASSWORD = 'admin'
    _DB_PORT = '5432'
    _HOST = '192.168.10.21'
    _conexion = None   # Atributo para almacenar la conexión
    _cursor = None     # Atributo para almacenar el cursor

    # Método de clase para obtener la conexión
    @classmethod
    def obtenerConexion(cls):
        if cls._conexion is None:
            try:
                # Si no hay una conexión activa, se crea una nueva
                cls._conexion = bd.connect(
                    host=cls._HOST,
                    user=cls._USERNAME,
                    password=cls._PASSWORD,
                    port=cls._DB_PORT,
                    database=cls._DATABASE
                )
                log.debug(f"Conexión exitosa: {cls._conexion}")
                return cls._conexion
            except Exception as e:
                # Si ocurre un error, se registra en el log y se termina el programa
                log.error(f"Ocurrió un error al conectar: {e}")
                sys.exit()
        else:
            # Si la conexión ya existe, se reutiliza
            return cls._conexion

    # Método de clase para obtener el cursor
    @classmethod
    def obtenerCursor(cls):
        if cls._cursor is None:
            try:
                # Si no hay un cursor activo, se obtiene desde la conexión
                cls._cursor = cls.obtenerConexion().cursor()
                log.debug(f"Cursor abierto correctamente: {cls._cursor}")
                return cls._cursor
            except Exception as e:
                # En caso de error, se registra y se termina el programa
                log.error(f"Ocurrió un error al obtener el cursor: {e}")
                sys.exit()
        else:
            # Si el cursor ya existe, se reutiliza
            return cls._cursor

# Bloque de prueba: se ejecuta solo si este archivo se corre directamente (no si se importa como módulo)
if __name__ == '__main__':
    Conexion.obtenerConexion()
    Conexion.obtenerCursor()
