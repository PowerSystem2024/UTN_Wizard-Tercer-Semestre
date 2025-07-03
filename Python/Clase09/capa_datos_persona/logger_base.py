# ===== CONFIGURACIÓN DE LOGGING =====
# Este módulo permite gestionar los mensajes que se muestran en consola y se guardan en archivos.

import logging as log  # Se importa el módulo de logging, con un alias para simplificar su uso

# Configuración inicial del sistema de logging
log.basicConfig(
    level=log.DEBUG,  # Establece el nivel mínimo de mensajes a mostrar (debug incluye todos los niveles)
    format='%(asctime)s: %(levelname)s [%(filename)s: %(lineno)s] %(message)s',  # Formato del mensaje de log
    datefmt='%I:%M:%S %p',  # Define cómo se mostrará la hora (hora:minuto:segundo AM/PM)
    handlers=[
        log.FileHandler('capa_datos.log'),  # Guarda los mensajes en un archivo de log
        log.StreamHandler()  # También los muestra por consola
    ]
)

# Bloque de prueba: se ejecuta solo si este archivo es el principal
if __name__ == '__main__':
    # Mensajes para probar los distintos niveles del sistema de logging
    log.debug('Mensaje de prueba: nivel DEBUG.')       # Información detallada útil para desarrollo
    log.info('Mensaje de prueba: nivel INFO.')          # Información general sobre el flujo del programa
    log.warning('Mensaje de prueba: nivel WARNING.')    # Advertencia sobre algo inesperado
    log.error('Mensaje de prueba: nivel ERROR.')        # Error que no impide continuar
    log.critical('Mensaje de prueba: nivel CRITICAL.')  # Error grave que podría detener la ejecución

# Más información sobre logging: https://docs.python.org/3/howto/logging.html
