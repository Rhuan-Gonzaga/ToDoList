import React from "react";



function FeitoImg(props){
    if(props.feito){
       return (<img src="./assets/on.png"></img>)
    }
    else{
        return (<img src="./assets/off.png"></img>)
        
    }
}

function Lista(props){

    return(
        <ul>
            {/*Criando uma lista de tarefas*/}
            {props.tarefasAtual.map(tarefa => 
            <li className={tarefa.feito ? "feito" : " "} key={tarefa.id}>
                {tarefa.texto}
                <button onClick={()=>{props.feitoClicado(tarefa)}}><FeitoImg feito={tarefa.feito}></FeitoImg></button>
                <button onClick={()=>{props.deletado(tarefa)}}><img src="./assets/bin.png"></img></button>

            </li>)}
        </ul>
    )

}


export default Lista;