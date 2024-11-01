import React from "react";
import NewsLetter from "../FooterComponents/NewsLetter";
import FooterTop from "../FooterComponents/FotoerTop";
import FooterBottom from "../FooterComponents/FooterBottom";

const Footer = () => {
    return (
        <>
            <footer
                className="bg_img padding-top oh"
                data-background="assets/images/footer/footer-bg.jpg"
            >
                <NewsLetter />
                <FooterTop />
                <FooterBottom />
            </footer>

        </>
    );
}
export default Footer