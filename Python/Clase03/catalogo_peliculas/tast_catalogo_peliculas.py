from catalogo_peliculas.dominio.Pelicula import Pelicula
from catalogo_peliculas.servicio.CatalogoPeliculas import CatalogoPeliculas


#Función que muestra el menú principal
def mostrar_menu():
    print("\nCatálogo de peliculas")
    print("1) Agregar película")
    print("2) Lista de películas")
    print("3) Eliminar archivo de peliculas")
    print("4) Salir")


#Logica del menu
def ejecutar():
    opcion = 0
    while opcion != 4:
        mostrar_menu()
        try:
            opcion = int(input("Elige una opcion: "))
        except ValueError:
            print("Por favor, ingresa un número valido.")
            continue

        if opcion == 1:
            nombre = input("Nombre de la película: ") #Pide el nombre
            pelicula = Pelicula(nombre) #Crea un objeto Pelicula
            CatalogoPeliculas.agregar_pelicula(pelicula) # Llama a agregar_pelicula
            print("Película agregada.")
        elif opcion == 2:
            CatalogoPeliculas.lista_peliculas() #Mostramos las peliculas usando metodo del servicio
        elif opcion == 3:
            CatalogoPeliculas.eliminar() #Borra el archivo peliculas.txt
        elif opcion == 4:
            print("Saliendo...")
        else:
            print("Opcion no válida. Intenta de nuevo.")


if __name__ == '__main__':
    ejecutar()