import React from 'react';

const Industry = (props) => {
    return (
        props.value ? 
            <div style={{display: "inline-block", marginLeft: 24, borderRadius: 14, fontSize: 16, color: "#51279B", backgroundColor: "#EAE2F8", padding: "8px 32px"}}>
                {props.value}
            </div> : ""
    );
};

export default Industry;