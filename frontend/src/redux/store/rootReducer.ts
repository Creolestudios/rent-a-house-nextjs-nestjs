import { combineReducers } from 'redux';
import authReducer from '@/redux/admin/superAdminAuth/auth.reducer';
import accountReducer from '@/redux/account/account.reducer';
import commissionReducer from '@/redux/admin/comission/commission.reducer';
import adminListingReducer from '@/redux/admin/adminListing/adminListing.reducer';
import dashboardReducer from '@/redux/admin/dashboard/dashboard.reducer';
import siteConfigReducer from '@/redux/admin/siteConfig/siteConfig.reducer';
import appReducer from '@/redux/app/app.reducer';
import usersListingReducer from '@/redux/admin/userListing/useerListing.reducer';
import propertyListingReducer from '@/redux/propertyListing/propertyListing.reducer';
import adminPropertyListingReducer from '@/redux/admin/propertyListing/adminPropertyListing.reducer';
import adminReservationListingReducer from '@/redux/admin/Reservation/adminReservationListing.reducer';
import userAuthReducer from '@/redux/auth/auth.reducer';
import inquiryRequestReducer from '../inquiryRequest/inquiryRequest.reducer';
import addPropertyReducer from '@/redux/addProperty/addProperty.reducer';
import duplicateListingReducer from '@/redux/duplicateListing/duplicateListing.reducer';
import cmsReducer from '@/redux/admin/cms/cms.reducer';
import languageReducer from '../admin/languages/language.reducer';
import contactUsReducer from '@/redux/contactUs/contactUs.reducer';
import inboxReducer from '@/redux/inbox/inbox.reducer';
import staticPageReducer from '@/redux/staticPage/staticPages.reducer';

const rootReducer = combineReducers({
  authReducer,
  commissionReducer,
  adminListingReducer,
  dashboardReducer,
  siteConfigReducer,
  appReducer,
  userAuthReducer,
  usersListingReducer,
  propertyListingReducer,
  adminPropertyListingReducer,
  adminReservationListingReducer,
  inquiryRequestReducer,
  accountReducer,
  addPropertyReducer,
  duplicateListingReducer,
  cmsReducer,
  languageReducer,
  contactUsReducer,
  inboxReducer,
  staticPageReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
