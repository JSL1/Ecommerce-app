import React, { Component } from "react";

const Footer = () => {
    return (
        <footer>
            <section id="footer-main">
                <article>
                    <h1 class="Logo">BrgnMrchnt</h1>
                </article>
                <article>
                    <h2>Navigate</h2>
                    <ul className="footer-links">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">SHOP</a></li>
                        <li><a href="#">INFO</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">CART</a></li>
                    </ul>
                </article>
                <article>
                    <h2>Follow us</h2>
                    <ul className="footer-links">
                        <li><a href="https://facebook.com"><i className="devicon-facebook-plain"></i> Facebook</a></li>
                        <li><a href="https://twitter.com"><i className="devicon-twitter-original"></i> Twitter</a></li>
                        <li><a href="https://react.dev"><i className="devicon-react-original"></i> React</a></li>
                        <li><a href="mailto:example@email.cc"><span className="material-symbols-outlined">mail</span> Get in touch</a></li>
                    </ul>
                </article>
            </section>
            <hr />
            <section id="footer-devicons">
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
            </section>
            <section id="footer-credit">
                <p>&copy; 2023 Jeremy St Pierre <a href="https://github.com/jsl1"><i class="devicon-github-original"></i></a></p>
            </section>
        </footer>
    );
}

export default Footer;