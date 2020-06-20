import React, { Fragment } from 'react';
import Sector from './Sector.js';
import Industry from './Industry.js';
import CompanyDetails from '../CompanyDetails/CompanyDetails';
import './About.css';

const About = props => {
    return (
        <div className="aboutContainer">
            <h2 className="aboutTitle">About Company</h2>
            <div className="descriptionAndDetails">
                <div className="stock-description">
                    <div style={{marginBottom: 24}}>
                        <Sector value="Communications" />
                        <Industry value="Entertainment" />
                    </div>
                    {props.description}
                </div>
                <div className="details">
                    <CompanyDetails />
                </div>
            </div>
        </div>
    );
};


export default About;