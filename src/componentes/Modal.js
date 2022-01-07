import React, { useState } from "react";
import Cartao from "./Tarefa";

function Modal(props){

    const [mostrar,setMostrar] = useState(true);



    return(
        <div id="modal" onClick={props.onHideModal} className={props.mostrar? "modal": "modal hideModal"}>
            <Cartao>
                {props.children}
            </Cartao>
        </div>
    )
}

export default Modal;