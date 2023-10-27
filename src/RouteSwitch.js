import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import LandingPage from "./Components/LandingPage";
import ProductPage from './Components/ProductPage';
import Cart from './Components/Cart';
import Homepage from './Components/Homepage';
import Header from './Components/Header';
import Checkout from './Components/Checkout';

const RouteSwitch = () => {
    return(
        <Routes>
            <Route path="/" element={<LandingPage confirmed={false} />} />
            <Route path='/orderconfirmed' element={<LandingPage confirmed={true} />} />
            <Route path="/store/" element={<Homepage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart/" element={<Cart />} /> 
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    );
}

export default RouteSwitch;