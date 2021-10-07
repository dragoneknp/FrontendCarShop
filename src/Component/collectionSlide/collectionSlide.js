import React from 'react';
import './collectionSlide.scss';
import AboutUs from '../aboutUs/aboutUs';
import CollectionSlider from '../collectionSlider/collectionSlider';
const slidesInfo = {
    firstSlide: {
        productOwner: "Esemka Car",
        name: "Model SX",
        milleage: 2000,
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
                    <CollectionSlider slidesInfo={slidesInfo}/>
                    <AboutUs/>
                </div>
            </div>
        </div>
    )};
export default CollectionSlide;