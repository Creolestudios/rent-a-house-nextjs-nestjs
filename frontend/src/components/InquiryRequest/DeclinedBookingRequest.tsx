import React from 'react';
import { BookingInvitationWrapper as DeclinedBookingRequestWrapper } from './InquiryRequest.styles';
import { CustomButton } from '@/globalStyles';

const DeclinedBookingRequest = () => {
  return (
    <DeclinedBookingRequestWrapper>
      <div className='title'>You have declined the James’s booking Request !</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit quam erat, eget lacinia ante malesuada eget.</p>
      <div className='btn-wrapper'>
        <CustomButton>Special Offer</CustomButton>
      </div>
    </DeclinedBookingRequestWrapper>
  );
};

export default DeclinedBookingRequest;
