

import { combineReducers } from 'redux'

import { productsReducer } from '../reducers/products'
import { reviewsReducer } from '../reducers/reviews'
import { cartReducer } from '../reducers/cart'
import { loadingStatusReducer } from '../reducers/loading-status'


const rootReducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
    status: loadingStatusReducer
})

export default rootReducer;