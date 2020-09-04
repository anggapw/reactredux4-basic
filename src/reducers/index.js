import { combineReducers } from 'redux'

// Import all reducer
import buyProductReducer from './buyProductReducer'
import addBalanceReducer from './addBalanceReducer'

// Combine all reducer
const rootReducer = combineReducers({
    product: buyProductReducer,
    balance: addBalanceReducer
})

export default rootReducer