import React from 'react';
import './mainSlide.scss';
const MainSlide = () => {
    return (
        <div className="mainSlide">
            <div className="mainSlide__container container">
                <div className="mainSlide__body mainSlide-body">
                    <div className="mainSlide-body__productOwner">Esemka car</div>
                    <div className="mainSlide-body__label">Model SV</div>
                    <div className="mainSlide-body__specifications mainSlide-body-specifications">
                        <div className="mainSlide-body-specifications__item">
                            <div className="mainSlide-body-specifications__mileage">
                                <div className="mainSlide-body-specifications__header">Mileage</div>
                                <div className="mainSlide-body-specifications__spec">555</div> 
                                </div>
                        </div>
                        <div className="mainSlide-body-specifications__item">
                            <div className="mainSlide-body-specifications__engine">
                                <div className="mainSlide-body-specifications__header">Engine</div>
                                <div className="mainSlide-body-specifications__spec">2000</div> 
                                </div>
                        </div>
                        <div className="mainSlide-body-specifications__item">
                            <div className="mainSlide-body-specifications__fuelEconomy">
                                <div className="mainSlide-body-specifications__header">Fuel Economy</div>
                                <div className="mainSlide-body-specifications__spec">8</div> 
                                </div>
                        </div>
                        
                    </div>  
                    <button className="mainSlide-body__buyNowButton redBtn">Buy now</button>

                </div>
                {/* <div className="mainSlide__slider mainSlide-slider">
                    <ul className="mainSlide-slider__dots">
                        <li className="mainSlide-slider__dot">
                            <a href="#slide" className="mainSlide-slider__link"></a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    )};
export default MainSlide;