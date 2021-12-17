import React, { useState } from "react";
import "./Todo.css";
import Lista from "./Lista";
import Formulario from "./Formulario";

function Todo(){
    
    //Tarefas Adicionadas
    const [tarefasAtual, setTarefasAtual] = useState([]);
    
    function addItem(item){
      setTarefasAtual([...tarefasAtual,item]);
    }

    return(
        <div className="container">
            <h1>Teste</h1>
            <Formulario addItem={addItem}></Formulario>

            <Lista tarefasAtual={tarefasAtual}></Lista>
        </div>
       
    )
}

export default Todo;