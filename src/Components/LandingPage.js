import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import Footer from "./Footer";
import virtue from '../images/VIRTUE.png';
import settings from "../Data/storeSettings";

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <main id="landing-page-content">
                <div id="landing-page-logo">
                    <span class="LogoLG">{settings.storeName}</span>
                </div>
                <section className="landing-section" id="one">
                    <div className="landing-section-content">
                        <div>
                            <h1>Explore</h1>
                            <h2>Lorem ispum funnel cakes speedway</h2>
                            <h2><span className="material-symbols-outlined">globe</span></h2>
                            <button onClick={() => navigate('/store')}>Shop Now</button>
                        </div>
                        <div>
                            <img src={virtue} alt="Rare metal shirts, records and more"/>
                        </div>
                    </div>
                </section>
                <section className="landing-section" id="two">
                    <div className="landing-section-content">
                        <div>
                            <h1>Prepare for Greatness</h1>
                            <h2>This is a fully responsive e-commerce solution built in React</h2>
                            <div id="dev-icons">
                                <div>
                                    <i class="devicon-html5-plain"></i>
                                </div>
                                <div>
                                    <i class="devicon-sass-original"></i>
                                </div>
                                <div>
                                    <i class="devicon-react-original"></i>
                                </div>
                                <div>
                                <i class="devicon-nodejs-plain"></i>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => window.location.href='https://github.com/JSL1/Ecommerce-app'}>
                                    View on Github<i class="devicon-github-original"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default LandingPage;