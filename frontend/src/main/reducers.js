import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import ProductsReducer from '../products/productsReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    products: ProductsReducer,
    toastr: toastrReducer
})

export default rootReducer