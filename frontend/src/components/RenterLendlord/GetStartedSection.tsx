import { Button } from 'antd';
import React from 'react';
import { GetStartedWrapper } from './RenterLendlord.styles';
import Icon from '@ant-design/icons';
import ArrowIcon from '@/assets/images/icons/LongRightArrowSvg';
import { Container } from '@/globalStyles';
import heroImg from '@/assets/images/hero-home.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

const GetStartedSection = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push('/home/property-listing?::');
  };

  return (
    <GetStartedWrapper>
      <div className='left'>
        <h2>Ready to get started ?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu
          ex, malesuada ut porttitor nec, ullamcorper eu arcu.
        </p>
        <Button onClick={handleOnClick}>
          Search Your Perfect Home
          <Icon component={ArrowIcon} />
        </Button>
      </div>
      <div className='right'>
        <Image
          className='right-img'
          src={heroImg}
          width={547}
          height={366}
          alt={'img'}
        />
      </div>
    </GetStartedWrapper>
  );
};

export default GetStartedSection;
