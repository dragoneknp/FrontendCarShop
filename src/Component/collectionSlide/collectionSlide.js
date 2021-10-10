import React from 'react';
import './collectionSlide.scss';
import AboutUs from '../aboutUs/aboutUs';
import CollectionSlider from '../collectionSlider/collectionSlider';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper';
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);
const slidesInfo = {
    firstSlide: {
        productOwner: "Esemka Car",
        name: "Model SX",
        milleage: 2000,
        engineType: "electric",
        gearBox: "automatic",

    }
}
const slidesInfo1 = {
    firstSlide: {
        productOwner: "Esemka Car",
        name: "Model SV",
        milleage: 1500,
        engineType: "electric",
        gearBox: "automatic",

    }
}
const CollectionSlide = () => {
    return (
        <div className="collectionSlide">
            <div className="collectionSlide__container container">
                <div className="collectionSlide__body collectionSlide-body">
                    <div className="collectionSlide-body__header">
                        <div className="collectionSlide-body__label">
                            Our Collection
                        </div>
                        <div className="collectionSlide-body__switcher switcher">
                            <div className="switcher__prev"></div>
                            <div className="switcher__next"></div>

                            </div>    
                        </div>
                        <Swiper
                        cssMode={true}
                        navigation={{nextEl: ".switcher__next", prevEl: ".switcher__prev"}} 
                        mousewheel={true} 
                        keyboard={true}
                        loop={true}
                        className="CollectionSwiper">
                            <SwiperSlide><CollectionSlider slidesInfo={slidesInfo}/></SwiperSlide>
                            <SwiperSlide><CollectionSlider slidesInfo={slidesInfo1}/></SwiperSlide>
                        </Swiper>
                    
                    <AboutUs/>
                </div>
            </div>
        </div>
    )};
export default CollectionSlide;