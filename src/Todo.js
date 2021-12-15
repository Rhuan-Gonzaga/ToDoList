import React, { useState } from "react";
import "./Todo.css";

function Todo(){

    const [texto,setTexto] = useState("")

    function addItems(event){
        let txt = event.target.value;
        setTexto(txt)
    }

    return(
        <div className="container">
            <h1>Teste</h1>
            <form>
                <input onChange={addItems}type="text"></input>
                <button>ADD</button>
            </form>

            <ul>
                <li>{texto}</li>
            </ul>
        </div>
       
    )
}


export default Todo;