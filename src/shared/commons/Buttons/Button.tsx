import React from 'react';

export interface IButton {
    typeClass?: string,     // primary, normal, success
    size?: string,          // small, normal, large
    btnContext: string,
    handleClick?: any,
    class?: string
}

function Button(props: IButton) {
    return (
        <button onClick={props.handleClick} className={props.typeClass + ' ' + props.size + ' ' + props.class}>
            {props.btnContext}
        </button>
    );
}

export default Button;