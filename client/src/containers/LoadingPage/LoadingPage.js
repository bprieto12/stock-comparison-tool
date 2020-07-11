import React from 'react';
import "./LoadingPage.css";

function LoadingPage(props) {
    return (
        <div className="LoadingPage">
            <div className="LoadingContent">
                <p style={{marginTop: 0, textAlign: "center", fontSize: 28, color: "#486581"}}>Gathering stock data...</p>
                <div className="loader"></div>
            </div>
        </div>
    );
}

export default LoadingPage;