import React from 'react';
import { RequestBookingAmountInfoWrapper } from './InquiryRequest.styles';

const RequestBookingAmountInfo = () => {
  return (
    <RequestBookingAmountInfoWrapper>
      <div className='row'>
        <div className='title'>Payment Breakdown</div>
        <div className='block'>
          <label>First Rent payment</label>
          <span className='seperator'></span>
          <span>$ 2,149</span>
        </div>
        <div className='block'>
          <label>One time service fee</label>
          <span className='seperator'></span>
          <span>$ 250</span>
        </div>
        <hr />
        <div className='block total'>
          <label>Total Payment</label>
          <span>$ 2,399</span>
        </div>
        <p>You will only be charged if James accepts your request.</p>
      </div>
    </RequestBookingAmountInfoWrapper>
  );
};

export default RequestBookingAmountInfo;
