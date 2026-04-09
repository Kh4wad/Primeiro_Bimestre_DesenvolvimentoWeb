import { use, useState } from "react";
import Cabecalho from "./components/Cabecalho";

export default function App() {
// let contador = 0;

const[contador, setContador] = useState(0);

const[resetar, setResetar] = useState(0);
function incrementar(){
setContador(contador + 1);
// contador = novoValor
// console.log(contador + 1);
}

function reiniciar(){
  setContador(0);
}

  return (
    <main>
      <Cabecalho titulo="Cabecalho - Contador com React"/>
      <Cabecalho titulo="Segundo Cabeçalho"/>
      <h2>
        {contador}
      </h2>
      <button onClick={incrementar}>
        Incrementar
      </button>

      <button onClick={reiniciar}>
        Reiniciar
      </button>
    </main>

  );
}