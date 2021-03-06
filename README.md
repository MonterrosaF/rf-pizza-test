# Robin Food Test Angular
_Robin Food Test Angular_

## Comenzando 馃殌

* _Para abrir la aplicaci贸n desplegada en producci贸n por favor dar click [ac谩](https://robin-food-test-monterrosaf.vercel.app/login) o ir al siguiente link: https://robin-food-test-monterrosaf.vercel.app/login_
* _Las siguientes instrucciones permitir谩n obtener una copia del proyecto en funcionamiento en una m谩quina local para prop贸sitos de desarrollo y pruebas._

### Pre-requisitos 馃搵

_Para poder ejecutar este proyecto en un ambiente local se necesitan los siguientes programas/herramientas_

* [Node](https://nodejs.org/en/download/)
* npm - Viene incluido al instalar Node
* Si se desea observar el c贸digo fuente en el ambiente local es recomendable usar un IDE o un editor de c贸digo, aconsejo [VSC](https://code.visualstudio.com)
* [Git](https://git-scm.com/downloads) - Si se desea clonar el repositorio 
* Para un mejor funcionamiento de los comandos de Angular, se recomienda tener instalado angular-cli de manera global, se puede hacer ejecutando el comando "npm install -g @angular/cli" en la terminal.

### Instalaci贸n 馃敡

_Para poder poner en marcha este proyecto, por favor seguir los siguientes pasos:_

1. Clonar o descargar el repositorio: en una carpeta local ejecutar el comando "git clone git@github.com:MonterrosaF/rf-pizza-test.git"
2. Dentro de la carpeta generada ejecutar el comando "npm i"
3. Dentro del proyecto ejecutar el comando "npm start" o el comando "ng serve --o"
4. El proyecto se inicializar谩 en el puerto 4200 y se podr谩 visualizar en cualquier navegador.
4. Para correr las pruebas unitarias ejecutar el comando "ng test" o "npm test".
5. Para ver la cobertura de las pruebas unitarias ejecutar el comando "ng test --code-coverage"

### Descripcion carpetas 馃搶

* **src/app/components** - *Carpeta que contiene el codigo de los componentes que se reutilizan en el proyecto*
* **src/app/pages** - *Carpeta que contiene el codigo de las paginas*
* **src/app/shared** - *Carpeta que contiene el codigo de elementos comunes en la aplicacion como modelos o servicios*
* **src/assets** - *Carpeta que contiene estilos, imagenes, fuentes y dem谩s archivos que componen los elementos visuales del frontend*

## Construido con 馃洜锔?

* [Angular](https://angular.io) - Framework de Javascript para creaci贸n de aplicaciones web.
* [npm](https://www.npmjs.com) - Manejador de dependencias

### Observaciones Generales馃搵

* Se dividi贸 la aplicacion en paginas (Secci贸n del proyecto est谩tico que pueden o no incluir componentes) y en componentes (Elementos del proyecto que se reutiliza en las paginas y que suelen incluir informaci贸n dinamica).

* Inicialmente se consider贸 realizar modificaciones a las pantallas de login y listado aunque se decidi贸 abandonar la idea ya que en las instrucciones se solicita que estas paginas sean lo mas identicas posibles al dise帽o. Por otro lado, se cambi贸 el estilo para mobile y tablets permitiendo una navegaci贸n mas simple y directa a la hora de realizar pedidos u obtener informaci贸n de los productos. Situacion similar a las imagenes de las pizzerias buscando un contexto semejante al desarrollado.

* Al momento de consumir el JSON se decide almacenar correo y nombre del usuario en el localStorage para validar el inicio de sesi贸n y la logica de la pagina de las tiendas, sin embargo este caso solo aplica para esta prueba ya que bajo otras condiciones de consumo de API se almacenaria un JWT con la informaci贸n necesaria encriptada.

* Se recomienda instalar y utilizar la extensi贸n ["Responsive Viewer"](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb) para mayor comodidad al momento de realizar verificaciones del responsive de la prueba, por ejemplo: 

![Screenshot](https://github.com/MonterrosaF/rf-pizza-test/blob/main/docs/images/Responsive%20Viewer.png?raw=true)

## Autor 鉁掞笍

* [Andr茅s Felipe Monterrosa](https://www.linkedin.com/in/andres-felipe-monterrosa-alarcon)

## Link Produccion 馃殌

* https://robin-food-test-monterrosaf.vercel.app/login
