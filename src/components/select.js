import { Component } from "react";
import { connect } from "react-redux";

import { getLocationThunk } from '../actions/estadosBrasil';


class Select extends Component {
    constructor() {
        super();
        this.state = {
            estado: '',
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
                    <option>
                    {municipio}
                    </option>
                    </select>
                </label>
            </div>
        )
    }
}

const mapStateToProps = ({ estados: { estado } }) => ({
    estado,
});

const mapDispatchToProps = (dispatch) => ({
    getLocation: () => dispatch(getLocationThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);