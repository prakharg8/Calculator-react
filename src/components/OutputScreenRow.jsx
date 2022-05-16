import React from 'react';

function OutputScreenRow(props) {
    return (
        <div className='screen-row'>
            <input type='text' readOnly value={props.Value} />
        </div>
    );
}

export default OutputScreenRow;