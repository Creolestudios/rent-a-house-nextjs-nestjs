import Link from 'next/link';
import React from 'react';
import { FooterBottomListWrapper } from './Footer.styles';
import Icon from '@ant-design/icons';
import FacebookIcon from '@/assets/images/icons/FacebookSvg';
import TwitterIcon from '@/assets/images/icons/TwitterSvg';
import InstagramIcon from '@/assets/images/icons/InstagramSvg';

const FooterBottomList = () => {
  return (
    <FooterBottomListWrapper>
      <div className='copyright'>
        RentSmartly Inc. © 2023 | Apartments for Rent
      </div>
      <div className='social-wrapper'>
        <div className='title'>Follow Us on</div>
        <ul>
          <li>
            <Link href='/'>
              <Icon component={FacebookIcon} />
            </Link>
          </li>
          <li>
            <Link href='/'>
              <Icon component={TwitterIcon} />
            </Link>
          </li>
          <li>
            <Link href='/'>
              <Icon component={InstagramIcon} />
            </Link>
          </li>
        </ul>
      </div>
    </FooterBottomListWrapper>
  );
};

export default FooterBottomList;
