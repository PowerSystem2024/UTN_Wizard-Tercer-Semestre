
-- Comenzamos con CRUD: create(inserter), read(leer), update(actualizar), delete(eliminar)
-- Lista los estudianres (read)
SELECT * FROM estudiantes2022;
-- Insertar estudiantes
INSERT INTO estudiantes2022 (nombre, apellido, telefono, email) 
VALUES ('Juan', 'Perez', '2652654545', 'juan@mail.com');
-- Update (modificar)
UPDATE estudiantes2022 SET nombre="Juan Carlos", apellido="Garcia" WHERE idestudiantes2022= 1;
-- Delete (liminar)
DELETE FROM estudiantes2022 WHERE idestudiantes2022=1;
-- Para modificar el indestudiantes2025 y comience en 1
ALTER TABLE indestudiantes2022 AUTO_INCREMENT = 1;