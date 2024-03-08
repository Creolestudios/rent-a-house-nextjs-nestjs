import React, { useState, useEffect, useRef } from 'react';
import { HeaderRight, HeaderWrapper } from './Header.styles';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { Container } from '@/globalStyles';
import Link from 'next/link';
import MenuDropdown from './MenuDropdown';
import LangDropdown from './LangDropdown';
import LoginModal from '../CommonModal/LoginModal';
import { Input } from 'antd';
import Icon from '@ant-design/icons';
import searchIcon from '@/assets/images/icons/SearchIconSvg';
import heartIcon from '@/assets/images/icons/HeartBorderSvg';
import chatIcon from '@/assets/images/icons/ChatSvg';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import appActions from '@/redux/app/app.action';
import MobileMenu from './MobileMenu';
import SignupModal from '../CommonModal/SignupModal';
import actions from '@/redux/propertyListing/propertyListing.action';

export interface HeaderProps {
  headerHeight: number;
}

const Header = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const headerRef = useRef(null);
  const { propertyHostActive, windowWidth, headerHeight } = useSelector(
    (state: any) => state.appReducer
  );

  const [getToken, setGettoken] = useState<string>('');
  const [searchedValue, setSearchedValue] = useState<string>('');
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [mbSearchbar, setMbSearchbar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupIsModalOpen] = useState(false);

  const obj: HeaderProps = {
    headerHeight,
  };

  const propertyhostHandle = () => {
    if (!getToken) {
      setIsModalOpen(true);
    } else {
      route.push(`/home/property-host`);
      dispatch(appActions.propertyHost(true));
    }
  };

  const handleSearch = () => {
    let token = window.sessionStorage.getItem('token');

    let value = {
      area: searchedValue.length > 0 ? [searchedValue] : [],
      inDate: '',
      outDate: '',
      pageNo: 1,
      sort: 0,
      max: 5000,
      min: 0,
      size: [],
      suitable: [],
      type: [],
      bill: false,
      facility: [],
      furnished: 0,
    };

    token !== null
      ? dispatch(actions.searchAuthProperty(value))
      : dispatch(actions.searchProperty(value));

    route.push(`/home/property-listing?${searchedValue}::`);
  };

  const searchBar = () => {
    return (
      <div className='search-wrapper'>
        <Input
          placeholder='Search'
          onChange={(e) => setSearchedValue(e.target?.value)}
        />
        <span className='icon' onClick={handleSearch}>
          <Icon component={searchIcon} />
        </span>
      </div>
    );
  };

  useEffect(() => {
    if (route.pathname === `/home/property-host`) {
      dispatch(appActions.propertyHost(true));
    } else {
      dispatch(appActions.propertyHost(false));
    }
  }, [route.pathname]);

  useEffect(() => {
    setGettoken(sessionStorage.getItem('token') ?? '');
    window.addEventListener('storage', () => {
      setGettoken(sessionStorage.getItem('token') ?? '');
    });
    dispatch(appActions.windowWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    dispatch(appActions.headerHeight(headerRef.current.offsetHeight));
  }, []);

  return (
    <>
      <HeaderWrapper ref={headerRef} {...obj}>
        <Container className='container'>
          <Link href='/home'>
            <Image
              className='logo'
              src={logo}
              alt='logo'
              width={130}
              height={27}
            />
          </Link>
          <HeaderRight>
            <ul>
              {route.pathname !== '/home' && !propertyHostActive && (
                <li className='search'>
                  {windowWidth < 768 ? (
                    <>
                      <span
                        className='mobile-icon'
                        onClick={() => setMbSearchbar(true)}
                      >
                        <Icon component={searchIcon} />
                      </span>
                      {mbSearchbar && (
                        <div className='mobile-search-pop'>{searchBar()}</div>
                      )}
                    </>
                  ) : (
                    searchBar()
                  )}
                </li>
              )}
              {!propertyHostActive && windowWidth > 767 && (
                <li className='hosting' onClick={() => propertyhostHandle()}>
                  Post a Listing
                </li>
              )}
              {getToken && (
                <>
                  <li className='icon' onClick={() => route.push(`/home/chat`)}>
                    <Icon component={chatIcon} />
                  </li>
                  {!propertyHostActive && (
                    <li
                      className='icon'
                      onClick={() => route.push(`/home/favorate-listing`)}
                    >
                      <Icon component={heartIcon} />
                    </li>
                  )}
                </>
              )}
              {windowWidth > 767 && (
                <li className='dropdown'>
                  <MenuDropdown
                    token={getToken}
                    setIsModalOpen={setIsModalOpen}
                    setSignupIsModalOpen={setSignupIsModalOpen}
                  />
                </li>
              )}
              {windowWidth > 767 && (
                <li className='dropdown'>
                  <LangDropdown />
                </li>
              )}
              {windowWidth < 768 && (
                <>
                  <li
                    className='humberger-menu'
                    onClick={() => setActiveSidebar(!activeSidebar)}
                  >
                    <span className='humberger-icon'></span>
                  </li>
                  <MobileMenu
                    token={getToken}
                    activeSidebar={activeSidebar}
                    setActiveSidebar={setActiveSidebar}
                    setIsModalOpen={setIsModalOpen}
                  />
                </>
              )}
            </ul>
          </HeaderRight>
        </Container>
      </HeaderWrapper>
      <LoginModal
        setSignupIsModalOpen={setSignupIsModalOpen}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <SignupModal
        isSignupModalOpen={isSignupModalOpen}
        setSignupIsModalOpen={setSignupIsModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default Header;
