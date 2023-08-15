# Pasos de desarrollo del proyecto

1. #commit 1: Estructura inicial del proyecto (Front en Reactjs y Back en Nodejs)


2. #commit 2: Configuración inicial del servidor
express: Crear el servidor
dotenv: Acceder a las variables de entorno
cors: Middleware para permitir solicitudes http


3. #commit 3: Creación de rutas, controladores y configuración inicial de sequelize cli
sequelize: ORM para base de datos
sequelize-cli: Permite la creación de modelos, migraciones y seeders
mysql2: Conexión con la base de datos de MySQL


4. #commit 4: Creación de modelos y migraciones con sequelize y funciones para iniciar sesión y registrar usuario
bcryptjs: Permite crear hash para el password
jsonwebtoken: Permite crear token de autenticación



5. #commit 5: Creación de funciones para crear y consultar productos
multer: Permite cargar imágenes a la base de datos


6. #commit 6: Creación de funciones para crear y consultar ordenes
Servidor creado.


7. #commit 7: Creación de la vista de SignIn y SignUp y configuración de tailwindcss como framework css
sweetalert2: Permite mostrar mensajes



8. #commit 8: Configuración de redux para almacenamiento de datos



9. #commit 9: Configuración de servicios con axios para peticiones http y funciones para iniciar sesión y registrar usuario
axios: Permite realizar solicitudes al servidor


10. #commit 10: Creación del perfil y funciones para listar los productos



11. #commit 11: Creación de vista para crear nuevo producto, pagar el pedido y header


12. #commit 12: Mejora en la vista de orden para mostrar los productos



# Pasos para probar el proyecto

1. Clonar el proyecto.

2. En una consola (cmd) abrir las carpetas del proyecto (client y server) y ejecutar el comando 'npm i' para instalar las dependencias.

3. Crear base de datos en MySQL con el nombre 'db_fitco'.

4. Utilizar un servidor web loca de conexón para la base de datos, en mi caso utilice XAMPP.

5. En la consola dentro del proyecto server, acceder a src, ejecutar el comando 'npx sequelize-cli db:migrate' para migrar las tablas a la base de datos.

6. Ahí mismo ejecutar el comando 'npx sequelize-cli db:seed:all' para migrar un usuario administrador de prueba.

7. Dentro de la carpeta server/src/config cambiar las credenciales de la configuración de 'development', ya que sequelize no permite utilizar variables de entorno para ambiente de desarrollo.

8. Ahí mismo ejecutar el comando 'npm run dev' para iniciar el servidor.

9. En la consola dentro de la carpeta client, ejecutar el comando 'npm start' para iniciar la aplicación.

10. Para probar el proyecto tiene un usuario administrador registrado con estos datos:
email: fitco@gmail.com
password: Fitco123@

11. Puede registrarse y probar la aplicación.
