# API REST: Animales fantásticos de la saga Harry Potter y sus descubridores.

## DESCRIPCIÓN: 

Esta API REST permite a los usuarios listar, añadir, buscar por id, modificar y borrar los datos de los animales fantásticos de la saga Harry Potter que se encuentran en una base de datos junto con sus descubridores.

## INSTALACIÓN:
1. Clona este repositorio en tu ordenador.
2. Crea una base de datos ejecutando el contenido del archivo FantasticBeasts.sql que se encuentra en la carpeta "db".
3. Abre la carpeta del proyecto clonado en Visual Studio Code.
4. Desde tu terminal, instala las dependencias express, cors y msql2 en tu local con npm install.
5. En la función connectDB(), inserta los datos de la base de datos en la que has ejecutado FantasticBeasts.sql (host, user, password, database), ¡tu base de datos está conectada!
6. Ejetuta npm run dev. 
7. Abre postman para probar a añadir, modificar, buscar, listar y borrar los datos de la base de datos.
8. Hay console.log estratégicos que te darán información del flujo de datos entre postman y tus endpoint, ¡atenta a la información que aparece en tu terminal!

## PRUEBAS EN POSTMAN: 

### Para hacer pruebas, puedes primero insertar algunos animales fantásticos en la base de datos que has creado:

#### Ejemplos que puedes usar en Postman para añadir datos:

http://localhost:3000/addBeast
{
    
    "name": "Luna Lovegood",
    "country": "United Kingdom",
    "finderImage": "imagen_luna",
    "beastName": "Thestral",
    "category": "Magical Creatures",
    "description": "imagen_thestral"
    "beastImage": "thestral_image"
}


{

    "name": "Newt Scamander",
    "country": "United Kingdom",
    "finderImage": "https://static.wikia.nocookie.net/esharrypotter/images/0/0a/AF1_Newton_Scamander_%28perfil%29.png/revision/latest?cb=20171206172859",
    "beastName": "Niffler",
    "category": "Magical Creatures",
    "description": "A small, furry creature attracted to shiny objects.",
    "beastImage": "https://images.ctfassets.net/usf1vwtuqyxm/20ieDwbv8anSMKPvtCWRVC/d365b8b9c614ee079d79fdb59b5f9628/niffler_1_1800x1248.png"
  
}

{

    "name": "Newt Scamander",
    "country": "United Kingdom",
    "finderImage": "imagen_newt",
    "beastName": "Bowtruckle",
    "category": "Bestia",
    "description": "A small, tree-guarding creature with a long, thin body and two big, shiny eyes.",
    "beastImage": "imagen_Bowtruckle"
}

### También puedes probar a modificar los datos:

#### Ejemplos que puedes usar en Postman para modificar datos 

http://localhost:3000/updateBeast/:id

{

    "name": "Luna Lovegood",
    "country": "United Kingdom",
    "finderImage": "https://images.ctfassets.net/usf1vwtuqyxm/Mam68Vfou2OO6kqEcyW8W/41657e4dbb7d42d2cab591276105bcc1/LunaLovegood_WB_F6_LunaLovegoodInQuibblerSpecsOnHogwartsExpress_Still_080615_Port.jpg?fm=jpg&q=70&w=2560",
    "beastName": "Thestral",
    "category": "Bestia",
    "description": "A magical, winged horse-like creature visible only to those who have witnessed death.",
    "beastImage":"https://static.wikia.nocookie.net/harrypotterfannon/images/2/27/Thestral.gif/revision/latest?cb=20130818014842&path-prefix=es"
}


{

    "name": "Ron Weasly",
    "country": "United Kingdom",
    "finderImage": "https://static.wikia.nocookie.net/esharrypotter/images/5/56/P5_Ron_Weasley_poster.jpg/revision/latest/scale-to-width-down/221?cb=20070718013816",
    "beastName": "Bowtruckle",
    "category": "Bestia",
    "description": "A small, tree-guarding creature with a long, thin body and two big, shiny eyes.",
    "beastImage": "https://images.ctfassets.net/usf1vwtuqyxm/9qNXyFbQh39aDlAWEnpty/6a437d9f3d4e3145c5c8bb15da0bb94f/bowtruckle_2_1800x1248.png"
}
{

    "name": "Newt Scamander",
    "country": "United Kingdom",
    "finderImage": "https://static.wikia.nocookie.net/esharrypotter/images/0/0a/AF1_Newton_Scamander_%28perfil%29.png/revision/latest?cb=20171206172859",
    "beastName": "Niffler",
    "category": "Bestia",
    "description": "A small, furry creature attracted to shiny objects.",
    "beastImage": "https://images.ctfassets.net/usf1vwtuqyxm/20ieDwbv8anSMKPvtCWRVC/d365b8b9c614ee079d79fdb59b5f9628/niffler_1_1800x1248.png"
  
}

### Podrías buscar la lista completa de los animales o solo uno buscando por su id:

http://localhost:3000/allBeasts
http://localhost:3000/searchBeast/:id


### Y por último puedes eliminar cualquier animal de la base de datos, aunque no su descubridor, ya que este ha podido descubrir también otros animales fantásticos: 

http://localhost:3000/deleteBeast/:id

## USO:
Puedes crear un front que te permita llevar a cabo una o varias de las acciones disponibles (renderizar una lista, buscar solo uno, modificar los datos que ya están en la base de datos, añadir nuevos animales o borrarlos usando su id).
Recuerda que para cada endpoint tu código para front debe tener: 
1. Inputs para recoger los valores correctos que se inserten desde el front.
2. Fetch que apunten a tu endpoint con el método correcto.
3. Botón de borrado en caso de implementar esa funcionalidad.

El objeto que debe recogerse en el front es el siguiente: 

            {

            "name": "",

            "country": "",

            "finderImage": "",

            "beastName": "",

            "category": "",

            "description": "",
            
            "beastImage": ""
            }

Los id de bestia y finder, así como la foreing key son generedos por la base de datos.

Si todas las pruebas con postman funcionan, ¡disfruta de la maravillosa página que podrás crear a partir de esta API!
