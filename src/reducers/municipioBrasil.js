import { GET_MUNICIPIO, GET_MUNICIPIO_SUCCESS, GET_MUNICIPIO_ERROR } from '../actions/municipiosBrasil';

const INITIAL_STATE = {
    municipio: [],
    isLoading: true,
};

export const municipiosBrasil = (
    state = INITIAL_STATE,
    action,
) => {
    switch(action.tupe) {
        case GET_MUNICIPIO:
            return {
                ...state,
                isLoading: true,
            };
        case GET_MUNICIPIO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                estado: action.payload,
            };
        case GET_MUNICIPIO_ERROR:
            return {
                ...state,
                isLoading: false,
            };
            default:
                return state;
    }
};

export default municipiosBrasil;
