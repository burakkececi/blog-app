import { createStore, combineReducers } from 'redux';
import AuthReducer from '../reducers/AuthReducer'
import BlogReducer from '../reducers/BlogReducer'

export const store = createStore(combineReducers({
    auth : AuthReducer,
    blog : BlogReducer
}));
