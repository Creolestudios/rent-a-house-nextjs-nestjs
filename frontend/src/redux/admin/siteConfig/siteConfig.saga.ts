import { message } from "antd";
import ToastNotification from "@/components/Admin/Notification/ToastNotification";
import { put, call, all, fork, takeEvery } from "redux-saga/effects";
import actions from "./siteConfig.action";
import { siteConfigQuery } from "@/services/siteConfig/siteConfig.query";
import appActions from "@/redux/app/app.action";
import { SagaIterator } from "redux-saga";
import { siteConfigMutation } from "@/services/siteConfig/siteConfig.mutation";

export function* getSiteConfig() {
  yield takeEvery(actions.SITE_CONFIG_REQUEST, function* (): SagaIterator {
    yield put(appActions.globalLoaderHandler(true));
    const result: any = yield call(siteConfigQuery);
    if (result.data) {
      yield put({
        type: actions.SITE_CONFIG_SUCCESS,
        payload: result?.data?.findConfigOnly?.data,
      });
    } else {
      ToastNotification({
        type: "error",
        message: result?.error,
      });
      yield put({
        type: actions.SITE_CONFIG_ERROR,
        error: result?.error,
      });
    }
    yield put(appActions.globalLoaderHandler(false));
  });
}

export function* updateSiteConfig() {
  yield takeEvery(
    actions.UPDATE_CONFIG_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(siteConfigMutation, payload);

      if (result.data) {
        ToastNotification({
          type: "success",
          message: result.data.createSiteconfig.message,
        });
        yield put({
          type: actions.UPDATE_CONFIG_SUCCESS,
          payload: result.data.createSiteconfig.message,
        });
        yield put({
          type: actions.SITE_CONFIG_REQUEST,
        });
      } else {
        ToastNotification({
          type: "error",
          message: result?.error,
        });
        yield put({ type: actions.UPDATE_CONFIG_ERROR, error: result?.error });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export default function* siteConfigSaga() {
  yield all([fork(getSiteConfig), fork(updateSiteConfig)]);
}
