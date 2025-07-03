#Introducción a lo que es el manejo de archivos
#Especificar el juego de caracteres de un archivo de texto "encoding"
#Declaramos una variable

try:
    archivo = open("prueba.txt", "w", encoding="utf8") #La w es de write que significa escribir
    archivo.write("Programamos con diferentes tipos de archivos, ahora en txt.\n")
    archivo.write("Los acentos son importantes para las palabras\n")
    archivo.write("Como por ejemplo: acción, ejecución y producción\n")
    archivo.write("las letras son:\nr read leer, \na append anexa, \nw write escribe, \nx crea una archivo")
    archivo.write("\nt esto es para texto o text, \nb archivos binarios, \nw+ lee y escribe son iguales r+\n")
    archivo.write("saludos a todos los alumnos de la tecnicatura\n")
    archivo.write("Con esto terminamos")
except Exception as e:
    print(e)
finally: # siempre se ejecuta
    archivo.close() #con esto se debe cerrar el archivo
#archivo.write("Todo quedo perfecto"): este es  un error "el archivo esta cerrado"