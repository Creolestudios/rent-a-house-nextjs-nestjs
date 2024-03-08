import ToastNotification from "@/components/Admin/Notification/ToastNotification";
import { updateAdminMutation } from "@/services/adminListing/adminListing.mutation";
import {
  adminListingQuery,
  singleAdminQuery,
} from "@/services/adminListing/adminListing.query";
import { put, call, all, fork, takeEvery } from "redux-saga/effects";
import actions from "./adminListing.action";
import {
  createAdminMutation,
  deleteAdminMutation,
} from "@/services/adminAuth/auth.mutation";
import appActions from "@/redux/app/app.action";

export function* getAdminsList() {
  yield takeEvery(actions.GET_ADMIN_LIST_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(adminListingQuery, payload);
      if (result.data) {
        yield put({
          type: actions.GET_ADMIN_LIST_SUCCESS,
          payload: result?.data?.searchAdmins,
        });
      } else {
        ToastNotification({
          type: "error",
          message: result?.error,
        });
        yield put({
          type: actions.GET_ADMIN_LIST_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    });
}

export function* getSingleAdmin() {
  yield takeEvery(
    actions.GET_SINGLE_ADMIN_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(singleAdminQuery, payload);

      if (result.data) {
        yield put({
          type: actions.GET_SINGLE_ADMIN_SUCCESS,
          payload: result?.data?.admin,
        });
      } else {
        ToastNotification({
          type: "error",
          message: result?.error,
        });
        yield put({
          type: actions.GET_SINGLE_ADMIN_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* createAdmin() {
  yield takeEvery(
    actions.CREATE_ADMIN_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(createAdminMutation, payload);

      if (result.data) {
        ToastNotification({
          type: "success",
          message: result.data.createAdmin,
        });
        yield put({
          type: actions.CREATE_ADMIN_SUCCESS,
          payload: result.data.createAdmin,
        });
        yield put({
          type: actions.GET_ADMIN_LIST_REQUEST,
          payload: payload.adminListPayload
        })
      } else {
        ToastNotification({
          type: "error",
          message: result?.error,
        });
        yield put({ type: actions.CREATE_ADMIN_ERROR, error: result?.error });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* deleteAdmin() {
  yield takeEvery(
    actions.DELETE_ADMIN_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(deleteAdminMutation, payload);
      if (result.data) {
        ToastNotification({
          type: "success",
          message: result?.data?.deleteAdmin,
        });
        yield put({
          type: actions.GET_ADMIN_LIST_REQUEST,
          payload: payload?.adminListPayload,
        })
        yield put({
          type: actions.DELETE_ADMIN_SUCCESS,
          payload: result?.data?.deleteAdmin,
        });
      } else {
        ToastNotification({
          type: "error",
          message: result?.error,
        });
        yield put({ type: actions.DELETE_ADMIN_ERROR, error: result?.error });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* updateAdmin() {
  yield takeEvery(
    actions.UPDATE_ADMIN_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(updateAdminMutation, payload);
      if (result.data) {
        ToastNotification({
          type: "success",
          message: result?.data?.updateAdmin,
        });
        yield put({
          type: actions.UPDATE_ADMIN_SUCCESS,
          payload: result?.data,
        });
        yield put({
          type: actions.GET_ADMIN_LIST_REQUEST,
          payload: payload.adminListPayload
        })

      } else {
        ToastNotification({
          type: "error",
          message: result?.error,
        });
        yield put({
          type: actions.UPDATE_ADMIN_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export default function* adminListingSaga() {
  yield all([
    fork(getAdminsList),
    fork(getSingleAdmin),
    fork(createAdmin),
    fork(deleteAdmin),
    fork(updateAdmin),
  ]);
}
