
import axios from 'axios';

let apiUrl = 'http://localhost:8080/api/products'

export function loadProducts(type, size) {
    //..


    // let products = [{ id: 1, name: 'item-1' }, { id: 2, name: 'item-2' }]
    // return { type: 'LOAD_PRODUCTS_SUCCESS', products }   // sync action


    return function (dispatch) {
        axios
            .get(apiUrl)
            .then(response => response.data)
            .then(products => {
                dispatch({ type: 'LOAD_PRODUCTS_SUCCESS', products })   // Async action
            })
            .catch((e) => {
                dispatch({ type: 'LOAD_PRODUCTS_FAILED', error: e })   // Async action
            })

    }

}