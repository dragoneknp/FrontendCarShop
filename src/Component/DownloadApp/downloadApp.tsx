import React from "react";
import "./downloadApp.scss";
import phone from "./Phone.svg";
import appstore from "./appstore.svg";
import googlestore from "./googlestore.svg";
const DownloadApp = () => {
    return (
        <div className="downloadApp">
            <div className="downloadApp__container container">
                <div className="downloadApp__picture">
                    <img src={phone} alt="phone" />
                </div>
                <div className="downloadApp__body downloadApp-body">
                    <div className="downloadApp-body__label">
                        Download Our App
                    </div>
                    <div className="downloadApp-body__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.{" "}
                    </div>
                    <ul className="downloadApp-body__advantages">
                        <li className="downloadApp-body__advantage">
                            Best Deals
                        </li>
                        <li className="downloadApp-body__advantage">
                            Sell Your Car
                        </li>
                        <li className="downloadApp-body__advantage">
                            Showroom Events
                        </li>
                        <li className="downloadApp-body__advantage">
                            Car Dealer
                        </li>
                        <li className="downloadApp-body__advantage">
                            Compare Prices
                        </li>
                    </ul>
                    <div className="downloadApp-body__setUp">
                        <div className="downloadApp-body__appstore">
                            <img src={appstore} alt="appstore" />
                        </div>
                        <div className="downloadApp-body__googlestore">
                            <img src={googlestore} alt="googlestore" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DownloadApp;
