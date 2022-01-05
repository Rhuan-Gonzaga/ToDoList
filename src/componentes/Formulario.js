import React, { useState } from "react";


function Formulario(props){

    //Valores do input
    const [texto,setTexto] = useState("")
    
    //Função cria uma tarefa
    function tarefas(event){
        let  valorTarefa = event.target.value;
        setTexto(valorTarefa)
    }


    //Frunção cria uma nova tarefa, sem excluir as anteriores
    function novaTarefa(event){
        event.preventDefault();
        if(texto){
            props.addItem(texto);
            setTexto("");
        }
       
    }

    return(
        <form>
            <input onChange={tarefas}type="text" value={texto}></input>
            <button onClick={novaTarefa}>ADD</button>
        </form>
    )
}

export default Formulario;