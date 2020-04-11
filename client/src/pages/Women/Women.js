import React, { useState, useEffect } from 'react';
import CardProducts from './CardProducts/CardProducts';
import { getProductsApi } from '../../api/products';

import './Women.scss';

export default function Women() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
            try {
                const response = await getProductsApi();
                
                if (response && response.status === 200 && response.data['products']) {
                    setProducts(response.data['products'])
                } else {
                    // Notification error
                }
            }catch(err) {
               return console.error
            }
    }

    return (
        <div className="product-content">
            <div className="product-content__img-women"></div>
            <CardProducts products={products} />
        </div>
    )
}