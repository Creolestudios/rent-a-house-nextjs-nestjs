import React, { useEffect } from 'react';
import { SendBookingUserInfoWrapper } from './InquiryRequest.styles';
import Image from 'next/image';
import { Avatar } from 'antd';
import memberBadge from '@/assets/images/member-badge.png';
import Title from '../Title/Title';
import { fontFamily, color } from '@/styles/variable';
import Icon from '@ant-design/icons';
import checkCircleIcon from '@/assets/images/icons/CheckCircleSvg';
import { CustomButton } from '@/globalStyles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store/rootReducer';
import actions from '@/redux/inquiryRequest/inquiryRequest.action';
import { useRouter } from 'next/router';

const SendBookingUserInfo = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { requestBooking } = useSelector((state: any) => state.appReducer);
  const propertyData = useSelector(
    (state: RootState) => state.inquiryRequestReducer.chatingData
  );

  useEffect(() => {
    const bookingId = parseInt(router.asPath.split(':')[1]);
    const messageFromId = parseInt(router.asPath.split(':')[2]);
    const messageToId = parseInt(router.asPath.split(':')[3]);

    let continueChatPayload = {
      bookingId: bookingId,
      toId: messageToId,
      fromId: messageFromId,
    };
    if (messageToId) {
      dispatch(actions.continueChat(continueChatPayload));
    }
  }, []);

  return (
    <SendBookingUserInfoWrapper>
      <div className='member-detail'>
        <div className='avatar'>
          <Avatar size={78}>S</Avatar>
          <div className='badge'>
            <Image src={memberBadge} width={16} height={24} alt='img' />
          </div>
        </div>
        <div>
          <Title
            className='title'
            title={`${propertyData?.landlord_data?.first_name} ${propertyData?.landlord_data?.last_name}`}
            fontFamily={`${fontFamily.ptBold}`}
            color={`${color.blackColor}`}
          />
          <div className='lang'>
            <span>Speaks</span>
            <ul>
              <li>English</li>
            </ul>
          </div>
          <div className='last-seen'>Last seen a few minutes ago</div>
        </div>
      </div>
      {!requestBooking && (
        <>
          {/* <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              fringilla finibus mi varius sodales. Vestibulum consectetur metus
              placerat tortor imperdiet egestas. Morbi sed imperdiet felis,
              efficitur dignissim nulla. Curabitur sodales nulla erat. Phasellus
              gravida ipsum diam, a ornare lorem faucibus luctus.
            </p>
          </div> */}
          <div>
            <div className='block'>
              <label>Response rate</label>
              <span className='seperator'>:</span>
              <span>100%</span>
            </div>
            <div className='block'>
              <label>Response time</label>
              <span className='seperator'>:</span>
              <span>within an hour</span>
            </div>
          </div>
          <div>
            <ul className='list'>
              <li>
                <Icon component={checkCircleIcon} />
                <span>Identity verified</span>
              </li>
              {propertyData?.landlord_data?.is_mobile_verified === 1 && (
                <li>
                  <Icon component={checkCircleIcon} />
                  <span>Phone number verified</span>
                </li>
              )}
              {propertyData?.landlord_data?.is_email_verified === 1 && (
                <li>
                  <Icon component={checkCircleIcon} />
                  <span>Email verified</span>
                </li>
              )}
              {propertyData?.landlord_data?.social_type === 1 && (
                <li>
                  <Icon component={checkCircleIcon} />
                  <span>Facebook connected</span>
                </li>
              )}
            </ul>
            <div className='btn-wrapper'>
              <CustomButton>Report this user</CustomButton>
              <CustomButton>Contact Support</CustomButton>
            </div>
          </div>
        </>
      )}
    </SendBookingUserInfoWrapper>
  );
};

export default SendBookingUserInfo;
