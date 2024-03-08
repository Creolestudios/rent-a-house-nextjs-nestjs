import React, { useState } from 'react';
import { RequestBookingBillingPaymentWrapper } from './InquiryRequest.styles';
import RequestBookingBillingForm from './RequestBookingBillingForm';
import RequestBookingPaymentMethod from './RequestBookingPaymentMethod';
import { useForm } from 'antd/lib/form/Form';
import { Form } from 'antd';

const RequestBookingBillingPayment = () => {
  const [billingDetails, setBillingDetails] = useState({});
  const [billingData] = useForm();
  const handleOnFinish = (e) => {
    console.log(e);
  };
  return (
    <RequestBookingBillingPaymentWrapper>
      <Form form={billingData} onFinish={handleOnFinish}>
        <ul>
          <li>
            <div className='number'>1</div>
            <div className='content-area'>
              <div className='title'>Billing Info.</div>
              <div className='content-block'>
                <RequestBookingBillingForm
                  billingData={billingData}
                  setBillingDetails={setBillingDetails}
                />
              </div>
            </div>
          </li>
          <li>
            <div className='number'>2</div>
            <div className='content-area'>
              <div className='title'>Payment Method</div>
              <div className='content-block'>
                <RequestBookingPaymentMethod billingData={billingData} />
              </div>
            </div>
          </li>
        </ul>
      </Form>
    </RequestBookingBillingPaymentWrapper>
  );
};

export default RequestBookingBillingPayment;
