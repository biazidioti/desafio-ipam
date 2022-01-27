import { Component } from "react";
import { connect } from "react-redux";

class Select extends Component {
    render() {
        const { estado, municipio } = this.props;
        return(
            <div>
                <label htmlFor="input-state">
                    Selecione um estado:
                    <select
                      name="estado"
                      id="input-state"
                    >
                    <option>
                    {estado}
                    </option>
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

const mapStateToProps = (state) => ({
    estado: state.statesReducer.estado,
    municipio: state.statesReducer.municipio,
});

export default connect(mapStateToProps, null)(Select);