import React from "react";
import "./clients.scss";
import logo1 from "./logo1.svg";
import logo2 from "./logo2.svg";
import logo3 from "./logo3.svg";
import logo4 from "./logo4.svg";
import logo5 from "./logo5.svg";
import logo6 from "./logo6.svg";
const Clients = () => {
    return (
        <div className="clients">
            <div className="clients__container container">
                <div className="clients__header">Our Top Brands</div>
                <div className="clients__brands">
                    <div className="clients__logo">
                        <img src={logo1} alt="logo" />
                    </div>
                    <div className="clients__logo">
                        <img src={logo2} alt="logo" />
                    </div>
                    <div className="clients__logo">
                        <img src={logo3} alt="logo" />
                    </div>
                    <div className="clients__logo">
                        <img src={logo4} alt="logo" />
                    </div>
                    <div className="clients__logo">
                        <img src={logo5} alt="logo" />
                    </div>
                    <div className="clients__logo">
                        <img src={logo6} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Clients;
