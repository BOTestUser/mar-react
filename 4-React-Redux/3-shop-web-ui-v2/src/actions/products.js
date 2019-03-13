
import axios from 'axios';

let apiUrl = 'http://localhost:8080/api/products'

export function loadProducts(type, size) {
    //..


    // let products = [{ id: 1, name: 'item-1' }, { id: 2, name: 'item-2' }]
    // return { type: 'LOAD_PRODUCTS_SUCCESS', products }   // sync action


    return function (dispatch) {

        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading products' })   // Async action
        axios
            .get(apiUrl)
            .then(response => response.data)
            .then(products => {
                dispatch({ type: 'REQUEST_FINISHED' })   // Async action
                dispatch({ type: 'LOAD_PRODUCTS_SUCCESS', products })   // Async action
            })
            .catch((e) => {
                dispatch({ type: 'LOAD_PRODUCTS_FAILED', error: e })   // Async action
            })

    }

}