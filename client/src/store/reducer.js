import {actionTypes} from './actions';
import HistoricalStockData from "../classes/HistoricalStockData";
import StockStatistics from "../classes/StockStatistics";
import StockProfile from "../classes/StockProfile";

import { mutual_fund_profile_one } from '../mocks/mockStockProfileData';
import { mutual_fund_stats_one } from '../mocks/mockStockStatsData';

export const initialState = {
    search_text: "",
    chart_data: new HistoricalStockData(),
    stock_statistics: new StockStatistics(mutual_fund_stats_one),
    stock_profile: new StockProfile(mutual_fund_profile_one),
    selected_stock_range: "1d",
    loading: false,
    loading_plot: false,
    stock_not_found: false,
    redirectTo: null
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_STOCK_NOT_FOUND:
            return {
                ...state,
                stock_not_found: action.value
            }
        case actionTypes.UPDATE_SHOW_LOADING:
            return {
                ...state,
                loading: action.value
            }
        case actionTypes.UPDATE_SHOW_LOADING_CHART:
            return {
                ...state,
                loading_plot: action.value
            }
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
        case actionTypes.REDIRECT:
            return {
                ...state,
                redirectTo: action.payload
            }
        default:
            return state;
    }
};