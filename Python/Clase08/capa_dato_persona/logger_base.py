import logging as log  # Módulo estándar de Python para registrar mensajes de log (depuración, errores, etc.)

# Documentación oficial: https://docs.python.org/3/howto/logging.html

# Configuración básica del sistema de logging
log.basicConfig(
    level=log.DEBUG,  # Nivel mínimo de mensajes que se van a registrar (DEBUG es el más detallado)
    format="%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s",  # Formato de los mensajes
    datefmt="%I:%M:%S %p",  # Formato de la hora: 12 horas con AM/PM
    handlers=[
        log.FileHandler("capa_datos.log"),  # Guarda los logs en el archivo 'capa_datos.log'
        log.StreamHandler()  # También muestra los logs en la consola (salida estándar)
    ]
)

# Este bloque se ejecuta solo si este archivo es el principal (no cuando se importa como módulo)
if __name__ == "__main__":
    log.debug("Mensaje a nivel debug")        # Mensaje detallado para desarrolladores (depuración)
    log.info("Mensaje a nivel info")          # Mensaje informativo (flujo normal)
    log.warning("Mensaje a nivel warning")    # Advertencia: algo inusual pero no es un error
    log.error("Mensaje a nivel error")        # Error: algo falló
    log.critical("Mensaje a nivel critical")  # Error crítico: el sistema puede no continuar
