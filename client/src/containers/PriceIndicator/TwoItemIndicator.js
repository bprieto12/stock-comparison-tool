import React, { Fragment } from 'react';
import './PriceIndicator.css';

const TwoItemIndicator = (props) => {
    return (
        <Fragment>
            <h3 className="main-content">{props.content}</h3>
            <div className="small-cotent">{ props.subcontent }</div>
        </Fragment>
    );
};

export default TwoItemIndicator;