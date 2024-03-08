import { message } from 'antd';
import ToastNotification from '@/components/Admin/Notification/ToastNotification';
import { put, call, all, fork, takeEvery } from 'redux-saga/effects';
import actions from './account.action';
import appActions from '@/redux/app/app.action';
import {
  googleLoginMutation,
  userCreateMutation,
  userLoginMutation,
} from '@/services/auth/auth.mutation';
import { SagaIterator } from 'redux-saga';
import { googleLoginQuery } from '@/services/auth/auth.query';
import {
  updateuserProfileOnly,
  supportingDocumentUploadMutation,
  changepasswordMutation,
  contactInfoMutation,
  notificationSettingMutation,
  supportingDocumentDeleteMutation,
  removeProfileMutation,
} from '@/services/account/account.mutation';
import {
  getCityListQuery,
  getCountryListQuery,
  getLanguageListQuery,
  getStateListQuery,
  getUserDetailsQuery,
} from '@/services/account/account.query';

export function* updateProfile() {
  yield takeEvery(
    actions.UPDATE_PROFILE_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(updateuserProfileOnly, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.updateUserProfileOnly,
        });
        yield put({
          type: actions.UPDATE_PROFILE_SUCCESS,
          payload: result?.data?.updateUserProfileOnly,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result.error,
        });
        yield put({ type: actions.UPDATE_PROFILE_ERROR, error: result });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getUserDetails() {
  yield takeEvery(
    actions.GET_USER_DETAILS_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(getUserDetailsQuery, payload);
      if (result.data) {
        yield put({
          type: actions.GET_USER_DETAILS_SUCCESS,
          payload: result?.data?.FindOneUserById,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result.error,
        });
        yield put({
          type: actions.GET_USER_DETAILS_ERROR,
          error: result,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* supportingDocumentUpload() {
  yield takeEvery(
    actions.SUPPORTING_DOCUMENT_UPLOAD_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      let apiCall;
      if (
        payload.identity_proof === 'delete' ||
        payload.proof_of_occupation_income === 'delete'
      ) {
        apiCall = supportingDocumentDeleteMutation;
      } else {
        apiCall = supportingDocumentUploadMutation;
      }
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(apiCall, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.supportingDocument,
        });
        yield put({
          type: actions.SUPPORTING_DOCUMENT_UPLOAD_SUCCESS,
          payload: result?.data?.supportingDocument,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result.error,
        });
        yield put({
          type: actions.SUPPORTING_DOCUMENT_UPLOAD_ERROR,
          error: result.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* contactInformation() {
  yield takeEvery(
    actions.CONTACT_INFORMATION_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(contactInfoMutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.userContactInformation,
        });
        yield put({
          type: actions.CONTACT_INFORMATION_SUCCESS,
          payload: result?.data?.userContactInformation,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result.error,
        });
        yield put({
          type: actions.CONTACT_INFORMATION_ERROR,
          error: result.errors,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* changePassword() {
  yield takeEvery(
    actions.CHANGE_PASSWORD_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(changepasswordMutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.changeUserPassword,
        });
        yield put({
          type: actions.CHANGE_PASSWORD_SUCCESS,
          payload: result?.data?.changeUserPassword,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result.errors.message,
        });
        yield put({ type: actions.CHANGE_PASSWORD_ERROR, error: result });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* notificationSetting() {
  yield takeEvery(
    actions.NOTIFICATION_SETTING_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(notificationSettingMutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.notificationSetting,
        });
        yield put({
          type: actions.NOTIFICATION_SETTING_SUCCESS,
          payload: result?.data?.notificationSetting,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result.error,
        });
        yield put({ type: actions.NOTIFICATION_SETTING_ERROR, error: result });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getCountryList() {
  yield takeEvery(actions.GET_COUNTRY_LIST_REQUEST, function* () {
    yield put(appActions.globalLoaderHandler(true));
    const result: any = yield call(getCountryListQuery);
    if (result.data) {
      yield put({
        type: actions.GET_COUNTRY_LIST_SUCCESS,
        payload: result?.data?.countryList,
      });
    } else {
      ToastNotification({
        type: 'error',
        message: result.error,
      });
      yield put({ type: actions.GET_COUNTRY_LIST_ERROR, error: result });
    }
    yield put(appActions.globalLoaderHandler(false));
  });
}

export function* getStateList() {
  yield takeEvery(
    actions.GET_STATE_LIST_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(getStateListQuery, payload);
      if (result.data) {
        yield put({
          type: actions.GET_STATE_LIST_SUCCESS,
          payload: result?.data?.stateList,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result.error,
        });
        yield put({ type: actions.GET_STATE_LIST_ERROR, error: result });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getCityList() {
  yield takeEvery(
    actions.GET_CITY_LIST_REQUEST,
    function* ({
      payload,
    }: {
      type: string;
      isIncrement: boolean;
      payload: any;
    }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(getCityListQuery, payload);
      if (result.data) {
        yield put({
          type: actions.GET_CITY_LIST_SUCCESS,
          payload: result?.data?.cityList,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result.error,
        });
        yield put({ type: actions.GET_CITY_LIST_ERROR, error: result });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getLanguageList() {
  yield takeEvery(actions.GET_LANGUAGE_LIST_REQUEST, function* () {
    yield put(appActions.globalLoaderHandler(true));
    const result: any = yield call(getLanguageListQuery);
    if (result.data) {
      yield put({
        type: actions.GET_LANGUAGE_LIST_SUCCESS,
        payload: result?.data?.language_list,
      });
    } else {
      ToastNotification({
        type: 'error',
        message: result.error,
      });
      yield put({ type: actions.GET_LANGUAGE_LIST_ERROR, error: result });
    }
    yield put(appActions.globalLoaderHandler(false));
  });
}

export function* removeProfileSaga(){
  yield takeEvery(actions.REMOVE_PROFILE_REQUEST,function* ({payload}:any){
    yield put(appActions.globalLoaderHandler(true));
    console.log("we are currently removing")
    const result:any=yield call(removeProfileMutation,payload)
    if(result.data){
      ToastNotification({
        type:'success',
        message:result?.data?.deleteUserUser
      })
      sessionStorage.clear()
      yield put({
        type:actions.REMOVE_PROFILE_SUCCESS
      })
    }
    else{
      ToastNotification({
        type:'error',
        message:result.error
      })
    }
    yield put(appActions.globalLoaderHandler(false));

  })
}

export default function* accountSaga() {
  yield all([
    fork(updateProfile),
    fork(getUserDetails),
    fork(supportingDocumentUpload),
    fork(changePassword),
    fork(contactInformation),
    fork(notificationSetting),
    fork(getCountryList),
    fork(getStateList),
    fork(getCityList),
    fork(getLanguageList),
    fork(removeProfileSaga)
  ]);
}
