import React from "react";

const CartSidebar = () => {
    return (
        <>
            <div className="cart-sidebar-area">
                <div className="top-content">
                    <a href="index.html" className="logo">
                        <img src="assets/images/logo/logo2.png" alt="logo" />
                    </a>
                    <span className="side-sidebar-close-btn">
                        <i className="fas fa-times" />
                    </span>
                </div>
                <div className="bottom-content">
                    <div className="cart-products">
                        <h4 className="title">Shopping cart</h4>
                        <div className="single-product-item">
                            <div className="thumb">
                                <a href="#0">
                                    <img src="assets/images/shop/shop01.jpg" alt="shop" />
                                </a>
                            </div>
                            <div className="content">
                                <h4 className="title">
                                    <a href="#0">Color Pencil</a>
                                </h4>
                                <div className="price">
                                    <span className="pprice">$80.00</span>{" "}
                                    <del className="dprice">$120.00</del>
                                </div>
                                <a href="#" className="remove-cart">
                                    Remove
                                </a>
                            </div>
                        </div>
                        <div className="single-product-item">
                            <div className="thumb">
                                <a href="#0">
                                    <img src="assets/images/shop/shop02.jpg" alt="shop" />
                                </a>
                            </div>
                            <div className="content">
                                <h4 className="title">
                                    <a href="#0">Water Pot</a>
                                </h4>
                                <div className="price">
                                    <span className="pprice">$80.00</span>{" "}
                                    <del className="dprice">$120.00</del>
                                </div>
                                <a href="#" className="remove-cart">
                                    Remove
                                </a>
                            </div>
                        </div>
                        <div className="single-product-item">
                            <div className="thumb">
                                <a href="#0">
                                    <img src="assets/images/shop/shop03.jpg" alt="shop" />
                                </a>
                            </div>
                            <div className="content">
                                <h4 className="title">
                                    <a href="#0">Art Paper</a>
                                </h4>
                                <div className="price">
                                    <span className="pprice">$80.00</span>{" "}
                                    <del className="dprice">$120.00</del>
                                </div>
                                <a href="#" className="remove-cart">
                                    Remove
                                </a>
                            </div>
                        </div>
                        <div className="single-product-item">
                            <div className="thumb">
                                <a href="#0">
                                    <img src="assets/images/shop/shop04.jpg" alt="shop" />
                                </a>
                            </div>
                            <div className="content">
                                <h4 className="title">
                                    <a href="#0">Stop Watch</a>
                                </h4>
                                <div className="price">
                                    <span className="pprice">$80.00</span>{" "}
                                    <del className="dprice">$120.00</del>
                                </div>
                                <a href="#" className="remove-cart">
                                    Remove
                                </a>
                            </div>
                        </div>
                        <div className="single-product-item">
                            <div className="thumb">
                                <a href="#0">
                                    <img src="assets/images/shop/shop05.jpg" alt="shop" />
                                </a>
                            </div>
                            <div className="content">
                                <h4 className="title">
                                    <a href="#0">Comics Book</a>
                                </h4>
                                <div className="price">
                                    <span className="pprice">$80.00</span>{" "}
                                    <del className="dprice">$120.00</del>
                                </div>
                                <a href="#" className="remove-cart">
                                    Remove
                                </a>
                            </div>
                        </div>
                        <div className="btn-wrapper text-center">
                            <a href="#0" className="custom-button">
                                <span>Checkout</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default CartSidebar