import React from "react";
import { Link } from "react-router-dom";
import "./exploreMainContentCard.scss";
interface ICarCard {
    brand: string | null;
    model: string | null;
    HP: number | null;
    typeOfFuel: string | null;
    transmission: string | null;
    picture: string | undefined;
    price: number | undefined;
}
const ExploreMainContentCard = ({
    brand,
    model,
    HP,
    typeOfFuel,
    transmission,
    picture,
    price,
}: ICarCard) => {
    return (
        <div className="carCard">
            <img src={picture} alt="carIcon" className="carCard__picture" />
            <div className="carCard__info carCard-info">
                <div className="carCard-info__brand">{brand}</div>
                <div className="carCard-info__model">{model}</div>
                <div className="carCard-info__characteristics">
                    <div className="carCard-info__label">Engine</div>
                    <div className="carCard-info__label">Type Of Fuel</div>
                    <div className="carCard-info__label">Transmisson</div>
                    <div className="carCard-info__HP">{HP}</div>
                    <div className="carCard-info__typeOfFuel">{typeOfFuel}</div>
                    <div className="carCard-info__transmisson">
                        {transmission}
                    </div>
                </div>
                <div className="carCard-info__footer">
                    <div className="carCard-info__price">{`$${price}`}</div>
                    <Link to="/details">
                        <button className="carCard-info__details redBtn">
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default ExploreMainContentCard;
