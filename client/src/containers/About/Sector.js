import React from 'react';

const Sector = props => {
    return (
        props.value ? 
            <div style={{display: "inline-block", borderRadius: 14, fontSize: 16, color: "#186FAF", backgroundColor: "#DCEEFB", padding: "8px 32px"}}>
                {props.value}
            </div> : ""
    );
};

export default Sector;