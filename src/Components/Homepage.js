import React, { Component } from 'react';
import ProductView from './ProductView';
import Header from './Header';
import Footer from './Footer';

const Homepage = () => {
    return (
        <>
            <Header />
                <main className='page'>
                    <ProductView />
                </main>
            <Footer />
        </>
    );
}

export default Homepage;