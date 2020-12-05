import { all, call, put, takeEvery } from "redux-saga/effects";
import { invoke } from "../../../util/apiConfig";
import { initiateLoginFailure, initiateLoginSuccess } from "./action";
import { INITIATE_LOGIN } from "./constant";

function* initiateLogin(action) {
    const { user } = action
    try {
        const response = yield call(invoke, '/login', {
            method: "POST",
            body: JSON.stringify(user)
        })
        const data = response.json()
        if (response.status === 200) {
            yield put(initiateLoginSuccess(data))
        } else {
            yield put(initiateLoginFailure(data))
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