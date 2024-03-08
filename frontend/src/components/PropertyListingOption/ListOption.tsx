import React, { useEffect, useState } from 'react';
import Options from './Options';
import { ListOptionWrapper } from './PropertyListingOptionWrapper.styles';
import createListingImg from '@/assets/images/create-listing.png';
import duplicateListingImg from '@/assets/images/duplicate-listing.png';
import { useDispatch, useSelector } from 'react-redux';
import appActions from '@/redux/app/app.action';
import Authguard from '@/services/Authguard/Authgaurd';

const data = [
  {
    id: 1,
    title: 'Create New Listing',
    subTitle: 'Select this option to post new listing.',
    img: createListingImg,
  },
  {
    id: 2,
    title: 'Duplicate Listing',
    subTitle: 'Select this option to create duplicate of previous listing.',
    img: duplicateListingImg,
  },
];

const ListOption = () => {
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    dispatch(appActions.listOption(e.target.value));
  };

  useEffect(() => {
    let token = window.sessionStorage.getItem('token');

    token === null &&
      //TODO - need to add login model openning.
      token;
  }, []);

  return (
    <ListOptionWrapper>
      <h1>
        Welcome to <br /> RentSmartly
      </h1>
      <h6>Listing Options</h6>
      <Options data={data} handleChange={handleChange} />
    </ListOptionWrapper>
  );
};

export default ListOption;
