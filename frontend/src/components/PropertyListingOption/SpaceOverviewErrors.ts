import { appConstant } from '@/config/constants';

export const step3validateInputs = (data: any) => {
  const propertyListErrors: any = {};
  if (data.bedroom === 0 || Number.isNaN(data.bedroom)) {
    propertyListErrors.bedroom = appConstant.propertyListing.bedroom;
  }
  if (data.details === '' ) {
    propertyListErrors.details = appConstant.propertyListing.details;
  }
  if (data.people === 0 || Number.isNaN(data.people)) {
    propertyListErrors.people = appConstant.propertyListing.people;
  }
  return propertyListErrors;
};
