import React from "react";
import Cartao from "./Tarefa";

function FeitoImg(props){
    if(props.feito){
       return (<img alt="nFeito" src="./assets/on.png"></img>)
    }
    else{
        return (<img alt="feito" src="./assets/off.png"></img>)
        
    }
}

function ListaItem(props){

    return(
      
        
            <li>
                <Cartao className={props.tarefa.feito ? "item" : "item"}>
                    {props.tarefa.texto}
                    <div>
                        <button onClick={()=>{props.feitoClicado(props.tarefa)}}><FeitoImg feito={props.tarefa.feito}></FeitoImg></button>
                        <button onClick={()=>{props.deletado(props.tarefa)}}><img alt="lixeira" src="./assets/bin.png"></img></button>
                    </div>
                </Cartao>
            </li>)
    
}


export default ListaItem;