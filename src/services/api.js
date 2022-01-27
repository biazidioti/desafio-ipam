// https://servicodados.ibge.gov.br/api/docs/localidades
const ESTADOS_API = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const MUNICIPIO_API = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`;

export function fetchStatesAPI() {
    return fetch(ESTADOS_API)
      .then((response) => response.json());
  };

  export function fetchMunicipioAPI(id) {
    return fetch(MUNICIPIO_API(id))
      .then((response) => response.json());
  };
