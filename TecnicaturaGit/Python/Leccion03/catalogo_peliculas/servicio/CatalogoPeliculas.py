from dominio import Pelicula
class CatalogoPeliculas:
    def __init__(self, ruta_archivo="peliculas.txt"):
        self.ruta_archivo = ruta_archivo

    def agregar_pelicula(self, pelicula):
        try:
            with open(self.ruta_archivo, "a") as archivo:
                archivo.write(f"{pelicula.nombre}\n")
            print(f"Película '{pelicula.nombre}' agregada al catálogo.")
        except Exception as e:
            print(f"Error al agregar la película: {e}")

    def listar_peliculas(self):
        peliculas = []
        try:
            with open(self.ruta_archivo, "r") as archivo:
                for linea in archivo:
                    nombre_pelicula = linea.strip()
                    peliculas.append(Pelicula(nombre_pelicula))
            if peliculas:
                print("\n--- Catálogo de Películas ---")
                for pelicula in peliculas:
                    print(pelicula)
                print("-----------------------------\n")
            else:
                print("El catálogo de películas está vacío.")
        except FileNotFoundError:
            print("El archivo de películas no existe. Se creará al agregar la primera película.")
        except Exception as e:
            print(f"Error al listar las películas: {e}")


