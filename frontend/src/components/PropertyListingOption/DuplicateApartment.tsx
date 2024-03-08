import React, { useEffect, useState } from 'react';
import { DuplicateApartmentWrapper } from './PropertyListingOptionWrapper.styles';
import { CustomButton } from '@/globalStyles';
import PhoneVerificationModal from './PhoneVerificationModal';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';

const DuplicateApartment = ({
  setDuplicateApartmentModalOpen,
  duplicateApartmentModalOpen,
}: any) => {
  const [phoneVerificationModalOpen, setPhoneVerificationModalOpen] =
    useState(false);
  const duplicateListing = useSelector(
    (state: RootState) => state.duplicateListingReducer.duplicateList
  );
  const [duplicatePropertyData, setDuplicatePropertyData] =
    useState(duplicateListing);

  useEffect(() => {
    let duplicatePropId = sessionStorage.getItem('duplicate_property_id');

    let propertyData = duplicateListing.filter(
      (obj) => obj.id === Number(duplicatePropId)
    );

    setDuplicatePropertyData(propertyData?.[0]);
  }, [duplicateListing]);

  return (
    <>
      <DuplicateApartmentWrapper>
        <div className='title'>
          Do you want to duplicate the “{duplicatePropertyData?.name}” <br />{' '}
          property listing?
        </div>
        <div className='btn-wrapper'>
          <CustomButton
            onClick={() => {
              setPhoneVerificationModalOpen(true);
              setDuplicateApartmentModalOpen(false);
            }}
          >
            Yes
          </CustomButton>
          <CustomButton
            className='fill'
            onClick={() => setDuplicateApartmentModalOpen(false)}
          >
            No
          </CustomButton>
        </div>
      </DuplicateApartmentWrapper>
      <PhoneVerificationModal
        setPhoneVerificationModalOpen={setPhoneVerificationModalOpen}
        phoneVerificationModalOpen={phoneVerificationModalOpen}
        // setDuplicateApartmentModalOpen={setDuplicateApartmentModalOpen}
      />
    </>
  );
};

export default DuplicateApartment;
