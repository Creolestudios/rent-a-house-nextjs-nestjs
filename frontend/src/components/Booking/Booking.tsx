import React from 'react';
import { ListedPropertyWrapper as BookingWrapper } from '../ListedProperty/ListedProperty.styles';
import { Container, CustomButton } from '@/globalStyles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Input, Tabs } from 'antd';
import Icon from '@ant-design/icons';
import searchIcon from '@/assets/images/icons/SearchIconSvg';
import BookingTabs from './BookingTabs';
import { useSelector } from 'react-redux';

export interface HeaderProps {
  headerHeight: number;
}

const item = [
  {
    id: 1,
    label: 'Current',
    count: 1,
  },
  {
    id: 2,
    label: 'Upcoming',
    count: 1,
  },
  {
    id: 3,
    label: 'Past',
    count: 1,
  },
];

const Booking = () => {
  const { windowWidth, headerHeight } = useSelector(
    (state: any) => state.appReducer
  );

  const obj: HeaderProps = {
    headerHeight,
  };

  return (
    <BookingWrapper {...obj} className='booking-wrap'>
      <Container>
        <div className='header-wrapper'>
          <div className='title'>Bookings</div>
          <div className='right-content'>
            <div className='search'>
              <div className='search-wrapper'>
                <Input placeholder='Keyword' />
                <span className='icon'>
                  <Icon component={searchIcon} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <Tabs
          tabPosition={windowWidth < 768 ? 'top' : 'left'}
          items={item.map((e: any) => {
            return {
              label: (
                <div className='tab-label-wrapper'>
                  <div>
                    <span className='title'>{e?.label}</span>
                  </div>
                  <span className='badge'>{e?.count}</span>
                </div>
              ),
              key: e?.id,
              children: <BookingTabs id={e?.id} title={e?.label} />,
            };
          })}
        />
      </Container>
    </BookingWrapper>
  );
};

export default Booking;
