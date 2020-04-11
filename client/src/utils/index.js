export const addProductToCart = (cartProducts, itemToAdd) => {

    const existingCart = cartProducts.find(
        cartProduct => cartProduct._id === itemToAdd._id
    );

    if(existingCart) {
        return cartProducts.map(cartProduct => 
            cartProduct._id === itemToAdd._id 
            ? { ...cartProduct, numberOfItems: cartProduct.numberOfItems + 1 }
            : cartProduct
            )
    }

    return [ ...cartProducts, { ...itemToAdd, numberOfItems: 1 }]
}

export const removeProductFromCart = (cartProducts, itemToRemove) => {
    const existingCart = cartProducts.find(
        cartProduct => cartProduct._id === itemToRemove._id
    )

    if (existingCart.numberOfItems === 1) {
        return cartProducts.filter(cartProduct => cartProduct._id !== itemToRemove._id)
    }

    return cartProducts.map(cartProduct => cartProduct._id === itemToRemove._id ?
        { ...cartProduct, numberOfItems: cartProduct.numberOfItems - 1 }
        : cartProduct
        )
}