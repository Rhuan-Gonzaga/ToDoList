import React from "react";
import ListaItem from "./Listaitem";



function Lista(props){

    return(
        <ul>
            {/*Criando uma lista de tarefas*/}
            {props.tarefasAtual.map(tarefa => <ListaItem key={tarefa.id} tarefa={tarefa} feitoClicado={props.feitoClicado} deletado={props.deletado}></ListaItem>)}
        </ul>
    )

}


export default Lista;