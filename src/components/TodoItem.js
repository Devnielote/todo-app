import React from "react";
import iconCheck from "../images/icon-check.svg";
import iconCross from "../images/icon-cross.svg";
import { TodoContext } from "./TodoContext/context";

function TodoItem(props) {
  const isTaskCompleted = props.isTaskComplete;
  const {isLigthTheme} = React.useContext(TodoContext);

  return (
    <>
      {
        isTaskCompleted && isLigthTheme &&
        <li className="standar-container--completed--white">
          <span onClick={props.onComplete}>
            <img src={iconCheck} alt="" />
          </span>
          <p>{props.text}</p>
          <span onClick={props.onDelete}>
            <img src={iconCross} alt="" />
          </span>
        </li>
      }
      {
        isTaskCompleted && !isLigthTheme &&
        <li className="standar-container--completed">
          <span onClick={props.onComplete}>
            <img src={iconCheck} alt="" />
          </span>
          <p>{props.text}</p>
          <span onClick={props.onDelete}>
            <img src={iconCross} alt="" />
          </span>
        </li>
      }
      {!isTaskCompleted && isLigthTheme &&
       <li className="standar-container--white">
       <span onClick={props.onComplete}>
         <img src={iconCheck} alt="" />
       </span>
       <p>{props.text}</p>
       <span onClick={props.onDelete}>
         <img src={iconCross} alt="" />
       </span>
     </li>
      }
      {!isTaskCompleted && !isLigthTheme &&
         <li className="standar-container">
         <span onClick={props.onComplete}>
           <img src={iconCheck} alt="" />
         </span>
         <p>{props.text}</p>
         <span onClick={props.onDelete}>
           <img src={iconCross} alt="" />
         </span>
       </li>
      }
      {/* {isTaskCompleted && isLigthTheme ? 
        <li className="standar-container--completed--white">
          <span onClick={props.onComplete}>
            <img src={iconCheck} alt="" />
          </span>
          <p>{props.text}</p>
          <span onClick={props.onDelete}>
            <img src={iconCross} alt="" />
          </span>
        </li>
       : 
        <li className="standar-container--white">
          <span onClick={props.onComplete}>
            <img src={iconCheck} alt="" />
          </span>
          <p>{props.text}</p>
          <span onClick={props.onDelete}>
            <img src={iconCross} alt="" />
          </span>
        </li>
      } */}
    </>
  );
}

export { TodoItem };
