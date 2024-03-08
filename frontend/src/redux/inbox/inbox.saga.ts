import ToastNotification from '@/components/Admin/Notification/ToastNotification';
import { put, call, all, fork, takeEvery } from 'redux-saga/effects';
import actions from './inbox.action';
import appActions from '@/redux/app/app.action';
import { inboxQuery } from '@/services/inbox/inbox.query';
import { inboxMutation } from '@/services/inbox/inbox.mutation';

export function* getMessageSaga() {
  yield takeEvery(
    actions.GET_MESSAGE_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(inboxQuery, payload);

      if (result.data) {
        yield put({
          type: actions.GET_MESSAGE_SUCCESS,
          payload: result.data?.inbox?.data,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.GET_MESSAGE_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* setSortlistMessageSaga(){
  yield takeEvery(

  
  actions.SET_SORTLIST_REQUEST,
  function* ({payload}:{type:string;payload:any}){
    yield put(appActions.globalLoaderHandler(true));
    const result:any=yield call(inboxMutation,payload)
    if(result.data){
      ToastNotification({
        type: 'success',
        message: result?.data?.changeStatus,
      });
     
    }
    else{
      ToastNotification({
        type: 'error',
        message: result?.error,
      });
      yield put({
        type: actions.SET_SORTLIST_ERROR,
        error: result?.error,
      });
    }
    yield put(appActions.globalLoaderHandler(false));


  }
  )
}

export default function* inboxSaga() {
  yield all([fork(getMessageSaga)]);
  yield all([fork(setSortlistMessageSaga)])
}
