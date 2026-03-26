const alunoUm = {
  nome: "Jose",
  idade: 22,
  curso: "Eng. Software",
  endereco: {
    rua: "Elias Abraao",
    numero: 91,
  },
};

const listadefrutas = [
    "🍇", "🍗","🍰","🥞","🥞","🥞"
]

const listanumero = [
    20, 10, 30, 22
]

const valorees = [
    30, 13, 40, 25
]

// const listaDePalavras = [
//     "Pedra", "Papel","Tesoura","Nada"
// ]

// const listaObjetos = [
//     "🍇", "🍗","🍰","🥞", emocao = ["😒","😍","❤️","🤣"]
     
// ]

// for (let index = 2; index < listadefrutas.length; index++) {
//     const element = listadefrutas[index];

// }

const listaAbacates = listadefrutas.map(fruta => "🥑")
const listaVezesDois = listanumero.map(valor => valor * 2)
const listabolo = listadefrutas.filter(fruta => fruta == "🥞")
const valorTotal = valorees.reduce(
    (valorAnterior, valorAtual) => valorAnterior + valorAtual, 0
)

console.log(valorTotal)
// console.log(listabolo)
// console.log(listaAbacates)
// console.log(listaVezesDois)


// console.log(emocao);

// console.log(listadefrutas);
// console.log(listanumero);
// console.log(listaDePalavras);

// console.log(alunoUm.endereco.rua);

// alunoUm.nome = "Cleber";

// console.log(alunoUm.nome);
