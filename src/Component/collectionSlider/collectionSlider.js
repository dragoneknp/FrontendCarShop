import React from 'react';
import './collectionSlider.scss';
const CollectionSlider = ({slidesInfo}) => {
    const {firstSlide} = slidesInfo;
    const {productOwner, milleage, engineType, name, gearBox} = firstSlide;
    return (
        <div className="collectionSlide-body__slider collectionSlide-body-slider">
            <div className="collectionSlide-body-slider__row_2blocks">
                <div className="collectionSlide-body-slider__item_big">
                    <div className="collectionSlide-body-slider__productOwner_big">{productOwner}</div>
                    <div className="collectionSlide-body-slider__label_big">{name}</div>
                    <div className="collectionSlide-body-slider-specifications">
                        <div className="collectionSlide-body-slider-specifications__engine_big">{milleage}</div>
                        <div className="collectionSlide-body-slider-specifications__engineType_big">{engineType}</div>
                        <div className="collectionSlide-body-slider-specifications__gearBox_big">{gearBox}</div> 
                    
                    </div>
                </div>    
                <div className="collectionSlide-body-slider__item_small"></div>
            </div>
            <div className="collectionSlide-body-slider__row_3blocks">
                <div className="collectionSlide-body-slider__item_small"></div>
                <div className="collectionSlide-body-slider__item_small"></div>
                <div className="collectionSlide-body-slider__item_small"></div>
            </div>
        </div>
)};
export default CollectionSlider;