import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import products from "../Data/productsList";
import '../css/product-page.css';
import uniqid from 'uniqid';
import Header from './Header';
import Footer from "./Footer";

const ProductPage = (props) => {

    const [quantity, setQuantity] = useState(1);

    const [id, setId] = useState(useParams().id);

    const getProduct = () => {
        let product = products[id];
        return {
            id: product.id,
            name: product.name,
            category: product.category,
            manufacturer: product.manufacturer,
            price: product.price,
            description: product.description,
            images: [...product.images],
            quantity: quantity,
            inStock: product.inStock,
        }
    }

    const [product, setProduct] = useState(getProduct());
    const [currentImage, setCurrentImage] = useState(product.images[0]);

    const incrementQuantity = () => {
        if (quantity < product.inStock) {
            setQuantity(quantity + 1);
        } else {
            return;
        }
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            return;
        }
    }

    useEffect(() => {
        console.log(product);
    }, [product]);

    return (
        <>
        <Header />
        <main>
            <section id="product-page">
                <div className="product-page-img">
                    <img src={currentImage} alt={product.name + ', ' + product.description} />
                </div>
                <div id="product-page-body">
                <Link to="/store">
                    <span class="material-symbols-outlined">arrow_back</span>Back to the shop..
                </Link>
                    <div className="product-page-name">
                        <span className="product-page-h1">
                            {product.name}
                        </span>
                        <span className="product-page-h2">
                            {product.manufacturer}
                        </span>
                        <span className="product-page-h3">
                            {product.category}, {product.id}
                        </span>
                    </div>
                    <div className="product-page-info">
                        <div>
                            <p>{product.description}</p>
                        </div>
                        <div id="product-page-img-selector">
                            {
                                product.images.map((image) => (
                                    <a onClick={() => setCurrentImage(image)}>
                                        <img src={image} alt={product.name} className="selector-img"/>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="product-page-buy">
                        <div>
                            <button className="increment-decrement" onClick={decrementQuantity}>
                                <span className="material-symbols-outlined">remove</span>
                            </button>
                            <span className="product-page-h1">{quantity}</span>
                            <button className="increment-decrement" onClick={incrementQuantity}>
                                <span className="material-symbols-outlined">add</span>
                            </button>
                        </div>
                        <div>
                            <button className="add-button">Add to cart</button>
                            <button className="buy-button">Buy it now</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>
    );
}

export default ProductPage;