import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import { forbiddenWordsMiddleware } from "./middleware";
import { sagaWatcher } from "./sagas";

const saga = createSagaMiddleware();

let store = createStore(rootReducer, applyMiddleware(thunk, forbiddenWordsMiddleware, saga, logger));

saga.run(sagaWatcher);

export default store;
