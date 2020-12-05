import { INITIATE_LOGIN, INITIATE_LOGIN_FAILURE, INITIATE_LOGIN_SUCCESS } from "./constant";

export const initiateLogin = user => ({
    type: INITIATE_LOGIN,
    user
})

export const initiateLoginSuccess = payload => ({
    type: INITIATE_LOGIN_SUCCESS,
    payload
})

export const initiateLoginFailure = payload => ({
    type: INITIATE_LOGIN_FAILURE,
    payload
})