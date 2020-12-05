import { all } from "redux-saga/effects";
import watchLogin from "../containers/login/ducks/saga";
import watchRegistration from "../containers/registration/ducks/saga";

export default function* rootSaga() {
  yield all([watchLogin(), watchRegistration()]);
}

