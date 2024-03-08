import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CommonCard from '../CommonCard/CommonCard';
import { PropertyListingWrapper as FavorateListWrapper } from '../PropertyListing/PropertyListing.styles';
import { CardWrapper } from '../CommonCard/CommonCard.styles';
import { appConstant } from '@/config/constants';
import CustomPagination from '../UtilityComp/CustomPagination';

const FavorateList = ({ pageNumber, setPageNumber, totalProperty }) => {
  const favouriteList = useSelector(
    (state: any) => state.propertyListingReducer.favouritePropertyList
  );

  return (
    <FavorateListWrapper>
      <CardWrapper className='favorate'>
        {favouriteList.length === 0 ? (
          <span className='no-property-error'>{appConstant.noProperty}</span>
        ) : (
          favouriteList.map((item: any) => (
            <div className='card-item' key={item?.id}>
              <CommonCard
                route={`/home/property-listing/${item?.id}`}
                item={item}
                className=''
              />
            </div>
          ))
        )}
      </CardWrapper>
      {totalProperty > 16 && (
        <CustomPagination
          pageSize={16}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalProperty={totalProperty}
        />
      )}
    </FavorateListWrapper>
  );
};

export default FavorateList;
