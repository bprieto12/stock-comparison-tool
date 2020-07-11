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
                    <div className={styles.fullWidth}>
                        <About description={this.props.description} 
                               num_employees={this.props.num_employees}
                               location={this.props.location}
                               website={this.props.website}
                               sector={this.props.sector}
                               industry={this.props.industry} />
                    </div>
                </Fragment>
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fullname: state.stock_profile.getFullName(),
        symbol: state.stock_profile.getStockSymbol(),
        description: state.stock_profile.getBusinessSummary(),
        num_employees: state.stock_profile.getNumEmployees(),
        location: `${state.stock_profile.getCity()}, ${state.stock_profile.getState()}`,
        website: state.stock_profile.getWebsite(),
        sector: state.stock_profile.getSector(),
        industry: state.stock_profile.getIndustry(),
        
    }
}

export default connect(mapStateToProps)(PerformancePage);