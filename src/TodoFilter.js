import React from "react";

function TodoFilter(props) {
    return(
        <>
        <div className="standar-container todoFilter">
        <label>
        <input type={'checkbox'} id={'allTodos'}/>
        <span>All</span>
        </label>
        <label>
        <input type={'checkbox'} id={'activeTodos'}/>
        <span>Active</span>
        </label>
        <label>
        <input type={'checkbox'} id={'completedTodos'} onClick={() => {
          props.filterCompleted = true;  
          console.log(props.filterCompleted);
        }}/>
        <span>Completed</span>
        </label>
        </div>
        </>
    )
}

export {TodoFilter};