import React from 'react';
import { HeaderWrapper } from './Header.styles';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import Icon from '@ant-design/icons';
import NotificationSvg from '@/assets/images/icons/NotificationSvg';
import userImg from '@/assets/images/user.jpg';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const items: MenuProps['items'] = [
    {
      label: 'Profile',
      key: '0',
    },

    {
      label: <span onClick={() => logout()}>Logout</span>,
      key: '1',
    },
  ];

  const logout = () => {
    sessionStorage.clear();
    router.push('/admin/login');
  };

  return (
    <HeaderWrapper>
      <Image className='logo' src={logo} alt='logo' width={130} height={27} />
      <ul>
        <li className='notification-icon'>
          <Icon component={NotificationSvg} />
        </li>
        <li>
          <Image
            className='user-img'
            src={userImg}
            alt='user'
            width={32}
            height={32}
          />
        </li>
        <li>
          <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              Raggy Lau
              <DownOutlined />
            </a>
          </Dropdown>
        </li>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
