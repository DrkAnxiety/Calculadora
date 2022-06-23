import React from 'react';
import '../styleSheets/Boton.css';

function Boton(props) {

    const isOperando = value => {
        return ((isNaN(value)) && (value !== '.') && (value !== '='));
    };
    
    return (
        <div
            className={`boton-contenedor ${isOperando(props.children) ? 'operador' : ''}`.trim()}
            onClick={() => props.clickFunction(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;