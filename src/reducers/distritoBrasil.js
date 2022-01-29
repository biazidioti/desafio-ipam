import { GET_DISTRICT, GET_DISTRICT_SUCCESS, GET_DISTRICT_ERROR } from '../actions/distritoBrasil';
import { GET_MUNICIPIO_SUCCESS } from '../actions/municipiosBrasil';

const INITIAL_STATE = {
    distrito: [],
    isLoading: true,
}

export const distritoBrasil = (
    state = INITIAL_STATE,
    action,
) => {
    switch(action.type) { 
        case GET_DISTRICT:
            return {
                ...state,
                isLoading: true,
            };
        case GET_DISTRICT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                distrito: action.payload,
            };
        case GET_DISTRICT_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        case GET_MUNICIPIO_SUCCESS:
            return {
                ...state, 
                distrito: [],
                isLoading: false,
            }
        default:
            return state;
    }
};

export default distritoBrasil;
