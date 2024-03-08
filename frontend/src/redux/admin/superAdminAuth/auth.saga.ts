import ToastNotification from '@/components/Admin/Notification/ToastNotification';
import { put, call, all, fork, takeEvery } from 'redux-saga/effects';
import {
  adminLoginMutation,
  forgotAdminPasswordMutation,
  resetAdminPasswordMutation,
} from '@/services/superAdminAuth/auth.mutation';
import actions from './auth.action';
import appActions from '@/redux/app/app.action';
import { frontendURL } from '@/config/constants';
import { resetPasswordMutation } from '@/services/auth/auth.mutation';

export function* loginUser() {
  yield takeEvery(
    actions.LOGIN_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(adminLoginMutation, payload);
      if (result.data) {
        sessionStorage.setItem('token', result.data.login.token);
        sessionStorage.setItem('role', result.data.login.role);
        window.location.href = `${frontendURL}/admin/dashboard`;

        yield put({
          type: actions.LOGIN_SUCCESS,
          payload: result.data.login,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result,
        });
        yield put({ type: actions.LOGIN_ERROR, error: result });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* forgotPasswordAdmin() {
  yield takeEvery(
    actions.FORGOT_PASSWORD_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(forgotAdminPasswordMutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result.data.forgetPassword,
        });
        yield put({
          type: actions.FORGOT_PASSWORD_SUCCESS,
          payload: result.data.forgetPassword,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result,
        });
        yield put({
          type: actions.FORGOT_PASSWORD_ERROR,
          error: result,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* resetPasswordAdmin() {
  yield takeEvery(
    actions.RESET_PASSWORD_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(resetAdminPasswordMutation, payload);

      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.resetPassword,
        });
        yield put({
          type: actions.RESET_PASSWORD_SUCCESS,
          payload: result?.data?.resetPassword,
        });
        window.location.href = `${frontendURL}/admin/login`;
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({ type: actions.RESET_PASSWORD_ERROR, error: result?.error });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export default function* authSaga() {
  yield all([
    fork(loginUser),
    fork(forgotPasswordAdmin),
    fork(resetPasswordAdmin),
  ]);
}
