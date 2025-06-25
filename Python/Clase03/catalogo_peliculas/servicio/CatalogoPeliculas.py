import os #Para manejar archivos
from catalogo_peliculas.dominio.Pelicula import Pelicula
class CatalogoPeliculas:
    ruta_archivo = 'peliculas.txt' #


#Metodo agregar película
    @staticmethod
    def agregar_pelicula(pelicula: Pelicula):
        with open(CatalogoPeliculas.ruta_archivo, 'a', encoding= 'utf-8') as archivo:
            archivo.write(pelicula.nombre + '\n')


#MEtodo listar de películas
    @staticmethod
    def lista_peliculas():
        if not os.path.exists(CatalogoPeliculas.ruta_archivo):
            print("No hay archivo de películas.")
            return
        with open(CatalogoPeliculas.ruta_archivo, 'r', encoding= 'utf-8') as archivo:
            print("Listado de películas:")
            for linea in archivo:
                print(f"- {linea.split()}")


#Metodo Eliminar
    @staticmethod
    def eliminar():
        if os.path.exists(CatalogoPeliculas.ruta_archivo):
            os.remove(CatalogoPeliculas.ruta_archivo)
            print("Archivo eliminado.")
        else:
            print("No existe el archivo para eliminar.")