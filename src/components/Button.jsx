import React from 'react';

function Button(props) {
    function handleClick(event) {
        props.OnClick(event);
    }
    return (
        <input type='button' value={props.Label} onClick={handleClick} />
    );
}

export default Button;