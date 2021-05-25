const express = require("express");
const app = express();
const port = 3000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname));

app.listen(port, function () {
  console.log(`escuchando el puerto: ${port}`);
});
