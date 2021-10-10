import React from 'react';
import './hero.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
import MainSlide from '../mainSlide/mainSlide';
import Search from '../search/search';
import CollectionSlide from '../collectionSlide/collectionSlide';
import Features from '../features/features';
import Clients from '../clients/clients';
import NewItems from '../newItems/newItems';
import Reviews from '../reviews/reviews';
import DownloadApp from '../downloadApp/downloadApp';
import NewsLetter from '../newsLetter/newsLetter';
import { connect } from "react-redux";
const Hero = () => {return (
    <div className="hero__wrapper">
        <Header/>
        <MainSlide/>
        <Search/>
        <CollectionSlide/>
        <Features/>
        <Clients/>
        <NewItems/>
        <Reviews/>
        <DownloadApp/>
        <NewsLetter/>
        <Footer/>
    </div>
)};
export default connect()(Hero);