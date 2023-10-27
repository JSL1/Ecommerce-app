import React from 'react';
import '../css/order-confirmation.css';

const OrderSubmitted = (props) => {
    return (
        <article id="order-confirmation">
            <div>
                <span class="logo-mini">BrgnMrchnt</span>
                <button className='x-button' onClick={props.func}>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
            <h1>Your order has been recieved.</h1>
            <h2>Your order number is # {Math.floor(Math.random() * (99999 - 10000 + 1) ) + 10000}</h2>
            <p>Check your email for your receipt!</p>
        </article>
    );
}

export default OrderSubmitted;