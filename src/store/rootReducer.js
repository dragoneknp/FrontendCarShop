import { carSelectReducer } from "./reducers/search/searchReducer";
import { combineReducers } from "redux";
import { findCarReducer } from "./reducers/findCar/findCarReducer";
import { collectionSliderReducer } from "./reducers/collectionSlider/collectionSliderReducer";
import { carCatalogReducer } from "./reducers/CarCatalog/carCatalogReducer";
export default combineReducers({
    carSelect: carSelectReducer,
    findCar: findCarReducer,
    collectionSlider: collectionSliderReducer,
    carCatalog: carCatalogReducer,
});
