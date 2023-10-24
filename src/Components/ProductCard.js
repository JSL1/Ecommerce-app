import React, { Component } from "react";
import '../css/product-card.css';
import {Link, useNavigate} from 'react-router-dom';
import products from "../Data/productsList";
import { useDispatch } from "react-redux";
import cart, { add } from '../redux/cart';

const ProductCard = (props) => {
    const product = props.product;
    const dispatch = useDispatch();
    return (
        <>
            <div className="product-card">
                <div className="product-image">
                    <img src={product.images[0]} />
                </div>
                <div className='product-body'>
                    <div className="product-name">
                        <span className="product-h1">
                            <Link to={'../product/' + products.indexOf(product)}>{product.name}</Link>             
                        </span>
                        <span className="product-h2">
                            {product.manufacturer}
                        </span>
                        <span className="product-price">${product.price}</span>
                    </div>
                    <div className="product-info">
                        <p>{product.description}</p>

                        <button onClick={
                            () => dispatch(add({
                                id: product.id,
                                name: product.name,
                                category: product.category,
                                manufacturer: product.manufacturer,
                                price: product.price,
                                description: product.description,
                                images: [...product.images],
                                quantity: 1,
                                inStock: product.inStock,
                                })
                            )
                        }>
                            Add to cart
                        </button>             
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;