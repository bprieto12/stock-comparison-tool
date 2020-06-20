import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styles from './PerformancePage.module.css';
import StockName from '../../containers/StockName/StockName';
import PerformancePlot from '../PerformancePlot/PerformancePlot';
import PriceIndicatorContainer from '../../containers/PriceIndicatorContainer/PriceIndicatorContainer';

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
                    <div style={{float: 'left', width: "54%"}}>
                        <PerformancePlot />
                    </div>
                    <div style={{float: "left", width: "46%"}}>
                        <PriceIndicatorContainer />
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