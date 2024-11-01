import React from "react";

const CallToAction = () => {
    return (
        <section className="call-in-section padding-top pt-max-xl-0">
            <div className="container">
                <div
                    className="call-wrapper cl-white bg-img"
                    style={{ backgroundImage: `url('assets/images/call-in/call-bg.png')` }}
                >
                    <div
                        className="section-header"
                        data-aos="zoom-out-down"
                        data-aos-duration="1200"
                    >
                        <h3 className="title">Register for Free &amp; Start Bidding Now!</h3>
                        <p>
                            From Every Event for Wedding, Sports Events, Fashion etc. we have it
                            all.
                        </p>
                    </div>
                    <a href="sign-up.html" className="custom-button white">
                        Register
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CallToAction;
