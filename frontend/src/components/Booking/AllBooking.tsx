import React from 'react';
import Image from 'next/image';
import houseImg from '@/assets/images/house-demo.jpg';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import Link from 'next/link';
import { MoreOutlined } from '@ant-design/icons';
import { ListPropertyWrapper as AllBookingWrapper } from '../ListedProperty/ListedProperty.styles';

const AllBooking = ({ data }: any) => {
  const items: MenuProps['items'] = [
    {
      label: <Link href='/home/property-edit'>Edit</Link>,
      key: '0',
    },
    {
      label: 'Preview',
      key: '1',
    },
    {
      label: 'Delete',
      key: '2',
    },
  ];

  return (
    <AllBookingWrapper>
      {data.map((e: any) => (
        <div className='list' key={e?.id}>
          <div className='left'>
            <Image src={houseImg} width={90} height={90} alt='images' />
            <div className='content'>
              <div className='block'>
                <h3>{e?.name}</h3>
                {e?.status && <span className='round-sep'></span>}
                {e?.status && <div className='badge'>{e?.status}</div>}
              </div>
              <div className='block'>
                <ul>
                  <li>
                    {e?.property}, {e?.city}
                  </li>
                  <li>{e?.date}</li>
                  <li>{e?.price} Euros</li>
                </ul>
              </div>
              <div className='block'>
                <ul className='viewed-list'>
                  <li>
                    Call <span>{e?.call}</span>
                  </li>
                  <li>
                    Mail <span>{e?.mail}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='right'>
            <Dropdown
              menu={{ items }}
              trigger={['click']}
              overlayClassName='list-action-dropdown'
              placement='bottomRight'
            >
              <a onClick={(e) => e.preventDefault()}>
                <MoreOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
      ))}
    </AllBookingWrapper>
  );
};

export default AllBooking;
