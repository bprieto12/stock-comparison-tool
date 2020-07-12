import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styles from './PerformancePage.module.css';
import StockName from '../../containers/StockName/StockName';
import PerformancePlot from '../PerformancePlot/PerformancePlot';
import PriceIndicatorContainer from '../../containers/PriceIndicatorContainer/PriceIndicatorContainer';
import StockPerformance from '../StockPerformance/StockPerformance';
import About from '../../containers/About/About';

class PerformancePage extends Component {
    
    render () {
        return (
            <div className={styles.PerformancePage}>
                <span className={styles.pageWidth}>
                    {this.props.stock_not_found ? 
                        <div>
                            <h3>Stock not found or not instrument type not yet supported :(</h3>
                            <p>Try another in the search bar!</p>
                        </div> :
                        <Fragment>
                            <StockName symbol={this.props.symbol} full_name={this.props.fullname} />
                            <div className={styles.topContainer}>
                                <div className={styles.PlotContainer}>
                                    <PerformancePlot />
                                </div>
                                <div className={styles.IndicatorContainer}>
                                    <PriceIndicatorContainer />
                                </div>
                            </div>
                            <div className={styles.StockPerformanceContainer}>
                                <StockPerformance/>
                            </div>
                            <div className={styles.AboutContainer}>
                                <About description={this.props.description} 
                                    num_employees={this.props.num_employees}
                                    location={this.props.location}
                                    website={this.props.website}
                                    sector={this.props.sector}
                                    industry={this.props.industry} />
                            </div>
                        </Fragment>
                    }
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    if (state.stock_not_found) {
        return {
            stock_not_found: state.stock_not_found
        }
    }
    
    const city = state.stock_profile.getCity();
    const state_name = state.stock_profile.getState();
    return {
        stock_not_found: state.stock_not_found,
        fullname: state.stock_profile.getFullName(),
        symbol: state.stock_profile.getStockSymbol(),
        description: state.stock_profile.getBusinessSummary(),
        num_employees: state.stock_profile.getNumEmployees(),
        location: !city && !state_name ? null : `${city}, ${state_name}`,
        website: state.stock_profile.getWebsite(),
        sector: state.stock_profile.getSector(),
        industry: state.stock_profile.getIndustry(),
        
    }
}

export default connect(mapStateToProps)(PerformancePage);