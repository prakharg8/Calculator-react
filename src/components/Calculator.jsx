import React, { useState } from 'react';
import Button from './Button';
import OutputScreen from './OutputScreen';

function Calculator() {
    const nos = [
        ['Clear', 'Delete', '.', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '=']
    ];
    const [question, setQ] = useState("");
    const [answer, setA] = useState("");
    function handleClick(event) {
        const value = event.target.value;
        switch (value) {
            case '=': {
                setA(eval(question));
                setQ("");
                break;
            }
            case 'Clear': {
                setQ("");
                setA("");
                break;
            }
            case 'Delete': {
                setQ(prev => { return prev.substring(0, prev.length - 1); });
                break;
            }
            default: {
                setQ(prev => { return prev += value; });
                break;
            }
        }
    }
    return (
        <div>
            <OutputScreen question={question} answer={answer} />
            {nos.map(n => {
                return <div>{n.map(i => { return <Button Label={i} OnClick={handleClick} />; })}</div>
            })}
        </div>
    );
}

export default Calculator;