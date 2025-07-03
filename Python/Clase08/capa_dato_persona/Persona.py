from logger_base import log  # Importamos el sistema de registro personalizado para el control de logs

# Definimos la clase Persona con atributos privados y métodos para acceder y modificar sus datos.
# Se implementa un constructor, el método especial __str__ para imprimir de forma legible,
# y propiedades con decoradores para manejar el acceso a los atributos.

class Persona:
    def __init__(self, id_persona=None, nombre=None, apellido=None, email=None):
        # Inicializamos los atributos del objeto. Todos los parámetros son opcionales.
        self._id_persona = id_persona
        self._nombre = nombre
        self._apellido = apellido
        self._email = email

    def __str__(self):
        # Devuelve una cadena con la información del objeto para facilitar su lectura.
        return f"""
        Id Persona: {self._id_persona},
        Nombre: {self._nombre},
        Apellido: {self._apellido},
        Email: {self._email}
    """

    # Accesores (getters) y modificadores (setters) definidos mediante @property
    # Esto permite un acceso seguro y controlado a los atributos de la clase.

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

# Bloque de prueba: se ejecuta solo si el archivo es el principal
if __name__ == "__main__":
    # Creamos una instancia con todos los datos disponibles
    persona1 = Persona(1, "Juan", "Perez", "jperez@gmail.com")
    log.debug(persona1)  # Mostramos la información en el log

    # Otra instancia, esta vez sin especificar el ID
    persona2 = Persona(nombre="Jose", apellido="Lepez", email="ljose@gmail.com")
    log.debug(persona2)

    # Ejemplo de objeto creado solo con el identificador
    persona1 = Persona(id_persona=1)
    log.debug(persona1)
