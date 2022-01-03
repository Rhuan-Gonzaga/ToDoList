import React from "react";


function Lista(props){

    function deletar(tarefa){
        console.log(tarefa)
    }

    return(
        <ul>
            {/*Criando uma lista de tarefas*/}
            {props.tarefasAtual.map(tarefa => 
            <li>
                {tarefa.texto}
                <button onClick={()=>{props.deletado(tarefa)}}>
                    <img src="aa"></img>
                </button>

            </li>)}
        </ul>
    )

}


export default Lista;