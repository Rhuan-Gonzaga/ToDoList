import React from "react";


function Lista(props){

    return(
        <ul>
            {/*Criando uma lista de tarefas*/}
            {props.tarefasAtual.map(tarefa => <li>{tarefa}</li>)}
        </ul>
    )

}


export default Lista;