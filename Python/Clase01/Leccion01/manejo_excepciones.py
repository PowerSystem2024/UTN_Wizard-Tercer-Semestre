from NumerosIgualesException import NumerosIgualesException

# 🌟 MANEJO DE EXCEPCIONES EN PYTHON

# ============================
# 💥 Ejemplo 1: Excepción genérica
# ============================
# Intentamos dividir 10 entre 0 (lo cual no es válido).
# Se captura cualquier tipo de excepción con la clase base 'Exception'.
try:
    10 / 0
except Exception as e:  # Captura general (no específica)
    print(f"Ocurrió un error: {e}")

# ============================
# 💥 Ejemplo 2: Error al dividir y usar tipos incorrectos
# ============================
resultado = None
a = "10"  # Es una cadena
b = 0
try:
    resultado = a / b  # Error: no se puede dividir string entre entero
except Exception as e:
    print(f"Ocurrió un error: {e}")

print(f"El resultado es: {resultado}")
print("Seguimos con el programa...\n")

# ============================
# 💥 Ejemplo 3: Excepciones específicas
# ============================
# Se maneja cada tipo de error por separado para mayor precisión
resultado = None
a = 7
b = 0
try:
    resultado = a / b
except TypeError as e:
    print(f"TypeError - Ocurrió un error: {type(e)}")
except ZeroDivisionError as e:
    print(f"ZeroDivisionError - Ocurrió un error: {type(e)}")
except Exception as e:
    print(f"Exception - Otro error: {type(e)}")

print(f"El resultado es: {resultado}")
print("Seguimos con el programa...\n")

# ============================
# 💥 Ejemplo 4: Entrada por teclado + excepción personalizada
# ============================
# Este bloque incluye:
# - `raise` para lanzar un error manualmente si los números ingresados son iguales
# - `else` para ejecutar solo si no hubo error
# - `finally` que se ejecuta siempre
resultado = None
try:
    a = int(input("Digite el primer número: "))
    b = int(input("Digite el segundo número: "))
    
    if a == b:
        raise NumerosIgualesException("🚫 Los números ingresados son iguales")
    
    resultado = a / b

except TypeError as e:
    print(f"❌ TypeError - Tipo de dato inválido: {type(e)}")
except ZeroDivisionError as e:
    print(f"❌ ZeroDivisionError - División entre cero: {type(e)}")
except NumerosIgualesException as e:
    print(f"❌ NumerosIgualesException - {e}")
except Exception as e:
    print(f"❌ Error desconocido: {type(e)}")

else:
    print("✅ No se arrojó ninguna excepción")

finally:
    print("📌 Bloque finally: se ejecuta siempre, haya error o no")

print(f"Resultado final: {resultado}")
print("Programa terminado correctamente ✅")
