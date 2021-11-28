const express = require("express");
const bp = require('body-parser');
const cors = require('cors');
const app = express();
const fs = require("fs");
const port = process.env.PORT || 3000;
const appointments = require('../data/appointments.json');

app.use(cors({
  origin: '*'
}));

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('ChatBot Automatización 2021 - 2 (Cristian Sánchez)');
});

app.get('/appointments', function (req, res) {
  var obj;
  fs.readFile('./data/appointments.json', 'utf8', function (err, data) {
    if (err) {
      console.log(err);
      throw err;
    }
    obj = JSON.parse(data);
    res.json(obj);
  });
});

// POST method route
app.post("/save", function (req, res) {
  console.log(req.body);
  saveFile(req.body, function (err) {
    if (err) {
      console.log(err);
      res.status(400).send("Error saving file");
      return;
    }
    res.send("saved");
  });
});

app.listen(port, function() {
  console.log('server up and running at port: %s', port);
});

function saveFile(data, callback) {
  fs.writeFile("./data/appointments.json", JSON.stringify(data), callback);
}