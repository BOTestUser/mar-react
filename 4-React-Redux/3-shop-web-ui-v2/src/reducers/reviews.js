

/*

{
    1111:[
        {},{}
    ],
    2222:[
        {},{}
    ],
}

*/


export function reviewsReducer(state = {}, action) {
    console.log("-reviews reducer-");
    switch (action.type) {
        case 'LOAD_REVIEWS_SUCCESS': {
            let { productId, reviews } = action;
            //let existingReviews = state[productId];
            return { ...state, [productId]: reviews };
        }
        case 'ADD_NEW_REVIEW': {
            let { productId, review } = action;
            let existingReviews = state[productId];
            return { ...state, [productId]: [...existingReviews, review] };
        }
        default: {
            return state;
        }
    }
}