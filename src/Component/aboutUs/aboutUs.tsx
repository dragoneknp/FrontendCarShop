import React from 'react';
import './aboutUs.scss';
const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="aboutUs__container">
                <div className="aboutUs__picture"></div>
                <div className="aboutUs__body about-body">
                    <div className="aboutUs-body__header">Over 10 Years Experiences We Sell Electric Cars</div>
                    <div className="aboutUs-body__description">Develop a website by finding a product identity that has value and branding to become a characteristic of a company.</div>
                    <div className="aboutUs-body__specifications aboutUs-body-specifications">
                        <div className="aboutUs-body-specifications__characteristics">
                            <div className="aboutUs-body-specifications__characteristic">1000+</div>
                            <div className="aboutUs-body-specifications__characteristic">235</div>                            
                            <div className="aboutUs-body-specifications__characteristic">1100</div>
                        </div>
                        <div className="aboutUs-body-specifications__headers">
                            <div className="aboutUs-body-specifications__header">Cars Sold</div>
                            <div className="aboutUs-body-specifications__header">Customers</div>
                            <div className="aboutUs-body-specifications__header">Dealer Rewiews</div>
                        </div>                       
                    </div>    
                    </div>
                </div>
            </div>
        
)};
export default AboutUs;