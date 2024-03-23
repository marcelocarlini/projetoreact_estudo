
import { useState } from 'react';


function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [user, setUser] = useState('');

  function handleRegister(e) {
    e.preventDefault();
    alert('Usuário salvo com sucesso');
    setUser({
      nome: nome,
      email: idade,
      idade: email,
    })
  }


  return (
    <div>
      <h1>Cadastrando usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome:</label><br />
        <input placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />/<br />

        <label>Email::</label><br />
        <input placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />

        <label>Idade:</label><br />
        <input placeholder="Digite seu idade" value={idade} onChange={(e) => setIdade(e.target.value)} /> <br />
        <button type='submit'>Salvar</button>
      </form>
      <br /><br />
      <div>
        <span>Bem vindo : {user.nome}</span><br />
        <span>E-mail: {user.email}</span><br />
        <span>Idade: {user.idade}</span><br />

      </div>
    </div >
  );
}

export default App;

