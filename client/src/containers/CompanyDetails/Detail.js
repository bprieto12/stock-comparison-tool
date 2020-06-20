import React from 'react';

const Detail = (props) => {
    return (
        <div style={{color: "#829AB1", fontSize: 24, textAlign: "center", marginBottom: 32}}>
            <div>{props.label}</div>
            <div><b>{props.value}</b></div>
        </div>
    );
};

export default Detail;