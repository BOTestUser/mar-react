

import { combineReducers } from 'redux'

import { productsReducer } from '../reducers/products'
import { reviewsReducer } from '../reducers/reviews'
import { cartReducer } from '../reducers/cart'


const rootReducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cartReducer
})

export default rootReducer;