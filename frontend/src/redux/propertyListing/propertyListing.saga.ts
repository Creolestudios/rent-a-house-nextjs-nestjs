import ToastNotification from '@/components/Admin/Notification/ToastNotification';
import { put, call, all, fork, takeEvery } from 'redux-saga/effects';
import actions from './propertyListing.action';
import appActions from '@/redux/app/app.action';
import { SagaIterator } from 'redux-saga';
import {
  favouritePropertyListingQuery,
  featurePropertyAuthListingQuery,
  featurePropertyListingQuery,
  getFirstMonthRent,
  perUserPropertyListQuery,
  searchPropertyAuthQuery,
  searchPropertyQuery,
  singlePropertyQuery,
} from '@/services/propertyListing/propertyLisitng.query';
import {
  addFavouriteProperty,
  deleteUserPropertyMutation,
} from '@/services/propertyListing/propertyListing.mutation';

export function* getFeaturePropertyList() {
  yield takeEvery(
    actions.FEATURE_PROPERTY_LIST_REQUEST,
    function* (): SagaIterator {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(featurePropertyListingQuery);
      if (result.data) {
        yield put({
          type: actions.FEATURE_PROPERTY_LIST_SUCCESS,
          payload: result?.data?.featurePropertyList,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.FEATURE_PROPERTY_LIST_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getAuthFeaturePropertyList() {
  yield takeEvery(
    actions.AUTH_FEATURE_PROPERTY_LIST_REQUEST,
    function* (): SagaIterator {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(featurePropertyAuthListingQuery);
      if (result.data) {
        yield put({
          type: actions.AUTH_FEATURE_PROPERTY_LIST_SUCCESS,
          payload: result?.data?.userFeaturePropertyList,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.AUTH_FEATURE_PROPERTY_LIST_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getFavouritePropertyList() {
  yield takeEvery(
    actions.FAVORITE_PROPERTY_LIST_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(favouritePropertyListingQuery, payload);
      if (result.data) {
        yield put({
          type: actions.FAVORITE_PROPERTY_LIST_SUCCESS,
          payload: result?.data?.favoritePropertyList,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.FAVORITE_PROPERTY_LIST_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* propertySearch() {
  yield takeEvery(
    actions.PROPERTY_SEARCH_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(searchPropertyQuery, payload);
      if (result.data) {
        yield put({
          type: actions.PROPERTY_SEARCH_SUCCESS,
          payload: result?.data?.publicSearchAndFilterProperty,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.PROPERTY_SEARCH_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* propertyAuthSearch() {
  yield takeEvery(
    actions.AUTH_PROPERTY_SEARCH_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(searchPropertyAuthQuery, payload);
      if (result.data) {
        yield put({
          type: actions.AUTH_PROPERTY_SEARCH_SUCCESS,
          payload: result?.data?.userSearchAndFilterProperty,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.AUTH_PROPERTY_SEARCH_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* perUserPropertyList() {
  yield takeEvery(
    actions.PER_USER_PROPERTY_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(perUserPropertyListQuery, payload);
      if (result.data) {
        yield put({
          type: actions.PER_USER_PROPERTY_SUCCESS,
          payload: result?.data?.findUserPropetry,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.PER_USER_PROPERTY_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* deleteUserProperty() {
  yield takeEvery(
    actions.DELETE_USER_PROPERTY_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(deleteUserPropertyMutation, payload);
      if (result.data) {
        yield put({
          type: actions.DELETE_USER_PROPERTY_SUCCESS,
          payload: result?.data?.deletePropertyUser,
        });
        yield put({
          type: actions.PER_USER_PROPERTY_REQUEST,
          payload: payload.refetchPayload,
        });
        ToastNotification({
          type: 'success',
          message: result?.data?.deletePropertyUser,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.DELETE_USER_PROPERTY_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}
export function* getSingleProperty() {
  yield takeEvery(
    actions.SINGLE_PROPERTY_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(singlePropertyQuery, payload);
      if (result.data) {
        yield put({
          type: actions.SINGLE_PROPERTY_SUCCESS,
          payload: result?.data?.findOneProperty,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.SINGLE_PROPERTY_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* getMonthRent() {
  yield takeEvery(
    actions.PER_MONTH_RENT_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(getFirstMonthRent, payload);
      if (result.data) {
        yield put({
          type: actions.PER_MONTH_RENT_SUCCESS,
          payload: result?.data?.firstMonthRent?.first_month_rent,
        });
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.PER_MONTH_RENT_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export function* addFavoriteProperty() {
  yield takeEvery(
    actions.FAVORITE_PROPERTY_REQUEST,
    function* ({ payload }: { type: string; payload: any }) {
      console.log(" saga first",payload)
      yield put(appActions.globalLoaderHandler(true));
      const result: any = yield call(addFavouriteProperty, payload);
      if (result.data) {
        ToastNotification({
          type: 'success',
          message: result?.data?.favoriteProperty,
        });
        yield all([
          put({
            type: actions.FAVORITE_PROPERTY_SUCCESS,
            payload: result?.data?.favoriteProperty,
          }),
          put({
            type: actions.AUTH_FEATURE_PROPERTY_LIST_REQUEST,
          }),
          put({
            type: actions.FAVORITE_PROPERTY_LIST_REQUEST,
            payload: payload.pageNumber,
          }),
          put({
            type: actions.AUTH_PROPERTY_SEARCH_REQUEST,
            payload: payload.searchPayload,
          }),
        ]);
      } else {
        ToastNotification({
          type: 'error',
          message: result?.error,
        });
        yield put({
          type: actions.FAVORITE_PROPERTY_ERROR,
          error: result?.error,
        });
      }
      yield put(appActions.globalLoaderHandler(false));
    }
  );
}

export default function* propertyListingSaga() {
  yield all([
    fork(getFeaturePropertyList),
    fork(getAuthFeaturePropertyList),
    fork(getFavouritePropertyList),
    fork(propertySearch),
    fork(propertyAuthSearch),
    fork(getSingleProperty),
    fork(getMonthRent),
    fork(addFavoriteProperty),
    fork(perUserPropertyList),
    fork(deleteUserProperty),
  ]);
}
