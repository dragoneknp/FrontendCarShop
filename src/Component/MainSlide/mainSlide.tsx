import React from "react";
import "./mainSlide.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const MainSlide = (props: any) => {
    return (
        <div
            className="mainSlide"
            style={{
                background: `url(${props.linkToPicture}) center center / cover no-repeat`,
            }}
        >
            <div className="mainSlide__container container">
                <div className="mainSlide__body mainSlide-body">
                    <div className="mainSlide-body__productOwner">
                        {props.productOwner}
                    </div>
                    <div className="mainSlide-body__label">{props.model}</div>
                    <div className="mainSlide-body__specifications mainSlide-body-specifications">
                        <div className="mainSlide-body-specifications__item">
                            <div className="mainSlide-body-specifications__mileage">
                                <div className="mainSlide-body-specifications__header">
                                    Mileage
                                </div>
                                <div className="mainSlide-body-specifications__spec">
                                    {props.mileage}
                                </div>
                            </div>
                        </div>
                        <div className="mainSlide-body-specifications__item">
                            <div className="mainSlide-body-specifications__engine">
                                <div className="mainSlide-body-specifications__header">
                                    Engine
                                </div>
                                <div className="mainSlide-body-specifications__spec">
                                    {props.engine}
                                </div>
                            </div>
                        </div>
                        <div className="mainSlide-body-specifications__item">
                            <div className="mainSlide-body-specifications__fuelEconomy">
                                <div className="mainSlide-body-specifications__header">
                                    Fuel Economy
                                </div>
                                <div className="mainSlide-body-specifications__spec">
                                    {props.fuelEconomy}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="mainSlide-body__buyNowButton redBtn">
                        <Link to={`/details/${props.id}`}>Buy now</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
function mapStateToProps(state: any) {
    return {
        model: state.findCar.model,
        productOwner: state.findCar.productOwner,
        linkToPicture: state.findCar.linkToPicture,
        engine: state.findCar.engine,
        fuelEconomy: state.findCar.fuelEconomy,
        mileage: state.findCar.mileage,
        id: state.findCar.id,
    };
}

export default connect(mapStateToProps)(MainSlide);
