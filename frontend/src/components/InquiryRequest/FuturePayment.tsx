import React from 'react';
import { FuturePaymentWrapper } from './InquiryRequest.styles';
import Icon from '@ant-design/icons';
import rightArrow from '@/assets/images/icons/DownArrowSvg';

const FuturePayment = () => {
  return (
    <FuturePaymentWrapper>
      <div className='title'>Future Payments</div>
      <div className='block'>
        <label>Deposit</label>
        <span>$ 2,149</span>
      </div>
      <div className='block'>
        <label>Rent Payment</label>
        <span>$ 250</span>
      </div>
      {/* <hr />
      <div className='pay-plan'>
      View all the payments charges
        <Icon component={rightArrow} />
      </div> */}
    </FuturePaymentWrapper>
  );
};

export default FuturePayment;
