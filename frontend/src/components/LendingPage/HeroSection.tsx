import React, { useState, useEffect } from 'react';
import { Container } from '@/globalStyles';
import { HeroSectionWrapper } from './LendingPage.styles';
import SearchForm from './SearchForm';
import Image from 'next/image';
import heroImg from '@/assets/images/hero-home.png';
import { useDispatch } from 'react-redux';
import actions from '@/redux/auth/auth.action';

const HeroSection = () => {
  const dispatch = useDispatch();
  const [getToken, setGettoken] = useState<any>(null);

  useEffect(() => {
    let token = sessionStorage.getItem('token');
    setGettoken(token);
    window.addEventListener('storage', () => {
      setGettoken(sessionStorage.getItem('token') ?? '');
    });
    const input = {
      code: new URL(window.location.href).searchParams.get('code'),
    };

    input.code?.length > 0 &&
      token == null &&
      dispatch(actions.googleRedirection({ input }));
  }, []);

  return (
    <HeroSectionWrapper className={`${getToken ? 'auth' : ''}`}>
      <Container className='container'>
        <div className='left'>
          <h1>Need to rent in Canada ? We’ve got your back.</h1>
          <h6>
            Discover your forever or for now home. Rentable homes and apartments
            that work with your plan.
          </h6>
          <div className='search-bar'>
            <SearchForm />
          </div>
          <div className='count-area'>
            <div>
              <span>20,000+</span>
              <span className='text'>Homes & Apartments for rent</span>
            </div>
            <div>
              <span>300+</span>
              <span className='text'>
                Immigrants found perfect home for rent
              </span>
            </div>
          </div>
        </div>
        <div className='right'>
          {/* <h6>
            Discover your forever or for now home. Rentable homes and apartments
            that work with your plan.
          </h6> */}
          <div className='img-right'>
            <Image
              className='hero-img'
              src={heroImg}
              alt='logo'
              width={751}
              height={502}
            />
          </div>
        </div>
      </Container>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
