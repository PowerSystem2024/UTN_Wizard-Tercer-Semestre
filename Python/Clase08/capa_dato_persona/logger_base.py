import logging as log  # Usamos el módulo 'logging' para mostrar mensajes útiles en consola o archivos

# Más info: https://docs.python.org/3/howto/logging.html

# Configuramos cómo queremos que se vean los mensajes de log
log.basicConfig(
    level=log.DEBUG,  # Mostramos todos los mensajes desde DEBUG para arriba (DEBUG es el más detallado)
    format="%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s",  # Cómo se arma cada línea de log
    datefmt="%I:%M:%S %p",  # Cómo se va a mostrar la hora (formato 12h con AM/PM)
    handlers=[
        log.FileHandler("capa_datos.log"),  # Guardamos los mensajes en un archivo
        log.StreamHandler()                 # Y también los mostramos en la consola mientras se ejecuta
    ]
)

# Esto solo se ejecuta si corrés este archivo directamente, no si lo importás desde otro
if __name__ == "__main__":
    log.debug("Este es un mensaje DEBUG")         # Súper detallado, ideal para ver qué pasa en cada paso
    log.info("Este es un mensaje INFO")           # Información general, todo va bien
    log.warning("Este es un mensaje WARNING")     # Algo raro pasó, pero no se rompió nada (por ahora)
    log.error("Este es un mensaje ERROR")         # Algo falló y hay que revisarlo
    log.critical("Este es un mensaje CRITICAL")   # Falla grave, el sistema podría dejar de andar
