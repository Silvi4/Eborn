import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../img/cart.svg';
import { connect } from 'react-redux';
import { setToggleCart } from '../../redux/actions';

import './CartIcon.scss';

function CartIcon({dispatchSetToggleCart,total}) {

    return(
        <div className="cartIcon" onClick={dispatchSetToggleCart}>
            <ShoppingIcon className="cartIcon__shopping"/>
    <span className="cartIcon__counter">{total}</span>
        </div>
    )
}

const masDispatchToProps = dispatch => {
    return {
        dispatchSetToggleCart: () => {dispatch(setToggleCart())}
    }
}
export default connect(null,masDispatchToProps)(CartIcon);