from ManejoArchivos import ManejoArchivos

# 💡 USO DE WITH PARA MANEJO DE ARCHIVOS
# ======================================

# En lugar de usar try-finally para abrir/cerrar archivos manualmente,
# usamos el bloque `with` que lo hace todo por nosotros automáticamente.

# Esto se logra porque la clase `ManejoArchivos` implementa dos métodos especiales:
# - __enter__: se ejecuta al entrar al bloque `with` (abre el archivo)
# - __exit__: se ejecuta al salir del bloque `with` (cierra el archivo)

# En este caso, usamos una clase personalizada (ManejoArchivos) para demostrar cómo se maneja
# el contexto de forma explícita, pero también podríamos hacerlo con `open()` directamente.

with ManejoArchivos('prueba.txt') as archivo:
    print(archivo.read())  # Mostramos el contenido del archivo
