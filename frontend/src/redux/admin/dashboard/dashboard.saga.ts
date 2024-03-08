import ToastNotification from "@/components/Admin/Notification/ToastNotification";
import { getDashboardQuery } from "@/services/dashboard/dashboard.query";
import { put, call, all, fork, takeEvery } from "redux-saga/effects";
import actions from "./dashboard.action";
import appActions from "@/redux/app/app.action";
import { SagaIterator } from "redux-saga";
import { useDispatch } from "react-redux";

export function* getDashboardData() {
  // const dispatch = useDispatch()
  yield takeEvery(actions.GET_DASHBOARD_REQUEST, function* ({ payload }: { type: string; payload: any }) {
    yield put(appActions.globalLoaderHandler(true));
    const result: any = yield call(getDashboardQuery, payload);
    if (result.data) {
      yield put({
        type: actions.GET_DASHBOARD_SUCCESS,
        payload: result?.data?.adminDashboard
        ,
      });
    } else {
      ToastNotification({
        type: "error",
        message: result?.error,
      });
      yield put({
        type: actions.GET_DASHBOARD_ERROR,
        error: result?.error,
      });
    }
    // dispatch(appActions.globalLoaderHandler(false))
    yield put(appActions.globalLoaderHandler(false));
  });
}

export default function* dashboardSaga() {
  yield all([fork(getDashboardData)]);
}
