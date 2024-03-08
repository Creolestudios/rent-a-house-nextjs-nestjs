import React, { useState, useEffect } from 'react';
import { MobileMenuWrapper } from './Header.styles';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';
import { CustomButton } from '@/globalStyles';
import { useRouter } from 'next/router';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

// submenu keys of first level
const rootSubmenuKeys = ['sub1'];

const MobileMenu = ({
  activeSidebar,
  setActiveSidebar,
  setIsModalOpen,
  temp,
  setTemp,
  token,
}: any) => {
  const route = useRouter();

  const [getToken, setGettoken] = useState<string>('');

  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange: MenuProps['onOpenChange'] = (keys: string[]) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
      // setActiveSidebar(false);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      // setActiveSidebar(false);
    }
  };

  const handleSelect = (e: any) => {
    setOpenKeys(e.keyPath);
    setActiveSidebar(false);
    sessionStorage.setItem('menu-key', JSON.stringify(e.keyPath));
  };

  useEffect(() => {
    setGettoken(sessionStorage.getItem('token') ?? '');
    window.addEventListener('storage', () => {
      setGettoken(sessionStorage.getItem('token') ?? '');
    });

    if (
      sessionStorage.getItem('menu-key') &&
      JSON.parse(sessionStorage.getItem('menu-key')).length > 0
    ) {
      setOpenKeys(JSON.parse(sessionStorage.getItem('menu-key')));
      sessionStorage.removeItem('menu-key');
    } else {
      setOpenKeys(['1']);
    }
  }, []);

  const items: MenuItem[] = [
    { type: 'divider' },
    getItem(<Link href='/home'>Become Landlord</Link>, '1', null),
    getItem(<Link href='/home/favorate-listing'>Favorite</Link>, '2', null),
    getItem(
      <Link href='/home/listed-properties'>My Properties</Link>,
      '3',
      null
    ),
    getItem(<Link href='/home/booking'>Bookings</Link>, '4', null),
    getItem(<Link href='/home/payment'>My Payment</Link>, '5', null),
    { type: 'divider' },
    getItem(<Link href='/home/about-us'>About us</Link>, '6', null),
    // getItem(<Link href='/'>Accommodation</Link>, '7', null),
    getItem(<Link href='/home/pricing'>Pricing</Link>, '8', null),
    getItem(<Link href='/home/faq'>FAQ</Link>, '9', null),
    getItem(<Link href='/home/contact-us'>Contact us</Link>, '10', null),
    getItem(<span>EN</span>, 'sub1', null, [
      getItem(<span>Eng</span>, '12'),
      getItem(<span>Hindi</span>, '13'),
    ]),
    { type: 'divider' },
    getItem(<Link href='/home/account'>My Account</Link>, '14', null),
    getItem(
      getToken ? (
        <Link
          href='/home'
          onClick={() => {
            sessionStorage.removeItem('token');
            setActiveSidebar(false);
          }}
        > 
          Logout
        </Link>
      ) : (
        <Link
          href='/home'
          onClick={() => {
            setIsModalOpen(true);
            setActiveSidebar(false);
          }}
        >
          Log In
        </Link>
      ),
      '15',
      null
    ),
  ];

  return (
    <MobileMenuWrapper className={activeSidebar ? 'open' : ''}>
      <CustomButton onClick={() => route.push(`/home/property-host`)}>
        Post a Hosting
      </CustomButton>
      <Menu
        mode='inline'
        // defaultOpenKeys={['1']}
        defaultSelectedKeys={['1']}
        selectedKeys={openKeys}
        // openKeys={openKeys}
        onOpenChange={(openKeys) => onOpenChange(openKeys)}
        items={items}
        onSelect={(e) => handleSelect(e)}
      />
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
