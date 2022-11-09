import React, { useEffect } from "react";

function TodoFilter(props) {
    return(
        <>
        <div className="standar-container todoFilter">
        <label>
        <input type={'checkbox'} id={'allTodos'} defaultChecked={true} onClick={() => {
          props.filterAllFunc();
        }}/>
        <span>All</span>
        </label>
        <label>
        <input type={'checkbox'} id={'activeTodos'} onClick={() => {
          props.filterActiveFunc();
        }}/>
        <span>Active</span>
        </label>
        <label>
        <input type={'checkbox'} id={'completedTodos'} onClick={() => {
          props.filterCompletedFunc();
        }}/>
        <span>Completed</span>
        </label>
        </div>
        </>
    )
}

export {TodoFilter};