import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import promiseMiddleWare from "redux-promise-middleware";

import reducer from "./reducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combined = applyMiddleware(promiseMiddleWare());
const store = createStore(reducer, combined);

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
