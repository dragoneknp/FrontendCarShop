import React from "react";
import "./detailPage.scss";
import Header from "../../Component/Header/header";
import Footer from "../../Component/Footer/footer";
import NewsLetter from "../../Component/NewsLetter/newsLetter";
const Detail = () => {
    return (
        <div className="detail__wrapper">
            <Header />

            <NewsLetter />
            <Footer />
        </div>
    );
};
export default Detail;
