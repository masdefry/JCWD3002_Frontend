import React from 'react';

function MemoChild(props){
    return (
        <section id='child'>
            <h1 className='text-3xl font-bold mt-10'>
                Section Child
            </h1>
            <p>
                {props.any}
            </p>
        </section>
    )
}

export default React.memo(MemoChild)