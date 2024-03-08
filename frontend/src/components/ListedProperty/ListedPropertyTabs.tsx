import React, { useEffect, useState } from 'react';
import ListProperty from './ListProperty';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/propertyListing/propertyListing.action';
import { RootState } from '@/redux/store/rootReducer';
import { propertyStatus } from '@/config/constants';

const ListedPropertyTabs = ({ id, title, statusId, searchedKeyword }: any) => {
  const dispatch = useDispatch();
  const perUserPropertyList = useSelector(
    (state: RootState) => state.propertyListingReducer.perUserPropertyList
  );
  const totalPerUserProperty = useSelector(
    (state: RootState) => state.propertyListingReducer.perUserTotalProperty
  );
  const [listedProperty, setListedProperty] = useState({
    searchProperty: searchedKeyword,
    pageNo: 1,
    propertyStatus: 'all',
  });

  useEffect(() => {
    setListedProperty({
      ...listedProperty,
      propertyStatus: propertyStatus[statusId].label,
      searchProperty: searchedKeyword,
    });
  }, [statusId, searchedKeyword]);

  useEffect(() => {
    dispatch(actions.getPerUserProperty(listedProperty));
  }, [listedProperty]);

  console.log(statusId, '=====');

  return (
    <div>
      <div className='title-wrapper'>
        <div className='title'>{title}</div>
        <div className='sub-title'>
          {totalPerUserProperty} Properties Listed
        </div>
      </div>
      {perUserPropertyList.map((data) => (
        <ListProperty data={data} listedProperty={listedProperty} />
      ))}
    </div>
  );
};

export default ListedPropertyTabs;
