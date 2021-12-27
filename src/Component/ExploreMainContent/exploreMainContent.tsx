import React, { useState } from "react";
import "./exploreMainContent.scss";
import MakeExploreMainContentCards from "../ExploreMainContentCards/ExploreMainContentCards";
import Advertisment from "../Advertisment/advertisment";
const data = [
    {
        brand: "Tesla",
        model: "Model 3",
        HP: 555,
        typeOfFuel: "energy",
        transmission: "auto",
        picture: "/images/teslaModelX1.jpeg",
        price: 5000,
    },
    {
        brand: "Tesla",
        model: "Model 3",
        HP: 555,
        typeOfFuel: "energy",
        transmission: "auto",
        picture: "/images/teslaModelX1.jpeg",
        price: 120001,
    },
    {
        brand: "Tesla",
        model: "Model 3",
        HP: 555,
        typeOfFuel: "energy",
        transmission: "auto",
        picture: "/images/teslaModelX1.jpeg",
        price: 50002432,
    },
    {
        brand: "Tesla",
        model: "Model 3",
        HP: 555,
        typeOfFuel: "energy",
        transmission: "auto",
        picture: "/images/teslaModelX1.jpeg",
        price: 120003,
    },
    {
        brand: "Tesla",
        model: "Model 3",
        HP: 555,
        typeOfFuel: "energy",
        transmission: "auto",
        picture: "/images/teslaModelX1.jpeg",
        price: 50004,
    },
    {
        brand: "Tesla",
        model: "Model 3",
        HP: 555,
        typeOfFuel: "energy",
        transmission: "auto",
        picture: "/images/teslaModelX1.jpeg",
        price: 120005,
    },
    {
        brand: "Tesla",
        model: "Model 3",
        HP: 555,
        typeOfFuel: "energy",
        transmission: "auto",
        picture: "/images/teslaModelX1.jpeg",
        price: 50006,
    },
    {
        brand: "Tesla",
        model: "Model 3",
        HP: 555,
        typeOfFuel: "energy",
        transmission: "auto",
        picture: "/images/teslaModelX1.jpeg",
        price: 120007,
    },
    {
        brand: "Tesla",
        model: "Model 3",
        HP: 555,
        typeOfFuel: "energy",
        transmission: "auto",
        picture: "/images/teslaModelX1.jpeg",
        price: 500023,
    },
    {
        brand: "Tesla",
        model: "Model 3",
        HP: 555,
        typeOfFuel: "energy",
        transmission: "auto",
        picture: "/images/teslaModelX1.jpeg",
        price: 1200024,
    },
    {
        brand: "Tesla",
        model: "Model 3",
        HP: 555,
        typeOfFuel: "energy",
        transmission: "auto",
        picture: "/images/teslaModelX1.jpeg",
        price: 500025,
    },
    {
        brand: "Tesla",
        model: "Model 3",
        HP: 555,
        typeOfFuel: "energy",
        transmission: "auto",
        picture: "/images/teslaModelX1.jpeg",
        price: 1200025,
    },
    {
        brand: "Tesla",
        model: "Model 3",
        HP: 555,
        typeOfFuel: "energy",
        transmission: "auto",
        picture: "/images/teslaModelX1.jpeg",
        price: 50002,
    },
    {
        brand: "Tesla",
        model: "Model 3",
        HP: 555,
        typeOfFuel: "energy",
        transmission: "auto",
        picture: "/images/teslaModelX1.jpeg",
        price: 1200012,
    },
];

const ExploreMainContent: React.FC = () => {
    const [currentPage, changeCurrentPage] = useState(1);
    const makeArrayWithPagination = (numberOfPages: number) => {
        return Array((numberOfPages % 5) + 1)
            .fill(0)
            .map((item, index) => index + 1);
    };

    return (
        <div className="exploreMainContent">
            <div className="exploreMainContent__container container">
                <div className="exploreMainContent__search">
                    <input
                        type="text"
                        className="exploreMainContent__input"
                        placeholder="Search smth.."
                    />
                    <button className="exploreMainContent__button redBtn">
                        Search
                    </button>
                </div>
                <div className="exploreMainContent__header">Founded Model</div>
                <div className="exploreMainContent__body exploreMainContent-body">
                    <div className="exploreMainContent-body__content">
                        <div className="exploreMainContent-body__resultsHeader">
                            We’ve found 20 results of tesla
                        </div>
                        <div className="exploreMainContent-body__results">
                            {MakeExploreMainContentCards(data, currentPage)}
                        </div>
                        <div className="exploreMainContent__pagination">
                            <img
                                src={`${
                                    currentPage > 1
                                        ? "/images/arrowLeftActive.svg"
                                        : "/images/arrowLeft.svg"
                                }`}
                                alt="Previos Page"
                                className="arrowLeft"
                                onClick={() => {
                                    if (currentPage > 1) {
                                        changeCurrentPage(currentPage - 1);
                                    }
                                }}
                            />
                            {makeArrayWithPagination(data.length).map(
                                (page) => (
                                    <div
                                        className={`exploreMainContent__page ${
                                            page === currentPage
                                                ? "active"
                                                : "disabled"
                                        }`}
                                        onClick={() => changeCurrentPage(page)}
                                        key={`current page is ${page}`}
                                    >
                                        {page}
                                    </div>
                                )
                            )}
                            <img
                                src={`${
                                    currentPage < (data.length % 5) + 1
                                        ? "/images/arrowLeftActive.svg"
                                        : "/images/arrowLeft.svg"
                                }`}
                                alt="Next Page"
                                className="arrowRight"
                                onClick={() => {
                                    if (currentPage < (data.length % 5) + 1) {
                                        changeCurrentPage(currentPage + 1);
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <aside className="exploreMainContent-body__aside">
                        <div className="exploreMainContent-body__sorts exploreMainContent-body-sorts">
                            <div className="exploreMainContent-body-sorts__label">
                                Sort By
                            </div>
                            <div className="exploreMainContent-body-sorts__filter">
                                Newest
                            </div>
                            <div className="exploreMainContent-body-sorts__viewWithOneBlock"></div>
                            <div className="exploreMainContent-body-sorts__viewWithTwoBlocks"></div>
                        </div>
                        <Advertisment />

                        <div className="exploreMainContent-body__contactUs exploreMainContent-body-contactUs">
                            <div className="exploreMainContent-body-contactUs__header">
                                Contact Us
                            </div>
                            <div className="exploreMainContent-body-contactUs__description">
                                Need more Discusion?
                            </div>
                            <button className="exploreMainContent-body-contactUs__contactUsButton">
                                Contact Us
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};
export default ExploreMainContent;
