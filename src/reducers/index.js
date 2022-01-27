import { combineReducers } from "redux";
import statesReducer from './statesReducer'

const rootReducer = combineReducers({
    statesReducer,
});

export default rootReducer;