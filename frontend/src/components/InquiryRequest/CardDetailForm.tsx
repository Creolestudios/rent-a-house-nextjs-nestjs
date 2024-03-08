import React from 'react';
import { CardDetailFormWrapper } from './InquiryRequest.styles';
import { Form, Input, DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';

const CardDetailForm = ({ billingData }) => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    date;
    dateString;
  };

  return (
    <CardDetailFormWrapper className='card-detail-form'>
      <Form.Item label='' name='cardnumber' className='card-number'>
        <Input placeholder='Card Number' />
      </Form.Item>
      <Form.Item label='' name='cardusername' className='card-name'>
        <Input placeholder='Name on the card*' />
      </Form.Item>
      <Form.Item label='' name='validdate' className='valid-date'>
        <DatePicker placeholder='valid thru (MM/YY)' onChange={onChange} />
      </Form.Item>
      <Form.Item label='' name='cvv' className='cvv'>
        <Input placeholder='CVV*' />
      </Form.Item>
    </CardDetailFormWrapper>
  );
};

export default CardDetailForm;
