import { carSelectReducer } from "./reducers/search/searchReducer";
import { combineReducers } from "redux";
import { findCarReducer } from "./reducers/findCar/findCarReducer";
export default combineReducers({
    carSelect: carSelectReducer,
    findCar: findCarReducer,
})