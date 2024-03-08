import ToastNotification from '@/components/Admin/Notification/ToastNotification';
import { put, call, all, fork, takeEvery } from 'redux-saga/effects';
import actions from './staticPages.action';
import appActions from '@/redux/app/app.action';
import { staticPageContentQuery } from '@/services/staticPages/staticPages.query';

export function* staticPageContent() {
  yield takeEvery(
    actions.CONTENT_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(staticPageContentQuery, payload);

      if (result.data) {
        yield put({
          type: actions.CONTENT_SUCCESS,
          payload: result?.data?.FindOneCms?.[0],
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.CONTENT_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export default function* staticPageSaga() {
  yield all([fork(staticPageContent)]);
}
