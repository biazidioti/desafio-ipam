import { combineReducers } from "redux";
import estados from './estadosBrasil';
import municipios from './municipioBrasil';

const rootReducer = combineReducers({
    estados,
    municipios,
});

export default rootReducer;