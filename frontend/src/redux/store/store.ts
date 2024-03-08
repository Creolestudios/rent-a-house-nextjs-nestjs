import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(sagaMiddleware))
// );
// sagaMiddleware.run(rootSaga);

export const makeStore = () => {

  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  // 3: Run your sagas on server
  // store.sagaTask = sagaMiddleware.run(rootSaga);
  sagaMiddleware.run(rootSaga);

  // 4: now return the store
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
