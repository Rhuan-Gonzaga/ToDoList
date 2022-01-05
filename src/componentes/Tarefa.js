import React from "react";

function Cartao(props){
    return <div className={props.classsName? `${props.className} feito` : "item"}>
        {props.children}
    </div>
}

export default Cartao;