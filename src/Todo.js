import React, { useEffect, useState } from "react";
import "./Todo.css";
import Item from "./componentes/item";
import Lista from "./componentes/Lista";
import Formulario from "./componentes/Formulario";
import Modal from "./componentes/Modal";

const ITEM_SALVO = "Itemsalvo";

function Todo(){
    
    const [mostrarModal, setMostrarModal] = useState(false);

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
    

    function onHideModal(e){
        let target = e.target;
        if(target.id == "modal"){
            setMostrarModal(false)
        }
        console.log(target)
    }

    return(
        <div className="container">
           <header className="header"><h1>To-do List</h1><button className="addButton" onClick={()=>{setMostrarModal(true)}}>+</button></header> 
          
            <Lista feitoClicado={feitoClicado} deletado={deletado} tarefasAtual={tarefasAtual}></Lista>
            <Modal mostrar={mostrarModal} onHideModal={onHideModal}> <Formulario addItem={addItem}></Formulario></Modal>
        </div>
       
    )
}

export default Todo;