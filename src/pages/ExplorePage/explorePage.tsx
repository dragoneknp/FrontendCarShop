import React from 'react';
import './explorePage.scss';
import Header from '../../Component/Header/header';
import Footer from '../../Component/Footer/footer';
import NewsLetter from '../../Component/NewsLetter/newsLetter';
import ExploreHeader from '../../Component/ExploreHeader/exploreHeader';
import ExploreSearch from '../../Component/ExploreSearch/exploreSearch';
import ExploreMainContent from "../../Component/ExploreMainContent/exploreMainContent";
const Explore = () => {
    return (
        <div className="explore__wrapper">
            <Header/>
            <ExploreHeader/>
            <ExploreSearch/>
            <ExploreMainContent/>
            <NewsLetter/>
            <Footer/>
        </div>

)};
export default Explore;