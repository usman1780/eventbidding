import React from "react";
import Banner from "../HomeComponents/Banner";
import BrowseSliderSection from "../HomeComponents/BrowseSliderSection";
import CartAuction from "../HomeComponents/CartAuction";
import AuctionSection from "../HomeComponents/AuctionSection";
import CallToAction from "../HomeComponents/CallToAction";
import ConcertAuction from "../HomeComponents/ConcertAuction";
import PopualAuction from "../HomeComponents/PopularAuction";
import RealEstate from "../HomeComponents/RealEstate";
import TechnologyAuction from "../HomeComponents/TechnologyAuction";
import HowWorks from "../HomeComponents/HowItWorks";
import Reviews from "../HomeComponents/Reviews";

const Home = () => {
    return (
        <>
            <Banner />
            <div className="browse-section ash-bg">
                <BrowseSliderSection />
                <CartAuction />
            </div>
            <AuctionSection />
            <CallToAction />
            <ConcertAuction />
            <PopualAuction />
            <RealEstate />
            <TechnologyAuction />
            <HowWorks />
            <Reviews />
        </>
    );
}
export default Home