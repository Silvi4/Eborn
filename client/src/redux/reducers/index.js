import { TOOGLE_HIDDEN_CART, ADD_TO_CART, REMOVE_ITEM } from '../actions';

import { addProductToCart, removeProductFromCart } from '../../utils';

export const ebornReducer = (state= {}, action) => {
    switch(action.type) {
        case TOOGLE_HIDDEN_CART:
            return {
                ...state,
                hiddenCart: !state.hiddenCart
            }
        case ADD_TO_CART:
            return {
                ...state,
                cartProducts: addProductToCart(state.cartProducts, action.payload)
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cartProducts: removeProductFromCart(state.cartProducts, action.payload)
            }
        default: 
            return state;
    }
}