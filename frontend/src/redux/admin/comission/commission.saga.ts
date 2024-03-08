import ToastNotification from "@/components/Admin/Notification/ToastNotification";
import { updateCommissionMutation } from "@/services/comission/commission.mutation";
import { getComissionQuery } from "@/services/comission/commission.query";
import { put, call, all, fork, takeEvery } from "redux-saga/effects";
import actions from "./commission.action";
import appActions from "@/redux/app/app.action";
import { SagaIterator } from "redux-saga";

export function* getCommission() {
  yield takeEvery(actions.GET_COMMISSION_REQUEST, function* (): SagaIterator {
    yield put(appActions.globalLoaderHandler(true));
    const result: any = yield call(getComissionQuery);
    if (result.data) {
      yield put({
        type: actions.GET_COMMISSION_SUCCESS,
        payload: result?.data?.commisionData?.data,
      });
    } else {
      ToastNotification({
        type: "error",
        message: result?.error,
      });
      yield put({
        type: actions.GET_COMMISSION_ERROR,
        error: result?.error,
      });
    }
    yield put(appActions.globalLoaderHandler(false));
  });
}

export function* updateCommissionData() {
  yield takeEvery(
    actions.UPDATE_COMMISSION_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(updateCommissionMutation, payload);

      if (result.data) {
        ToastNotification({
          type: "success",
          message: result.data.updateCommisionOnly.message,
        });
        yield put({
          type: actions.UPDATE_COMMISSION_SUCCESS,
          payload: result.data.updateCommisionOnly.data.value,
        });
      } else {
        ToastNotification({
          type: "error",
          message: result?.error,
        });
        yield put({
          type: actions.UPDATE_COMMISSION_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export default function* commssionSaga() {
  yield all([fork(getCommission), fork(updateCommissionData)]);
}
