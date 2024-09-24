import React from 'react';

function ButtonChild(props){
    return(
        <button onClick={props.any} className='btn bg-green-500 text-white rounded-md p-3'>
            Increment [+]
        </button>
    )
}

export default React.memo(ButtonChild)