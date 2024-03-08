import { Avatar, Button } from 'antd';
import Image from 'next/image';
import React from 'react';
import { PropertyMemberWrapper } from './PropertyDetail.styles';
import memberBadge from '@/assets/images/member-badge.png';
import Title from '../Title/Title';
import { fontFamily, color } from '@/styles/variable';
import Icon from '@ant-design/icons';
import circleCheckIcon from '@/assets/images/icons/CheckCircleSvg';
import calenderIcon from '@/assets/images/icons/CalenderSvg';
import memberDurIcon from '@/assets/images/icons/MemberDurationSvg';
import tagIcon from '@/assets/images/icons/TagSvg';
import moment from 'moment';

const PropertyMember = ({ landlord }) => {
  return (
    <PropertyMemberWrapper>
      <div className='left'>
        <div className='member-detail'>
          <div className='avatar'>
            <Avatar size={108}>{`${Array.from(`${landlord?.first_name}`)[0]} ${Array.from(`${landlord?.last_name}`)[0]}`}</Avatar>
            <div className='badge'>
              <Image src={memberBadge} width={16} height={24} alt='img' />
            </div>
          </div>
          <Title
            className='title'
            title={`${landlord?.first_name} ${landlord?.last_name}`}
            fontFamily={`${fontFamily.ptBold}`}
            color={`${color.blackColor}`}
          />
          <div className='lang'>
            <span>Speaks</span>
            <ul>
              <li>English</li>
              <li>German</li>
            </ul>
          </div>
          <div className='last-seen'>Last seen a few minutes ago</div>
          <Button>Check Availability</Button>
          <ul className='list'>
            {landlord?.identity_proof && <li>
              <Icon component={circleCheckIcon} />
              Identity verified
            </li>}
            {landlord?.is_mobile_verified === 1 && <li>
              <Icon component={circleCheckIcon} />
              Phone number verified
            </li>}
            {landlord?.is_email_verified === 1 && <li>
              <Icon component={circleCheckIcon} />
              Email verified
            </li>}
            {landlord?.social_type === 1 && <li>
              <Icon component={circleCheckIcon} />
              Google connected
            </li>}
          </ul>
        </div>
      </div>
      <div className='right'>
        <div className='response-block'>
          <div className='block'>
            <label>Response rate:</label>
            <span>100%</span>
          </div>
          <div className='block'>
            <label>Response time:</label>
            <span>within an hour</span>
          </div>
        </div>
        <div className='success-list'>
          <ul>
            <li>
              <Icon component={calenderIcon} />
              <span>103 successful bookings</span>
            </li>
            <li>
              <Icon component={memberDurIcon} />
              <span>Member since {moment(landlord?.created_at).format("MMMM YYYY")}</span>
            </li>
            <li>
              <Icon component={tagIcon} />
              <span>62 Total listing</span>
            </li>
          </ul>
        </div>
        <div className='report-user'>
          <Button>Report this user</Button>
          <Button>Contact Support</Button>
        </div>
      </div>
    </PropertyMemberWrapper>
  );
};

export default PropertyMember;
