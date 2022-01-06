import React, { useEffect, useState } from "react";
import "./Todo.css";
import Item from "./componentes/item";
import Lista from "./componentes/Lista";
import Formulario from "./componentes/Formulario";

const ITEM_SALVO = "Itemsalvo";

function Todo(){
    
    //Tarefas Adicionadas
    const [tarefasAtual, setTarefasAtual] = useState([]);
    
    useEffect(()=>{
        let salvandoItems = JSON.parse(localStorage.getItem(ITEM_SALVO));
        if(salvandoItems){
            setTarefasAtual(salvandoItems);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem(ITEM_SALVO, JSON.stringify(tarefasAtual));
    },[tarefasAtual])

    function addItem(texto){
      let item = new Item(texto);
      setTarefasAtual([...tarefasAtual,item]);
    }

    function deletado(item){
        let filtrar = tarefasAtual.filter(it=>it.id != item.id);
        setTarefasAtual(filtrar);
    }

    function feitoClicado(item){
        let atualizar = tarefasAtual.map(it=>{
            if(it.id === item.id){
                it.feito = !it.feito;
            }
            return it;
        })
        setTarefasAtual(atualizar);
    }  
    

    return(
        <div className="container">
            <h1>To-do List</h1>
            <Formulario addItem={addItem}></Formulario>

            <Lista feitoClicado={feitoClicado} deletado={deletado} tarefasAtual={tarefasAtual}></Lista>
        </div>
       
    )
}

export default Todo;