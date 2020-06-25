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
                        <Sector value={props.sector} />
                        <Industry value={props.industry} />
                    </div>
                    {props.description}
                </div>
                <div className="details">
                    <CompanyDetails num_employees={props.num_employees}
                                    location={props.location}
                                    website={props.website} />
                </div>
            </div>
        </div>
    );
};


export default About;