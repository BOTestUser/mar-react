

export function cartReducer(state = [], action) {
    console.log("-cart reducer-");
    switch (action.type) {
        case 'BUY': {
            let { item } = action;
            return [...state, item]
        }
        default: {
            return state;
        }
    }
}