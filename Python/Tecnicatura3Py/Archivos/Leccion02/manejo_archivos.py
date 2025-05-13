# Declaramos una variable
try:
    archivo = open('prueba.txt', 'w', encoding='utf-8') # La w es de write que sisgnifica escribir
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n') # \n es para salto de linea
    archivo.write('Con esto terminamos')
    archivo.write('como por ejemplo: acción, ejecucíon y producción\n')
    archivo.write('las letras son:\n r= read leer, \n a= append anexa,\n w= write escribe, \n x= crea un archivo')
    archivo.write('\n t= esto es para texto, \n b= tipo archivos binario, \n w+= leer y escribe, \n r+= es igual al w+ \n')
    archivo.write('Saludis a todos los alumnos de la tercnicatura\n')
    archivo.write('Con esto terminamos')

except Exception as e:
    print(e)
finally: # siempre se ejecuta
    archivo.close() # Con esto se debe cerrar el archivo
# archivo.write('Todo quedo perfecto')  // este es un error porque el archivo esta cerrado