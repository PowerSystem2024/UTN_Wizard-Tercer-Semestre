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