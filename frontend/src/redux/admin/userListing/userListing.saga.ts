import { message } from 'antd';
import ToastNotification from "@/components/Admin/Notification/ToastNotification";
import {
  adminListingQuery,
} from "@/services/adminListing/adminListing.query";
import { put, call, all, fork, takeEvery } from "redux-saga/effects";
import actions from "./userListing.action";
import appActions from "@/redux/app/app.action";
import { SagaIterator } from "redux-saga";
import { singleUserQuery, userListQuery } from "@/services/userListing/userListing.query";
import { userDeleteMutation } from '@/services/userListing/userListing.mutation';


export function* getUsersList() {
  yield takeEvery(
    actions.GET_USER_LIST_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(userListQuery, payload);

      if (result.data) {
        yield put({
          type: actions.GET_USER_LIST_SUCCESS,
          payload: result?.data?.MangeUser,
        });
      } else {
        ToastNotification({
          type: "error",
          message: result?.error,
        });
        yield put({
          type: actions.GET_USER_LIST_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getSingleUser() {
  yield takeEvery(
    actions.GET_SINGLE_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(singleUserQuery, payload);

      if (result.data) {
        yield put({
          type: actions.GET_SINGLE_SUCCESS,
          payload: result?.data?.FindOneUser,
        });
      } else {
        ToastNotification({
          type: "error",
          message: result,
        });
        yield put({
          type: actions.GET_SINGLE_ERROR,
          error: result,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* deleteUser() {
  yield takeEvery(
    actions.DELETE_USER_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(userDeleteMutation, payload);
      if (result.data) {
        ToastNotification({
          type: "success",
          message: result?.data?.deleteUser,
        });
        yield put({
          type: actions.GET_USER_LIST_REQUEST,
          payload: payload.userListPayload
        })
        yield put({
          type: actions.DELETE_USER_SUCCESS,
          payload: result?.data?.deleteUser,
        });
      } else {
        ToastNotification({
          type: "error",
          message: result?.error,
        });
        yield put({ type: actions.DELETE_USER_ERROR, error: result?.error });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}


export default function* usersListingSaga() {
  yield all([
    fork(getUsersList),
    fork(getSingleUser),
    fork(deleteUser),
  ]);
}
