const express = require('express');
const app = express();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./ajax-article.json')
const db = low(adapter);

const bodyParser = require('body-parser');

app.use(express.static('dist'));
app.use(bodyParser.json());


app.post('/articolo', function (req, res) {
  db.get('articoli')
    .push(req.body)
    .write();
  res.send("Articolo Inserito");
});

app.get('/articles', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(db);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
