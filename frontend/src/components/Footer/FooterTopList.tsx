import React, { useState } from 'react';
import { Input } from 'antd';
import { FooterTopListWrapper, SearchBar } from './Footer.styles';
import MenuList from './MenuList';
import Icon from '@ant-design/icons';
import SearchIcon from '@/assets/images/icons/SearchIconSvg';
import { useDispatch } from 'react-redux';
import actions from '@/redux/propertyListing/propertyListing.action';
import { useRouter } from 'next/router';

const FooterTopList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [searchData, setSearchData] = useState('');

  const handleSearchProperty = () => {
    let token = window.sessionStorage.getItem('token');

    let value = {
      area: searchData.length > 0 ? [searchData] : [],
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

    router.push(`/home/property-listing?${searchData}::`);
  };

  return (
    <FooterTopListWrapper>
      <MenuList />
      <SearchBar>
        <div className='title'>Find your next home</div>
        <div className='search-bar'>
          <div>
            <label>Search Home</label>
            <Input
              placeholder='Search by name, address...'
              onChange={(e) => setSearchData(e.target?.value)}
            />
          </div>
          <button onClick={handleSearchProperty}>
            <Icon component={SearchIcon} />
          </button>
        </div>
      </SearchBar>
    </FooterTopListWrapper>
  );
};

export default FooterTopList;
