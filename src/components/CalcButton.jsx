import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function CalcButton(props) {
    function handleClick(event) {
        props.OnClick(event);
    }
    return (
        // <input type='button' value={props.Label} onClick={handleClick} />
        <Button className='button' variant="outlined" onClick={handleClick} value={props.Label}>{props.Label}</Button>
    );
}

export default CalcButton;