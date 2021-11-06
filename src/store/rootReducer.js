import { carSelectReducer } from "./reducers/search/searchReducer";
import { combineReducers } from "redux";
import { findCarReducer } from "./reducers/findCar/findCarReducer";
import { collectionSliderReducer } from "./reducers/collectionSlider/collectionSliderReducer";
export default combineReducers({
    carSelect: carSelectReducer,
    findCar: findCarReducer,
    collectionSlider: collectionSliderReducer,
})