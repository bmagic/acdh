import { createStore, applyMiddleware } from 'redux';

import allReducers from './reducers';
import thunk from 'redux-thunk';

const acdhInitialState = {
    user:{}
}

const reducer = (state = { allReducers }, action) => {
    switch (action.type) {
        case 'ERROR_GENERATED':
            return {
                ...state,
                error: action.payload,
            };
        case 'USER':
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

const makeStore = (initialState = acdhInitialState) => (
    createStore(reducer, initialState, applyMiddleware(thunk))
);

// exports the functionality to initialize the store
// rather than exporting the store instance
export default makeStore;