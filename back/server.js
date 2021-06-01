const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const discos = require("./discos.json");
// app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../front")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/index.html"));
});

app.get("/disco", (req, res) => {
  let artista = req.query.artista;
  let titulo = req.query.titulo;
  let ano = req.query.ano;
  console.log(discos.artista);
  res.json(discos);
});

app.listen(port, function () {
  console.log(`escuchando el puerto: ${port}`);
});
