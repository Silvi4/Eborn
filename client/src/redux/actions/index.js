export const TOOGLE_HIDDEN_CART = 'TOOGLE_HIDDEN_CART', 
ADD_TO_CART = 'ADD_TO_CART',
REMOVE_ITEM = 'REMOVE_ITEM'


export const setToggleCart = payload => ({ type: TOOGLE_HIDDEN_CART, payload }),
setProducts = payload => ({ type: ADD_TO_CART, payload }),
removeProduct = payload => ({ type: REMOVE_ITEM, payload })