import React from 'react';
import { TodoContext } from './TodoContext/context';

function TodoCounter() {
    const { count, isLigthTheme, deleteAllCompletedTodos } = React.useContext(TodoContext);
    
    return (
        <>
        {isLigthTheme &&
         <div className='standar-container--white TodoCounter--white'>
        <p>{count} items left</p>
        <p onClick={deleteAllCompletedTodos}>Clear completed</p>
        </div>
        }

        {!isLigthTheme &&
         <div className='standar-container TodoCounter'>
        <p>{count} items left</p>
        <p onClick={deleteAllCompletedTodos}>Clear completed</p>
        </div>
        }
       
        </>
    )
}

export {TodoCounter};