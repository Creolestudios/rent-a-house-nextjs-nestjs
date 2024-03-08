import React, { useState } from 'react';
import { CustomButton } from '@/globalStyles';
import RentalCondition from '../PropertyListingOption/RentalCondition';
import RulesPreferences from '../PropertyListingOption/RulesPreferences';
import DeleteManageListingModal from './DeleteManageListingModal';

const ManageListingProperty = ({ id }: any) => {
  const [deleteListingModal, setDeleteListingModal] = useState(false);

  const managePropertyItems = () => {
    switch (id) {
      case 1: {
        return (
          <div className='bordered'>
            <RentalCondition title='' className='edit-apartment' />
            <CustomButton className='fill' onClick={() => setDeleteListingModal(true)}>
              Apply on All New Listing
            </CustomButton>
          </div>
        );
      }

      case 2: {
        return (
          <div className='bordered'>
            <RulesPreferences title='' className='edit-apartment' />
            <CustomButton className='fill' onClick={() => setDeleteListingModal(true)}>
              Apply on All New Listing
            </CustomButton>
          </div>
        );
      }

      default: {
        return (
          <div className='bordered'>
            <RentalCondition title='' className='edit-apartment' />
            <CustomButton
              className='fill'
              onClick={() => setDeleteListingModal(true)}
            >
              Apply on All New Listing
            </CustomButton>
          </div>
        );
      }
    }
  };

  return (
    <div>
      {managePropertyItems()}
      <DeleteManageListingModal
        setDeleteListingModal={setDeleteListingModal}
        deleteListingModal={deleteListingModal}
      />
    </div>
  );
};

export default ManageListingProperty;
