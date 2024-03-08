import ToastNotification from '@/components/Admin/Notification/ToastNotification';
import { put, call, all, fork, takeEvery } from 'redux-saga/effects';
import actions from './addProperty.action';
import appActions from '@/redux/app/app.action';
import { SagaIterator } from 'redux-saga';
import {
  getAmenitiesQuery,
  getCityQuery,
  getCountryQuery,
  getStateQuery,
} from '@/services/addProperty/addProperty.query';
import {
  addMobileSendOtpMutation,
  addPropertySetp2Mutation,
  addPropertySetp3Mutation,
  addPropertySetp4Mutation,
  addPropertySetp5Mutation,
  addPropertySetp6Mutation,
  addPropertySetp7Mutation,
} from '@/services/addProperty/addProperty.mutation';
import { verifyOtpMutation } from '@/services/duplicateListing/duplicateListing.mutation';
import { requestOtpQuery } from '@/services/duplicateListing/duplicateListing.query';

export function* getCountryName() {
  yield takeEvery(actions.GET_COUNTRY_REQUEST, function* (): SagaIterator {
    yield put(appActions.globalLoaderHandler(true));
    const result: any = yield call(getCountryQuery);
    if (result.data) {
      yield put({
        type: actions.GET_COUNTRY_SUCCESS,
        payload: result.data?.countryList,
      });
    } else {
      ToastNotification({
        type: 'error',
        message: result?.error,
      });
      yield put({
        type: actions.GET_COUNTRY_ERROR,
        error: result?.error,
      });
    }
    yield put(appActions.globalLoaderHandler(false));
  });
}
export function* getStateName() {
  yield takeEvery(
    actions.GET_STATE_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(getStateQuery, payload);
      if (result.data) {
        yield put({
          type: actions.GET_STATE_SUCCESS,
          payload: result.data?.stateList,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.GET_STATE_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}
export function* getCityName() {
  yield takeEvery(
    actions.GET_CITY_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(getCityQuery, payload);
      if (result.data) {
        yield put({
          type: actions.GET_CITY_SUCCESS,
          payload: result.data?.cityList,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.GET_CITY_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}
export function* getAmenities() {
  yield takeEvery(
    actions.GET_FACILITY_AMENITIES_REQUEST,
    function* (): SagaIterator {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(getAmenitiesQuery);
      if (result.data) {
        yield put({
          type: actions.GET_FACILITY_AMENITIES_SUCCESS,
          payload: result.data?.amenitiesListing,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}
export function* addMobileNumber() {
  yield takeEvery(
    actions.ADD_MOBILE_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(addMobileSendOtpMutation, payload);
      if (result.data) {
        yield put({
          type: actions.ADD_MOBILE_SUCCESS,
          payload: result.data?.insertPhoneNo,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* addPropertyStep2() {
  yield takeEvery(
    actions.ADD_PROPERTY_STEP2_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(addPropertySetp2Mutation, payload);
      if (result.data) {
        yield put({
          type: actions.ADD_PROPERTY_STEP2_SUCCESS,
          payload: result.data?.createPropertyStep2?.property_id,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.ADD_PROPERTY_STEP2_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}
export function* addPropertyStep3() {
  yield takeEvery(
    actions.ADD_PROPERTY_STEP3_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(addPropertySetp3Mutation, payload);
      if (result.data) {
        yield put({
          type: actions.ADD_PROPERTY_STEP3_SUCCESS,
          payload: result.data?.createPropertyStep3?.property_id,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.ADD_PROPERTY_STEP3_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}
export function* addPropertyStep4() {
  yield takeEvery(
    actions.ADD_PROPERTY_STEP4_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(addPropertySetp4Mutation, payload);
      if (result.data) {
        yield put({
          type: actions.ADD_PROPERTY_STEP4_SUCCESS,
          payload: result.data?.createPropertyStep4?.property_id,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.ADD_PROPERTY_STEP4_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}
export function* addPropertyStep5() {
  yield takeEvery(
    actions.ADD_PROPERTY_STEP5_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(addPropertySetp5Mutation, payload);
      if (result.data) {
        yield put({
          type: actions.ADD_PROPERTY_STEP5_SUCCESS,
          payload: result.data?.createPropertyStep5?.property_id,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.ADD_PROPERTY_STEP5_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}
export function* addPropertyStep6() {
  yield takeEvery(
    actions.ADD_PROPERTY_STEP6_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(addPropertySetp6Mutation, payload);
      if (result.data) {
        yield put({
          type: actions.ADD_PROPERTY_STEP6_SUCCESS,
          payload: result.data?.createPropertyStep6?.property_id,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.ADD_PROPERTY_STEP6_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}
export function* addPropertyStep7() {
  yield takeEvery(
    actions.ADD_PROPERTY_STEP7_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(addPropertySetp7Mutation, payload);
      if (result.data) {
        yield put({
          type: actions.ADD_PROPERTY_STEP7_SUCCESS,
          payload: result.data?.createPropertyStep7?.property_id,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.ADD_PROPERTY_STEP7_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* requestOtp() {
  yield takeEvery(
    actions.ADD_REQUEST_OTP_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(requestOtpQuery, payload);
      if (result.data) {
        yield put({
          type: actions.ADD_REQUEST_OTP_SUCCESS,
          payload: result.data?.sendOTP,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.ADD_REQUEST_OTP_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* submitOtp() {
  yield takeEvery(
    actions.ADD_SUBMIT_OTP_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(verifyOtpMutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result.data?.verifyOTP,
        });
        yield put({
          type: actions.ADD_SUBMIT_OTP_SUCCESS,
          payload: result.data?.verifyOTP,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.ADD_SUBMIT_OTP_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export default function* addPropertySaga() {
  yield all([
    fork(addPropertyStep2),
    fork(addPropertyStep3),
    fork(addPropertyStep4),
    fork(addPropertyStep5),
    fork(addPropertyStep6),
    fork(addPropertyStep7),
    fork(getCountryName),
    fork(getStateName),
    fork(getCityName),
    fork(getAmenities),
    fork(addMobileNumber),
    fork(requestOtp),
    fork(submitOtp),
  ]);
}
