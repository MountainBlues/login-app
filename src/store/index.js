import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleWare from "redux-saga";
import rootReducer from "../reducer";
import rootSaga from "../saga";

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleWare)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleWare.run(rootSaga);

export default store;
