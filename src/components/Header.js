import React from "react";
import HeaderTop from "../HeaderComponents/HeadeTop";
import HeaderBottom from "../HeaderComponents/HeaderBottom";
import CartSidebar from "../HeaderComponents/CartSidebar";

const Header = () =>
{
    return(
        <>
            <header>
            <HeaderTop />
            <HeaderBottom />
            <CartSidebar />
            </header>
        </>
    );
}
export default Header