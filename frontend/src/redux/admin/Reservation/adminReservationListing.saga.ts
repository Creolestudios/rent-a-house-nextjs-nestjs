import { put, call, all, fork, takeEvery } from "redux-saga/effects";
import reservationActions from "./adminReservationListing.action";
import appActions from "@/redux/app/app.action";
import {
  adminReservationListingQuery,
  adminSingleReservationQuery,
} from "@/services/adminReservationListing/adminReservationListing.query";
import ToastNotification from "@/components/Admin/Notification/ToastNotification";

export function* getReservationListSaga() {
  yield takeEvery(
    reservationActions.RESERVATION_LIST_REQUEST,
    function* ({ payload }: any) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(adminReservationListingQuery, payload);
      if (result.data) {
        yield put({
          type: reservationActions.RESERVATION_LIST_SUCCESS,
          payload: result?.data?.allReservation,
        });
      }
      else{
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({ type: reservationActions.RESERVATION_LIST_ERROR, error: result?.error });
      }

      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getSingleReservation() {
  yield takeEvery(
    reservationActions.SINGLE_RESERVATION_LIST_REQUEST,
    function* ({ payload }: any) {
      yield put(appActions.globalLoaderHandler(true));

      console.log("saga");
      const result: any = yield call(adminSingleReservationQuery, payload);
      if (result.data) {
        yield put({
          type: reservationActions.SINGLE_RESERVATION_LIST_SUCCESS,
          payload: result?.data?.reservation,
        });
      }
      else{
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({ type: reservationActions.SINGLE_RESERVATION_LIST_ERROR, error: result?.error });
      }
      yield put(appActions.globalLoaderHandler(false));

    }
  );
}

export default function* adminReservationListingSaga() {
  yield all([fork(getReservationListSaga)]);
  yield all([fork(getSingleReservation)]);
}
