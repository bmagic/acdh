import { combineReducers } from 'redux';
import user from './user';
import error from './error'

const allReducers = combineReducers({
    user,
    error
});

export default allReducers;