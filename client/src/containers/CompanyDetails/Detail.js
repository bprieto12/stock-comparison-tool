import React from 'react';
import './Details.css';

const Detail = (props) => {
    return (
        props.value ? 
        <div className="Details">
            <div>{props.label}</div>
            <div><b>{props.value}</b></div>
        </div> : ""
    );
};

export default Detail;