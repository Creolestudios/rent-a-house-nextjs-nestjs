import { all, takeEvery, put, fork } from "redux-saga/effects";
import appActions  from "./app.action";

export function* globalLoaderHandler() {
  yield takeEvery(
    appActions.GLOBAL_LOADER,
    function* ({ isIncrement }: { type: string; isIncrement: boolean }) {
      if (isIncrement) {
        yield put({
          type: appActions.GLOBAL_LOADER_TRUE,
        });
      } else {
        yield put({
          type: appActions.GLOBAL_LOADER_FALSE,
        });
      }
    }
  );
}

export default function* appSaga() {
  yield all([fork(globalLoaderHandler)]);
}
