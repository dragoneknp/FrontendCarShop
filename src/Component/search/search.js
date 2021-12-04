import React, { useEffect, useState } from "react";
import "./search.scss";
import getCarSelectData from "../../store/actions/search/searchAction";
import { findCar } from "../../store/actions/findCar/findCarAction";
import { connect } from "react-redux";
import Loader from "../Loader/loader";
const Search = (props) => {
  const [modelPopupVisibility, changeModelPopupVisibility] = useState(false);
  const [brandPopupVisibility, changeBrandPopupVisibility] = useState(false);
  const [currentBrand, changeCurrentBrand] = useState("");
  const [currentModel, changeCurrentModel] = useState("");

  useEffect(() => {
    props.getCarSelectData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="search">
      <div className="search__container container">
        <div className="search__body search-body">
          {props.loading ? (
            <Loader />
          ) : (
            <>
              <div
                className={`search-body__select ${
                  brandPopupVisibility ? "opened" : "closed"
                }`}
                onClick={(event) =>
                  event.target.classList.contains("search-menu")
                    ? null
                    : changeBrandPopupVisibility(!brandPopupVisibility)
                }
              >
                <div className="search-body__label">
                  {currentBrand ? currentBrand : "Select Brand"}
                </div>
                <ul
                  className={`search-menu ${
                    brandPopupVisibility ? "opened" : "closed"
                  }`}
                >
                  {props.brands ? (
                    props.brands.map((brand) => (
                      <li
                        key={brand}
                        className="search-menu__item"
                        onClick={(event) => {
                          changeCurrentBrand(event.target.textContent);
                          changeCurrentModel("");
                        }}
                      >
                        {brand}
                      </li>
                    ))
                  ) : (
                    <div>No brands are availbable now</div>
                  )}
                </ul>
              </div>
              <div
                className={`search-body__select ${
                  modelPopupVisibility ? "opened" : "closed"
                }`}
                onClick={(event) =>
                  event.target.classList.contains("search-menu")
                    ? null
                    : changeModelPopupVisibility(!modelPopupVisibility)
                }
              >
                <div className="search-body__label">
                  {currentModel ? currentModel : "Select Model"}
                </div>
                <ul
                  className={`search-menu ${
                    modelPopupVisibility ? "opened" : "closed"
                  }`}
                >
                  {props.models[currentBrand] ? (
                    props.models[currentBrand].map(({ model }) => (
                      <li
                        key={model}
                        className="search-menu__item"
                        onClick={(event) => {
                          changeCurrentModel(event.target.textContent);
                        }}
                      >
                        {model}
                      </li>
                    ))
                  ) : (
                    <div>No model of this car available</div>
                  )}
                </ul>
              </div>
              <button
                className="search-body__searchBtn redBtn"
                disabled={currentBrand && currentModel ? false : true}
                onClick={
                  currentBrand && currentModel
                    ? () => props.findCar(currentBrand, currentModel)
                    : null
                }
              >
                Search
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    models: state.carSelect.models,
    brands: state.carSelect.brands,
    error: state.carSelect.error,
    loading: state.carSelect.loading,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getCarSelectData: () => dispatch(getCarSelectData()),
    findCar: (brand, model) => dispatch(findCar(brand, model)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
