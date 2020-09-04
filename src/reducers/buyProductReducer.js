export const product = {
    mochaccino: {
        stock: 20,
        price: 50000
    },
    cappuccino: {
        stock: 10,
        price: 35000
    },
    chocolate: {
        stock: 10,
        price: 25000
    },
    tea: {
        stock: 5,
        price: 15000
    }
}
const buyProductReducer = (state = product, action) => {
    if (action.type === 'BUY_ONE_MOCHACCINO') {
        const newState = {
                ...state,
                mochaccino: {stock: state.mochaccino.stock - 1},
        }
        return newState
    }
    else if (action.type === 'BUY_ONE_CAPPUCCINO') {
        const newState = {
            ...state,
            cappuccino: {stock: state.cappuccino.stock - 1},
    }
        return newState
    }
    else if (action.type === 'BUY_ONE_CHOCOLATE') {
        const newState = {
            ...state,
            chocolate: {stock: state.chocolate.stock - 1},
         }
        return newState
    }
    else if (action.type === 'BUY_ONE_TEA') {
        const newState = {
            ...state,
            chocolate: {stock: state.tea.stock - 1},
        }
        return newState
        }
        return state
    }

export default buyProductReducer