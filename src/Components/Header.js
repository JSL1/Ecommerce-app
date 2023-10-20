import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    
    return (
        <header>
            <div>
                <span className="Logo">BargainMercheant</span>
            </div>
            <nav>
                <div><Link to="/store">shop</Link></div>
                <div><Link to="/">home</Link></div>
                <div><Link to="/">faq</Link></div>
                <div><Link to="/">info</Link></div> 
            </nav>
            <div id="cart-container">
                <button onClick={() => navigate('/cart')}>
                    <span className="material-symbols-outlined">shopping_cart</span>
                    <span className="cart-total">0</span>
                </button>
            </div>
        </header>
    );
}

export default Header;