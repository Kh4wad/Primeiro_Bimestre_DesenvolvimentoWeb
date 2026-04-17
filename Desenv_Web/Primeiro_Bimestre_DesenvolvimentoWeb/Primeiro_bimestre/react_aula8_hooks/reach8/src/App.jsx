import { useState } from "react";
import fuction from "./components/Button";

export default function App(){
  const produtos =[
    {
      id: 1, nome: "TecladoGamer - Aula F75", valor: 300,
    },
    {
      id: 2, nome: "Memoria Ram - KingsTon - 16", valor: 1400,
    }
  ]
  const [contador,setCotador] = useState(0);
    const [carregando,setCarregando] = useState(true);

  const[listaProdutos, setListaProdutos] = useState()


 function incrementar(){
setCotador(contador + 1);

 }
  return(
    <main id="container">
      {carregando ?
      <p>carregando...</p>
      : "falso"}
    <h1>Exemplo</h1>
    <p>{contador}</p>
    <Button funcao = {incrementar}
      texto="incrementar"/>
      <h3>produtos</h3>
{produtos.map(item => (
<span key={item.id}>
  <p>nome: {item.nome} </p>
  <p>Preco: {item.valor}</p>
</span>
))}
    </main>
  )
}