import axios from "axios";
import { CARSELECT_RECIEVED_FAILED, CARSELECT_RECIEVED_SUCCESS, CARSELECT_LOADING_START, CARSELECT_LOADING_COMPLETE } from "../../actionTypes"
export default function getCarSelectData(){
    return dispatch => {
        axios.get("https://carshop-c3428-default-rtdb.firebaseio.com/carSelect.json")
        .then(response => {
            const {models, brands} = response.data;
            dispatch(getCarSelectLoadingStart());
            dispatch(getCarSelectSuccess(models, brands));
            dispatch(getCarSelectLoadingComplete());
            
        })
        .catch(error => {
            console.log(error);
            dispatch(getCarSelectLoadingStart());
            dispatch(getCarSelectError(error));
        })
        ;
    }
}
export function getCarSelectError(error){
    return {
        type: CARSELECT_RECIEVED_FAILED,
        error
    }
}
export function getCarSelectSuccess(models, brands){
    return{
        type: CARSELECT_RECIEVED_SUCCESS,
        models,
        brands
    }
}
export function getCarSelectLoadingStart(){
    return {
        type: CARSELECT_LOADING_START,
    }
}
export function getCarSelectLoadingComplete(){
    return {
        type: CARSELECT_LOADING_COMPLETE,
    }
}