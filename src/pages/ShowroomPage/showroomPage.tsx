import React from "react";
import "./showroomPage.scss";
import Header from "../../Component/Header/header";
import Footer from "../../Component/Footer/footer";
import NewsLetter from "../../Component/NewsLetter/newsLetter";
import CollectionSlide from "../../Component/CollectionSlide/collectionSlide";
import ShowroomHeader from "../../Component/ShowroomHeader/showroomHeader";
const Showroom = () => {
    return (
        <div className="showroom__wrapper">
            <Header />
            <ShowroomHeader />
            <CollectionSlide />
            <NewsLetter />
            <Footer />
        </div>
    );
};
export default Showroom;
