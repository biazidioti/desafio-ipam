import { GET_LOCATION, GET_LOCATION_SUCCESS, GET_LOCATION_ERROR, ADD_LOCATION } from '../actions';

const INITIAL_STATE = {
    estado: [],
    municipio: [],
    isLoading: true,
};

export const localidade = (
 state = INITIAL_STATE,
 action,
) => {
    console.log(action.payload)
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
            };;
        case ADD_LOCATION:
            return {
                ...state, estado: [...state.estado, action.payload],
            }
        default:
            return state;
    }
};

export default localidade;