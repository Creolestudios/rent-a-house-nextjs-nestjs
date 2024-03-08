import React, { useState } from 'react';
// import { DuplicateApartmentWrapper } from './PropertyListingOptionWrapper.styles';
import { CustomButton } from '@/globalStyles';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import appActions from '../../redux/app/app.action';
import { DuplicateApartmentWrapper } from '../PropertyListingOption/PropertyListingOptionWrapper.styles';

const DeleteManageListing = ({
  setDeleteListingModal,
  deleteListingModal,
}: any) => {
  const route = useRouter();

  return (
    <>
      <DuplicateApartmentWrapper>
        <div className='title'>
          Do you want to delete the “ Am Apartment” <br /> property listing?
        </div>
        <div className='btn-wrapper'>
          <CustomButton onClick={() => setDeleteListingModal(false)}>
            Yes
          </CustomButton>
          <CustomButton
            className='fill'
            onClick={() => setDeleteListingModal(false)}
          >
            No
          </CustomButton>
        </div>
      </DuplicateApartmentWrapper>
    </>
  );
};

export default DeleteManageListing;
