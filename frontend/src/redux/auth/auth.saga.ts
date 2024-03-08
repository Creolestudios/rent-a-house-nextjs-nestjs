import { message } from 'antd';
import ToastNotification from '@/components/Admin/Notification/ToastNotification';
import { put, call, all, fork, takeEvery } from 'redux-saga/effects';
import actions from './auth.action';
import appActions from '@/redux/app/app.action';
import {
  forgotPasswordMutation,
  googleLoginMutation,
  resetPasswordMutation,
  userCreateMutation,
  userLoginMutation,
} from '@/services/auth/auth.mutation';
import { SagaIterator } from 'redux-saga';
import { googleLoginQuery } from '@/services/auth/auth.query';
import { frontendURL } from '@/config/constants';

export function* createUserSaga() {
  yield takeEvery(
    actions.CREATE_USER_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(userCreateMutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.createUser?.message,
        });
        sessionStorage.setItem('token', result?.data?.createUser?.token);
        sessionStorage.setItem('user_id', result?.data?.createUser?.id);
        window.dispatchEvent(new Event('storage'));
        yield put({
          type: actions.CREATE_USER_SUCCESS,
          payload: result?.data?.createUser?.token,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result,
        });
        yield put({ type: actions.CREATE_USER_ERROR, error: result });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* loginUser() {
  yield takeEvery(
    actions.USER_LOGIN_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(userLoginMutation, payload);
      if (result.data) {
        sessionStorage.setItem('token', result.data.login.token);
        sessionStorage.setItem('user_id', result.data.login.id);
        sessionStorage.setItem('landlord', result.data.login.is_landlord);
        window.dispatchEvent(new Event('storage'));
        yield put({
          type: actions.USER_LOGIN_SUCCESS,
          payload: result.data.login,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result,
        });
        yield put({ type: actions.USER_LOGIN_ERROR, error: result });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* googleLogin() {
  yield takeEvery(actions.GOOGLE_LOGIN_REQUEST, function* (): SagaIterator {
    yield put(appActions.globalLoaderHandler(true));
    const result: any = yield call(googleLoginQuery);
    if (result.data) {
      yield put({
        type: actions.GOOGLE_LOGIN_SUCCESS,
        payload: result?.data?.authUrl,
      });
      window.location.href = result?.data?.authUrl;
    } else {
      ToastNotification({
        type: 'error',
        message: result?.error,
      });
      yield put({
        type: actions.GOOGLE_LOGIN_ERROR,
        error: result?.error,
      });
    }
    yield put(appActions.globalLoaderHandler(false));
  });
}

export function* googleRedirect() {
  yield takeEvery(
    actions.GOOGLE_REDIRECT_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(googleLoginMutation, payload);
      if (result.data) {
        sessionStorage.setItem('token', result.data?.LogInGoogle?.token);
        window.dispatchEvent(new Event('storage'));
        yield put({
          type: actions.GOOGLE_REDIRECT_SUCCESS,
          payload: result.data.logInGoogle,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result,
        });
        yield put({ type: actions.GOOGLE_REDIRECT_ERROR, error: result });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* forgotPassword() {
  yield takeEvery(
    actions.FORGOT_USER_PASSWORD_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(forgotPasswordMutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.forgetPasswordUser,
        });
        yield put({
          type: actions.FORGOT_USER_PASSWORD_SUCCESS,
          payload: result?.data?.forgetPasswordUser,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result.error,
        });

        yield put({
          type: actions.FORGOT_USER_PASSWORD_ERROR,
          error: result.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* resetPassword() {
  yield takeEvery(
    actions.RESET_USER_PASSWORD_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(resetPasswordMutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.resetPasswordUser,
        });
        yield put({
          type: actions.RESET_USER_PASSWORD_SUCCESS,
          payload: result?.data?.resetPasswordUser,
        });

        window.location.href = `${frontendURL}/home`;
      } else {
        ToastNotification({
          type: 'error',
          message: result.errors.message,
        });
        yield put({ type: actions.RESET_USER_PASSWORD_ERROR, error: result });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export default function* userAuthSaga() {
  yield all([
    fork(createUserSaga),
    fork(loginUser),
    fork(googleLogin),
    fork(googleRedirect),
    fork(resetPassword),
    fork(forgotPassword),
  ]);
}
