import { message } from 'antd';
import ToastNotification from '@/components/Admin/Notification/ToastNotification';
import { put, call, all, fork, takeEvery } from 'redux-saga/effects';
import actions from './cms.action';
import appActions from '@/redux/app/app.action';
import {
  createCMSPageMutation,
  removeCMSMutation,
  updateCMSMutation,
} from '@/services/cms/cms.mutation';
import { getAllCMSQuery, getOneCMSQuery } from '@/services/cms/cms.query';
import { staticPageContentQuery } from '@/services/staticPages/staticPages.query';

export function* createCMSPage() {
  yield takeEvery(
    actions.CREATE_CMS_PAGE_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(createCMSPageMutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.createCmsPage.message,
        });
        yield all([
          put({
            type: actions.CREATE_CMS_PAGE_SUCCESS,
            payload: result?.data?.createCmsPage.message,
          }),
          put({
            type: actions.GET_ALL_CMS_PAGE_REQUEST,
          }),
        ]);
      } else {
        ToastNotification({
          type: 'error',
          message: result.error,
        });
        yield put({ type: actions.CREATE_CMS_PAGE_ERROR, error: result });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* updateCMSPage() {
  yield takeEvery(
    actions.UPDATE_CMS_PAGE_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(updateCMSMutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.UpdateCmsPage,
        });
        yield all([
          put({
            type: actions.UPDATE_CMS_PAGE_SUCCESS,
            payload: result?.data?.UpdateCmsPage,
          }),
          put({
            type: actions.GET_ONE_CMS_PAGE_REQUEST,
            payload: {identifier:payload.updateCms.data[0].page_name},
          }),
        ]);
      } else {
        ToastNotification({
          type: 'error',
          message: result.error,
        });
        yield put({ type: actions.UPDATE_CMS_PAGE_ERROR, error: result });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* removeCMSPage() {
  yield takeEvery(
    actions.REMOVE_CMS_PAGE_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(removeCMSMutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.removeCmsPage,
        });
        yield all([
          put({
            type: actions.REMOVE_CMS_PAGE_SUCCESS,
            payload: result?.data?.removeCmsPage,
          }),
          put({
            type: actions.GET_ALL_CMS_PAGE_REQUEST,
          }),
        ]);
      } else {
        ToastNotification({
          type: 'error',
          message: result.error,
        });
        yield put({ type: actions.REMOVE_CMS_PAGE_ERROR, error: result });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getAllCMSPage() {
  yield takeEvery(actions.GET_ALL_CMS_PAGE_REQUEST, function* () {
    yield put(appActions.globalLoaderHandler(true));
    const result: any = yield call(getAllCMSQuery);
    if (result.data) {
      yield put({
        type: actions.GET_ALL_CMS_PAGE_SUCCESS,
        payload: result?.data?.FindAllCMSResponse.page,
      });
    } else {
      ToastNotification({
        type: 'error',
        message: result.error,
      });
      yield put({ type: actions.GET_ALL_CMS_PAGE_ERROR, error: result });
    }
    yield put(appActions.globalLoaderHandler(false));
  });
}

export function* getOneCMSPage() {
  yield takeEvery(
    actions.GET_ONE_CMS_PAGE_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(getOneCMSQuery, payload);
      if (result.data) {
        yield put({
          type: actions.GET_ONE_CMS_PAGE_SUCCESS,
          payload: result?.data?.FindOneCms,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result.error,
        });
        yield put({ type: actions.GET_ONE_CMS_PAGE_ERROR, error: result });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  ); 
}


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
export default function* cmsSaga() {
  yield all([
    fork(createCMSPage),
    fork(updateCMSPage),
    fork(removeCMSPage),
    fork(getAllCMSPage),
    fork(getOneCMSPage),
    fork(staticPageContent)
  ]);
}
