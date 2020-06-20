import React, { Fragment } from 'react';
import './PriceIndicator.css';

const OneItemIndicator = (props) => {
    return (
        <Fragment>
            <h3 className="main-content one-value-container">{props.value}</h3>
        </Fragment>
    );
};

export default OneItemIndicator;