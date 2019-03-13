


import axios from 'axios';
let apiUrl = 'http://localhost:8080/api/products'

export function loadReviews(productId, size) {
    //..
    // let reviews = [{}, {}]
    // return { type: 'LOAD_REVIEWS_SUCCESS', productId, reviews }



    return function (dispatch) {
        axios
            .get(apiUrl + "/" + productId + "/reviews")
            .then(response => response.data)
            .then(reviews => {
                dispatch({ type: 'LOAD_REVIEWS_SUCCESS', productId, reviews })   // Async action
            })

    }

}

export function addNewReview(productId, review) {
    //..
    // return { type: 'ADD_NEW_REVIEW', productId, review }

    return function (dispatch) {
        axios
            .post(apiUrl + "/" + productId + "/reviews", review)
            .then(response => response.data)
            .then(savedReview => {
                dispatch({ type: 'ADD_NEW_REVIEW', productId, review: savedReview })   // Async action
            })

    }
}