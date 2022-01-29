// Chamar a API de distrito

import { fetchDistritoAPI } from "../services/api";

export const GET_DISTRICT = 'GET_DISTRICT';
export const GET_DISTRICT_SUCCESS = 'GET_DISTRICT_SUCCESS';
export const GET_DISTRICT_ERROR = 'GET_DISTRICT_ERROR';

export const getDistrict = () => ({
    type: GET_DISTRICT,
});

export const getDistrictSuccess = (payload) => ({
    type: GET_DISTRICT_SUCCESS,
    payload,
});

export const getDistrictError = (payload) => ({
    type: GET_DISTRICT_ERROR,
    payload,
});

export const getDistrictThunk = (id) => (dispatch) => {
    dispatch(getDistrict());
    fetchDistritoAPI(id).then((res) => {
        const distritos = (res);
        // console.log(distritos);
        dispatch(getDistrictSuccess(distritos));
    }).catch(() => { dispatch(getDistrictError()); });
};
