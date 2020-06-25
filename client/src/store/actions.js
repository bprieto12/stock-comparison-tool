
import { getChartData, getStockProfile, getStockStats } from "../data/accessors/accessorMethods";

export const actionTypes = {
    UPDATE_SEARCH_TEXT: 'UPDATE_SEARCH_TEXT',
    UPDATE_CHART_DATA: 'UPDATE_CHART_DATA',
    UPDATE_ALL_STOCK_INFO: 'UPDATE_ALL_STOCK_INFO'
}

export const updateValues =  (search_text, range_used) => {
    return (dispatch, getState) => {
        // console.log('updating values');
        dispatch({type: actionTypes.UPDATE_SEARCH_TEXT, value: search_text});
        try {
            const chartPromise = getChartData(search_text, range_used);
            const profilePromise = getStockProfile(search_text);
            const statsPromise = getStockStats(search_text);
            Promise.all([chartPromise, statsPromise, profilePromise]).then(results => {
                dispatch({type: actionTypes.UPDATE_ALL_STOCK_INFO,
                    chart_data: results[0],
                    stock_statistics: results[1],
                    stock_profile: results[2]
                    });
                // console.log(getState());
            })
            
        } catch (err) {
            console.log(err);
        }
    }
}

export const updateChartData = (range_used) => {
    return (dispatch, getState) => {
        const symbol = getState().search_text;
        // console.log("update chart data");
        getChartData(symbol, range_used).then(data => {
            // console.log(data);
            dispatch({type: actionTypes.UPDATE_CHART_DATA,
                      chart_data: data,
                      selected_stock_range: range_used
                    });
        })
    }
}