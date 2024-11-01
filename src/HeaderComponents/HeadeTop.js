import React from "react";

const HeaderTop = () => {
    return (
        <>
            <div className="header-top">
                <div className="container">
                    <div className="header-top-wrapper">
                        <ul className="customer-support">
                            <li className="cmn-support-text">
                                <a href="#0" className="mr-3">
                                    <i className="fas fa-phone-alt" />
                                    <span className="ml-2 d-none d-sm-inline-block">
                                        Customer Support
                                    </span>
                                </a>
                            </li>
                            {/* <li class="customer-cupport-lang">
                      <i class="fas fa-globe"></i>
                      <select name="language" class="select-bar">
                          <option value="en">En</option>
                          <option value="Bn">Bn</option>
                          <option value="Rs">Rs</option>
                          <option value="Us">Us</option>
                          <option value="Pk">Pk</option>
                          <option value="Arg">Arg</option>
                      </select>
                  </li> */}
                        </ul>
                        <ul className="cart-button-area">
                            <li>
                                <a href="#0" className="cart-button">
                                    <i className="flaticon-shopping-basket" />
                                    <span className="amount">08</span>
                                </a>
                            </li>
                            <li>
                                <a href="sign-in.html" className="user-button">
                                    <i className="flaticon-user" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}
export default HeaderTop