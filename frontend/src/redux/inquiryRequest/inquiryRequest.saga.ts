import ToastNotification from '@/components/Admin/Notification/ToastNotification';
import { put, call, all, fork, takeEvery } from 'redux-saga/effects';
import actions from './inquiryRequest.action';
import appActions from '@/redux/app/app.action';
import { SagaIterator } from 'redux-saga';
import {
  checkRequiredDetails,
  continueChatingQuery,
  getPropertyInfo,
} from '@/services/inquiryRequest/inquiryRequest.query';
import {
  sendDetailsMutation,
  sendMessageMutation,
} from '@/services/inquiryRequest/inquiryRequest.mutation';
import { inquiryChat } from '@/services/inquiryRequest/inquiryRequest.subscription';

export function* checkRequiredDetail() {
  yield takeEvery(
    actions.CHECK_DETAILS_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(checkRequiredDetails, payload);
      if (result.data) {
        yield put({
          type: actions.CHECK_DETAILS_SUCCESS,
          payload: result?.data?.dataVerification,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.CHECK_DETAILS_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* propertyInfo() {
  yield takeEvery(
    actions.GET_PROPERTY_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(getPropertyInfo, payload);
      if (result.data) {
        yield put({
          type: actions.GET_PROPERTY_SUCCESS,
          payload: result.data?.apartmentDetails,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.GET_PROPERTY_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* sendRequiredDetails() {
  yield takeEvery(
    actions.SEND_DETAILS_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(sendDetailsMutation, payload);

      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.messageWithInfoInput?.message,
        });
        yield put({
          type: actions.SEND_DETAILS_SUCCESS,
          payload: result.data,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.SEND_DETAILS_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* continueChatingSaga() {
  yield takeEvery(
    actions.CONTINUE_CHATING_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(continueChatingQuery, payload);

      if (result.data) {
        yield put({
          type: actions.CONTINUE_CHATING_SUCCESS,
          payload: result.data,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.CONTINUE_CHATING_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* sendMessageSaga() {
  yield takeEvery(
    actions.SEND_MESSAGES_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(sendMessageMutation, payload);

      if (result.data) {
        yield put({
          type: actions.SEND_MESSAGES_SUCCESS,
          payload: result.data,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.SEND_MESSAGES_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export default function* inquiryRequestSaga() {
  yield all([
    fork(checkRequiredDetail),
    fork(sendRequiredDetails),
    fork(propertyInfo),
    fork(continueChatingSaga),
    fork(sendMessageSaga),
  ]);
}
