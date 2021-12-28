import React, { useState } from "react";
import "./exploreMainContent.scss";
import MakeExploreMainContentCards from "../ExploreMainContentCards/ExploreMainContentCards";
import Advertisment from "../Advertisment/advertisment";
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
const ExploreMainContent = (props: any) => {
    const data = props.data;
    const [currentPage, changeCurrentPage] = useState(
        localStorage.getItem("explorePage")
            ? Number(localStorage.getItem("explorePage"))
            : 1
    );
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
                                        onClick={() => {
                                            changeCurrentPage(page);
                                            localStorage.setItem(
                                                "explorePage",
                                                page.toString()
                                            );
                                        }}
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
