import { combineReducers } from "redux";
import loginReducer from "../containers/login/ducks/reducer";
import registrationReducer from "../containers/registration/ducks/reducer";

const rootReducer = combineReducers({
    loginReducer,
    registrationReducer
});

export default rootReducer;
