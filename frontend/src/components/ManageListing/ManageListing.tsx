import React from 'react';
import { Container, CustomButton } from '@/globalStyles';
import Link from 'next/link';
import { Input } from 'antd';
import Icon from '@ant-design/icons';
import searchIcon from '@/assets/images/icons/SearchIconSvg';
import plusIcon from '@/assets/images/icons/PlusIconSvg';
import { Tabs } from 'antd';
import { PropertyEditWrapper as ManageListingWrapper } from '../PropertyEdit/PropertyEdit.styles';
import ManageListingProperty from './ManageListingProperty';
import { useSelector } from 'react-redux';


export interface HeaderProps {
  headerHeight: number;
}

const item = [
  {
    id: 1,
    label: 'Rental Condition',
  },
  {
    id: 2,
    label: 'Rules & Preferences',
  },
];

const ManageListing = () => {
  const { windowWidth, headerHeight } = useSelector((state: any) => state.appReducer);

    const obj: HeaderProps = {
    headerHeight,
  };

  return (
    <ManageListingWrapper {...obj}>
      <Container>
        <div className='header-wrapper'>
          <div className='title'>Manage All Listing</div>
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
                </div>
              ),
              key: e?.id,
              children: <ManageListingProperty id={e?.id} title={e?.label} />,
            };
          })}
        />
      </Container>
    </ManageListingWrapper>
  );
};

export default ManageListing;
