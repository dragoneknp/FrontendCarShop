import { FINDCAR_GET_SUCCESS, FINDCAR_GET_FAILED } from "../../actionTypes";

const initialState = {
    error: null,
    model: "Model SV",
    productOwner: "Esemka car",
    mileage: 555,
    engine: 2000,
    fuelEconomy: 8,
    linkToPicture: "/images/teslaModel3.png",
    id: "hoc12345678901234",
};
export function findCarReducer(state = initialState, action) {
    switch (action.type) {
        case FINDCAR_GET_SUCCESS:
            return {
                ...state,
                error: null,
                model: action.model,
                mileage: action.mileage,
                engine: action.engine,
                fuelEconomy: action.fuelEconomy,
                linkToPicture: action.linkToPicture,
                productOwner: action.productOwner,
                id: action.id,
            };
        case FINDCAR_GET_FAILED:
            return { ...state, error: action.error };
        default:
            return state;
    }
}
