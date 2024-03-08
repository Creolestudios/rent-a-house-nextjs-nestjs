import React from 'react';
import { useSelector } from 'react-redux';
import FuturePayment from './FuturePayment';
import { SendBookingRightContentWrapper } from './InquiryRequest.styles';
import SendBookingInquiryRequest from './SendBookingInquiryRequest';
import SendBookingPaymentDetail from './SendBookingPaymentDetail';
import SendBookingSecurity from './SendBookingSecurity';
import SendBookingUserInfo from './SendBookingUserInfo';

const SendBookingRightContent = () => {
  const { requestBooking } = useSelector((state: any) => state.appReducer);

  return (
    <SendBookingRightContentWrapper>
      <SendBookingUserInfo />
      <SendBookingInquiryRequest />
      {!requestBooking && <SendBookingPaymentDetail />}
      {requestBooking && <FuturePayment />}
      <SendBookingSecurity />
    </SendBookingRightContentWrapper>
  );
};

export default SendBookingRightContent;
