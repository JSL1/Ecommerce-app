import React, { Component } from 'react';
import ProductView from './ProductView';
import Header from './Header';
import Footer from './Footer';

const Homepage = () => {
    return (
        <>
            <Header />
                <main>
                    <ProductView />
                </main>
            <Footer />
        </>
    );
}

export default Homepage;