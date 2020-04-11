import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { removeProduct } from '../../redux/actions';

import './CartProduct.scss';


function CartProduct({product, dispatchRemoveProduct}) {
    const { imgUrl, name, numberOfItems, price, color } = product;
    return (
        <div className="cart-product">
                <img src={imgUrl} alt="image_detail"/>
                <div className="cart-product__detail">
                    <span>{name}</span>
                    <span>Color: {color}</span>
                    <span>Cant: {numberOfItems}</span>
                    
                </div>
                <div className="cart-product__button">
                    <span>{price*numberOfItems} €</span>
                    <div onClick={() => dispatchRemoveProduct(product)} className="btn"><FontAwesomeIcon icon={faTrashAlt} color='red'/></div>
                </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchRemoveProduct: (value) => {dispatch(removeProduct(value))}
    }
}

export default connect(null,mapDispatchToProps)(CartProduct);