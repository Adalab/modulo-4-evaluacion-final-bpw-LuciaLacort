
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



async function connectDB() {
    const conex = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });
    await conex.connect();
    console.log('DB connected with id: ' + conex.threadId);
    return conex;
}
 connectDB();



server.get("/allBeasts", async (req, res) => {
    console.log(res)
    try {
        const conn = await connectDB();
        const select = `SELECT * FROM finder INNER JOIN beasts ON finder.finderId = beasts.fkFinder`;
        const [result] = await conn.query(select);
        await conn.end();
        res.json({ data: result, count: result.length });
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ error: "Error" });
    } 
});


server.get("/searchBeast/:id", async (req, res) => {
    try {
        console.log(req.params.id)
        const conn = await connectDB();
        const beastId = req.params.id;
        const select = 'SELECT * FROM finder INNER JOIN beasts ON finder.finderId = beasts.fkFinder WHERE beastId = ?';
        const [result] = await conn.query(select, [beastId]);
        res.json({ data: result[0]});
        await conn.end();
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error");
    }
});


server.post("/addBeast", async (req, res) => {
    const conn = await connectDB();
    try {
        console.log(req.body);
        const conn = await connectDB();
        const { name, country, finderImage, beastName, category, description, beastImage } = req.body;
        const requiredFields = ["name", "country", "finderImage", "beastName", "category", "description", "beastImage"];
        for (const field of requiredFields) {
            if (!req.body[field]) {
                return res.status(400).json({ success: false, message: `El campo ${field} es obligatorio` });
            }
        }
        const insertFinder = 'INSERT INTO finder (name, country, finderImage) VALUES (?, ?, ?)';
        const [resultFinder] = await conn.query(insertFinder, [name, country, finderImage]);
        const finderId = resultFinder.insertId;
        const insertBeast = 'INSERT INTO beasts (beastName, category, description, beastImage, fkFinder) VALUES (?, ?, ?, ?, ?)';
        await conn.query(insertBeast, [beastName, category, description, beastImage, finderId]);
        res.send("Los datos se han enviado a la base de datos.");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error");
    }
    await conn.end();
});


server.put("/updateBeast/:id", async (req, res) => {
    
    try {
        const conn = await connectDB();
        const beastId = req.params.id;
        const { name, country, finderImage, beastName, category, description, beastImage } = req.body;
        const updateFinder = 'UPDATE finder SET name = ?, country = ?, finderImage = ? WHERE finderId = (SELECT fkFinder FROM beasts WHERE beastId = ?)';
        await conn.query(updateFinder, [name, country, finderImage, beastId]);
        const updateBeast = 'UPDATE beasts SET beastName = ?, category = ?, description = ?, beastImage = ? WHERE beastId = ?';
        await conn.query(updateBeast, [beastName, category, description, beastImage, beastId]);
        res.send("Los datos se han actualizado en la base de datos.");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error");
    } 

});


server.delete("/deleteBeast/:id", async (req, res) => {
    try {
        const conn = await connectDB();
        const beastId = req.params.id;
        const deleteBeast = 'DELETE FROM beasts WHERE beastId = ?';
        await conn.query(deleteBeast, [beastId]);
        res.send("La criatura ha sido borrada de la base de datos.");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error");
    }
});



