import React from "react";

const HowWorks = () => {
    return (
        <>
            <section className="how-section padding-top">
                <div className="container">
                    <div className="how-wrapper section-bg">
                        <div
                            className="section-header text-lg-left"
                            data-aos="zoom-out-up"
                            data-aos-duration={1200}
                        >
                            <h2 className="title">How it works</h2>
                            <p>Easy 3 steps to win</p>
                        </div>
                        <div className="row justify-content-center mb--40">
                            <div className="col-md-6 col-lg-4">
                                <div className="how-item">
                                    <div
                                        className="how-thumb"
                                        data-aos="zoom-out-up"
                                        data-aos-duration={1000}
                                    >
                                        <img src="assets/images/how/how1.png" alt="how" />
                                    </div>
                                    <div
                                        className="how-content"
                                        data-aos="zoom-out-up"
                                        data-aos-duration={1200}
                                    >
                                        <h4 className="title">Sign Up</h4>
                                        <p>No Credit Card Required</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="how-item">
                                    <div
                                        className="how-thumb"
                                        data-aos="zoom-out-up"
                                        data-aos-duration={1200}
                                    >
                                        <img src="assets/images/how/how2.png" alt="how" />
                                    </div>
                                    <div
                                        className="how-content"
                                        data-aos="zoom-out-up"
                                        data-aos-duration={1400}
                                    >
                                        <h4 className="title">Bid</h4>
                                        <p>Bidding is free Only pay if you win</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="how-item">
                                    <div
                                        className="how-thumb"
                                        data-aos="zoom-out-up"
                                        data-aos-duration={1400}
                                    >
                                        <img src="assets/images/how/how3.png" alt="how" />
                                    </div>
                                    <div
                                        className="how-content"
                                        data-aos="zoom-out-up"
                                        data-aos-duration={1600}
                                    >
                                        <h4 className="title">Win</h4>
                                        <p>Fun - Excitement - Great deals</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
export default HowWorks