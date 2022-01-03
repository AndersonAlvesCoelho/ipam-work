import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

// const loggerMiddleware = createLogger();

// FIXME: disable in production????
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

// const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware));
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
// const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
export const store = createStore(rootReducer, enhancer);

export const { dispatch } = store;
