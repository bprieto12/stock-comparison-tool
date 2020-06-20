class Stock {
    constructor(historical_data, stock_profile, stock_statistics) {
        this.historical_data = historical_data;
        this.stock_profile = stock_profile;
        this.stock_statistics = stock_statistics;
    }

    getHistoricalStockValues = () => {
        return this.historical_data.getValues();
    }

    getHistoricalTimeRangeForValues = () => {
        return this.historical_data.getTimeRange();
    }
}

export default Stock;