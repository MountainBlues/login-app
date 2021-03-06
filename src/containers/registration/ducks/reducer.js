const { INITIATE_REGISTRATION_SUCCESS } = require("./constant")

const initialState = {
    userDetails: {}
}

const reducer = (state = initialState, action) => {
    const { type } = action
    switch(type) {
        case INITIATE_REGISTRATION_SUCCESS: {
            return {
                ...state,
                userDetails: action.payload
            }
        }
        default: return state
    }
}

export default reducer