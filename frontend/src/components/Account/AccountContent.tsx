import React from 'react';
import { CustomButton } from '@/globalStyles';
import RentalCondition from '../PropertyListingOption/RentalCondition';
import Profile from './Profile';
import SupportingDocument from './SupportingDocument';
import ContactInfo from './ContactInfo';
import PasswordSetting from './PasswordSetting';
import NotificationSetting from './NotificationSetting';

const AccountContent = ({ id }: any) => {
  const managePropertyItems = () => {
    switch (id) {
      case 1: {
        return <Profile title='Personal Profile' />;
      }

      case 2: {
        return <SupportingDocument title='Supporting Documents' />;
      }

      case 3: {
        return <ContactInfo title='Contact information' />;
      }

      case 4: {
        return <PasswordSetting title='Password Settings' />;
      }

      case 5: {
        return <NotificationSetting title="Notification Settings" />;
      }

      default: {
        return (
          <>
            <RentalCondition title='' className='edit-apartment' />
            <CustomButton className='fill'>
              Apply on All New Listing
            </CustomButton>
          </>
        );
      }
    }
  };

  return <div>{managePropertyItems()}</div>;
};

export default AccountContent;
