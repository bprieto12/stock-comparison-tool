import HistoricalStockData from '../../classes/HistoricalStockData';
import StockProfile from '../../classes/StockProfile';
import StockStatistics from '../../classes/StockStatistics';
import axios from 'axios';

export const getChartData = async (symbol, range) => {
    // returns a HistoricalStockData object
    console.log("in get chart")
    let raw_chart = await axios.get(`/api/getCharts?symbol=${symbol}&range=${range}`);
    console.log(raw_chart);
    let values = [],
    time_range = [];
    if (raw_chart.data.chart && raw_chart.data.chart.result.length > 0) {
        values = raw_chart.data.chart.result
                    .map(result => {
                        return result.indicators.quote.reduce((agg, quote_arr) => {
                            return [].concat(agg, quote_arr.open);
                        }, []);
                    })
                    .reduce((agg, result_price_arr) => {
                        return [].concat(agg, result_price_arr);
                    }, []);
        
        time_range = raw_chart.data.chart.result
                    .map(result => {
                        return result.timestamp.reduce((agg, timestamp_arr) => {
                            return [].concat(agg, timestamp_arr);
                        }, []);
                    })
                    .reduce((agg, result_timestamp_arr) => {
                        return [].concat(agg, result_timestamp_arr);
                    }, []);
    }
    return new HistoricalStockData(values, time_range);
}

export const getStockProfile = async (symbol) => {
    // returns StockProfile
    try {
        let raw_profile = await axios.get(`/api/stockProfile?symbol=${symbol}`);
        return new StockProfile(raw_profile);
    } catch (err) {
        return new StockProfile();
    }
}

export const getStockStats = async (symbol) => {
    // returns a StockStats object
    try {
        let raw_stats = await axios.get(`/api/stockStatistics?symbol=${symbol}`);
        return new StockStatistics(raw_stats);
    } catch (err) {
        return new StockStatistics();
    }
}
