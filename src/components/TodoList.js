import React from "react";

function TodoList(props) {

      
    return(
        <>
        <ul className="todoList">
            {props.children}
        </ul>
        </>
    )
}

export {TodoList};