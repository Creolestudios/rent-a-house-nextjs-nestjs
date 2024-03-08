import React from 'react';
import { RequestBookingBillingFormWrapper } from './InquiryRequest.styles';
import { Form, Input, Select } from 'antd';
import Icon from '@ant-design/icons';
import downArrow from '@/assets/images/icons/DownArrowSvg';

const RequestBookingBillingForm = ({ setBillingDetails, billingData }) => {
  const onChange = (value: string) => {
    `selected ${value}`;
  };

  //   const onSearch = (value: string) => {
  //     ('search:', value);
  //   };

  return (
    <RequestBookingBillingFormWrapper className='request-billing-form'>
      <Form.Item label='' name='firstname' className='w-50'>
        <Input placeholder='First Name*' />
      </Form.Item>
      <Form.Item label='' name='lastname' className='w-50 mr-remove'>
        <Input placeholder='Last Name*' />
      </Form.Item>
      <Form.Item label='' name='address'>
        <Input placeholder='Address*' />
      </Form.Item>
      <Form.Item label='' name='city' className='w-50'>
        <Input placeholder='City*' />
      </Form.Item>
      <Form.Item label='' name='state' className='w-50 mr-remove'>
        <Input placeholder='State*' />
      </Form.Item>
      <Form.Item label='' name='country' className='w-50'>
        <Input placeholder='Country*' />
      </Form.Item>
      <Form.Item label='' name='postal' className='w-50 mr-remove'>
        <Input placeholder='Postal code*' />
      </Form.Item>
    </RequestBookingBillingFormWrapper>
  );
};

export default RequestBookingBillingForm;
