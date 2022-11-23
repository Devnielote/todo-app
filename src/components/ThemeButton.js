import React, {useState} from "react";
import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';
import { TodoContext } from "./TodoContext/context";

function ToggleTheme() {
    const { isLigthTheme, toggleTheme } = React.useContext(TodoContext);
    
    return(
        <>
        {!isLigthTheme && <button onClick={toggleTheme} className="themeToggle"><img src={sun} alt="sun icon" /></button>}
        {isLigthTheme && <button onClick={toggleTheme} className="themeToggle"><img src={moon}alt='moon icon'></img></button>}
        </>
    )
}

export { ToggleTheme };

