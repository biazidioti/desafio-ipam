// Chamar a API de municipios
import { fetchMunicipioAPI } from '../services/api';

export const GET_MUNICIPIO = 'GET_MUNICIPIO';
export const GET_MUNICIPIO_SUCCESS = 'GET_MUNICIPIO_SUCCESS';
export const GET_MUNICIPIO_ERROR = 'GET_MUNICIPIO_ERROR';

export const getMunicipio = () => ({
    type: GET_MUNICIPIO,
});

export const getMunicipioSuccess = (payload) => ({
    type: GET_MUNICIPIO_SUCCESS,
    payload,
});

export const getMunicipioError = (payload) => ({
    type: GET_MUNICIPIO_ERROR,
    payload,
});

export const getMunicipioThunk = (id) => (dispatch) => {
    dispatch(getMunicipio());
    fetchMunicipioAPI(id).then((res) => {
        const municipios = (res);
        dispatch(getMunicipioSuccess(municipios));
    }).catch(() => { dispatch(getMunicipioError()); });
};
