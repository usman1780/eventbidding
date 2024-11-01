import React from "react";

const BrowseSliderSection = () => {
    return (
        <>
                <div className="browse-slider-section mt--140">
                    <div className="container">
                        <div className="section-header-2 cl-white mb-4">
                            <div className="left" data-aos="flip-up" data-aos-duration={1500}>
                                <h6 className="title pl-0 w-100">Browse the highlights</h6>
                            </div>
                            <div className="slider-nav">
                                <a href="#0" className="bro-prev">
                                    <i className="flaticon-left-arrow" />
                                </a>
                                <a href="#0" className="bro-next active">
                                    <i className="flaticon-right-arrow" />
                                </a>
                            </div>
                        </div>
                        <div className="m--15">
                            <div className="browse-slider owl-theme owl-carousel">
                                <a href="#0" className="browse-item">
                                    <img
                                        src="assets/images/eventbidding/wedding2_icon.jpg"
                                        alt="auction"
                                    />
                                    <span className="info">Wedding</span>
                                </a>
                                <a href="#0" className="browse-item">
                                    <img
                                        src="assets/images/eventbidding/sports3_icon.jpg"
                                        alt="auction"
                                    />
                                    <span className="info">Sports</span>
                                </a>
                                <a href="#0" className="browse-item">
                                    <img
                                        src="assets/images/eventbidding/fashion2_icon.jpg"
                                        alt="auction"
                                    />
                                    <span className="info">Fashion</span>
                                </a>
                                <a href="#0" className="browse-item">
                                    <img
                                        src="assets/images/eventbidding/concert_icon.webp"
                                        alt="auction"
                                    />
                                    <span className="info">Concerts</span>
                                </a>
                                <a href="#0" className="browse-item">
                                    <img
                                        src="assets/images/eventbidding/tec_and_art_icon.jpg"
                                        alt="auction"
                                    />
                                    <span className="info">Technologies</span>
                                </a>
                                <a href="#0" className="browse-item">
                                    <img
                                        src="assets/images/eventbidding/realestate_icon.jpg"
                                        alt="auction"
                                    />
                                    <span className="info">Real Estate</span>
                                </a>
                                <a href="#0" className="browse-item">
                                    <img src="assets/images/eventbidding/art3_icon.jpg" alt="auction" />
                                    <span className="info">Arts</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    );
}
export default BrowseSliderSection