const express = require("express");
const app = express();

const drawings = [];

app.use(express.static(__dirname + "/build"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/picture", (req, res) => {
  res.json(drawings);
});

app.get("/picture/:id", (req, res) => {});

app.post("/picture", express.raw({ type: "image/*" }), (req, res) => {
  const newArtist = req.query.artist;
  const newProfessor = req.query.professor;
  const newId = drawings.length;

  drawings.push({
    id: newId,
    image: req.body,
    artist: newArtist,
    professor: newProfessor
  });

  res.json({ id: newId });

  console.log(drawings[newId]);
});

app.listen(9000);
console.log("Listening on port 9000.");
