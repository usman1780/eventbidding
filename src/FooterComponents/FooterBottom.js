import React from "react";

const FooterBottom = () => {
    return (
        <>
            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright-area">
                        <div className="footer-bottom-wrapper">
                            <div className="logo">
                                <a href="index.html">
                                    <img
                                        src="assets/images/products/event bidding logo.png"
                                        alt="logo"
                                    />
                                </a>
                            </div>
                            <ul className="gateway-area">
                                <li>
                                    <a href="#0">
                                        <img src="assets/images/footer/paypal.png" alt="footer" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <img src="assets/images/footer/visa.png" alt="footer" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <img src="assets/images/footer/discover.png" alt="footer" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <img src="assets/images/footer/mastercard.png" alt="footer" />
                                    </a>
                                </li>
                            </ul>
                            <div className="copyright">
                                <p>
                                    © Copyright 2024 | <a href="#0">Event Bidding</a> By{" "}
                                    <a href="#0">Hasnain Abid</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default FooterBottom