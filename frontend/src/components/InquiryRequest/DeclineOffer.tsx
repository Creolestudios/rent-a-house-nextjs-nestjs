import React from 'react';
import { DeclineOfferWrapper } from './InquiryRequest.styles';
import { CustomButton } from '@/globalStyles';

const DeclineOffer = () => {
  return (
    <DeclineOfferWrapper>
      <div className='title'>
        Request Declined! James has indicated that place is already booked.
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        suscipit quam erat, eget lacinia ante malesuada eget.
      </p>
      <div className='btn-wrapper'>
        <CustomButton>Change Requests Date</CustomButton>
        <CustomButton className='fill'>Find More Places</CustomButton>
      </div>
    </DeclineOfferWrapper>
  );
};

export default DeclineOffer;
