import React from "react";

export function Square(props){
    return(
        <button className="w-100 m-0 h-100 text-capitalize "  onClick={() => props.handleclick(props.pos)} >
            {props.value}
        </button>
    );
}