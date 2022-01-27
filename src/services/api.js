// https://servicodados.ibge.gov.br/api/docs/localidades
const ESTADOS_API = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

export const fetchStatesAPI = () => {
    fetch(ESTADOS_API)
      .then((response) => (
        response
            .json()
            .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
      ))
  };

  export default fetchStatesAPI;
