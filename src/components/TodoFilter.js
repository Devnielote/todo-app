import React from "react";
import { TodoContext } from "./TodoContext/context";

function TodoFilter(props) {
  const { toggleFilterAll, toggleFilterActive, toggleFilterCompleted, isLigthTheme } = React.useContext(TodoContext)
    return(
        <>
        {isLigthTheme &&
          <div className="standar-container--white todoFilter">
          <label>
          <input type={'checkbox'} id={'allTodos'} defaultChecked={true} onClick={() => {
            toggleFilterAll();
            document.querySelector('#allTodos').checked = true;
            document.querySelector('#completedTodos').checked = false;
            document.querySelector('#activeTodos').checked = false;
          }}/>
          <span>All</span>
          </label>
          <label>
          <input type={'checkbox'} id={'activeTodos'} onClick={() => {
            toggleFilterActive();
            document.querySelector('#activeTodos').checked = true;
            document.querySelector('#allTodos').checked = false;
            document.querySelector('#completedTodos').checked = false;
          }}/>
          <span>Active</span>
          </label>
          <label>
          <input type={'checkbox'} id={'completedTodos'} onClick={() => {
            toggleFilterCompleted();
            document.querySelector('#completedTodos').checked = true;
            document.querySelector('#allTodos').checked = false;
            document.querySelector('#activeTodos').checked = false;
          }}/>
          <span>Completed</span>
          </label>
          </div>
        }

        {!isLigthTheme &&
          <div className="standar-container todoFilter">
          <label>
          <input type={'checkbox'} id={'allTodos'} defaultChecked={true} onClick={() => {
            toggleFilterAll();
            document.querySelector('#allTodos').checked = true;
            document.querySelector('#completedTodos').checked = false;
            document.querySelector('#activeTodos').checked = false;
          }}/>
          <span>All</span>
          </label>
          <label>
          <input type={'checkbox'} id={'activeTodos'} onClick={() => {
            toggleFilterActive();
            document.querySelector('#activeTodos').checked = true;
            document.querySelector('#allTodos').checked = false;
            document.querySelector('#completedTodos').checked = false;
          }}/>
          <span>Active</span>
          </label>
          <label>
          <input type={'checkbox'} id={'completedTodos'} onClick={() => {
            toggleFilterCompleted();
            document.querySelector('#completedTodos').checked = true;
            document.querySelector('#allTodos').checked = false;
            document.querySelector('#activeTodos').checked = false;
          }}/>
          <span>Completed</span>
          </label>
          </div>
        }
        
        </>
    )
}

export {TodoFilter};