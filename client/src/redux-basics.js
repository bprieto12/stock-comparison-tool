const redux = require('redux');
const createStore = redux.createStore;


const initialState = {
    search_text: "",
    instruments_to_compare: {},
    selected_instrument: {},
    show_comparison_seach_bar: false
}

// Reducer
const rootReducer = (state = initialState, action) => {
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
    }
    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());


// Subscription
store.subscription(() => {
    console.log('[Subscription]', store.getState());
})

// Dispatching Action
store.dispatch({type: actionTypes.UPDATE_SEARCH_TEXT, value: "hello"});
console.log(store.getState());

store.dispatch({type: actionTypes.UPDATE_INSTRUMENTS_TO_COMPARE, value: {"thisPrice": 20}});
console.log(store.getState());

store.dispatch({type: actionTypes.UPDATE_SELECTED_INSTRUMENT, value: {"otherValue": 234232}});
console.log(store.getState());

store.dispatch({type: actionTypes.UPDATE_SHOW_SEARCH_BAR, value: true});
console.log(store.getState());