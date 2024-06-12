
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

require('dotenv').config();
const server = express();

server.use(cors());
server.use(express.json());


const PORT = process.env.PORT || 3000; 
server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
});

//Conectar base de datos 

//Endpoint que me traiga todas las criaturas mágicas

//Endpoint para añadir una criatura mágica desde el front

//Endpoint para actualizar una criatura que ya está en la base de datos

//Endpoint para borrar una criatura que está en la base de datos


//

