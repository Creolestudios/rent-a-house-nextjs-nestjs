import React from 'react';
import { UserDetailWrapper } from './SystemUser.styles';
import Icon from '@ant-design/icons';
import FileIcon from '@/assets/images/icons/FileSvg';
import moment from 'moment';
import { gender } from '@/config/constants';
import Link from 'next/link';

const UserDetail = ({ setIsModalOpen, isModalOpen, userData }) => {
  return (
    <UserDetailWrapper>
      <div className='block'>
        <label>Email ID</label>
        <span>{userData.email}</span>
      </div>
      <div className='block'>
        <label>Contact Number</label>
        {userData.mobile && (
          <span>{`${userData.dialer_code} ${userData.mobile}`}</span>
        )}
      </div>
      <div className='block'>
        <label>Address</label>
        <span>{userData.address}</span>
      </div>
      <div className='block'>
        <label>Gender</label>
        <span>{gender[userData?.gender]?.label}</span>
      </div>
      <div className='block'>
        <label>Date of Birth</label>
        {userData.dob && (
          <span>{moment(userData.dob).format('DD/MM/YYYY')}</span>
        )}
      </div>
      <div className='block'>
        <label>Occupation</label>
        <span>{userData.occupation}</span>
      </div>
      <div className='block'>
        <label>Supporting Docs</label>
        <div className='doc-wrapper'>
          <a href={userData?.identity_proof} target='_blank'>
            <Icon component={FileIcon} />
            Proof of Indentity.
          </a>
          <a href={userData?.proof_of_occupation_income} target='_blank'>
            <Icon component={FileIcon} />
            Proof of Occupation
          </a>
        </div>
      </div>
      <div className='block'>
        <label>Listed Properties</label>
        <span className='focus-link'>
          {userData?.listedProperties?.map((data, key) => (
            <Link
              href={`/admin/property-listing/property-page?${data.id}`}
              className='focus-link'
            >
              {`${data.name}${
                userData?.listedProperties.length - 1 === key ? '.' : ', '
              }`}
            </Link>
          ))}
        </span>
      </div>
      <div className='block'>
        <label>Properties Rented</label>
        <span className='focus-link'>{userData.TotalProperties}</span>
      </div>
    </UserDetailWrapper>
  );
};

export default UserDetail;
