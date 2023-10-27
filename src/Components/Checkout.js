import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import CheckoutForms from './CheckoutForms';
import CartSummary from './CartSummary';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const { contents, total } = useSelector((state) => state.cart);

    return (
        <>
        <Header />
            <main id="checkout-main">
                <CheckoutForms />
                <CartSummary />
            </main>
        <Footer />
        </>
    );
}

export default Checkout;

