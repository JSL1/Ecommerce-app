import React, { useState, useEffect } from 'react';
import settings from '../Data/storeSettings';
import { useSelector } from 'react-redux';
import '../css/checkout.css';


const CartSummary = () => {

const {contents, total } = useSelector((state) => state.cart);

    const cart = contents;
    const moneyTotal = total;

    return(
        <>
            <div id="cart-summary">
                <h2><span className="material-symbols-outlined">shopping_cart</span>Cart Summary</h2>
                {cart.map(item => (
                    <div className="cart-summary-item">
                        <div>{item.quantity}x {item.name}</div>
                        <div>${item.price * item.quantity}</div>
                    </div>      
                ))}
                <div className="cart-summary-total">
                    <span>Subotal: <b>${moneyTotal}</b></span>
                    <span>GST/HST: <b>${Math.round((moneyTotal * settings.taxRate) * 100) / 100}</b></span>
                    <span>Shipping: <b>${settings.shippingFee}</b></span>
                    <span>Total: <b>${Math.round((moneyTotal + (moneyTotal * settings.taxRate) + settings.shippingFee) * 100) / 100}</b></span>
                </div>  
            </div>
        </>
    );
}

export default CartSummary;