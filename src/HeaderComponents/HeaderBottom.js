import React from "react";

const HeaderBottom = () => {
    return (
        <>
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            <a href="index.html">
                                <img src="assets/images/products/event bidding logo.png" alt="logo" />
                            </a>
                        </div>
                        <ul className="menu ml-auto">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="product.html">Event Bidding</a>
                            </li>
                            <li>
                                <a href="about.html">About Us</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="faqs.html">Faqs</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="contact.html">Contact Us</a>
                            </li>
                            <li>
                                <a href="#0">My Account</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="sign-up.html">Sign Up</a>
                                    </li>
                                    <li>
                                        <a href="sign-in.html">Sign In</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="search-form">
                            <input type="text" placeholder="Search for brand, model...." />
                            <button type="submit">
                                <i className="fas fa-search" />
                            </button>
                        </form>
                        <div className="search-bar d-md-none">
                            <a href="#0">
                                <i className="fas fa-search" />
                            </a>
                        </div>
                        <div className="header-bar d-lg-none">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default HeaderBottom