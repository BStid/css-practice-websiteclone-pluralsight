import { createStore, compose } from "redux";

import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

export default store;

/////////// COMBINED REDUCERS //////////////

/* 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { promiseMiddleWare } from 'react-promise-middleware'

//bring in the reducer(s)
import reducer from './reducer';

const combined = combineReducers({
    userReducer,
    otherReducer
});

const middlewares = applyMiddleware(promiseMiddleWare())

const store = createStore(combined, middlewares)

export default store;

install redux and react-redux
*/
