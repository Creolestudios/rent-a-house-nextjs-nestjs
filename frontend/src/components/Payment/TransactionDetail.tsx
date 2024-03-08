import React, { useState } from 'react';
import { PaymentDataWrapper } from './Payment.styles';
import { Input, Select } from 'antd';
import Icon from '@ant-design/icons';
import downArrow from '@/assets/images/icons/DownArrowSvg';
import TransactionTable from './TransactionTable';
import SearchIcon from '@/assets/images/icons/SearchIconSvg';
const TransactionDetail = ({ title }: any) => {
  const [transactionType, setTransactionType] = useState('completed');

  const handleChange = (value: string) => {
    setTransactionType(value);
  };

  return (
    <PaymentDataWrapper>
      <div className='title-wrapper'>
        <div>
          <div className='title'>{title}</div>
          {/* <p>Lorem ipsum</p> */}
        </div>
        <div>
          <Select
            // defaultValue="lucy"
            // style={{ width: 120 }}
            placeholder='Transaction Type'
            onChange={handleChange}
            suffixIcon={<Icon component={downArrow} />}
            popupClassName='payment-dropdown'
            options={[
              { value: 'completed', label: 'Completed' },
              { value: 'upcoming', label: 'Up Coming' },
            ]}
          />
        </div>
      </div>
      <div>
        <Input
          className='transaction-search'
          size='large'
          placeholder='Search transactions'
          prefix={<Icon component={SearchIcon} />}
        />
        <TransactionTable transactionType={transactionType} />
        {/* {transactionType === 'completed' ? (
          <TransactionTable />
        ) : (
          'Up Coming Table'
        )} */}
      </div>
    </PaymentDataWrapper>
  );
};

export default TransactionDetail;
