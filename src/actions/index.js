import {combineReducers} from 'react-redux';

const initialState = {
    products: [],
    cart: []
}
const products = (state = initialState.products, action)=>{
    switch(action.type){
        case 'REPLACE_PRODUCTS':
            return action.products
        default:
            return state
    }
}

const cart = (state = initialState.cart, action)=>{
    switch(action.type){
        case 'ADD_PRODUCT':
            return state.concat(action.product);
        case 'DELETE_PRODUCT':
            return state.filter(product=>product.id!==action.product.id)
        default:
            return state
    }
}

export default combineReducers({products,cart})