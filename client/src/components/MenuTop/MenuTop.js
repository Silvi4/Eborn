import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';

import './MenuTop.scss';
import CartDropDown from '../CartDropDown/CartDropDown';

function MenuTop({hidden, cartProducts}) {
    const [numberOfItems, setNumberOfItems] = useState(0)

    useEffect(()=> {
        getNumbersOfItems();
    },[cartProducts])

    const getNumbersOfItems = () => {
        let quantityArray = [];

        for(let key in cartProducts) {
            quantityArray.push(cartProducts[key].numberOfItems)
        }

        const total = quantityArray.reduce((a,b) => a + b, 0) 
        setNumberOfItems(total);
    }

    return (
        <>
        <div className="menu-top">
            <div className="menu-top__left">
                <span>E-born</span>
                <Link to={"/women"}>
                    Women
                </Link>
            </div>
            <div className="menu-top__right">
                <Link to={"/"}>
                    <FontAwesomeIcon icon={faSignOutAlt}/>
                </Link>
                <CartIcon total={numberOfItems}/>
            </div>
        </div>

        {
            hidden 
            ?
            <CartDropDown/>
            :
            null
        }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        hidden: state.hiddenCart,
        cartProducts: state.cartProducts
    }
}

export default connect(mapStateToProps, null)(MenuTop);