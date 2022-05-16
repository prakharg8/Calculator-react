import React from 'react';
import OutputScreenRow from './OutputScreenRow';

function OutputScreen(props) {
    return (
        <div className='screen'>
            <OutputScreenRow Value={props.question} />
            <OutputScreenRow Value={props.answer} />
        </div>
    );
}

export default OutputScreen;