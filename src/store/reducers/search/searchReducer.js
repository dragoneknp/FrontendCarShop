import {
    CARSELECT_RECIEVED_FAILED,
    CARSELECT_RECIEVED_SUCCESS,
    CARSELECT_LOADING_START,
    CARSELECT_LOADING_COMPLETE,
} from "../../actionTypes";
const initialState = {
    brands: [],
    models: [],
    error: null,
    loading: false,
};
export function carSelectReducer(state = initialState, action) {
    switch (action.type) {
        case CARSELECT_RECIEVED_SUCCESS:
            return {
                ...state,
                error: null,
                brands: action.brands,
                models: action.models,
            };
        case CARSELECT_RECIEVED_FAILED:
            return { ...state, error: action.error };
        case CARSELECT_LOADING_START:
            return { ...state, loading: true };
        case CARSELECT_LOADING_COMPLETE:
            return { ...state, loading: false };
        default:
            return state;
    }
}
