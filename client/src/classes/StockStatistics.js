class StockStatistics {
    constructor(raw_data) {
        this.raw_data = raw_data;
    }

    getForecast = () => {
        if (!this.raw_data) return;
        try {
            return this.raw_data.data.financialData.targetMedianPrice.fmt;
        } catch (err) {
            return;
        }
    }

    getForecastLow = () => {
        if (!this.raw_data) return;
        try {
            return this.raw_data.data.financialData.targetLowPrice.fmt;
        } catch (err) {
            return;
        }
    }

    getPurchaseRecommendation = () => {
        if (!this.raw_data) return;
        try {
            return this.raw_data.data.financialData.recommendationKey;
        } catch (err) {
            return;
        }
    }

    getForecastHigh = () => {
        if (!this.raw_data) return;
        try {
            return this.raw_data.data.financialData.targetHighPrice.fmt;
        } catch (err) {
            return;
        }
    }

    getProfitMargin = () => {
        if (!this.raw_data) return;
        try {
            return this.raw_data.data.financialData.profitMargins.fmt;
        } catch (err) {
            return;
        }
    }

    getGrossProfits = () => {
        if (!this.raw_data) return;
        try {
            return `$${this.raw_data.data.financialData.grossProfits.fmt}`;
        } catch (err) {
            return;
        }
    }

    getGrossMargin = () => {
        if (!this.raw_data) return;
        try {
            return this.raw_data.data.financialData.grossMargins.fmt;
        } catch (err) {
            return;
        }
    }

    getRevenue = () => {
        if (!this.raw_data) return;
        try {
            return `$${this.raw_data.data.financialData.totalRevenue.fmt}`;
        } catch (err) {
            return;
        }
    }

    getRevenueGrowth = () => {
        if (!this.raw_data) return;
        try {
            return this.raw_data.data.financialData.revenueGrowth.fmt;
        } catch (err) {
            return;
        }
    }

    getTotalDebt = () => {
        if (!this.raw_data) return;
        try {
            return `$${this.raw_data.data.financialData.totalDebt.fmt}`;
        } catch (err) {
            return;
        }
    }

    getOperatingCashflow = () => {
        if (!this.raw_data) return;
        try {
            return `$${this.raw_data.data.financialData.operatingCashflow.fmt}`;
        } catch (err) {
            return;
        }
    }

    getCurrentOpenPrice = () => {
        if (!this.raw_data) return;
        try {
            return this.raw_data.data.price.regularMarketOpen.fmt;
        } catch (err) {
            return;
        }
    }

    getCurrentOpenPriceHigh = () => {
        if (!this.raw_data) return;
        try {
            return this.raw_data.data.price.regularMarketDayHigh.fmt;
        } catch (err) {
            return;
        }
    }

    getCurrentOpenPriceLow = () => {
        if (!this.raw_data) return;
        try {
            return this.raw_data.data.price.regularMarketDayLow.fmt;
        } catch (err) {
            return;
        }
    }

    getPreviousMarketClose = () => {
        if (!this.raw_data) return;
        try {
            return this.raw_data.data.price.regularMarketPreviousClose.fmt;
        } catch (err) {
            return;
        }
    }

    getBeta = () => {
        if (!this.raw_data) return;
        try {
            return this.raw_data.data.defaultKeyStatistics.beta.fmt;
        } catch (err) {
            return;
        }
    }

    getPriceToEarnings = () => {
        if (!this.raw_data) return;
        try {
            return this.raw_data.data.defaultKeyStatistics.forwardPE.fmt;
        } catch (err) {
            return;
        }
    }
}

export default StockStatistics;