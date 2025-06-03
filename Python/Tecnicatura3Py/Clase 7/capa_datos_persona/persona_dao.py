from capa_datos_persona.persona import Persona
from capa_datos_persona.conexion import Conexion
from logger_base import log
class PersonaDao:
    """
    DAO significa: Data Access Object
    CRUD significa:
                    Create  ->Insertar
                    Read    -> Seleccionar
                    Update  -> Actualizar
                    Delate  -> Eliminar
    """
    _SELECCIONAR = 'SELECT * FROM persona ORDEN BY id_persona'
    _INSERTAR = 'INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)'
    _ACTUALIZAR = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
    _ELIMINAR = 'DELATE FROM persona WHERE id_persona=%s'

    # Definimos los metodos de clase
    @classmethod
    def seleccionar(cls):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                cursor.execute(cls._SELECCIONAR)
                registros = cursor.fetchall()
                persona = [] # creamos una lista
                for registro in registros:
                    persona = Persona(registro[0], registro[1], registro[2], registro[3])
                    persona.append(persona)
                return persona
    @classmethod
    def insertar(cls, persona):
        with Conexion.obtenerCursor() as cursor:
            valores = (persona.nombre, persona.apellido, persona.email)
            cursor.execute(cls._INSERTAR, valores)
            log.debug(f'Persona Insertada: {persona}')
            return cursor.rewcount
    @classmethod
    def actualizar(cls, persona):
        with Conexion.obtenerConexion():
            with Conexion.obtenerCursor() as cursor:
                valores = (persona.nombre, persona. apellido, persona.email, persona.id_persona)
                cursor.execute(cls._ACTUALIZAR, valores)
                log.debug(f'Persona actualizada: {persona}')
                return cursor.rewcount

if __name__ == '__main__' :
    # Actualizar un registro
    persona1 = Persona(1, 'Juan jose', 'Pena', 'jasdiausd@mail.com')
    personas_actualizas = PersonaDAO.actualizar(persona1)
    log.debug(f'Personas actulizadas: {peronas_actualizadas}')


    # Insertar un registro
    #persona1 = Persona(nombre='Pedro', apellido='Romero', email='promereoasd@mail.com')
    #personas_insertadas = PersonaDAO.insertar(persona1)
    #log.debug(f'Persona insertadas: {personas_insertadas}')
    # Seleccionar objetos
    personas = PersonaDAO.seleccionar()
    for persona in personas:
        log.debug(persona)