import React, { Fragment } from 'react';
import './PriceIndicator.css';

const ThreeItemIndicator = (props) => {
    return (
        <Fragment>
            <div className="small-content">{props.low}</div>
            <h3 className="main-content">{props.middle}</h3>
            <div className="small-content">{props.high}</div>
        </Fragment>
    );
};

export default ThreeItemIndicator;