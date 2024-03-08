import React from 'react';
import { CustomButton } from '@/globalStyles';
import { BookingSpecialOfferWrapper as LandlordSentOfferWrapper } from './InquiryRequest.styles';

const LandlordSentOffer = () => {
  return (
    <LandlordSentOfferWrapper>
      <div className='title'>You have sent special offer to James!</div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        suscipit quam erat, eget lacinia ante malesuada eget.
      </p>
      <div className='btn-wrapper'>
        <CustomButton>Cancel</CustomButton>
      </div>
    </LandlordSentOfferWrapper>
  );
};

export default LandlordSentOffer;
