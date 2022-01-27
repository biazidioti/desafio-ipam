import { Component } from "react";
import { connect } from "react-redux";

import { getLocationThunk } from '../actions/estadosBrasil';
import { getMunicipioThunk } from '../actions/municipiosBrasil';


class Select extends Component {
    constructor() {
        super();
        this.state = {
            estado: '',
            municipio: '',
        };
        this.onChange = this.onChange.bind(this);
    }

    // disparar uma nova requisica p API de acordo com o ID

    componentDidMount() {
        const { getLocation } = this.props;
        getLocation();
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
        const { getMunicipio } = this.props;
        getMunicipio(event.target.value);
    }

    render() {
        const { estado, municipio } = this.props;
        return(
            <div>
                <label htmlFor="input-state">
                    Selecione um estado:
                    <select
                      name="estado"
                      id="input-state"
                      onChange={ this.onChange }
                      >
                        {estado.map((uf) => {
                            return (
                              <option
                              key={uf.id}
                              value={uf.id}
                              >
                              {uf.sigla}
                              </option>
                            )
                        })}
                  
                    </select>
                </label>
                <label htmlFor="input-city">
                    Selecione um município:
                    <select
                      name="municipio"
                      id="input-city"
                    >
                    {municipio.map((city) => {
                        return (
                            <option
                            key={city.id}
                            value={city.id}
                            >
                            {city.nome}
                            </option>
                        )
                    })}
                    </select>
                </label>
            </div>
        )
    }
}

const mapStateToProps = (storeRedux) => ({
    estado: storeRedux.estados.estado,
    municipio: storeRedux.municipios.municipio
});

const mapDispatchToProps = (dispatch) => ({
    getLocation: () => dispatch(getLocationThunk()),
    getMunicipio: (id) => dispatch(getMunicipioThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);