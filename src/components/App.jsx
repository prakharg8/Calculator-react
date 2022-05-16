import React from 'react';
import Calculator from './Calculator';

function App() {
    const title = "Calculator";
    return (
        <div>
            <h1 className='calculator-title'>{title}</h1>
            <Calculator />
        </div>
    );
}

export default App;