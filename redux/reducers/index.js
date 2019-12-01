import { combineReducers } from "redux";
import buttonToggle from "./buttonToggle";

const rootReducer = combineReducers({
    button: buttonToggle,
});

export default rootReducer;