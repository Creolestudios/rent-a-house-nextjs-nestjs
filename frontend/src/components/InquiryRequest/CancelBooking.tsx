import React from 'react';
import { CustomButton } from '@/globalStyles';
import { BookingSpecialOfferWrapper as CancelBookingWrapper } from './InquiryRequest.styles';

const CancelBooking = () => {
  return (
    <CancelBookingWrapper>
      <div className='title'>Your booking request is cancelled.</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        suscipit quam erat, eget lacinia ante malesuada eget.
      </p>
      <div className='btn-wrapper'>
        <CustomButton className='fill'>Find More Places</CustomButton>
      </div>
    </CancelBookingWrapper>
  );
};

export default CancelBooking;
