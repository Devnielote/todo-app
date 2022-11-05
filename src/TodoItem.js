import React, { useEffect } from "react";
import { useState } from "react";
import iconCheck from './images/icon-check.svg';
import iconCross from './images/icon-cross.svg';


function TodoItem(props) {

const isTaskCompleted = props.isTaskComplete

const onComplete = () => {

    alert(props.text + ' - (completed)')
}

const onDelete = () => {
    alert(props.text + ' - (deleted)')
}


// const isComplete = props.check;

    return(
        <>
        {isTaskCompleted
            ? <li className="standar-container--completed">
            <span
            onClick={onComplete} 
            ><img src={iconCheck} alt="" /></span>
            <p>{props.text}</p>
            <span
            onClick={onDelete}
            ><img src={iconCross} alt="" /></span>
            </li>
            :<li className="standar-container">
            <span
            onClick={onComplete}
            ><img src={iconCheck} alt="" /></span>
            <p>{props.text}</p>
            <span
            onClick={onDelete}
            ><img src={iconCross} alt="" /></span>
            </li>}
        
        </>
    )
}

export {TodoItem};