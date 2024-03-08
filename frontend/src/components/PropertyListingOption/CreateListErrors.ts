import { appConstant } from '@/config/constants';

export const step2validateInputs = (data: any) => {
  const propertyListErrors: any = {};
  if (data.type === '') {
    propertyListErrors.type = appConstant.propertyListing.propertyType;
  }
  if (data.propertyName === '') {
    propertyListErrors.propertyName = appConstant.propertyListing.propertyName;
  }

 
  if (data.countryId === 0) {
    propertyListErrors.countryId = appConstant.propertyListing.countryId;
  }
  if (data.stateId === 0) {
    propertyListErrors.stateId = appConstant.propertyListing.stateId;
  }
  if (data.cityId === 0) {
    propertyListErrors.cityId = appConstant.propertyListing.cityId;
  }
  if (data.houseNo === '') {
    propertyListErrors.houseNo = appConstant.propertyListing.houseNo;
  }
  if (data.postal === '') {
    propertyListErrors.postal = appConstant.propertyListing.postal;
  }
  if (data.availability === '') {
    propertyListErrors.availability = appConstant.propertyListing.availability;
  }
  if (data.rentMonth === 0 || Number.isNaN(data.rentMonth)) {
    propertyListErrors.rentMonth = appConstant.propertyListing.rentMonth;
  }
  if (data.min === 0 || Number.isNaN(data.min)) {
    propertyListErrors.min = appConstant.propertyListing.min;
  }
  if (data.max === 0 || Number.isNaN(data.max)) {
    propertyListErrors.max = appConstant.propertyListing.max;
  }
  return propertyListErrors;
};
