import React, { useState } from 'react';
import { Tabs } from 'antd';
import { Container, CustomButton } from '@/globalStyles';
import { PaymentWrapper } from './Payment.styles';
import PaymentContent from './PaymentContent';
import Icon from '@ant-design/icons';
import plusIcon from '@/assets/images/icons/PlusIconSvg';
import { use } from 'react';
import { useSelector } from 'react-redux';

export interface HeaderProps {
  headerHeight: number;
}

const item = [
  {
    id: 1,
    label: 'Payment Method',
  },
  {
    id: 2,
    label: 'Transaction Details',
  },
];

const Payment = () => {
  const [ids, setIds] = useState<string>('1');

  const { windowWidth, headerHeight } = useSelector((state: any) => state.appReducer);

  const obj: HeaderProps = {
    headerHeight
  }

  return (
    <PaymentWrapper {...obj}>
      <Container>
        <div className='header-wrapper'>
          <h2 className='title'>Payment</h2>
          {Number(ids) === 1 && (
            <div className='right-content'>
              <CustomButton>
                <Icon component={plusIcon} />
                Add New Account
              </CustomButton>
            </div>
          )}
        </div>
        <Tabs
          onTabClick={(key: string) => setIds(key)}
          tabPosition={windowWidth < 768 ? 'top' : 'left'}
          items={item.map((e: any) => {
            return {
              label: (
                <div className='tab-label-wrapper'>
                  <div>
                    <span className='title'>{e?.label}</span>
                  </div>
                </div>
              ),
              key: e?.id,
              children: <PaymentContent id={e?.id} title={e?.label} />,
            };
          })}
        />
      </Container>
    </PaymentWrapper>
  );
};

export default Payment;
