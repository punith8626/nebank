import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import reducers from '../reducers/index';
import { persistStore } from 'redux-persist';


const middlewares = [thunk, logger];
const store = createStore(reducers, compose(applyMiddleware(...middlewares)))
export const persistor = persistStore(store);
export default store;