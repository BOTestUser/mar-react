

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const preLoadedState = {
    products: [],
    reviews: {},
    cart: [],
    status: {}
};

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(rootReducer, preLoadedState, composeEnhancers(
    applyMiddleware(thunk)
))

export default store;