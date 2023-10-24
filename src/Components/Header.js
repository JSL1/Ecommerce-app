import React, { Component, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import settings from '../Data/storeSettings';

const Header = () => {

    const { contents, total } = useSelector((state) => state.cart);
    const navigate = useNavigate();
    
    const getNumItems = () => {
        let items = 0;
        for (let i = 0; i < contents.length; i++) {
            items += contents[i].quantity;
        }
        return items;
    }

    const [numItems, setNumItems] = useState(getNumItems());

    useEffect(() => {
        setNumItems(getNumItems());
    }, [contents, numItems, getNumItems]);

    return (
        <header>
            <div>
                <span className="Logo">{settings.storeName}</span>
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
                    <span className="cart-total">{numItems}</span>
                </button>
            </div>
        </header>
    );
}

export default Header;