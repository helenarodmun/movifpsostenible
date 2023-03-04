## Inicialización del proyecto

- Configuramos la plantilla de partida que se nos ha proporcionado para el proyecto. 
    - Configuración de la DB en el archivo .env con nombre movifp

`composer require`
- El comando composer requirese utiliza para instalar un paquete o una dependencia en un proyecto PHP utilizando el gestor de paquetes Composer. 

`npm install`
- instala los paquetes y dependencias de un proyecto JavaScript utilizando Node Package Manager (NPM)

`artisan key generate`
- Se utiliza para generar una nueva clave de aplicación. Esta clave es utilizada por Laravel para cifrar y desencriptar los datos de sesión y cookies, entre otras cosas.

## Creación de la base de datso

- Se ha generado con Workbench el modelo correspondiente a la base de datos necesaria. En principo las 4 primeras tablas.
- Para poder convertir el modelo en migraciones para Laravel hay que descargarse un plugin que podemos encontrar en: https://github.com/beckenrode/mysql-workbench-export-laravel-5-migrations#version
- Se han actualizado los archivos generados para Laravel 9, ya que Workbench los realiza con Laravel 5

`php artisan migrate:refresh`
- para migrar las tablas

`php artisan make:controller XXXXX --model=XXXXX`
- para generar los modelos y controladores que se van a necesitar

## Instalación de React

`composer require laravel/ui`
- (este paso sólo es necesario si no lo hemos instalado previamente pero la plantilla ya lo trae instalado. En caso contrario habría que hacer este paso)

`artisan ui react --auth`
- genera vistas de autenticación preconfiguradas. Estas vistas se crean en la carpeta resources/js/components/Auth, también agrega las rutas y controladores necesarios para manejar la autenticación en la aplicación Laravel
- Si da error con vite edita el fichero pacake.json y en la entrada vite pon vite:"*". Vuelve a ejecutar el comando anterior

`npm run dev`
- El comando npm run devse utiliza en un proyecto de JavaScript para compilar los activos y archivos fuente.

## Instalación de Inertia
`composer require inertiajs/inertia-laravel`

`php artisan inertia:middleware`
- Configura el middleware de inertia
- En el archivo App\Http\Kernel incluye en la última posición del array asociativo 'web' lo siguiente: \App\Http\Middleware\HandleInertiaRequests::class,

`npm install @inertiajs/react`
Instala el paquete de Inertia. Si obtienes algún error por problemas de versiones de vite utiliza la opción --force, por ejemplo: npm install @inertiajs/react --force

## Factory

- rellenamos los campos de la tabla Travel de forma automática para poder empezar a visualizar datos

`php artisan make:factory TravelFactory --model=Travel`
- Se declaran en el modelo los datos como fillable
- Se añaden los campos que se rellenen en el método definition de la clase TravelFactory y añadimos en el método run de la clase DatabaseSeeder

`artisan db:seed`
- Se ejecuta el método run de la clase DatabaseSeeder para inicializar la base de datos

## Creación de primera ruta con resource
`Route::resource` 

-es una función en Laravel que permite definir una serie de rutas para un controlador con solo una línea de código. Cuando se utiliza Route::resource, Laravel crea automáticamente siete rutas para el controlador, incluyendo rutas para listar, crear, almacenar, mostrar, editar, actualizar y eliminar recursos.
- con 'only especificamos solo las rutas que queremos generar

## Front-end página principal modo estático (sin funcionalidades)

- Se han convertido todos los partials de blade en componentes de React, como archivos .jsx
- Se han modificado para incluir los textos del archivo .json

## Enlaces 

`npm install react-router-dom`
- Enlaces para la interfaz de usuario, que nos permitirá definir las rutas y renderizar componentes específicos en función de la URL
- Se reemplazan los enlaces de la plantilla, por el componente <Link> que intercepta eventos de clic y evita que se produzcan recargas de página completa

## Relaciones entre tablas

- Creación de las relaciones entre la tabla users y la tabla travels

## Tabla viajes
- se ha creado un método index, que mostrará todos los viajes disponibles, paginados y ordenados por fecha de publicación, de momento, para poder visualizar los resultados de las acciones que se realicen en la tabla para mas adelante desarrollar que se muestren los viajes segun el filtrado que realice el usuario
- también se ha creado en la misma página, de momento un formulario para insertar registros a la tabla, en la fase del front-end se deberá separar como una vista independiente a la visualización de los viajes, respetando así la plantilla proporcionada. El método que usará el formulario para la inserción de datos es el método 'store', del TravelControlador

`php artisan make:request TravelForm`
- creación de la clase TravelForm, para gestionar las validaciones

## Tabla pivote

- se ha creado la tabla pivote travel_users, y se han añadido a los modelos las relaciones pertinentes

## Otras tareas realizadas
