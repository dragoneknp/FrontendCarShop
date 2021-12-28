import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Map } from "typescript";
import { getCarCatalog } from "../../store/actions/CarCatalog/carCatalog";
import Advertisment from "../Advertisment/advertisment";
import ContactDealer from "../ContactDealer/contactDealer";
import "./detailMainContent.scss";
interface CarCard {
    brand: string | undefined;
    model: string | undefined;
    HP: number | null;
    typeOfFuel: string | undefined;
    transmission: string | undefined;
    pictures: string[] | undefined;
    price: number | null;
    id: string | undefined;
    description: string | undefined;
    video: string | undefined;
    Features: string[] | undefined;
    Specification: Object;
}
const DetailMainContent = (props: {
    carCatalog: CarCard[];
    getCarCatalog: any;
}) => {
    useEffect(() => {
        props.getCarCatalog();
    }, []);
    const params: { id: string } = useParams();
    const id = params.id;
    const data: CarCard = props.carCatalog.filter((item) => item.id === id)[0];
    if (data) {
        // for (let item in data.Specification) {
        //     console.log(item);
        // }
    }
    return data ? (
        <div className="detailMainContent">
            <div className="detailMainContent__container container">
                <div className="detailMainContent__body detailMainContent-body">
                    <div className="detailMainContent-body__content">
                        <div className="detailMainContent-body__row">
                            <div className="detailMainContent-body__header">{`${data.brand} ${data.model}`}</div>
                            <div className="detailMainContent-body__price">
                                {`$${data.price}`}
                            </div>
                        </div>

                        <div className="detailMainContent-body__pictures">
                            {data.pictures?.map((item) => (
                                <div
                                    className="detailMainContent-body__picture"
                                    key={`${item}_${data.id}`}
                                >
                                    <img
                                        src={item}
                                        alt="Car"
                                        className="detailMainContent-body__pictureItem"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="detailMainContent-body__description">
                            <div className="detailMainContent-body__descriptionHeader">
                                Description
                            </div>
                            {data.description}
                        </div>
                        <div className="detailMainContent-body__video">
                            <iframe
                                className="creditSimulationMainContent-body__videoItem"
                                src={data.video}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </div>
                        <div className="detailMainContent-body__specificationsHeader">
                            Specifications
                        </div>
                        <div className="detailMainContent-body__specifications">
                            {Object.entries(data.Specification).map(
                                ([key, value]) => (
                                    <div
                                        className="detailMainContent-body__specification"
                                        key={`${key}_${data.id}`}
                                    >
                                        <div className="detailMainContent-body__specHeader">
                                            {key}
                                        </div>
                                        <div className="detailMainContent-body__specValue">
                                            {value}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="detailMainContent-body__featuresHeader">
                            Features
                        </div>
                        <div className="detailMainContent-body__features">
                            {data.Features?.map((item) => (
                                <div
                                    className="detailMainContent-body__feature"
                                    key={`${item}_${data.id}`}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <aside className="detailMainContent-body__aside detailMainContent-body-aside">
                        <div className="detailMainContent-body-aside__advertisment">
                            <Advertisment />
                        </div>
                        <div className="detailMainContent-body-aside__contactDealer">
                            <ContactDealer />
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    ) : null;
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getCarCatalog: () => dispatch(getCarCatalog()),
    };
};
const mapStateToProps = (state: any) => {
    return {
        carCatalog: state.carCatalog.carCatalog,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailMainContent);
