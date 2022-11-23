import React from "react";
import { ToggleTheme } from "./ThemeButton";
import { TodoContext } from "./TodoContext/context";

function Header(){
    const { isLigthTheme } = React.useContext(TodoContext);

    return(
        <>
        {isLigthTheme && 
        <div className="header__bg--ligth">
         <div className="header__content">
            <h1>TODO</h1>
            <ToggleTheme/>
        </div>
        </div>}

        {!isLigthTheme &&
        <div className="header__bg--dark">
        <div className="header__content">
           <h1>TODO</h1>
           <ToggleTheme/>
        </div>
       </div>}
        </>
    )
}

export {Header};