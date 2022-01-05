import React, { useState } from "react";
import "./Todo.css";
import Item from "./componentes/item";
import Lista from "./componentes/Lista";
import Formulario from "./componentes/Formulario";

function Todo(){
    
    //Tarefas Adicionadas
    const [tarefasAtual, setTarefasAtual] = useState([]);
    
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
            <h1>Teste</h1>
            <Formulario addItem={addItem}></Formulario>

            <Lista feitoClicado={feitoClicado} deletado={deletado} tarefasAtual={tarefasAtual}></Lista>
        </div>
       
    )
}

export default Todo;