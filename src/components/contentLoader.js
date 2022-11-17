import React from 'react';

const MyLoader = () => {
    return (
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
    )
}
  

export { MyLoader };