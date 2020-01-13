const INITIAL_STATE = {summary: {quantity: 0, price: 0}}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'PRODUCTS_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}