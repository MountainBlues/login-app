import { INITIATE_LOGIN, INITIATE_LOGIN_FAILURE, INITIATE_LOGIN_SUCCESS } from "./constant";

export const initiateLogin = (user, onLoginSuccess, onLoginFailure) => ({
    type: INITIATE_LOGIN,
    user,
    onLoginSuccess,
    onLoginFailure
})

export const initiateLoginSuccess = payload => ({
    type: INITIATE_LOGIN_SUCCESS,
    payload
})

export const initiateLoginFailure = payload => ({
    type: INITIATE_LOGIN_FAILURE,
    payload
})