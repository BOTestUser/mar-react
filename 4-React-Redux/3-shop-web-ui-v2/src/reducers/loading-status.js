

export function loadingStatusReducer(state = {}, action) {

    switch (action.type) {
        case 'REQUEST_BEGIN': {
            return { message: action.message }
        }
        case 'REQUEST_FINISHED': {
            return {}
        }
        default: {
            return state;
        }
    }

}