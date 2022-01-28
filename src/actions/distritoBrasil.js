// Chamar a API de distrito

import { fetchDistritoAPI } from "../services/api";

export const GET_DISDRICT = 'GET_DISDRICT';
export const GET_DISDRICT_SUCCESS = 'GET_DISDRICT_SUCCESS';
export const GET_DISDRICT_ERROR = 'GET_DISDRICT_ERROR';

export const getDistrict = () => ({
    type: GET_DISDRICT,
});

export const getDistrictSuccess = (payload) => ({
    type: GET_DISDRICT_SUCCESS,
    payload,
});

export const getDistrictError = (payload) => ({
    type: GET_DISDRICT_ERROR,
    payload,
});

export const getDistrictThunk = (id) => (dispatch) => {
    dispatch(getDistrict());
    fetchDistritoAPI(id).then((res) => {
        const distritos = (res);
        console.log(distritos);
        dispatch(getDistrictSuccess(distritos));
    }).catch(() => { dispatch(getDistrictError()); });
};
