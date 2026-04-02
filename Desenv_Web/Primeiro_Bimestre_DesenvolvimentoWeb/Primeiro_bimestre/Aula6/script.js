// alert('Teste Show')

const { Children } = require("react");

console.log(document);
const titulo = document.querySelector("#titulo-principal");

titulo.textContent = "Alterado!";
titulo.classList.add("cor-verde");
// setTimeout(() => {
//     titulo.textContent = 'Mudou de novo!'
// }, 20000)

function criarElementos() {
  const titulo = document.querySelector("#titulo-principal");

  const container = document.getElementById("container");

  // container.style.backgroundColor = "yellow";
  const h1 = document.createElement("h1");
  h1.textContent = "Titulo 3";
  container.appendChild(h1);

  const p = document.createElement("p");
  p.textContent = "Texto aleatório";
  container.appendChild(p);
}

function criarTarefa(event) {
  event.preventDefault();
  const valorInput = event.target.children[1].value;
  const container = document.getElementById("container");
  const p = document.createElement("p");
  p.textContent = valorInput;
  container.appendChild(p);
}
// function removerElementos(){
//     const titulo = document.querySelector("#titulo-principal");
//     const container = document.getElementById("container");
//     container.removeChild(titulo);
//
