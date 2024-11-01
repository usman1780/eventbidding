import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {

 
        useEffect(() => {
          AOS.init({ duration: 1000 });
        }, []);
    return (
        <>
            <section
                className="banner-section bg_img"
                 data-background="assets/images/banner/banner-bg-1.png"
            >
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6 col-xl-6" >
                            <div className="banner-content cl-white">
                                <h5 className="cate" data-aos="fade-down" data-aos-duration={1000} >
                                    Next Generation Bidding
                                </h5>
                                <h1 className="title" data-aos="zoom-out-up" data-aos-duration={1200}>
                                    <span className="d-xl-block">The Event</span> Bidding
                                </h1>
                                <p className="pras" data-aos="zoom-out-down" data-aos-duration={1300}>
                                    Online Bidding is where everyone goes to shop, sell,and give, while
                                    discovering variety and affordability.
                                </p>
                                <a
                                    href="#0"
                                    className="custom-button yellow btn-large"
                                    data-aos="zoom-out-up"
                                    data-aos-duration={1500}
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div
                            className="d-none d-lg-block col-lg-6"
                            data-aos="fade-right"
                            data-aos-duration={1200}
                        >
                            <div style={{backgroundColor:'red'}} className="banner-thumb-2">
                                <img src="assets/images/banner/banner-1.png" alt="banner" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-shape d-none d-lg-block">
                    <img src="assets/css/img/banner-shape.png" alt="css" />
                </div>
            </section>

        </>
    );
}
export default Banner

