const express = require('express');
const app = express();

const drawings = [];

app.use(express.static(__dirname + "/build"));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/build/index.html");
})

app.get("/picture", (req,res)=> {
    res.json(drawings);
})

app.get("/picture/:id", (req, res) => {
    
})

app.listen(9000);
console.log("Listening on port 9000.");