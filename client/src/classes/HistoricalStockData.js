class HistoricalStockData {
    constructor(values, time_range) {
        this.values = values;
        this.time_range = time_range;
    }

    getValues = () => {
        return this.values;
    }

    getTimeRange = () => {
        return this.time_range;
    }
}

export default HistoricalStockData;