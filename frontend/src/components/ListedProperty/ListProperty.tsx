import React from 'react';
import { ListPropertyWrapper } from './ListedProperty.styles';
import Image from 'next/image';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import Link from 'next/link';
import { MoreOutlined } from '@ant-design/icons';
import moment from 'moment';
import { propertyStatus } from '@/config/constants';
import { useDispatch } from 'react-redux';
import actions from '@/redux/propertyListing/propertyListing.action';
import noProperty from '@/assets/images/noProperty.png';

const ListProperty = ({ data, listedProperty }: any) => {
  const dispatch = useDispatch();
  const items: MenuProps['items'] = [
    {
      label: <Link href='/home/property-edit' onClick={()=>{sessionStorage.setItem('duplicate_property_id',data.id)}}>Edit</Link>,
      key: '0',
    },
    {
      label: <Link href={`/home/property-listing/${data.id}`}>Preview</Link>,
      key: '1',
    },
    {
      label: <div onClick={() => handleDelete(data.id)}>Delete</div>,
      key: '2',
    },
  ];

  const handleDelete = (propertyId) => {
    let value = {
      propertyId: propertyId,
      refetchPayload: { ...listedProperty },
    };
    dispatch(actions.deleteUserProperty(value));
  };

  return (
    <ListPropertyWrapper>
      <div className='list' key={data?.id}>
        <div className='left'>
          <Image
            src={data?.images?.length > 0 ? data?.images[0].name : noProperty}
            width={90}
            height={90}
            alt='images'
          />
          <div className='content'>
            <div className='block'>
              <h3>
                <span>{data?.name}</span>
                <span className='seperator'>,</span>
                <span>{data?.city_details?.name}</span>
              </h3>
              <span className='round-sep'></span>
              <div className='badge'>
                {propertyStatus[data.status].label.toUpperCase()}
              </div>
            </div>
            <div className='block'>
              <ul>
                <li>{data?.state_details?.name}</li>
                <li>{moment(data?.created_at).format('YYYY-MM-DD')}</li>
                <li>CA${data?.rent}</li>
              </ul>
            </div>
            {/* <div className='block'>
              <ul className='viewed-list'>
                <li>
                  Last Viewed: <span>{data?.lastViewed}</span>
                </li>
                <li>
                  Conversation: <span>{data?.conversation}</span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className='right'>
          <Dropdown
            menu={{ items }}
            trigger={['click']}
            overlayClassName='list-action-dropdown'
            placement='bottomRight'
          >
            <a>
              <MoreOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    </ListPropertyWrapper>
  );
};

export default ListProperty;
