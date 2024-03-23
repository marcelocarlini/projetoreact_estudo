import Nome from "./components/nome";
import { useState } from 'react';


function App() {
  const [aluno, setAluno] = useState('Teste useState')

  function trocaNome(nome) {
    setAluno(nome)
  }


  return (
    <div>
      <h1>testes</h1>
      <h2> Olá: {aluno}</h2>
      <button onClick={() => trocaNome('Marcelo')}>
        Mudar Nome
      </button>

    </div>
  );
}

export default App;
.
