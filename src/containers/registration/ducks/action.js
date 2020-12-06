import { INITIATE_REGISTRATION, INITIATE_REGISTRATION_FAILURE, INITIATE_REGISTRATION_SUCCESS } from "./constant";

export const initiateRegistration = (user, onRegistrationSuccess, onRegistrationFailure) => ({
    type: INITIATE_REGISTRATION,
    user,
    onRegistrationSuccess,
    onRegistrationFailure
})

export const initiateRegistrationSuccess = payload => ({
    type: INITIATE_REGISTRATION_SUCCESS,
    payload
})

export const initiateRegistrationFailure = payload => ({
    type: INITIATE_REGISTRATION_FAILURE,
    payload
})