import { GET_LOCATION, GET_LOCATION_SUCCESS, GET_LOCATION_ERROR } from '../actions/estadosBrasil';

const INITIAL_STATE = {
    estado: [],
    isLoading: true,
};

export const estadosBrasil = (
 state = INITIAL_STATE,
 action,
) => {
    switch(action.type) {
        case GET_LOCATION:
            return {
                ...state,
                isLoading: true,
            };
        case GET_LOCATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                estado: action.payload,
            };
        case GET_LOCATION_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default estadosBrasil;
