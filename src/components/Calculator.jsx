import React, { useState } from 'react';
import CalcButton from './CalcButton';
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
                var ans;
                try {
                    ans = eval(question);
                }
                catch (err) {
                    setA("Math Error");
                }
                if (ans === undefined) {
                    setA("Math Error");
                }
                else {
                    setA(ans);
                    setQ("");
                }
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
        <div className='calculator-outer'>
            <div className='calculator-main'>
                <OutputScreen question={question} answer={answer} />
                {nos.map(n => {
                    return <div className='button-row'>{n.map(i => { return <CalcButton Label={i} OnClick={handleClick} />; })}</div>
                })}
            </div>
        </div>
    );
}

export default Calculator;