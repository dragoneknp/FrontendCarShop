import React from "react";
import "./creditSimulationMainContent.scss";
import Advertisment from "../Advertisment/advertisment";
import LoanCalculator from "../LoanCalculator/loanCalculator";
import ContactDealer from "../ContactDealer/contactDealer";
const CreditSimulationMainContent = () => {
    return (
        <div className="creditSimulationMainContent">
            <div className="creditSimulationMainContent__container container">
                <div className="creditSimulationMainContent__body creditSimulationMainContent-body">
                    <div className="creditSimulationMainContent-body__content">
                        <div className="creditSimulationMainContent-body__video">
                            <iframe
                                className="creditSimulationMainContent-body__videoItem"
                                src="https://www.youtube.com/embed/Q4VGQPk2Dl8"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </div>
                        <div className="creditSimulationMainContent-body__description creditSimulationMainContent-body-description">
                            <div className="creditSimulationMainContent-body-description__header">
                                Description
                            </div>
                            <div className="creditSimulationMainContent-body-description__body">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                        <div className="creditSimulationMainContent-body__loanCalculator">
                            <LoanCalculator />
                        </div>
                    </div>

                    <aside className="creditSimulationMainContent-body__aside creditSimulationMainContent-body-aside">
                        <div className="creditSimulationMainContent-body-aside__advertisment">
                            <Advertisment />
                        </div>
                        <div className="creditSimulationMainContent-body-aside__contactDealer">
                            <ContactDealer />
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};
export default CreditSimulationMainContent;
