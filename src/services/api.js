// https://servicodados.ibge.gov.br/api/docs/localidades
const ESTADOS_API = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

export function fetchStatesAPI() {
    return fetch(ESTADOS_API)
      .then((response) => response.json());
  };
