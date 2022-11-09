import React from "react";

function TodoAddItem(props) {
    const onClickButton = (msg) => {
        alert(msg);
    };
    return (
        <>
        <button
        onClick={() => onClickButton('Modal abierto')}
        className="standar-container addItemButton"> <span></span> Create a new todo</button>
        </>
    )
}

export {TodoAddItem};
