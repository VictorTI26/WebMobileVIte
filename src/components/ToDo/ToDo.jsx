import "./ToDo.css";
import { useState } from 'react';

function ToDo(){
    const [tasks, setTasks] = useState([])
    const [taskText, setTaskText] = useState('')

    const addTask = () => {
        if (taskText) {
            setTasks([...tasks, taskText]);
            setTaskText ('');
        }
    };

    return(
        <div className="ToDo">            
            <h1>Minha lista de tarefas</h1>
            <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} placeholder="Adicione uma tarefa"/>
            <button onClick={addTask}>Adicionar</button>
            <ul>
            {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
    );
}

export default ToDo;