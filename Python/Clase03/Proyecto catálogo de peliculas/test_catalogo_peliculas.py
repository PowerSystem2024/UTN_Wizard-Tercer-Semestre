from pelicula import Pelicula
from catalogo_peliculas import CatalogoPeliculas

def menu():
    opcion = None
    while opcion != '4':
        print("\nMenú de opciones:")
        print("1) Agregar película")
        print("2) Listar películas")
        print("3) Eliminar archivo de películas")
        printt("4) Salir")
        opcion = input("Selecciona una opción: ")

        if opcion == '1':
            nombre = input("Introduce el nombre de la película: ")
            pelicula = Pelicula(nombre)
            CatalogoPeliculas.agregar_pelicula(pelicula)
        elif opcion == '2':
            CatalogoPeliculas.listar_peliculas()
        elif opcion == '3':
            CatalogoPeliculas.eliminar()
        elif opcion == '4':
            print("¡Hasta luego!")
        else:
            print("Opción no válida, intenta nuevamente.")

if __name__ == '__main__':
    menu()
