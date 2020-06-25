import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './StockPerformance.css';

class StockPerformance extends Component {
    render () {
        return (
            <Fragment>
                <h2 className="company-title">Company Performance</h2>
                <table>
                    <tbody>
                        <tr className="table-row">
                            <td className="attr-title">Gross Profit</td><td className="stat">{this.props.gross_profit}</td>
                        </tr>
                        <tr className="table-row">
                            <td className="attr-title">Profit Margin</td><td className="stat">{this.props.profit_margin}</td>
                        </tr>
                        <tr className="table-row">
                            <td className="attr-title">Revenue</td><td className="stat">{this.props.revenue}</td>
                        </tr>
                        <tr className="table-row">
                            <td className="attr-title">Revenue Growth</td><td className="stat">{this.props.revenue_growth}</td>
                        </tr>
                        <tr className="table-row">
                            <td className="attr-title">Total Debt</td><td className="stat">{this.props.total_debt}</td>
                        </tr>
                        <tr className="table-row">
                            <td className="attr-title">Operating Cash Flow</td><td className="stat">{this.props.operating_cash_flow}</td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profit_margin: state.stock_statistics.getProfitMargin(),
        revenue: state.stock_statistics.getRevenue(),
        revenue_growth: state.stock_statistics.getRevenueGrowth(),
        gross_profit: state.stock_statistics.getGrossProfits(),
        total_debt: state.stock_statistics.getTotalDebt(),
        operating_cash_flow: state.stock_statistics.getOperatingCashflow()
    }
}

export default connect(mapStateToProps)(StockPerformance);