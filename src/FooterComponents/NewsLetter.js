import React from "react";

const NewsLetter = () => {
    return (
        <>
            <>
                <div className="footer-top-shape">
                    <img src="assets/css/img/footer-top-shape.png" alt="css" />
                </div>
                <div className="anime-wrapper">
                    <div className="anime-1 plus-anime">
                        <img src="assets/images/footer/p1.png" alt="footer" />
                    </div>
                    <div className="anime-2 plus-anime">
                        <img src="assets/images/footer/p2.png" alt="footer" />
                    </div>
                    <div className="anime-3 plus-anime">
                        <img src="assets/images/footer/p3.png" alt="footer" />
                    </div>
                    <div className="anime-5 zigzag">
                        <img src="assets/images/footer/c2.png" alt="footer" />
                    </div>
                    <div className="anime-6 zigzag">
                        <img src="assets/images/footer/c3.png" alt="footer" />
                    </div>
                    <div className="anime-7 zigzag">
                        <img src="assets/images/footer/c4.png" alt="footer" />
                    </div>
                </div>
                <div className="newslater-wrapper">
                    <div className="container">
                        <div className="newslater-area">
                            <div className="newslater-thumb">
                                <img src="assets/images/footer/newslater.png" alt="footer" />
                            </div>
                            <div className="newslater-content">
                                <div
                                    className="section-header left-style mb-low"
                                    data-aos="fade-down"
                                    data-aos-duration={1100}
                                >
                                    <h5 className="cate">Subscribe to event bidding </h5>
                                    <h3 className="title">To Get Exclusive Benefits</h3>
                                </div>
                                <form className="subscribe-form">
                                    <input type="text" placeholder="Enter Your Email" name="email" />
                                    <button type="submit" className="custom-button">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    );
}
export default NewsLetter