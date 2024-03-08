import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import Link from 'next/link';
import DownArrowSvg from '@/assets/images/icons/DownArrowSvg';

const items: MenuProps['items'] = [
  {
    label: <Link href='/'>Eng</Link>,
    key: '0',
  },
  {
    label: <Link href='/'>中国人</Link>,
    key: '1',
  },
];

const LangDropdown = () => {
  return (
    <Dropdown menu={{ items }} trigger={['click']} className='down-arrow'>
      <a onClick={(e) => e.preventDefault()}>
        <span>EN</span>
        <DownArrowSvg />
      </a>
    </Dropdown>
  );
};

export default LangDropdown;
