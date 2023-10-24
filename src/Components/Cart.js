import React, { useState, useEffect } from "react";
import settings from "../Data/storeSettings";
import Header from "./Header";
import Footer from "./Footer";
import CartCard from "./CartCard";
import { useSelector, useDispatch } from "react-redux";
import cart, { add, remove, updatetotal } from '../redux/cart';
import { useNavigate } from "react-router-dom";
import '../css/cart-card.css';

const Cart = () => {
    const [ moneyTotal, setMoneyTotal] = useState(0);
    const { contents, total } = useSelector((state) => state.cart);
    const [cartContents, setCartContents] = useState(contents);
    const dispatch = useDispatch();

    const refreshCart = () => {
        setCartContents(contents);
    }

    const getSubTotal = () => {
        let tot = 0;
        for(let i = 0; i < contents.length; i++) {
            tot += contents[i].price * contents[i].quantity;
        }
        return tot;
    }

    useEffect(() => {
        setMoneyTotal(getSubTotal());
        refreshCart();
        dispatch(updatetotal(moneyTotal));
    }, [getSubTotal, moneyTotal]);

    const navigate = useNavigate();

    return (
        <>
            <Header />
            <main className="page">
                <section className="headline">
                    <h1><span className="material-symbols-outlined">shopping_cart</span>Your Shopping Cart</h1>
                </section>
                <section id="cart-main">
                    {cartContents.map(product => (
                        <CartCard product={product} key={product.id} />
                    ))}
                    <article id="cart-total-checkout">
                        <div>
                            <span>Subotal: <b>${moneyTotal}</b></span>
                            <span>GST/HST: <b>${moneyTotal * settings.taxRate}</b></span>
                            <span>Shipping: <b>${settings.shippingFee}</b></span>
                            <span>Total: <b>${moneyTotal + (moneyTotal * settings.taxRate) + settings.shippingFee}</b></span>
                        </div>
                        <div>
                            <button onClick={() => navigate('/checkout')}>Checkout</button>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Cart;