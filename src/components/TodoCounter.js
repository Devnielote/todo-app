import React from 'react';
import { TodoContext } from './TodoContext/context';

function TodoCounter() {
    const { count, completedTodosLength } = React.useContext(TodoContext)
    return (
        <>
        <div className='standar-container TodoCounter'>
        <p>{count} items left</p>
        <p>{completedTodosLength} items completed</p>
        </div>
        </>
    )
}

export {TodoCounter};