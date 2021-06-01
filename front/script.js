const inputArtista = document.getElementById("inputArtista");
const inputTitulo = document.getElementById("inputTitulo");
const inputAno = document.getElementById("inputAno");
const btnBuscarDisco = document.getElementById("btnBuscarDisco");
const tarjeta = document.getElementById("tarjeta");

btnBuscarDisco.addEventListener("click", function () {
  let artista = inputArtista.value;
  let ano = inputAno.value;
  let tutulo = inputTitulo.value;
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function () {
    const response = JSON.parse(xhr.responseText);
    console.log(response[0]);
  });
  xhr.open("GET", `/disco?artista=${artista}&ano=${ano}&titulo=${tutulo}`);
  xhr.send();
});

//
