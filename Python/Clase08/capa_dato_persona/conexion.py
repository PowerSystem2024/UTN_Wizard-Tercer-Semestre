import psycopg2 as bd  # Traemos la librería para conectarnos a PostgreSQL y la llamamos 'bd' por comodidad
# También podrías usar 'db' o cualquier otro alias, es cuestión de gusto

from logger_base import log  # Importamos nuestro sistema de logs desde otro archivo
import sys  # Nos permite cerrar el programa si algo sale muy mal

# Clase encargada de manejar la conexión con la base de datos
class Conexion:
    # Datos necesarios para conectarnos (como si fuera la "configuración")
    _DATABASE = 'test_bd'
    _USERNAME = 'postgres'
    _PASSWORD = 'admin'
    _DB_PORT = '5432'
    _HOST = '127.0.0.1'
    _conexion = None   # Acá vamos a guardar la conexión una vez que se cree
    _cursor = None     # Lo mismo, pero para el cursor

    # Este método nos da una conexión a la base (o la misma si ya estaba creada)
    @classmethod
    def obtenerConexion(cls):
        if cls._conexion is None:
            try:
                # Si no hay conexión todavía, la creamos
                cls._conexion = bd.connect(
                    host=cls._HOST,
                    user=cls._USERNAME,
                    password=cls._PASSWORD,
                    port=cls._DB_PORT,
                    database=cls._DATABASE
                )
                log.debug(f"Conexión creada con éxito: {cls._conexion}")
                return cls._conexion
            except Exception as e:
                # Si algo falla, lo mostramos y cerramos el programa
                log.error(f"Error al conectar a la base: {e}")
                sys.exit()
        else:
            # Si ya había una conexión, la devolvemos
            return cls._conexion

    # Este método devuelve un cursor para ejecutar consultas SQL
    @classmethod
    def obtenerCursor(cls):
        if cls._cursor is None:
            try:
                # Si todavía no hay cursor, lo sacamos de la conexión
                cls._cursor = cls.obtenerConexion().cursor()
                log.debug(f"Cursor creado correctamente: {cls._cursor}")
                return cls._cursor
            except Exception as e:
                log.error(f"No se pudo obtener el cursor: {e}")
                sys.exit()
        else:
            # Si ya teníamos uno, lo usamos de nuevo
            return cls._cursor

# Si este archivo se ejecuta directamente, probamos si la conexión y el cursor funcionan
if __name__ == '__main__':
    Conexion.obtenerConexion()
    Conexion.obtenerCursor()
