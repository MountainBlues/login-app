import { all, call, put, takeEvery } from "redux-saga/effects";
import { invoke } from "../../../util/apiConfig";
import { initiateLoginFailure, initiateLoginSuccess } from "./action";
import { INITIATE_LOGIN } from "./constant";

function* initiateLogin(action) {
    const { user, onLoginSuccess, onLoginFailure } = action
    try {
        const response = yield call(invoke, '/login', {
            method: "POST",
            body: JSON.stringify(user)
        })
        const data = yield response.json()
        if (response.status === 200) {
            yield put(initiateLoginSuccess(data))
            if (typeof onLoginSuccess === 'function') {
                onLoginSuccess(data)
            }
        } else {
            if (typeof onLoginFailure === 'function') {
                onLoginFailure(data.status)
            }
        }
    } catch (error) {
        yield put(initiateLoginFailure(error))
    }
}


export default function* watchAll() {
    yield all([
        takeEvery(INITIATE_LOGIN, initiateLogin)
    ]);
}