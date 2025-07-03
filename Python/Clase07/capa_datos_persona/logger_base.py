import logging as log  # Se importa el módulo 'logging' con un alias para registrar eventos y mensajes

# Sitio oficial para consultar más sobre logging: https://docs.python.org/3/howto/logging.html

# Configuración inicial del sistema de registros
# Se define el nivel de detalle, el formato de los mensajes, la fecha y los destinos donde se enviarán
log.basicConfig(
    level=log.DEBUG,  # Se registrarán todos los mensajes desde nivel DEBUG hacia arriba
    format="%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s",  # Estructura del mensaje de salida
    datefmt="%I:%M:%S %p",  # Formato de hora en 12h con AM/PM
    handlers=[
        log.FileHandler("capa_datos.log"),  # Se escribe una copia de los logs en el archivo especificado
        log.StreamHandler()                 # También se muestran en la consola en tiempo real
    ]
)

# Este bloque solo se ejecuta si el script se corre directamente (no si se importa como módulo)
if __name__ == "__main__":
    log.debug("Este es un mensaje de tipo DEBUG")          # Mensaje detallado útil para pruebas
    log.info("Este es un mensaje de tipo INFO")            # Mensaje informativo estándar
    log.warning("Este es un mensaje de tipo WARNING")      # Advertencia sobre algo inesperado pero no grave
    log.error("Este es un mensaje de tipo ERROR")          # Indica que ocurrió un error en la ejecución
    log.critical("Este es un mensaje de tipo CRITICAL")    # Indica un fallo severo que requiere atención inmediata
