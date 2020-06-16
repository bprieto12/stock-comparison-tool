import React, { Component } from 'react';
import "./SelectedInstrumentStats.css";

class SelectedInstrumentStats extends Component {
    render() {
        return (
            
            <div>
                {/* <h3 style={{color: "#334E68"}}>{"S&P 500 Performance"}</h3> */}
                <table>
                    <tbody>
                        <tr>
                            <td className="attrLabel">Current Price Per Share</td>
                            <td className="attrValue">34,100</td>
                        </tr>
                        <tr>
                            <td className="attrLabel">Day-over-day Gain</td>
                            <td className="attrValue">+3%</td>
                        </tr>
                        <tr>
                            <td className="attrLabel">Recent Performance</td>
                            <td className="attrValue">10%</td>
                        </tr>
                        <tr>
                            <td className="attrLabel">Risk Category</td>
                            <td className="attrValue">Low</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SelectedInstrumentStats;