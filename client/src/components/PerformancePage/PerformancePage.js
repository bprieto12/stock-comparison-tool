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
        let pageContents = null;
        // console.log(this.props.selected_instrument)
        // if (!this.props.selected_instrument || Object.keys(this.props.selected_instrument).length == 0)  {
        //     pageContents = <b>Select an Instrument to Start</b>
        // } else {
        //     pageContents = <SelectedStockPerformance />;
        // }
        // pageContents = (
        //     <Fragment>
        //         <StockName symbol="DIS" full_name="Walt Disney Company" />
        //         <PerformancePlot />
        //         <PriceIndicatorContainer />
        //     </Fragment>
        // );

        return (
            <div className={styles.PerformancePage}>
                <span className={styles.pageWidth}>
                <Fragment>
                    <StockName symbol="DIS" full_name="Walt Disney Company" />
                    <div className={styles.topContainer}>
                        <div style={{float: 'left', width: "54%"}}>
                            <PerformancePlot />
                        </div>
                        <div style={{float: "left", width: "46%"}}>
                            <PriceIndicatorContainer />
                        </div>
                    </div>
                    <div style={{width: "50%", marginLeft: "auto", marginRight: "auto", marginTop: 72, marginBottom: 72}}>
                        <StockPerformance/>
                    </div>
                    <div className={styles.fullWidth}>
                        <About description="The investment seeks to track the total return of the S&P 500® Index. The fund generally invests at least 80% of its net assets (including, for this purpose, any borrowings for investment purposes) in these stocks; typically, the actual percentage is considerably higher. It generally will seek to replicate the performance of the index by giving the same weight to a given stock as the index does"/>
                    </div>
                </Fragment>
                </span>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selected_instrument: state.selected_instrument
    }
}

export default connect(mapStateToProps)(PerformancePage);