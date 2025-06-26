from logger_base import log  # Se importa el sistema de logging personalizado

# Se define la clase Persona con atributos privados y sus respectivos métodos de acceso (getters y setters)
# Se incluye el método constructor (__init__), el método __str__ para representar la instancia como string
# y decoradores @property para un acceso controlado a los atributos.

class Persona:
    def __init__(self, id_persona=None, nombre=None, apellido=None, email=None):
        # Constructor que inicializa los atributos de la persona (se permiten valores opcionales)
        self._id_persona = id_persona
        self._nombre = nombre
        self._apellido = apellido
        self._email = email

    def __str__(self):
        # Método que retorna una representación en string del objeto Persona
        return f"""
        Id Persona: {self._id_persona},
        Nombre: {self._nombre},
        Apellido: {self._apellido},
        Email: {self._email}
    """

    # Métodos Getters y Setters usando decoradores @property
    # Permiten acceder y modificar los atributos de forma controlada

    @property
    def id_persona(self):
        return self._id_persona

    @id_persona.setter
    def id_persona(self, id_persona):
        self._id_persona = id_persona

    @property
    def nombre(self):
        return self._nombre

    @nombre.setter
    def nombre(self, nombre):
        self._nombre = nombre

    @property
    def apellido(self):
        return self._apellido

    @apellido.setter
    def apellido(self, apellido):
        self._apellido = apellido

    @property
    def email(self):
        return self._email

    @email.setter
    def email(self, email):
        self._email = email

# Bloque de prueba: solo se ejecuta si el archivo se corre directamente
if __name__ == "__main__":
    # Instancia completa con todos los atributos
    persona1 = Persona(1, "Juan", "Perez", "jperez@gmail.com")
    log.debug(persona1)  # Se muestra en el log la información de persona1

    # Instancia parcial (sin ID)
    persona2 = Persona(nombre="Jose", apellido="Lepez", email="ljose@gmail.com")
    log.debug(persona2)

    # Instancia solo con ID
    persona1 = Persona(id_persona=1)
    log.debug(persona1)
