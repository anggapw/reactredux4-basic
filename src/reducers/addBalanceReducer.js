import {product}from './buyProductReducer'

const balance = {
    balance: 0
}

console.log(product)

const addBalanceReducer = (state = balance, action) => {
    if (action.type === 'BUY_ONE_MOCHACCINO') {
        const newState = {
            balance: product.mochaccino.price + state.balance,
        }
        return newState
    }
    if (action.type === 'BUY_ONE_CAPPUCCINO') {
        const newState = {
            balance: product.cappuccino.price + state.balance,
        }
        return newState
    }
    if (action.type === 'BUY_ONE_CHOCOLATE') {
        const newState = {
            balance: product.chocolate.price + state.balance,
        }
        return newState
    }
    if (action.type === 'BUY_ONE_TEA') {
        const newState = {
                balance: product.tea.price + state.balance
        }
        return newState
    }
    return state
}

export default addBalanceReducer