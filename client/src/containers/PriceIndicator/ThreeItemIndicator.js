import React, { Fragment } from 'react';
import './PriceIndicator.css';

const ThreeItemIndicator = (props) => {
    return (
        <Fragment>
            <div className="small-content">{`H ${props.high}`}</div>
            <h3 className="main-content">{props.middle}</h3>
            <div className="small-content">{`L ${props.low}`}</div>
        </Fragment>
    );
};

export default ThreeItemIndicator;