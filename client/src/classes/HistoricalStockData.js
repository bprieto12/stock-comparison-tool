class HistoricalStockData {
    constructor(values, time_range) {
        this.values = values;
        this.time_range = time_range;
    }

    getValues = () => {
        return this.values;
    }

    getTimeRange = () => {
        if (!this.time_range) return;
        return this.time_range.map(d => new Date(d * 1000));
    }
}

export default HistoricalStockData;