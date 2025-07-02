# Archivo correspondiente a la Clase 11 de Python - UTN
# Módulo principal para la gestión de datos de personas.
# Autor: UTN Wizard - Tercer Semestre
# ---------------------------------------------
import logging as log

# log.python.org/3/howto/logging.html
# Llamamos una configuración básica

log.basicConfig(level=log.DEBUG,
                format='%(asctime)s:%(levelname)s [%(filename)s:%(lineno)s] %(message)s',
                datefmt='%I:%M:%S %p',
                handlers=[
                    log.FileHandler('capa_datos.log'),
                    log.StreamHandler()
                ])
if __name__== '__main__':
    log.debug('Mensaje a nivel debug')
    log.info('Mensaje a nivel info')
    log.warning('Mensaje a nivel warning')
    log.error('Mensaje a nivel error')
    log.critical('Mensaje a nivel critical')