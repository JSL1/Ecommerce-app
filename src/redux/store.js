import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart';

export default configureStore({
    reducer: {
        cart: cartReducer
    }
});