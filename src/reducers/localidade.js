import { GET_LOCATION, GET_LOCATION_SUCCESS, GET_LOCATION_ERROR } from '../actions';

const INITIAL_STATE = {
    estado: [],
    municipio: [],
    error: null,
    isLoading: false,
};

export const localidade = (
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
                estado: action.payload.estado,
                municipio: action.payload.municipio,
            };
        case GET_LOCATION_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };;
        /* case ADD_LOCATION:
            return {
                ...state, estado: [...state.estado, action.payload],
            } */
        default:
            return state;
    }
};

export default localidade;