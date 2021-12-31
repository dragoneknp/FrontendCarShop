import React from "react";
import "./creditSimulationPage.scss";
import Header from "../../Component/Header/header";
import Footer from "../../Component/Footer/footer";
import NewsLetter from "../../Component/NewsLetter/newsLetter";
import DownloadApp from "../../Component/DownloadApp/downloadApp";
import CreditSimulationHeader from "../../Component/CreditSimulationHeader/creditSimulationHeader";
import CreditSimulationMainContent from "../../Component/CreditSimulationMainContent/creditSimulationMainContent";
const CreditSimulation = () => {
    return (
        <div className="creditSimulation__wrapper">
            <Header />
            <CreditSimulationHeader />
            <CreditSimulationMainContent />
            <DownloadApp />
            <NewsLetter />
            <Footer />
        </div>
    );
};
export default CreditSimulation;
