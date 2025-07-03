class PersonaDAO:
    """
    DAO = Data Access Object (Objeto de Acceso a Datos)
    
    Las operaciones CRUD son:
        - Create: insertar nuevos datos
        - Read: leer o consultar datos existentes
        - Update: modificar datos ya guardados
        - Delete: eliminar registros de la base
    """

    # Consulta para obtener todas las personas ordenadas por su ID
    _SELECCIONAR = "SELECT * FROM persona ORDER BY id_persona"

    # Consulta para agregar una nueva persona a la base
    _INSERTAR = "INSERT INTO persona(nombre, apellido, email) VALUES (%s, %s, %s)"

    # Consulta para actualizar los datos de una persona en base a su ID
    _ACTUALIZAR = "UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s"

    # Consulta para borrar una persona según su ID
    _ELIMINAR = "DELETE FROM persona WHERE id_persona=%s"
