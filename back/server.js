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
  let respuesta = discos.discos;
  if (req.query.artista) {
    let artista = req.query.artista;
    respuesta = respuesta.filter(function (elemento) {
      return elemento.artista == artista;
    });
  }
  if (req.query.titulo) {
    let titulo = req.query.titulo;
    respuesta = respuesta.filter(function (elemento) {
      return elemento.titulo == titulo;
    });
  }
  if (req.query.ano) {
    let ano = req.query.ano;
    respuesta = respuesta.filter(function (elemento) {
      return elemento.lanzamiento == ano;
    });
  }
  console.log(respuesta);
  res.send(respuesta);
});

app.listen(port, function () {
  console.log(`escuchando el puerto: ${port}`);
});
