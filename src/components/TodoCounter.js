import React from 'react';

function TodoCounter({count, completed}) {
    return (
        <>
        <div className='standar-container TodoCounter'>
        <p>{count} items left</p>
        <p>{completed} item completed</p>
        </div>
        </>
    )
}

export {TodoCounter};