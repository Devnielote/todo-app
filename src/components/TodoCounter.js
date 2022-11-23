import React from 'react';
import { TodoContext } from './TodoContext/context';

function TodoCounter() {
    const { count, completedTodosLength, isLigthTheme } = React.useContext(TodoContext);
    
    return (
        <>
        {isLigthTheme &&
         <div className='standar-container--white TodoCounter--white'>
        <p>{count} items left</p>
        {completedTodosLength <= 1 && <p
        onClick={() => alert('Erase completed items')}
        >{completedTodosLength} item completed</p>}
        {completedTodosLength > 1 && <p
        onClick={() => alert('Erase completed items')}
        >{completedTodosLength} items completed</p>}
        </div>
        }

        {!isLigthTheme &&
         <div className='standar-container TodoCounter'>
        <p>{count} items left</p>
        {completedTodosLength <= 1 && <p
        onClick={() => alert('Erase completed items')}
        >{completedTodosLength} item completed</p>}
        {completedTodosLength > 1 && <p
        onClick={() => alert('Erase completed items')}
        >{completedTodosLength} items completed</p>}
        </div>
        }
       
        </>
    )
}

export {TodoCounter};