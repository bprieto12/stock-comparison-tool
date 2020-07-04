import React from 'react';
import './PriceIndicator.css';

const PriceIndicator = (props) => {
    return (
        <div className="price-indicator-container">
            <div className="name-container">{props.indicatorName}</div>
            <div className="content-container">{props.indicatorContent}</div>
        </div>
    );
};

export default PriceIndicator;