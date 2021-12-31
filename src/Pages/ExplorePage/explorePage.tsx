import React, { useEffect } from "react";
import "./explorePage.scss";
import Header from "../../Component/Header/header";
import Footer from "../../Component/Footer/footer";
import NewsLetter from "../../Component/NewsLetter/newsLetter";
import ExploreHeader from "../../Component/ExploreHeader/exploreHeader";
import ExploreSearch from "../../Component/ExploreSearch/exploreSearch";
import ExploreMainContent from "../../Component/ExploreMainContent/exploreMainContent";
import { getCarCatalog } from "../../store/actions/CarCatalog/carCatalog";
import { connect } from "react-redux";
interface CarCard {
    brand: string | undefined;
    model: string | undefined;
    HP: number | null;
    typeOfFuel: string | undefined;
    transmission: string | undefined;
    picture: string | undefined;
    price: number | null;
    id: string | undefined;
}
const Explore = (props: { carCatalog: CarCard[]; getCarCatalog: any }) => {
    useEffect(() => {
        props.getCarCatalog();
    }, []);
    return (
        <div className="explore__wrapper">
            <Header />
            <ExploreHeader />
            <ExploreSearch />
            <ExploreMainContent data={props.carCatalog} />
            <NewsLetter />
            <Footer />
        </div>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(Explore);
