import React, { useState } from 'react';
import { DuplicateApartmentWrapper } from './PropertyListingOptionWrapper.styles';
import { CustomButton } from '@/globalStyles';
import PhoneVerificationModal from './PhoneVerificationModal';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import appActions from '../../redux/app/app.action';

const SuccessDuplicateApartment = ({
  setAddSuccessApartmentModal,
  addSuccessApartmentModal,
}: any) => {
  const [phoneVerificationModalOpen, setPhoneVerificationModalOpen] =
    useState(false);

  const dispatch = useDispatch();

  const route = useRouter();

  return (
    <>
      <DuplicateApartmentWrapper>
        <div className='title'>
          Copy of “Am Apartment” is <br /> successfully Created.
        </div>
        <div className='btn-wrapper'>
          <CustomButton
            onClick={() => {
              route.push(`/home/property-edit`);
              dispatch(appActions.propertyHost(false));
              setAddSuccessApartmentModal(false);
            }}
          >
            Edit Now
          </CustomButton>
          <CustomButton
            className='fill'
            onClick={() => {
              setAddSuccessApartmentModal(false);
              window.location.href = '/home/property-host';
            }}
          >
            Edit Later
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

export default SuccessDuplicateApartment;
