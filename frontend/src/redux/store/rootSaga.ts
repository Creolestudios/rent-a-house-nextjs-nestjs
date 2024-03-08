import { all } from 'redux-saga/effects';
import adminListingSaga from '../admin/adminListing/adminListing.saga';
import commssionSaga from '../admin/comission/commission.saga';
import dashboardSaga from '../admin/dashboard/dashboard.saga';
import authSaga from '../admin/superAdminAuth/auth.saga';
import siteConfigSaga from '../admin/siteConfig/siteConfig.saga';
import appSaga from '../app/app.saga';
import userAuthSaga from '../auth/auth.saga';
import usersListingSaga from '../admin/userListing/userListing.saga';
import propertyListingSaga from '../propertyListing/propertyListing.saga';
import adminPropertyListingSaga from '../admin/propertyListing/adminPropertyListing.saga';
import adminReservationListingSaga from '../admin/Reservation/adminReservationListing.saga';
import inquiryRequestSaga from '../inquiryRequest/inquiryRequest.saga';
import accountSaga from '../account/account.saga';
import addPropertySaga from '../addProperty/addProperty.saga';
import duplicateListingSaga from '../duplicateListing/duplicateListing.saga';
import cmsSaga from '../admin/cms/cms.saga';
import languageSaga from '../admin/languages/language.saga';
import contactUsSaga from '../contactUs/contactUs.saga';
import inboxSaga from '../inbox/inbox.saga';
import staticPageSaga from '../staticPage/staticPages.saga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    commssionSaga(),
    adminListingSaga(),
    dashboardSaga(),
    siteConfigSaga(),
    appSaga(),
    userAuthSaga(),
    usersListingSaga(),
    propertyListingSaga(),
    adminPropertyListingSaga(),
    adminReservationListingSaga(),
    inquiryRequestSaga(),
    accountSaga(),
    addPropertySaga(),
    duplicateListingSaga(),
    cmsSaga(),
    languageSaga(),
    contactUsSaga(),
    inboxSaga(),
    staticPageSaga(),
  ]);
}
