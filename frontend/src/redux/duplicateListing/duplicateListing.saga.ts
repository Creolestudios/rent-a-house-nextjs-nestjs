import ToastNotification from '@/components/Admin/Notification/ToastNotification';
import { put, call, all, fork, takeEvery } from 'redux-saga/effects';
import actions from './duplicateListing.action';
import appActions from '@/redux/app/app.action';
import { SagaIterator } from 'redux-saga';
import {
  duplicateListQuery,
  getStep2DataQuery,
  getStep3DataQuery,
  getStep4DataQuery,
  getStep5DataQuery,
  getStep6DataQuery,
  getStep7DataQuery,
  mobileNumberQuery,
  requestOtpQuery,
} from '@/services/duplicateListing/duplicateListing.query';
import {
  createDuplicatePropertyMutation,
  deletePropertyMutation,
  editStep2Mutation,
  editStep3Mutation,
  editStep4Mutation,
  editStep5Mutation,
  editStep6Mutation,
  editStep7Mutation,
  verifyOtpMutation,
} from '@/services/duplicateListing/duplicateListing.mutation';

export function* getDuplicateList() {
  yield takeEvery(
    actions.GET_DUPLICATE_LISTING_REQUEST,
    function* (): SagaIterator {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(duplicateListQuery);
      if (result.data) {
        yield put({
          type: actions.GET_DUPLICATE_LISTING_SUCCESS,
          payload: result.data?.duplicatePropertyList,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.GET_DUPLICATE_LISTING_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getMobileNumber() {
  yield takeEvery(
    actions.GET_MOBILE_NUMBER_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(mobileNumberQuery, payload);
      if (result.data) {
        yield put({
          type: actions.GET_MOBILE_NUMBER_SUCCESS,
          payload: result.data?.propertyVerification,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.GET_MOBILE_NUMBER_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* requestOtp() {
  yield takeEvery(
    actions.REQUEST_OTP_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(requestOtpQuery, payload);
      if (result.data) {
        yield put({
          type: actions.REQUEST_OTP_SUCCESS,
          payload: result.data?.sendOTP,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.REQUEST_OTP_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* submitOtp() {
  yield takeEvery(
    actions.SUBMIT_OTP_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(verifyOtpMutation, payload);
      if (result.data) {
        let newpayload ={
         property_id: payload.verifyOTPInput.property_id}
        const newid:any = yield call(createDuplicatePropertyMutation,newpayload)
        sessionStorage.setItem('duplicate_property_id',newid?.data?.duplicateProperty?.property_id)
        


        ToastNotification({
          type: 'success',
          message: result.data?.verifyOTP,
        });
        yield put({
          type: actions.SUBMIT_OTP_SUCCESS,
          payload: result.data?.verifyOTP,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.SUBMIT_OTP_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getStep2Data() {
  yield takeEvery(
    actions.GET_STEP2_DATA_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(getStep2DataQuery, payload);
      if (result.data) {
        yield put({
          type: actions.GET_STEP2_DATA_SUCCESS,
          payload: result.data?.StepWisePropertyData[0],
        });
        yield put({
          type: actions.SET_PROPERTY_ID_SUCCESS,
          payload: result.data?.StepWisePropertyData[0],
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.GET_STEP_DATA_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getStep3Data() {
  yield takeEvery(
    actions.GET_STEP3_DATA_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(getStep3DataQuery, payload);
      if (result.data) {
        yield put({
          type: actions.GET_STEP3_DATA_SUCCESS,
          payload: result.data?.StepWisePropertyData[0],
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.GET_STEP_DATA_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getStep4Data() {
  yield takeEvery(
    actions.GET_STEP4_DATA_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(getStep4DataQuery, payload);
      if (result.data) {
        yield put({
          type: actions.GET_STEP4_DATA_SUCCESS,
          payload: result.data?.StepWisePropertyData,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.GET_STEP_DATA_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getStep5Data() {
  yield takeEvery(
    actions.GET_STEP5_DATA_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(getStep5DataQuery, payload);
      if (result.data) {
        yield put({
          type: actions.GET_STEP5_DATA_SUCCESS,
          payload: result.data?.StepWisePropertyData[0],
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.GET_STEP_DATA_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getStep6Data() {
  yield takeEvery(
    actions.GET_STEP6_DATA_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(getStep6DataQuery, payload);
      if (result.data) {
        yield put({
          type: actions.GET_STEP6_DATA_SUCCESS,
          payload: result.data?.StepWisePropertyData[0],
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.GET_STEP_DATA_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getStep7Data() {
  yield takeEvery(
    actions.GET_STEP7_DATA_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(getStep7DataQuery, payload);
      if (result.data) {
        yield put({
          type: actions.GET_STEP7_DATA_SUCCESS,
          payload: result.data?.StepWisePropertyData,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.GET_STEP_DATA_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* editPropertyStep2() {
  yield takeEvery(
    actions.EDIT_PROPERTY_STEP2_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(editStep2Mutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result.data?.editPropertyStep2.message,
        });
        yield put({
          type: actions.EDIT_PROPERTY_STEP2_SUCCESS,
          payload: result.data?.editPropertyStep2.message,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.EDIT_PROPERTY_STEP2_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* editPropertyStep3() {
  yield takeEvery(
    actions.EDIT_PROPERTY_STEP3_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(editStep3Mutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result.data?.editPropertyStep3.message,
        });
        yield put({
          type: actions.EDIT_PROPERTY_STEP3_SUCCESS,
          payload: result.data?.editPropertyStep3.message,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.EDIT_PROPERTY_STEP3_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* editPropertyStep4() {
  yield takeEvery(
    actions.EDIT_PROPERTY_STEP4_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(editStep4Mutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result.data?.editPropertyStep4.message,
        });
        yield put({
          type: actions.EDIT_PROPERTY_STEP4_SUCCESS,
          payload: result.data?.editPropertyStep4.message,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.EDIT_PROPERTY_STEP4_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* editPropertyStep5() {
  yield takeEvery(
    actions.EDIT_PROPERTY_STEP5_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(editStep5Mutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result.data?.editPropertyStep5.message,
        });
        yield put({
          type: actions.EDIT_PROPERTY_STEP5_SUCCESS,
          payload: result.data?.editPropertyStep5.message,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.EDIT_PROPERTY_STEP5_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* editPropertyStep6() {
  yield takeEvery(
    actions.EDIT_PROPERTY_STEP6_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(editStep6Mutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result.data?.editPropertyStep6.message,
        });
        yield put({
          type: actions.EDIT_PROPERTY_STEP6_SUCCESS,
          payload: result.data?.editPropertyStep6.message,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.EDIT_PROPERTY_STEP6_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* editPropertyStep7() {
  yield takeEvery(
    actions.EDIT_PROPERTY_STEP7_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(editStep7Mutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result.data?.removePropertyStep7,
        });
        yield put({
          type: actions.EDIT_PROPERTY_STEP7_SUCCESS,
          payload: result.data?.editPropertyStep7,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.EDIT_PROPERTY_STEP7_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* deleteProperty() {
  yield takeEvery(
    actions.DELETE_PROPERTY_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(deletePropertyMutation, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result.data?.deleteProperty,
        });
        yield put({
          type: actions.DELETE_PROPERTY_SUCCESS,
          payload: result.data?.deleteProperty,
        });
        window.location.href = '/home/property-host';
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.DELETE_PROPERTY_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export default function* duplicateListingSaga() {
  yield all([
    fork(editPropertyStep2),
    fork(editPropertyStep3),
    fork(editPropertyStep4),
    fork(editPropertyStep5),
    fork(editPropertyStep6),
    fork(editPropertyStep7),
    fork(getDuplicateList),
    fork(getMobileNumber),
    fork(requestOtp),
    fork(submitOtp),
    fork(getStep2Data),
    fork(getStep3Data),
    fork(getStep4Data),
    fork(getStep5Data),
    fork(getStep6Data),
    fork(getStep7Data),
    fork(deleteProperty),
  ]);
}
