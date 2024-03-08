import React from 'react';
import PaymentMethod from './PaymentMethod';
import TransactionDetail from './TransactionDetail';

const PaymentContent = ({ id, title }: any) => {
  const paymentItems = () => {
    switch (id) {
      case 1: {
        return <PaymentMethod title={title} />;
      }

      case 2: {
        return <TransactionDetail title={title} />;
      }

      default: {
        return <PaymentMethod title={title} />;
      }
    }
  };

  return <div>{paymentItems()}</div>;
};

export default PaymentContent;
