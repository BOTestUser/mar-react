import 'bootstrap/dist/css/bootstrap.css'



import store from './store'
import { loadProducts } from './actions/products'
import { buy } from './actions/cart'


//------------------------------------------------------
// ProductList View
//------------------------------------------------------

store.subscribe(() => {
    let products = store.getState().products;
    console.log("----------------------------------");
    console.log(products);
    console.log("----------------------------------");
})


//------------------------------------------------------



//------------------------------------------------------
// Cart View
//------------------------------------------------------

store.subscribe(() => {
    let cart = store.getState().cart;
    console.log("----------------------------------");
    console.log(cart);
    console.log("----------------------------------");
})


//------------------------------------------------------


setTimeout(() => {
    let action = loadProducts();
    store.dispatch(action)
}, 3000);


setTimeout(() => {
    let action = buy({}, 1);
    store.dispatch(action) 
}, 4000);