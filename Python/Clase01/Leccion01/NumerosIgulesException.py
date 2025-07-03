#Creación de clases de Exception personalizadas
class NumerosIgualesException (Exception): # Extiende de la clase
    def __init__(self, mensaje):
        self.message = mensaje