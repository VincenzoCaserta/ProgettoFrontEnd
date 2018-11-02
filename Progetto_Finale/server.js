const express = require('express');
const app = express();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./ajax-vini.json')
const db = low(adapter);

app.use(express.static('dist'));
app.use(express.json());

app.post('/vino', function (req, res) {
  db.get('vini')
    .push(req.body)
    .write();
  res.send("Vino Inserito");
});

app.get('/vini', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(db);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
