import React from 'react';
import { AccountWrapper } from './Account.styles';
import { Tabs } from 'antd';
import AccountContent from './AccountContent';
import { Container } from '@/globalStyles';
import { useSelector } from 'react-redux';

export interface HeaderProps {
  headerHeight: number;
}

const item = [
  {
    id: 1,
    label: 'Profile',
  },
  {
    id: 2,
    label: 'Supporting Documents',
  },
  {
    id: 3,
    label: 'Contact information',
  },
  {
    id: 4,
    label: 'Password settings',
  },
  {
    id: 5,
    label: 'Notification settings',
  },
];

const Account = () => {
  const { windowWidth, headerHeight } = useSelector(
    (state: any) => state.appReducer
  );

  const obj: HeaderProps = {
    headerHeight,
  };

  return (
    <AccountWrapper {...obj}>
      <Container>
        <h2 className='title'>Account</h2>
        <Tabs
          tabPosition={windowWidth < 768 ? 'top' : 'left'}
          items={item.map((e: any) => {
            return {
              label: (
                <div className='tab-label-wrapper'>
                  <div>
                    <span className='title'>{e?.label}</span>
                  </div>
                  {/* <span className='badge'>{e?.masgCount}</span> */}
                </div>
              ),
              key: e?.id,
              children: <AccountContent id={e?.id} />,
            };
          })}
        />
      </Container>
    </AccountWrapper>
  );
};

export default Account;
