import ToastNotification from '@/components/Admin/Notification/ToastNotification';
import { put, call, all, fork, takeEvery } from 'redux-saga/effects';
import actions from './contactUs.action';
import appActions from '@/redux/app/app.action';
import { contactUsMutation } from '@/services/contactUs/contactUs.mutation';

export function* sendContactUs() {
  yield takeEvery(
    actions.SEND_CONTACTUS_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(contactUsMutation, payload);

      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result.data.createContactUs,
        });
        yield put({
          type: actions.SEND_CONTACTUS_SUCCESS,
          payload: result.data.createContactUs,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.SEND_CONTACTUS_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export default function* contactUsSaga() {
  yield all([fork(sendContactUs)]);
}
