import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { setProducts } from '../../../redux/actions';

import './CardProducts.scss';

function CardProducts({products, dispatchSetProduct}) {

    return (
        <div className="content-product">
           {products.map((product,index) => {
            return (
                <div key={index} className="container-card-product">
                    <div className="container-card-product__box">
                        <Link to="/women"> {/* provisional...*/}
                            <img src={product.imgUrl} alt="product-img"/>
                        </Link>
                        <div onClick={() => {dispatchSetProduct(product)}} className="etiqueta">
                            <span><FontAwesomeIcon style={{marginRight: "10px"}} icon={faShoppingCart} color='green' />Añdir al carrito</span>
                        </div>
                    </div>
                    <div className="container-card-product__info">
                        <div>
                            <p>{product.name}</p>
                            <span>{product.price} €</span>
                        </div>
                        <div>
                            <span><FontAwesomeIcon icon={faHeart} size="1x"/></span>
                        </div>
                    </div>
                </div>
            )
         })}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSetProduct: (value) => {dispatch(setProducts(value))}
    }
    
}

export default connect(null,mapDispatchToProps)(CardProducts);