import React from 'react';
import Detail from './Detail.js';

const CompanyDetails = (props) => {
    return (
        <div>
            <Detail label="# Full Time Employees" value={props.num_employees} />
            <Detail label="Location" value={props.location} />
            <Detail label="Website" value={props.website} />
        </div>
    );
};

export default CompanyDetails;