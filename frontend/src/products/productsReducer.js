const INITIAL_STATE = {listCategory: [],listid:[]}

export default (state = INITIAL_STATE, action) => {    
    switch (action.type) {
        case 'PRODUCTS_CATEGORY_FETCHED':
            return { ...state, listCategory: action.payload.data }
        case 'PRODUCTS_ID_FETCHED':
            return { ...state, listid: action.payload.data }
        default:
            return state
    }
}
