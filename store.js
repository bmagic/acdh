import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const acdhInitialState = {
    user: {}
}

export const actionTypes = {
    GET_USER: 'GET_USER'
}

// REDUCERS
export const reducer = (state = acdhInitialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER:
            return Object.assign({}, state, { user: action.user})
        default: return state
    }
}

// ACTIONS
export const getUser = (user) => dispatch => {
    return dispatch({ type: actionTypes.GET_USER,user:user })
}

export const initStore = (initialState = acdhInitialState) => {
    return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}