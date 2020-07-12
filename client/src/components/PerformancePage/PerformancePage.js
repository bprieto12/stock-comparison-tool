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
                    <div className={styles.AboutContainer}>
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
        // description: state.stock_profile.getBusinessSummary(),
        description: "Walmart Inc. engages in the retail and wholesale operations in various formats worldwide. The company operates in three segments: Walmart U.S., Walmart International, and Sam's Club. It operates supercenters, supermarkets, hypermarkets, warehouse clubs, cash and carry stores, discount stores, drugstores, and convenience stores; membership-only warehouse clubs; ecommerce websites, such as walmart.com, walmart.com.mx, asda.com, walmart.ca, flipkart.com, and samsclub.com; and mobile commerce applications. The company offers grocery products, including meat, produce, natural and organics, deli and bakery, dairy, frozen foods, alcoholic and nonalcoholic beverages, and floral and dry grocery, as well as consumables, such as health and beauty aids, baby products, household chemicals, paper goods, and pet supplies; and health and wellness products. It also provides electronics, cameras and supplies, photo processing services, wireless, movies, music, video games, and books; stationery, automotive, hardware and paint, sporting goods, and outdoor living and horticulture; apparel for women, girls, men, boys, and infants, as well as shoes, jewelry, and accessories; and home furnishings, housewares and small appliances, bedding, home decor, toys, fabrics, crafts, and seasonal merchandise, as well as brand name merchandise. In addition, the company offers fuel and financial services and related products, including money orders, prepaid cards, money transfers, check cashing, and bill payment. It operates approximately 11,500 stores and various e-commerce Websites under the 56 banners in 27 countries. The company was formerly known as Wal-Mart Stores, Inc. and changed its name to Walmart Inc. in February 2018. Walmart Inc. was founded in 1945 and is based in Bentonville, Arkansas.",
        num_employees: state.stock_profile.getNumEmployees(),
        location: `${state.stock_profile.getCity()}, ${state.stock_profile.getState()}`,
        website: state.stock_profile.getWebsite(),
        sector: state.stock_profile.getSector(),
        industry: state.stock_profile.getIndustry(),
        
    }
}

export default connect(mapStateToProps)(PerformancePage);