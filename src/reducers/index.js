import { combineReducers } from "redux";
import estados from './estadosBrasil';
import municipios from './municipioBrasil';
import distritos from './distritoBrasil';

const rootReducer = combineReducers({
    estados,
    municipios,
    distritos,
});

export default rootReducer;