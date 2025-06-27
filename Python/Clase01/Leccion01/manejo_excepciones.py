from NumerosIgulesException import NumerosIgualesException
#CLASE 1
#Se envuelve el código en try Excepción  con la palabra reservada
#except. En una división de 10 por cero. Se muestra por pantalla el error del
#código. Si se utiliza la clase hija zerodivisionerror para realizar la misma
#función. O con excepción es una clase padre que ejecuta la misma función
#específicamente.

try:
    10/0
except Exception as e: #Genericco
    print(f"Ocurrió un error: {e}")



# Procesamiento de excepciones
resultado = None
a = "10"
b = 0
try:
    resultado = a / b # modificado
except Exception as e:
    print(f"Ocurrio un error: {e}")

print(f"El resultado es: {resultado}")
print(f"seguimos...")



#Procesar clases de exception más específicas
resultado = None
a = 7
b = 0
try:
    resultado = a / b # modificado
except TypeError as e:
    print(f"TypeError - Ocurrió un error: {type(e)}")
except ZeroDivisionError as e:
    print(f"ZeroDivisionError - Ocurrió un error: {type(e)}")
except Exception as e:
    print(f"Exception - Ocurrio un error: {type(e)}")

print(f"El resultado es: {resultado}")
print(f"seguimos...")



#Más de procedimientos de excepciones
resultado = None #Variable global
try:
    a = int(input("Digite el primer número: "))
    b = int(input("Digite el segundo número: "))
    if a == b:
        raise NumerosIgualesException("Son números iguales")
    resultado = a / b

except TypeError as e:
    print(f"TypeError - Ocurrió un error: {type(e)}")
except ZeroDivisionError as e:
    print(f"ZeroDivisionError - Ocurrió un error: {type(e)}")
except Exception as e:
    print(f"Exception - Ocurrio un error: {type(e)}")
#Bloques else y finally al manejar excepciones
else:
    print("No se arrojo ninguna excepción")
finally: #Siempre se va a ejecutar
    print("Ejecución de este bloque finally")

print(f"El resultado es: {resultado}")
print(f"seguimos...")
