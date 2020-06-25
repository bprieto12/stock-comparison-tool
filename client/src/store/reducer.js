import {actionTypes} from './actions';
import HistoricalStockData from "../classes/HistoricalStockData";
import StockStatistics from "../classes/StockStatistics";
import StockProfile from "../classes/StockProfile";

export const initialState = {
    search_text: "",
    chart_data: new HistoricalStockData(),
    stock_statistics: new StockStatistics(),
    stock_profile: new StockProfile(),
    selected_stock_range: "1d"
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_SEARCH_TEXT:
            return {
                ...state,
                search_text: action.value
            }
        case actionTypes.UPDATE_SHOW_SEARCH_BAR:
            return {
                ...state,
                show_comparison_seach_bar: action.value
            
            }
        case actionTypes.UPDATE_STOCK_RANGE:
            return {
                ...state,
                selected_stock_range: action.value
            }
        case actionTypes.UPDATE_CHART_DATA:
            return {
                ...state,
                chart_data: action.chart_data,
                selected_stock_range: action.selected_stock_range
            }
        case actionTypes.UPDATE_ALL_STOCK_INFO:
            return {
                ...state,
                chart_data: action.chart_data,
                stock_statistics: action.stock_statistics,
                stock_profile: action.stock_profile
            }
        default:
            return state;
    }
};