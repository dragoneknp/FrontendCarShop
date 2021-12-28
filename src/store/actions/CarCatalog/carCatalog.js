import {
    GET_CARCATALOG_SUCCESS,
    GET_CARCATALOG_FAILED,
} from "../../actionTypes";
import axios from "axios";

export function getCarCatalog() {
    return (dispatch) => {
        axios
            .get(
                "https://carshop-c3428-default-rtdb.firebaseio.com/carCards.json"
            )
            .then((response) => {
                const carCatalog = response.data;
                dispatch(getCarCatalogSuccess(carCatalog));
            })
            .catch((error) => {
                console.log(error);
                dispatch(getCarCatalogFailed(error));
            });
    };
}
export function getCarCatalogSuccess(carCatalog) {
    return {
        type: GET_CARCATALOG_SUCCESS,
        payload: carCatalog,
    };
}
export function getCarCatalogFailed(error) {
    return {
        type: GET_CARCATALOG_FAILED,
        error,
    };
}
