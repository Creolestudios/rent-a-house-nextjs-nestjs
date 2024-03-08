import React, { useEffect, useState } from 'react';
import { Container } from '@/globalStyles';
import { FavorateListingWrapper } from './FavorateListing.styles';
import FavorateList from './FavorateList';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/propertyListing/propertyListing.action';

const FavorateListing = () => {
  const dispatch = useDispatch();
  const totalProperty = useSelector(
    (state: any) => state.propertyListingReducer.totalFavourite
  );
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    let value = { pageNo: pageNumber };
    dispatch(actions.favoritePageNumber(pageNumber));
    dispatch(actions.getFavouritePropertyList(value));
  }, []);

  return (
    <FavorateListingWrapper>
      <Container className='container'>
        <div className='header-wrapper'>
          <div className='title'>
            My Favorite Listings<span className='badge'>{totalProperty}</span>
          </div>
        </div>
        <FavorateList
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          totalProperty={totalProperty}
        />
      </Container>
    </FavorateListingWrapper>
  );
};

export default FavorateListing;
