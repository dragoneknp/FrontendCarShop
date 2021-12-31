import React from "react";
import { Link } from "react-router-dom";
import "./advertisment.scss";
const Advertisment = () => {
    return (
        <div className="advertisment">
            <div className="advertisment__header">Special Offer for Today</div>
            <div className="advertisment__description">
                10% Off for New Tesla Model S
            </div>
            <button className="advertisment__detailsButton">
                <Link to="/explore" className="advertisment__link">
                    Details
                </Link>
            </button>
        </div>
    );
};
export default Advertisment;
