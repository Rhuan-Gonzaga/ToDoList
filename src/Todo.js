import React, { useState } from "react";
import "./Todo.css";

function Todo(){

    //Valores do input
    const [texto,setTexto] = useState("")
    //Tarefas Adicionadas
    const [tarefasAtual, setTarefasAtual] = useState([]);

    //Função cria uma tarefa
    function tarefas(event){
        let  valorTarefa = event.target.value;
        setTexto(valorTarefa)
    }

    //Frunção cria uma nova tarefa, sem excluir as anteriores
    function novaTarefa(event){
        event.preventDefault();
        if(texto){
            setTarefasAtual([...tarefasAtual,texto])
            setTexto("");
        }
       
    }

    return(
        <div className="container">
            <h1>Teste</h1>
            <form>
                <input onChange={tarefas}type="text" value={texto}></input>
                <button onClick={novaTarefa}>ADD</button>
            </form>

            <ul>
                {/*Criando uma lista de tarefas*/}
                {tarefasAtual.map(tarefa => <li>{tarefa}</li>)}
            </ul>
        </div>
       
    )
}


export default Todo;