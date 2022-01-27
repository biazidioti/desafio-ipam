// Quais actions são necessárias?
// Selecionar um estado e selecionar um nunicípio com a chamada da API

import { fetchStatesAPI } from '../services/api';

export const GET_LOCATION = 'GET_LOCATION';
export const GET_LOCATION_SUCCESS = 'GET_LOCATION_SUCCESS';
export const GET_LOCATION_ERROR = 'GET_LOCATION_ERROR';
export const ADD_LOCATION = 'ADD_LOCATION';

export const getLocation = () => ({
    type: GET_LOCATION,
});

export const getLocationSuccess = (payload) => ({
    type: GET_LOCATION_SUCCESS,
    payload,
});

export const getLocationError = (payload) => ({
    type: GET_LOCATION_ERROR,
    payload,
});

/* export const addLocation = (payload) => ({
    type: ADD_LOCATION,
    payload,
}); */

export const getLocationThunk = () => (dispatch) => {
    dispatch(getLocation());
    fetchStatesAPI().then((response) => {
      const apiData = (response);
      console.log(apiData);
      dispatch(getLocationSuccess(apiData));
    }).catch(() => { dispatch(getLocationError([])); }); // Quando tiver um erro, retorna um array vazio
  };
  
/*   export const addStatesThunk = (ufs) => (dispatch) => {
    fetchStatesAPI().then((response) => {
      const ufStates = (response);
      console.log(ufStates);
      const data = { ...ufs, ufStates };
      dispatch(addLocation(data));
    });
  }; */