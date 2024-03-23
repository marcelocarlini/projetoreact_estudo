import { useState } from 'react';

function App1() {

    const [tarefa, setTarefa] = useState('');
    const [tarefas, setTarefas] = useState(['Minhas Tarefas']);
    function handleRegister(e) {
        e.preventDefault();
        alert('Tarefa adicionada');
        setTarefas([...tarefas, tarefa]);
        setTarefa('');

    }



    return (
        <div>
            <h1>Lista de tarefas</h1>
            <form onSubmit={handleRegister}>
                <label>Tarefa:</label><br />
                <input placeholder="Insira sua tarefa" value={tarefa} onChange={(e) => setTarefa(e.target.value)} /><br /><br />
                <button type='submit'>Salvar</button>

            </form>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
        </div>

    );
}

export default App1;