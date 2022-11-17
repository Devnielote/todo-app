import React from "react";
import iconCheck from '../images/icon-check.svg';
import iconCross from '../images/icon-cross.svg';

function TodoItem(props) {

const isTaskCompleted = props.isTaskComplete
    return(
        <>
        
        {isTaskCompleted
            ? 
            <li className="standar-container--completed">
            <span
            onClick={props.onComplete} 
            ><img src={iconCheck} alt="" /></span>
            <p>{props.text}</p>
            <span
            onClick={props.onDelete}
            ><img src={iconCross} alt="" /></span>
            </li>
            :
            <li className="standar-container">
            <span
            onClick={props.onComplete} 
            ><img src={iconCheck} alt="" /></span>
            <p>{props.text}</p>
            <span
            onClick={props.onDelete}
            ><img src={iconCross} alt="" /></span>
            </li>}
        </>
    )
}

export {TodoItem};