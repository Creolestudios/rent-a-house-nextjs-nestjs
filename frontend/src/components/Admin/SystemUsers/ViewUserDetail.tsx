import React, { useEffect, useState } from 'react';
import { ViewUserWrapper } from './SystemUser.styles';
import { CustomButton, Box, UserHeader } from '@/globalStyles';
import { Avatar } from 'antd';
import UserDetail from './UserDetail';
import { useRouter } from 'next/router';
import PropertyDetailModal from '../CommonModal/PropertyDetailModal';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/admin/userListing/userListing.action';
import { RootState } from '@/redux/store/rootReducer';
import { AnyAction, Dispatch } from 'redux';
import Image from 'next/image';
import UserIcon from '@/assets/images/user5.png';

const ViewUserDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector(
    (state: RootState) => state.usersListingReducer.user
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  let id: number = parseInt(router.asPath.split('?')[1]);

  function isImageUrl(url: any) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg'];
    const extension = url?.slice(url.lastIndexOf('.')).toLowerCase();
    return imageExtensions.includes(extension);
  }

  const handleUserDelete = () => {
    let data = {
      id: id,
      userListPayload: {
        pageNo: 1,
        userSearch: '',
      },
    };
    dispatch(actions.deleteUser(data));
    router.push('/admin/system-users');
  };

  useEffect(() => {
    dispatch(actions.getSingleUser({ id }));
  }, []);

  return (
    <>
      <ViewUserWrapper>
        <Box>
          <UserHeader className='user-header'>
            <div className='user-name'>
              <Image
                src={isImageUrl(userData.image) ? userData.image : UserIcon}
                alt='images'
                width={36}
                height={36}
                style={{
                  marginRight: '10px',
                }}
              />
              <span className='user'>{`${userData.first_name} ${userData.last_name}`}</span>
            </div>
            <div className='btn-wrapper'>
              <CustomButton onClick={handleUserDelete}>Delete</CustomButton>
            </div>
          </UserHeader>
          <Box className='box'>
            <UserDetail
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              userData={userData}
            />
          </Box>
        </Box>
      </ViewUserWrapper>
      <PropertyDetailModal
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        user={false}
        hostName={'Jordan Austin'}
        proertyName={'ABC'}
        hostLabel={''}
      />
    </>
  );
};

export default ViewUserDetail;
