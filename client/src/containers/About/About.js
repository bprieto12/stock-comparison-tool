import React, { Component, Fragment } from 'react';
import Sector from './Sector.js';
import Industry from './Industry.js';
import CompanyDetails from '../CompanyDetails/CompanyDetails';
import './About.css';

const About = props => {
    return (
        <div className="aboutContainer">
            <h2 className="aboutTitle">About Company</h2>
            <div className="descriptionAndDetails">
                <div style={{marginBottom: 24}}>
                    <Sector value={props.sector} />
                    <Industry value={props.industry} />
                </div>
                <StockDescription description={props.description} />
                <div className="details">
                    <CompanyDetails num_employees={props.num_employees}
                                    location={props.location}
                                    website={props.website} />
                </div>
            </div>
        </div>
    );
};

class StockDescription extends Component {
    state = {
        show_full: false
    }

    render() {
        if (this.props.description) {
            let show_msg = this.state.show_full ? "Hide" : "Show All";
            let descriptionStyles = this.state.show_full ? {} : {overflow: "hidden", height: 300};
            return (
                <div className="stock-description">
                    <div style={descriptionStyles} className="description-container">
                        {this.props.description}
                    </div>
                    {/* <div style={{width: "100%", height: 20, position: 'relative', top: -10, backgroundColor: "black", opacity: 0.5}}></div> */}
                    <div className="show-btn" onClick={(e) => this.setState((prevState) => 
                        {
                            return {
                                show_full: !prevState.show_full
                            }
                        }
                        )}>{show_msg}
                    </div>
                </div>
            )
        } else {
            return "";
        }
    }
}


export default About;