# Robin Food Test Angular
_Robin Food Test Angular_

## Comenzando 🚀

* _Para abrir la aplicación desplegada en producción por favor dar click [acá](https://robin-food-test-monterrosaf.vercel.app/login) o ir al siguiente link: https://robin-food-test-monterrosaf.vercel.app/login_
* _Las siguientes instrucciones permitirán obtener una copia del proyecto en funcionamiento en una máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

_Para poder ejecutar este proyecto en un ambiente local se necesitan los siguientes programas/herramientas_

* [Node](https://nodejs.org/en/download/)
* npm - Viene incluido al instalar Node
* Si se desea observar el código fuente en el ambiente local es recomendable usar un IDE o un editor de código, aconsejo [VSC](https://code.visualstudio.com)
* [Git](https://git-scm.com/downloads) - Si se desea clonar el repositorio 
* Para un mejor funcionamiento de los comandos de Angular, se recomienda tener instalado angular-cli de manera global, se puede hacer ejecutando el comando "npm install -g @angular/cli" en la terminal.

### Instalación 🔧

_Para poder poner en marcha este proyecto, por favor seguir los siguientes pasos:_

1. Clonar o descargar el repositorio: en una carpeta local ejecutar el comando "git clone git@github.com:MonterrosaF/rf-pizza-test.git"
2. Dentro de la carpeta generada ejecutar el comando "npm i"
3. Dentro del proyecto ejecutar el comando "npm start" o el comando "ng serve --o"
4. El proyecto se inicializará en el puerto 4200 y se podrá visualizar en cualquier navegador.
4. Para correr las pruebas unitarias ejecutar el comando "ng test" o "npm test".
5. Para ver la cobertura de las pruebas unitarias ejecutar el comando "ng test --code-coverage"

### Descripcion carpetas 📌

* **src/app/components** - *Carpeta que contiene el codigo de los componentes que se reutilizan en el proyecto*
* **src/app/pages** - *Carpeta que contiene el codigo de las paginas*
* **src/app/shared** - *Carpeta que contiene el codigo de elementos comunes en la aplicacion como modelos o servicios*
* **src/assets** - *Carpeta que contiene estilos, imagenes, fuentes y demás archivos que componen los elementos visuales del frontend*

## Construido con 🛠️

* [Angular](https://angular.io) - Framework de Javascript para creación de aplicaciones web.
* [npm](https://www.npmjs.com) - Manejador de dependencias

### Observaciones Generales📋

* Se dividió la aplicacion en paginas (Sección del proyecto estático que pueden o no incluir componentes) y en componentes (Elementos del proyecto que se reutiliza en las paginas y que suelen incluir información dinamica).

* Inicialmente se consideró realizar modificaciones a las pantallas de login y listado aunque se decidió abandonar la idea ya que en las instrucciones se solicita que estas paginas sean lo mas identicas posibles al diseño. Por otro lado, se cambió el estilo para mobile y tablets permitiendo una navegación mas simple y directa a la hora de realizar pedidos u obtener información de los productos. Situacion similar a las imagenes de las pizzerias buscando un contexto semejante al desarrollado.

* Al momento de consumir el JSON se decide almacenar correo y nombre del usuario en el localStorage para validar el inicio de sesión y la logica de la pagina de las tiendas, sin embargo este caso solo aplica para esta prueba ya que bajo otras condiciones de consumo de API se almacenaria un JWT con la información necesaria encriptada.

* Se recomienda instalar y utilizar la extensión ["Responsive Viewer"](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb) para mayor comodidad al momento de realizar verificaciones del responsive de la prueba, por ejemplo: 

![Screenshot](https://github.com/MonterrosaF/rf-pizza-test/blob/main/docs/images/Responsive%20Viewer.png?raw=true)

## Autor ✒️

* [Andrés Felipe Monterrosa](https://www.linkedin.com/in/andres-felipe-monterrosa-alarcon)

## Link Produccion 🚀

* https://robin-food-test-monterrosaf.vercel.app/login
