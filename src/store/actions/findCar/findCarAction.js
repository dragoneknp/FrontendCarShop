import { FINDCAR_GET_SUCCESS, FINDCAR_GET_FAILED } from "../../actionTypes";
import axios from "axios";
export function findCar(brand, model){
    return dispatch => {
        axios.get(`https://carshop-c3428-default-rtdb.firebaseio.com/mainSlideCar/${brand}%20${model}.json`)
        .then(response => {
            const {model, productOwner, linkToPicture, characteristics: {engine, fuelEconomy, mileage}} = response.data;
            dispatch(getSuccess(model, productOwner, linkToPicture, engine, fuelEconomy, mileage));
        })
        .catch(error => {
            console.log(error);
            dispatch(getError(error));
        })
    }
}
export function getSuccess(model, productOwner, linkToPicture, engine, fuelEconomy, mileage){
    return {
        type: FINDCAR_GET_SUCCESS,
        model,
        productOwner,
        linkToPicture,
        engine,
        fuelEconomy,
        mileage
    }
}
export function getError(error){
    return {
        type: FINDCAR_GET_FAILED,
        error
    }
}