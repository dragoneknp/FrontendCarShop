import {
    COLLECTIONSLIDER_GET_FAILED,
    COLLECTIONSLIDER_GET_SUCCESS,
    COLLECTIONSLIDER_LOADING_COMPLETE,
    COLLECTIONSLIDER_LOADING_START,
} from "../../actionTypes";

const initialState = {
    error: null,
    loading: false,
    slides: {
        slide1: {
            productOwner: "Esemka Car",
            name: "Model SX",
            milleage: 2000,
            engineType: "electric",
            gearBox: "automatic",
            pictures: {
                picture1: "/images/teslaModelX.jpg",
                picture2: "/images/teslaModel3.png",
                picture3: "/images/teslaModel3.png",
                picture4: "/images/teslaModel3.png",
                picture5: "/images/teslaModel3.png",
            },
        },
    },
};
export function collectionSliderReducer(state = initialState, action) {
    switch (action.type) {
        case COLLECTIONSLIDER_GET_SUCCESS:
            return { ...state, error: null, slides: action.slides };
        case COLLECTIONSLIDER_LOADING_COMPLETE:
            return { ...state, loading: false };
        case COLLECTIONSLIDER_LOADING_START:
            return { ...state, loading: true };
        case COLLECTIONSLIDER_GET_FAILED:
            return { ...state, error: action.error };
        default:
            return state;
    }
}
