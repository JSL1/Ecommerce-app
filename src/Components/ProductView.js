import React, { Component } from 'react';
import ProductCard from './ProductCard';
import products from '../Data/productsList';

const ProductView = () => {
    return(
        <>
            <section id="product-view">
                {
                    products.map(product => (
                        <ProductCard product={product} />
                    ))
                }
            </section>
        </>
    );
}

export default ProductView;