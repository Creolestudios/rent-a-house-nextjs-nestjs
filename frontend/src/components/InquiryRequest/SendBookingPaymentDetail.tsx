import React from 'react';
import { SendBookingPaymentDetailWrapper } from './InquiryRequest.styles';
import Icon from '@ant-design/icons';
import rightArrow from '@/assets/images/icons/DownArrowSvg';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';

const SendBookingPaymentDetail = () => {
  const propertyData = useSelector(
    (state: RootState) => state.inquiryRequestReducer.propertyInfo
  );
  return (
    <SendBookingPaymentDetailWrapper>
      <div className='title'>Payments</div>
      <div className='block'>
        <label>First Rent payment</label>
        <span>CA${propertyData?.rent}</span>
      </div>
      {/* <div className='block'>
        <label>One time service fee</label>
        <span>CA${propertyData?.one_time_service_fee}</span>
      </div> */}
      <hr />
      <div className='block total'>
        <label>Total Payment</label>
        <span>
          CA$
          {Number(propertyData?.rent)}
        </span>
      </div>
      <div className='pay-plan'>
        View all the payments planned for this stay
        <Icon component={rightArrow} />
      </div>
      <hr />
      <div className='block cancellation'>
        <label>
          Cancellation Policy<span className='seperator'>:</span>
        </label>
        <span>Standard Cancellation</span>
      </div>
    </SendBookingPaymentDetailWrapper>
  );
};

export default SendBookingPaymentDetail;
