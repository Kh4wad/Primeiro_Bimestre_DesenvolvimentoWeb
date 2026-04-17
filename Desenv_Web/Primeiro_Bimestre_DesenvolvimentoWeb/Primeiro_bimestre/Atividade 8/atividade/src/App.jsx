import { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [listaitem, setListaitem] = useState([
    { id: 1, text: 'Aprender Hooks' },
    { id: 2, text: 'Aprender Listas' },
    { id: 3, text: 'Aprender componentes' },
    { id: 4, text: 'Aprender React' } 
  ]);


  const adicionarItem = (e) => {
    e.preventDefault();

    if (input.trim() === '') {
      return;
    }

    const novoItem = {
      id: Date.now(),
      text: input
    };

    setListaitem([...listaitem, novoItem]);
    setInput('');
  }

  const deletarItem = (idRemov) => {
    const ListaNova = listaitem.filter(lista => lista.id !== idRemov);
    setListaitem(ListaNova);
  }

  return (
    <div>
      <form onSubmit={adicionarItem}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite algo..."
        />
  
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {listaitem.map((I) => (
          <li key={I.id}> {I.id} {I.text} 
            <button onClick={() => deletarItem(I.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
