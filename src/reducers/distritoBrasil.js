import { GET_DISDRICT, GET_DISDRICT_SUCCESS, GET_DISDRICT_ERROR } from '../actions/distritoBrasil';

const INITIAL_STATE = {
    distrito: [],
    isLoading: true,
}

export const distritoBrasil = (
    state = INITIAL_STATE,
    action,
) => {
    switch(action.type) { 
        case GET_DISDRICT:
            return {
                ...state,
                isLoading: true,
            };
        case GET_DISDRICT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                distrito: action.payoad,
            };
        case GET_DISDRICT_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default distritoBrasil;
