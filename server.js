const express = require("express");
const app = express();

const drawings = [];

const port = process.env.PORT || 9000;

app.use(express.static(__dirname + "/build"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/picture", (req, res) => {
  const pictureMeta = drawings.map(drawObj => {
    let drawMeta = {};
    drawMeta.artist = drawObj.artist;
    drawMeta.id = drawObj.id;
    drawMeta.professor = drawObj.professor;
    return drawMeta;
  });
  res.json(pictureMeta);
});

app.get("/picture/:id", (req, res) => {
  const index = req.params.id;
  res.setHeader("Content-type", "image/png");
  res.send(drawings[index].image);
});

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

app.listen(port, () => {
  console.log('App is running on http://localhost:' + port);
});
