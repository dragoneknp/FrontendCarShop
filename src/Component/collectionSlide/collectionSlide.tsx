import React, { useEffect } from 'react';
import './collectionSlide.scss';
import AboutUs from '../AboutUs/aboutUs';
import CollectionSlider from '../CollectionSlider/collectionSlider';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { connect } from 'react-redux';
import { getCollectionSlider } from '../../store/actions/collectionSlider/collectionSlider';
import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper';
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

const CollectionSlide = (props: any) => {
    useEffect(() => {
        props.getCollectionSlider();
        // eslint-disable-next-line
    }, [])
    
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
                            {
                                Object.keys(props.slides).map(key => {
                                    return <SwiperSlide key={key}><CollectionSlider slidesInfo={props.slides[key]}/></SwiperSlide>
                                })
                            }
                            {/* <SwiperSlide><CollectionSlider slidesInfo={slidesInfo}/></SwiperSlide>
                            <SwiperSlide><CollectionSlider slidesInfo={slidesInfo1}/></SwiperSlide> */}
                        </Swiper>
                    
                    <AboutUs/>
                </div>
            </div>
        </div>
    )};


interface Istate{
    loading: boolean;
    slides: any[];
    error: null | string;


}
function mapStateToProps(state: any) : Istate{
    return {
        loading: state.collectionSlider.loading,
        slides: state.collectionSlider.slides,
        error: state.collectionSlider.error,
    }
}
function mapDispatchToProps(dispatch: any){
    return {
        getCollectionSlider: () => dispatch(getCollectionSlider())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CollectionSlide);