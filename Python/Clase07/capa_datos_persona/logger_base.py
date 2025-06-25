import logging as log  # Módulo para registrar mensajes de log (depuración, errores, advertencias, etc.)

# Documentación oficial: https://docs.python.org/3/howto/logging.html

# Configuración básica del sistema de logging
# Se establece el nivel de log, el formato del mensaje, el formato de la fecha y los manejadores de salida
log.basicConfig(
    level=log.DEBUG,  # Nivel mínimo de log que se va a registrar (DEBUG es el más detallado)
    format="%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s",  # Formato del mensaje de log
    datefmt="%I:%M:%S %p",  # Formato de la hora (12 horas con AM/PM)
    handlers=[
        log.FileHandler("capa_datos.log"),  # Guardará los logs en un archivo llamado 'capa_datos.log'
        log.StreamHandler()  # También los mostrará por consola en tiempo real
    ]
)

# Bloque principal: solo se ejecuta si este archivo se ejecuta directamente y no como módulo importado
if __name__ == "__main__":
    log.debug("Mensaje a nivel debug")        # Mensaje de depuración (muy detallado, ideal para desarrollo)
    log.info("Mensaje a nivel info")          # Mensaje informativo general
    log.warning("Mensaje a nivel warning")    # Mensaje de advertencia (algo inesperado pero no crítico)
    log.error("Mensaje a nivel error")        # Mensaje de error (una operación falló)
    log.critical("Mensaje a nivel critical")  # Mensaje crítico (fallo grave del sistema)
