import React from 'react';
import Detail from './Detail.js';

const CompanyDetails = (props) => {
    return (
        <div>
            <Detail label="# Full Time Employees" value="120,000" />
            <Detail label="Location" value="Anaheim, CA" />
            <Detail label="Website" value="disney.com" />
        </div>
    );
};

export default CompanyDetails;