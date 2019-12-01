import { CLICK_BUTTON } from "../types";

const initialState = {
    buttonIsOn: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CLICK_BUTTON:
            return { ...state, buttonIsOn: !state.buttonIsOn};

        default:
            return state;
    }
};