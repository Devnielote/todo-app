import React from 'react';
import { TodoContext } from './TodoContext/context';

function TodoCounter() {
    const { count, completedTodosLength } = React.useContext(TodoContext);
    
    return (
        <>
        <div className='standar-container TodoCounter'>
        <p>{count} items left</p>
        {completedTodosLength <= 1 && <p
        onClick={() => alert('Erase completed items')}
        >{completedTodosLength} item completed</p>}
        {completedTodosLength > 1 && <p
        onClick={() => alert('Erase completed items')}
        >{completedTodosLength} items completed</p>}
        </div>
        </>
    )
}

export {TodoCounter};