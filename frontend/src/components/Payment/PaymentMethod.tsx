import React from 'react';
import { PaymentDataWrapper } from './Payment.styles';
import PaymentTable from './PaymentTable';

const PaymentMethod = ({ title }: any) => {
  return (
    <PaymentDataWrapper>
      <div className='title-wrapper'>
        <div>
          <div className='title'>{title}</div>
          <p>Lorem ipsum</p>
        </div>
      </div>
      <PaymentTable />
    </PaymentDataWrapper>
  );
};

export default PaymentMethod;
