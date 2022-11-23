import React from 'react';
import { TodoContext } from './TodoContext/context';

const MyLoader = () => {
    const { isLigthTheme } = React.useContext(TodoContext);
    return (
        <>
        {isLigthTheme && 
        <div className="standar-container--loading--white">
            <div className="loader-container">
                <div className="mask--white"></div>
                <div className="loader-bar--white"></div>
            </div>
            <div className="loader-container">
                <div className="mask--white"></div>
                <div className="loader-bar--white"></div>
            </div>
            <div className="loader-container">
                <div className="mask--white"></div>
                <div className="loader-bar--white">
                </div>
            </div>
        </div>
        }
        {!isLigthTheme && 
        <div className="standar-container--loading">
            <div className="loader-container">
                <div className="mask"></div>
                <div className="loader-bar"></div>
            </div>
            <div className="loader-container">
                <div className="mask"></div>
                <div className="loader-bar"></div>
            </div>
            <div className="loader-container">
                <div className="mask"></div>
                <div className="loader-bar">
                <div className="mask"></div>
                </div>
            </div>
        </div>
        }
        </>
    )
}
  

export { MyLoader };