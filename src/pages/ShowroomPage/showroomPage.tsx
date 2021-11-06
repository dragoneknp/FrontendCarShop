import React from 'react';
import './showroomPage.scss';
import Header from '../../Component/Header/header';
import Footer from '../../Component/Footer/footer';
import NewsLetter from '../../Component/NewsLetter/newsLetter';
const Showroom = () => {
    return (
        <div className="showroom__wrapper">
            <Header/>
            <NewsLetter/>
            <Footer/>
        </div>
)};
export default Showroom;