import React from "react";
import "./mainPage.scss";
import Header from "../../Component/Header/header";
import Footer from "../../Component/Footer/footer";
import MainSlide from "../../Component/MainSlide/mainSlide";
import Search from "../../Component/Search/search";
import CollectionSlide from "../../Component/CollectionSlide/collectionSlide";
import Features from "../../Component/Features/features";
import Clients from "../../Component/Clients/clients";
import NewItems from "../../Component/NewItems/newItems";
import Reviews from "../../Component/Reviews/reviews";
import DownloadApp from "../../Component/DownloadApp/downloadApp";
import NewsLetter from "../../Component/NewsLetter/newsLetter";
import { connect } from "react-redux";
const Main = () => {
    return (
        <div className="hero__wrapper">
            <Header />
            <MainSlide />
            <Search />
            <CollectionSlide />
            <Features />
            <Clients />
            <NewItems />
            <Reviews />
            <DownloadApp />
            <NewsLetter />
            <Footer />
        </div>
    );
};
export default connect()(Main);
