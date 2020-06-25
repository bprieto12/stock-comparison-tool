class StockStatistics {
    constructor(raw_data) {
        this.raw_data = raw_data;
    }

    getForecast = () => {
        if (!this.raw_data) return;
        return this.raw_data.data.financialData.targetMedianPrice.fmt;
    }

    getForecastLow = () => {
        if (!this.raw_data) return;
        return this.raw_data.data.financialData.targetLowPrice.fmt;
    }

    getPurchaseRecommendation = () => {
        if (!this.raw_data) return;
        return this.raw_data.data.financialData.recommendationKey;
    }

    getForecastHigh = () => {
        if (!this.raw_data) return;
        return this.raw_data.data.financialData.targetHighPrice.fmt;
    }

    getProfitMargin = () => {
        if (!this.raw_data) return;
        return this.raw_data.data.financialData.profitMargins.fmt;
    }

    getGrossProfits = () => {
        if (!this.raw_data) return;
        return `$${this.raw_data.data.financialData.grossProfits.fmt}`;
    }

    getGrossMargin = () => {
        if (!this.raw_data) return;
        return this.raw_data.data.financialData.grossMargins.fmt;
    }

    getRevenue = () => {
        if (!this.raw_data) return;
        return `$${this.raw_data.data.financialData.totalRevenue.fmt}`;
    }

    getRevenueGrowth = () => {
        if (!this.raw_data) return;
        return this.raw_data.data.financialData.revenueGrowth.fmt;
    }

    getTotalDebt = () => {
        if (!this.raw_data) return;
        return `$${this.raw_data.data.financialData.totalDebt.fmt}`;
    }

    getOperatingCashflow = () => {
        if (!this.raw_data) return;
        return `$${this.raw_data.data.financialData.operatingCashflow.fmt}`;
    }

    getCurrentOpenPrice = () => {
        if (!this.raw_data) return;
        return this.raw_data.data.price.regularMarketOpen.fmt;
    }

    getCurrentOpenPriceHigh = () => {
        if (!this.raw_data) return;
        return this.raw_data.data.price.regularMarketDayHigh.fmt;
    }

    getCurrentOpenPriceLow = () => {
        if (!this.raw_data) return;
        return this.raw_data.data.price.regularMarketDayLow.fmt;
    }

    getPreviousMarketClose = () => {
        if (!this.raw_data) return;
        return this.raw_data.data.price.regularMarketPreviousClose.fmt;
    }

    getBeta = () => {
        if (!this.raw_data) return;
        return this.raw_data.data.defaultKeyStatistics.beta.fmt;
    }

    getPriceToEarnings = () => {
        if (!this.raw_data) return;
        return this.raw_data.data.defaultKeyStatistics.forwardPE.fmt;
    }
}

export default StockStatistics;