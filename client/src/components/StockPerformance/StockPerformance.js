import React, { Component, Fragment } from 'react';
import './StockPerformance.css';

class StockPerformance extends Component {
    render () {
        return (
            <Fragment>
                <h2 className="company-title">Company Performance</h2>
                <table>
                    <tbody>
                        <tr className="table-row">
                            <td className="attr-title">Net Profit</td><td className="stat">$109M</td>
                        </tr>
                        <tr className="table-row">
                            <td className="attr-title">Profit Margin</td><td className="stat">5.2%</td>
                        </tr>
                        <tr className="table-row">
                            <td className="attr-title">Revenue</td><td className="stat">$109M</td>
                        </tr>
                        <tr className="table-row">
                            <td className="attr-title">Revenue Growth</td><td className="stat">3.2%</td>
                        </tr>
                        <tr className="table-row">
                            <td className="attr-title">Total Debt</td><td className="stat">$109M</td>
                        </tr>
                        <tr className="table-row">
                            <td className="attr-title">Operating Cash Flow</td><td className="stat">$109M</td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default StockPerformance;