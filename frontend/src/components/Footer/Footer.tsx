import { Container } from '@/globalStyles';
import React from 'react';
import { FooterWrapper } from './Footer.styles';
import FooterBottomList from './FooterBottomList';
import FooterTopList from './FooterTopList';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container className='container'>
        <FooterTopList />
        <FooterBottomList />
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
