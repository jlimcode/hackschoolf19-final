const express = require('express');
const app = express();

app.use(express.static(__dirname + "/build"));

app.listen(9000);
console.log("Listening on port 9000.");