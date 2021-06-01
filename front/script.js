const inputArtista = document.getElementById("inputArtista");
const inputTitulo = document.getElementById("inputTitulo");
const inputAno = document.getElementById("inputAno");
const btnBuscarDisco = document.getElementById("btnBuscarDisco");
const tarjetas = document.getElementById("tarjetas");

btnBuscarDisco.addEventListener("click", function () {
  let artista = inputArtista.value;
  let ano = inputAno.value;
  let tutulo = inputTitulo.value;

  tarjetas.innerHTML = "";

  const xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function () {
    const response = JSON.parse(xhr.responseText);
    response.forEach((element) => {
      const tarjeta = document.createElement("div");
      const txtArtista = document.createElement("h2");
      const txtTitulo = document.createElement("h3");
      const txtLanzamiento = document.createElement("h4");
      const img = document.createElement("img");
      txtArtista.textContent = element.artista;
      txtTitulo.textContent = element.titulo;
      txtLanzamiento.textContent = element.lanzamiento;
      img.src = element.tapa;
      tarjeta.appendChild(txtArtista);
      tarjeta.appendChild(txtTitulo);
      tarjeta.appendChild(txtLanzamiento);
      tarjeta.appendChild(img);
      tarjeta.classList.add("tarjeta");
      tarjetas.appendChild(tarjeta);
    });
  });
  xhr.open("GET", `disco?artista=${artista}&titulo=${tutulo}&ano=${ano}`);
  xhr.send();
});

//
