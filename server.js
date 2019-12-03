const express = require("express");
const app = express();

const port = process.env.PORT || 9000;

var admin = require("firebase-admin");

var serviceAccount = require("./hackschool-final-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hackschool-final.firebaseio.com"
});

const db = admin.firestore();

const drawings = db.collection("drawings");

app.use(express.static(__dirname + "/build"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/picture", (req, res) => {
  drawings
    .select("id", "artist", "professor")
    .get()
    .then(snapshot => {
      let pictureMeta = [];
      snapshot.forEach(doc => {
        pictureMeta.push(doc.data());
      });
      res.json(pictureMeta);
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
});

app.get("/picture/:id", (req, res) => {
  res.setHeader("Content-type", "image/png");
  const id = req.params.id;
  drawings
    .where("id", "==", parseInt(id))
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log("No matching documents.");
        return;
      }

      snapshot.forEach(doc => {
        res.send(doc.data().image);
      });
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
});

app.post("/picture", express.raw({ type: "image/*" }), async (req, res) => {
  const newId = await db
    .collection("drawings")
    .get()
    .then(snap => snap.size)
    .catch(err => {
      console.log("Error getting documents", err);
    });

  const newDrawing = {
    id: newId,
    image: req.body,
    artist: req.query.artist,
    professor: req.query.professor
  };

  await drawings.doc("" + newId).set(newDrawing);

  res.status(201);
  res.json({ id: newId });

  console.log(newDrawing);
});

app.listen(port, () => {
  console.log("App is running on http://localhost:" + port);
});
