import React, { Component, useState } from 'react';
import '../css/cart-card.css';
import cart, { add, remove } from '../redux/cart';
import { useSelector, useDispatch } from 'react-redux';
const CartCard = (props) => {
    
    const { contents, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [product, setProduct] = useState(props.product);

    const removeFromCart = () => {
        dispatch(remove(product.id));
        console.log('attempting to remove product ' + product.id + ' from cart');
        console.log('contents: ' + contents);
    }

    return (
        <article className="cart-card" id={product.id}>
            <div className="cart-card-img">
                <img src={product.images[0]} alt={product.name} />
            </div>
            <div className="cart-card-body">
                <div className='cart-card-inner'>
                    <div className="cart-card-info">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                    </div>
                    <div className="cart-card-instock">
                        <h3>In Stock</h3>
                    </div>
                    <div className="cart-card-quantity">
                        <span>Quantity: {product.quantity}</span>
                    </div>
                    <div className="cart-card-price">
                        <span>${product.price}</span>
                    </div>
                </div>
                <div className='cart-card-buttons'>
                    <button 
                        className="close-button"
                        onClick={removeFromCart}
                    ><span className="material-symbols-outlined">close</span></button>
                    <button className="update-button"><span className="material-symbols-outlined">update</span>Update quantity</button>
                </div>
            </div>
            
        </article>
    );
}

export default CartCard;