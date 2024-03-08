import Image from 'next/image';
import React from 'react';
import { SendBookingSecurityWrapper } from './InquiryRequest.styles';
import shieldImg from '@/assets/images/shield.png';

const SendBookingSecurity = () => {
  return (
    <SendBookingSecurityWrapper>
      <Image src={shieldImg} width={64} height={64} alt='shield-img' />
      <h6>
        RentSmartly will never ask you to wire money directly to the advertiser.
      </h6>
      <p>
        Keeping your communication and payments to our platform means you stay
        protected by our policies and secure payments system. Read more here.
      </p>
    </SendBookingSecurityWrapper>
  );
};

export default SendBookingSecurity;
