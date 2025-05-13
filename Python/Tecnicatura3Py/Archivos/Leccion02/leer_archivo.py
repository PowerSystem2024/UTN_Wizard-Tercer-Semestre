
archivo = open('prueba.txt', 'r', encoding='utf-8') # las letras son: r= read, a= append, w= write, x=
# print(archivo.read())
# print(archivo.read(16))
# print(archivo.read(10)) #Continuamos desde la linea anterior
# print(archivo.readline()) # solo imprime la primer linea
# print(archivo.readline()) # solo imprime la segunda linea

# vamos a iterar el archivo, cada una de las lineas
# for linea in archivo:
    # print(linea): iteramos todos los elementos del archivo
    # print(archivo.readline()[11]): accedemos al archivo como si fuera una lista
#  Anexamos informacion, copiamos a otro
archivo2= open('copia.txt','w', encoding='utf8')
archivo2.write(archivo.read())
archivo.close() #cerramos el primer archivo
archivo2.close() #cerramos el segundo archivo

print('Se ha terminado el proceso de leer y copiar archivos')