class ManejoArchivos:
    def __init__(self, nombre):
        self.nombre = nombre

    def __enter__(self):
        print('Obtenemos el recurso'.center(50, '_'))
        self.nombre = open(self.nombre, 'r', encoding='utf8') # Encapsulamos el codigo dentro del metodo
        return self.nombre

    def __exit__(self, tipo_exeption, valor_exception, traza_error):
        print('cerramos el recurso' .center(50, '-'))
        if self.nombre:
            self.nombre() # cerramos el archivo