import ToastNotification from '@/components/Admin/Notification/ToastNotification';
import { put, call, all, fork, takeEvery } from 'redux-saga/effects';
import actions from './adminPropertyListing.action';
import appActions from '@/redux/app/app.action';
import {
  adminPropertyListingQuery,
  adminSinglePropertyQuery,
} from '@/services/adminPropertyListing/adminPropertyListing.query';
import {
  tenantDetailsQuery,
  tenantListingQuery,
} from '@/services/tenantListing/tenantLisiting.query';
import { adminDeletePropertyMutation } from '@/services/adminPropertyListing/adminPropertyListing.mutation';

export function* getPropertyList() {
  yield takeEvery(
    actions.PROPERTY_LIST_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(adminPropertyListingQuery, payload);
      if (result.data) {
        yield put({
          type: actions.PROPERTY_LIST_SUCCESS,
          payload: result?.data?.searchPropertyByParam,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({ type: actions.PROPERTY_LIST_ERROR, error: result?.error });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getSingleProperty() {
  yield takeEvery(
    actions.ADMIN_SINGLE_PROPERTY_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(adminSinglePropertyQuery, payload);
      if (result.data) {
        yield put({
          type: actions.ADMIN_SINGLE_PROPERTY_SUCCESS,
          payload: result?.data?.PropertyEntity[0],
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.ADMIN_SINGLE_PROPERTY_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* deleteProperty() {
  yield takeEvery(
    actions.ADMIN_DELETE_PROPERTY_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(adminDeletePropertyMutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.deleteProperty,
        });
        yield put({
          type: actions.ADMIN_DELETE_PROPERTY_SUCCESS,
          payload: result?.data?.deleteProperty,
        });
        yield put({
          type: actions.PROPERTY_LIST_REQUEST,
          payload: payload?.listingPayload,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.ADMIN_DELETE_PROPERTY_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* tenantHistory() {
  yield takeEvery(
    actions.GET_TENANT_LIST_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(tenantListingQuery, payload);
      if (result.data) {
        yield put({
          type: actions.GET_TENANT_LIST_SUCCESS,
          payload: result?.data?.tenantHistory,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.GET_TENANT_LIST_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* tenantDetail() {
  yield takeEvery(
    actions.TENANT_DETAILS_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(tenantDetailsQuery, payload);
      if (result.data) {
        yield put({
          type: actions.TENANT_DETAILS_SUCCESS,
          payload: result?.data?.tenantView?.data,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.TENANT_DETAILS_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export default function* adminPropertyListingSaga() {
  yield all([
    fork(getPropertyList),
    fork(getSingleProperty),
    fork(deleteProperty),
    fork(tenantHistory),
    fork(tenantDetail),
  ]);
}
