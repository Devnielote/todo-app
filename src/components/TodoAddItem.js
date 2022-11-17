import React from "react";
import { TodoContext } from "./TodoContext/context";

function TodoAddItem(props) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const { addTodo } = React.useContext(TodoContext);

    // const { setOpenModal } = useContext(TodoContext);
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if(newTodoValue.length >= 1){
            addTodo(newTodoValue);
            setNewTodoValue('')
        } else {
            alert('Please write something')
        }
    };

    return (
        <>
        {/* <button
        onClick={() => setOpenModal(true)}
        className="standar-container addItemButton"> <span></span> Create a new todo</button> */}
        <form id="newTodoForm" action="">
            <input
            type="text"
            value={newTodoValue}
            onChange={onChange}
            className="standar-container addItemButton"
            placeholder={"Create a new todo"}
            />
            <button type="submit" onClick={onSubmit}></button>
        </form>
        </>
    )
}

export {TodoAddItem};
