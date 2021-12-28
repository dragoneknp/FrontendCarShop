import {
    GET_CARCATALOG_FAILED,
    GET_CARCATALOG_SUCCESS,
} from "../../actionTypes";
const initialState = {
    carCatalog: [],
    error: null,
};
export function carCatalogReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CARCATALOG_SUCCESS:
            return { ...state, error: null, carCatalog: action.payload };
        case GET_CARCATALOG_FAILED:
            return { ...state, error: action.error };
        default:
            return state;
    }
}
