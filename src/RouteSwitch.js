import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import LandingPage from "./Components/LandingPage";
import ProductPage from './Components/ProductPage';
import Cart from './Components/Cart';
import Homepage from './Components/Homepage';

const RouteSwitch = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/store/" element={<Homepage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart/" element={<Cart />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;