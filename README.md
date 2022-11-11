# Desafio Kruger

Kruger Corporación requiere una aplicación para llevar un registro del inventario del estado de vacunación de los empleados

## Descargar Proyecto

1. Copiar la siguiente URL : https://github.com/raionplay/kruger.git

2. En la ubicación que deseamos copiar el proyecto. en la consola de CMD colocamos el siguiente comando:
`git clone https://github.com/raionplay/kruger.git`

3. Instalar los módulos del proyecto con el comando: `yarn install`

## Scripts disponibles:

En el directoria del proyecto, tu puedes ejecutar los siguientes comandos:

### `npm start`

Corre la aplicación en el modo desarrollador.\
Abre [http://localhost:3000](http://localhost:3000) para visualizarlo en tu navegador.

La página se recargará cuando tu realices cambios.\
Tu puedes visualizar cualquier error en la consola.

### `npm run build`

Compila la aplicación para producción a la carpeta `build`.\
React empaqueta correctamente en modo de producción y optimiza la compilación para un mejor rendimiento.


## Resumen

La aplicación contiene 2 roles: Administrador y Empleado.\

### 1. Administrador

El Administrador puede: Registar, editar, listar y eliminar a los empleados.\

a. Registra la siguiente información del empleadop:

- Cédula.
- Nombre.
- Apellidos.
- Correo Electrónico.

b. Al dar de alta un empleado genera un usuario y contraseña para el empleado

c. Como Administrador se puede filtar el listado de los empleados por los siguientes criterios:

- Estado de vacunación.
- Tipo de vacuna.
- Rango de fecha de vacunación

### 2. Empleado

El empleado puede ingresar al sistema para visualizar y actualizar la información.

- Fecha de nacimiento.
- Dirección de domicilio.
- Teléfono móvil.
- Estado de vaciación. Vacunado / No vacunado
- Si el empleado está vacunado, se solicita que ingrese tipo de vacuna, Fecha y Número de dosis.





