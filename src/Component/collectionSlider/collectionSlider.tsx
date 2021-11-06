import React from 'react';
import './collectionSlider.scss';
interface ISlidesInfo{
    productOwner: string;
    mileage: number;
    engineType: string;
    name: string;
    gearBox: string;
}
const CollectionSlider = ({slidesInfo} : any) => {
    const {productOwner, mileage, engineType, name, gearBox}: ISlidesInfo = slidesInfo;
    return (
        <div className="collectionSlide-body__slider collectionSlide-body-slider">
            <div className="collectionSlide-body-slider__row_2blocks">
                <div className="collectionSlide-body-slider__item_big" style={{background: `url(${slidesInfo.pictures[0]}) center center / cover no-repeat`}}>
                    <div className="collectionSlide-body-slider__productOwner_big">{productOwner}</div>
                    <div className="collectionSlide-body-slider__label_big">{name}</div>
                    <div className="collectionSlide-body-slider-specifications">
                        <div className="collectionSlide-body-slider-specifications__engine_big">{mileage}</div>
                        <div className="collectionSlide-body-slider-specifications__engineType_big">{engineType}</div>
                        <div className="collectionSlide-body-slider-specifications__gearBox_big">{gearBox}</div> 
                    
                    </div>
                </div>    
                <div className="collectionSlide-body-slider__item_small" style={{background: `url(${slidesInfo.pictures[1]}) center center / cover no-repeat`}}></div>
            </div>
            <div className="collectionSlide-body-slider__row_3blocks">
                <div className="collectionSlide-body-slider__item_small" style={{background: `url(${slidesInfo.pictures[2]}) center center / cover no-repeat`}}></div>
                <div className="collectionSlide-body-slider__item_small" style={{background: `url(${slidesInfo.pictures[3]}) center center / cover no-repeat`}}></div>
                <div className="collectionSlide-body-slider__item_small" style={{background: `url(${slidesInfo.pictures[4]}) center center / cover no-repeat`}}></div>
            </div>
        </div>
        ) 
    };
export default CollectionSlider;