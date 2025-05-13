import psycopg2 # Esto es para poder conecctarnos a Postgre

conexion = psycopg2.connect(
    user='postgres',
    password='admin',
    host='127.0.0.1',
    port='5432',
    database= 'test_bd'
)
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'UPDATE persona SET nombre=%s, apellido=%s, email=%s WHERE id_persona=%s'
            valores = ('Juan', 'Roldan', 'rcarlos@gmail.com', 1) # Es una tupla
            cursor.execute(sentencia, valores) # de esta manera ejecutamos la sentencia
            registros_actualizados = cursor.rowcount
            print(f'Los registros actulizados son: {registros_actualizados}')

except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()