import React, { useEffect, useState } from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import HumbergurMenu from '@/assets/images/icons/HumbergurMenu';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/inquiryRequest/inquiryRequest.action';
import { useRouter } from 'next/router';

interface Props {
  token: string;
  setIsModalOpen: any;
  setSignupIsModalOpen: any;
}

const MenuDropdown = ({
  token,
  setIsModalOpen,
  setSignupIsModalOpen,
}: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const items: MenuProps['items'] = [
    token && {
      label: <Link href='/home/account'>Account</Link>,
      key: '0',
    },
    {
      label: <Link href='/home/about-us'>About us</Link>,
      key: '1',
    },
    // {
    //   label: <Link href='/'>Rental Accommodations</Link>,
    //   key: '2',
    // },
    token && {
      label: <Link href='/home/booking'>Booking List</Link>,
      key: '3',
    },
    token && {
      label: <Link href='/home/listed-properties'>Listed Property</Link>,
      key: '4',
    },
    {
      label: <Link href='/home/pricing'>Pricing</Link>,
      key: '5',
    },
    {
      label: <Link href='/home/faq'>FAQ</Link>,
      key: '6',
    },
    {
      label: <Link href='/home/contact-us'>Contact us</Link>,
      key: '7',
    },
    {
      type: 'divider',
    },
    {
      label: token ? (
        <Link href='/home' onClick={() => logout()}>
          Logout
        </Link>
      ) : (
        <span onClick={() => setIsModalOpen(true)}>Log In</span>
      ),
      key: '8',
    },
    {
      label: !token && (
        <span onClick={() => setSignupIsModalOpen(true)}>Sign Up</span>
      ),
      key: '9',
    },
  ];

  const logout = () => {
    console.log('we are here')
    sessionStorage.clear();
    window.dispatchEvent(new Event('storage'));
    dispatch(actions.clearInquiry());


    // for redux refresh
    setTimeout(()=>{
      router.reload()

    },1000)

  };

  useEffect(() => {}, []);

  return (
    <Dropdown menu={{ items }} trigger={['click']} placement='bottomRight'>
      <a onClick={(e) => e.preventDefault()}>
        <span>Menu</span>
        {!token ? <HumbergurMenu /> : <UserOutlined />}
      </a>
    </Dropdown>
  );
};

export default MenuDropdown;
