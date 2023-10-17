import React, { Component } from "react";
import '../css/product-card.css';

const ProductCard = (props) => {
    const product = props.product;
    return (
        <>
            <div className="product-card">
                <div className="product-image">
                    <img src={product.images[0]} />
                </div>
                <div className='product-body'>
                    <div className="product-name">
                        <span className="product-h1">
                            {product.name}                        
                        </span>
                        <span className="product-h2">
                            {product.manufacturer}
                        </span>
                        <span className="product-price">${product.price}</span>
                    </div>
                    <div className="product-info">
                        <p>{product.description}</p>
                        
                        <button>Add to cart</button>             
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;