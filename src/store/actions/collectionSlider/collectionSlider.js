import { COLLECTIONSLIDER_GET_SUCCESS,  COLLECTIONSLIDER_GET_FAILED, COLLECTIONSLIDER_LOADING_START, COLLECTIONSLIDER_LOADING_COMPLETE} from "../../actionTypes";
import axios from "axios";

export function getCollectionSlider() {
    return dispatch => {
        axios.get("https://carshop-c3428-default-rtdb.firebaseio.com/collectionSlides.json")
        .then(response => {
            const slides = response.data;
            dispatch(sliderLoadingStarted());
            dispatch(getSliderSuccess(slides));
            dispatch(sliderLoadingCompleted());
        })
        .catch(error => {
            console.log(error);
            dispatch(getSliderFailed(error));
        })
    }
}
export function getSliderSuccess(slides){
    return {
        type: COLLECTIONSLIDER_GET_SUCCESS,
        slides
    }
}
export function getSliderFailed(error){
    return{
        type: COLLECTIONSLIDER_GET_FAILED,
        error
    }
}
export function sliderLoadingStarted(){
    return{
        type: COLLECTIONSLIDER_LOADING_START
    }
}
export function sliderLoadingCompleted(){
    return{
        type: COLLECTIONSLIDER_LOADING_COMPLETE
    }
}