



export function productsReducer(state = [], action) {
    console.log("-products reducer-");
    switch (action.type) {
        case 'LOAD_PRODUCTS_SUCCESS': {
            let { products } = action;
            return [...products];
        }
        case 'LOAD_PRODUCTS_FAILED': {
            console.log(action.error);
            return [];
        }
        default: {
            return state;
        }
    }
}