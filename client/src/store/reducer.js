import actionTypes from './actionTypes';

export const initialState = {
    search_text: "",
    instruments_to_compare: {},
    selected_instrument: {},
    show_comparison_seach_bar: false
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_SEARCH_TEXT:
            return {
                ...state,
                search_text: action.value
            }
        case actionTypes.UPDATE_INSTRUMENTS_TO_COMPARE:
            return {
                ...state,
                instruments_to_compare: action.value
            }
        case actionTypes.UPDATE_SELECTED_INSTRUMENT:
            return {
                ...state,
                selected_instrument: action.value
            }
        case actionTypes.UPDATE_SHOW_SEARCH_BAR:
            return {
                ...state,
                show_comparison_seach_bar: action.value
            
            }
        default:
            return state;
    }
};