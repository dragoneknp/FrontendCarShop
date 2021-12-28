import React from "react";
import "./detailPage.scss";
import Header from "../../Component/Header/header";
import Footer from "../../Component/Footer/footer";
import NewsLetter from "../../Component/NewsLetter/newsLetter";
import DetailMainContent from "../../Component/DetailMainContent/detailMainContent";
const Detail = () => {
    return (
        <div className="detail__wrapper">
            <Header />
            <DetailMainContent />
            <NewsLetter />
            <Footer />
        </div>
    );
};
export default Detail;
