import ToastNotification from '@/components/Admin/Notification/ToastNotification';
import { put, call, all, fork, takeEvery } from 'redux-saga/effects';
import actions from './languages.action';
import appActions from '@/redux/app/app.action';
import {
  createLanguageMutation,
  removeLanguageMutation,
} from '@/services/language/language.mutation';
import { getAllLanguageQuery } from '@/services/language/language.query';

export function* createLanguage() {
  yield takeEvery(
    actions.CREATE_LANGUAGE_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(createLanguageMutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.createLanguage.message,
        });
        yield all([
          put({
            type: actions.CREATE_LANGUAGE_SUCCESS,
            payload: result?.data?.createLanguage,
          }),
          put({
            type: actions.GET_ALL_LANGUAGE_REQUEST,
          }),
        ]);
      } else {
        ToastNotification({
          type: 'error',
          message: result.error,
        });
        yield put({ type: actions.CREATE_LANGUAGE_ERROR, error: result });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* removeLanguage() {
  yield takeEvery(
    actions.REMOVE_LANGUAGE_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(removeLanguageMutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.removeLanguage,
        });
        yield all([
          put({
            type: actions.REMOVE_LANGUAGE_SUCCESS,
            payload: result?.data?.removeLanguage,
          }),
          put({
            type: actions.GET_ALL_LANGUAGE_REQUEST,
          }),
        ]);
      } else {
        ToastNotification({
          type: 'error',
          message: result.error,
        });
        yield put({ type: actions.REMOVE_LANGUAGE_ERROR, error: result });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getAllLanguage() {
  yield takeEvery(actions.GET_ALL_LANGUAGE_REQUEST, function* () {
    yield put(appActions.globalLoaderHandler(true));
    const result: any = yield call(getAllLanguageQuery);
    if (result.data) {
      yield put({
        type: actions.GET_ALL_LANGUAGE_SUCCESS,
        payload: result?.data?.language_list,
      });
    } else {
      ToastNotification({
        type: 'error',
        message: result.error,
      });
      yield put({ type: actions.GET_ALL_LANGUAGE_ERROR, error: result });
    }
    yield put(appActions.globalLoaderHandler(false));
  });
}

export default function* languageSaga() {
  yield all([fork(createLanguage), fork(removeLanguage), fork(getAllLanguage)]);
}
