import React from 'react';
import Title from '../Title/Title';
import { RequestBookingDetailWrapper } from './InquiryRequest.styles';
import { fontFamily, color } from '@/styles/variable';
import RequestBookingAmountInfo from './RequestBookingAmountInfo';
import RequestBookingBillingPayment from './RequestBookingBillingPayment';

const RequestBookingDetail = () => {
  return (
    <RequestBookingDetailWrapper>
      <Title
        title='Request Booking'
        fontFamily={`${fontFamily.ptBold}`}
        color={`${color.blackColor}`}
        className='title'
      />
      <RequestBookingAmountInfo />
      <RequestBookingBillingPayment />
    </RequestBookingDetailWrapper>
  );
};

export default RequestBookingDetail;
