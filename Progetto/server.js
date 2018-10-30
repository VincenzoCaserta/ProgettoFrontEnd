const express = require('express');
const app = express();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./ajax-article.json')
const db = low(adapter);

app.use(express.static('dist'));
app.use(express.json());

app.post('/articolo', function (req, res) {
  db.get('articoli')
    .push(req.body)
    .write();
  res.send("Articolo Inserito");
});



app.post('/articles', function (req, res) {
  const idB = req.body.id;
  var like = (req.body.like === 'true');
  //console.log('log in arrivo dal client:' +like);
  //console.log('valore da inserire nel db:' + !like);
  db.get('articoli')
    .find({ id: Number(idB)})
    .assign({like: !like })
    .write();
  res.send('ok');
  });

app.get('/articles', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(db);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
