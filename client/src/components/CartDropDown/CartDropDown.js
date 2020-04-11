import React from 'react';
import { connect } from 'react-redux';
import CartProduct from '../CartProduct/CartProduct';

import './CartDropDown.scss';


function CartDropDown({cartProducts}) {

    return (
        <>
        {
            Object.keys(cartProducts).length > 0 ?

            <div className="cart__dropdown">
                <div className="cart__products">
                    {
                        cartProducts.map((cartProduct, index) => {
                            return (
                                <CartProduct key={index} product={cartProduct}/>
                            )
                        })
                    }
                </div>
                <div className="cart__button">
                    <button type="button">GO TO CHECKOUT</button>
                </div>
            </div>

            :

            <div className="cart__empty">
                <div className="cart__empty-text">
                    Cart empty
                </div>
            </div>
        }
        </>
    )
}

const mapStateToProps = state => {
    return {
        cartProducts: state.cartProducts
    }
}

export default connect(mapStateToProps,null)(CartDropDown);