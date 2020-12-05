import { all, call, put, takeEvery } from "redux-saga/effects";
import { invoke } from "../../../util/apiConfig";
import { initiateRegistrationFailure, initiateRegistrationSuccess } from "./action";
import { INITIATE_REGISTRATION, INITIATE_REGISTRATION_SUCCESS } from "./constant";

function* initiateRegistration(action) {
    const { user } = action
    try {
        const response = yield call(invoke, '/register', {
            method: "POST",
            body: JSON.stringify(user)
        })
        const data = response.json()
        if (response.status === 200) {
            yield put(initiateRegistrationSuccess(data))
        } else {
            yield put(initiateRegistrationFailure(data))
        }
    } catch (error) {
        yield put(initiateRegistrationFailure(error))
    }
}


export default function* watchAll() {
    yield all([
        takeEvery(INITIATE_REGISTRATION, initiateRegistration)
    ]);
}