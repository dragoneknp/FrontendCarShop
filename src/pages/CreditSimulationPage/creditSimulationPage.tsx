import React from 'react';
import './creditSimulationPage.scss';
import Header from '../../Component/Header/header';
import Footer from '../../Component/Footer/footer';
import NewsLetter from '../../Component/NewsLetter/newsLetter';
import DownloadApp from '../../Component/DownloadApp/downloadApp';
const CreditSimulation = () => {
    return (
        <div className="creditSimulation__wrapper">
            <Header/>
            <DownloadApp/>
            <NewsLetter/>
            <Footer/>
        </div>
)};
export default CreditSimulation;