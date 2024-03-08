import { Container, CustomButton } from '@/globalStyles';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommonCard from '../CommonCard/CommonCard';
import TabList from '../TabList/TabList';
import CustomPagination from '../UtilityComp/CustomPagination';
import Filter from '../UtilityComp/Filter';
import MapView from './MapView';
import { PropertyListingWrapper } from './PropertyListing.styles';
import SortList from './SortList';
import actions from '@/redux/propertyListing/propertyListing.action';
import { RootState } from '@/redux/store/rootReducer';
import { propertyView } from '@/config/constants';
// import dynamic from 'next/dynamic';

interface propertyListing {
  id: number;
  images: [string];
  name: string;
  type: string;
  space_overview: {
    bedrooms: number;
    size: number;
  };
  rent: number;
  available_from: string;
  is_favorite?: boolean;
}
// const MapView = dynamic(() => import('./MapView'), {
//   ssr: false,
// });

const PropertyListing = () => {
  const [mobFilterActive, setMobFilterActive] = useState(false);
  const dispatch = useDispatch();
  const propertyData = useSelector(
    (state: RootState) => state.propertyListingReducer.property
  );
  const totalProperty = useSelector(
    (state: any) => state.propertyListingReducer.totalProperty
  );
  const { windowWidth } = useSelector((state: any) => state.appReducer);

  const router = useRouter();
  const [pageNumber, setPageNumber] = useState(1);
  const [sortValue, setSortValue] = useState(0);
  const [tabId, setTabId] = useState(1);
  const [price, setPrice] = useState({
    min: 0,
    max: 5000,
  });
  const [searchValue, setSearchValue] = useState({
    area: [],
    inDate: '',
    outDate: '',
    pageNo: 1,
    sort: 0,
    max: price.max,
    min: price.min,
    size: [],
    suitable: [],
    type: [],
    bill: false,
    facility: [],
    furnished: 0,
  });

  useEffect(() => {
    let searchedData = router.asPath?.split('?')[1]?.split(':');
    let token = window.sessionStorage.getItem('token');

    setSearchValue({
      ...searchValue,
      area: searchedData[0].length > 0 ? [searchedData[0]] : [],
      inDate: searchedData[1],
      outDate: searchedData[2],
      pageNo: pageNumber,
      sort: sortValue,
    });

    propertyData.length === 0 &&
      (token !== null
        ? dispatch(actions.searchAuthProperty(searchValue))
        : dispatch(actions.searchProperty(searchValue)));
  }, [pageNumber, sortValue]);

  const mapContainerStyle = {
    width: '100%',
    height: '550px',
    flex: 1,
  };

  const center = {
    lat: 23.03,
    lng: 72.529,
  };

  return (
    <PropertyListingWrapper>
      <Container className='container'>
        <div className='header-wrapper'>
          <div className='title'>
            <strong>{totalProperty}</strong> rooms, studios and apartments are
            available for rent.
          </div>
          <div className='right-btn-wrapper'>
            <div className='sort-dropdown'>
              <SortList setSortValue={setSortValue} />
            </div>
            <div className='tab-list'>
              <TabList
                className='tablist-small'
                tabList={propertyView}
                setTabId={setTabId}
                tabId={tabId}
              />
            </div>
          </div>
        </div>
        <div className='list-wrapper'>
          {windowWidth < 768 ? (
            <div
              className={` filter mobile-filter ${
                mobFilterActive ? 'filter-open' : ''
              }`}
            >
              <CustomButton
                className='fill'
                onClick={() => setMobFilterActive(true)}
              >
                Filter
              </CustomButton>
              <Filter
                mobFilterActive={mobFilterActive}
                setMobFilterActive={setMobFilterActive}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
              />
            </div>
          ) : (
            <div className='filter'>
              <Filter
                setSearchValue={setSearchValue}
                searchValue={searchValue}
              />
            </div>
          )}
          {tabId === 1 ? (
            <div className='listing'>
              {totalProperty === 0 ? (
                <span className='no-property-error'>
                  Oops! No property found.
                </span>
              ) : (
                <>
                  <div className='card-wrapper'>
                    {propertyData?.map((item: propertyListing) => (
                      <div className='card-item' key={item?.id}>
                        <CommonCard
                          route={`/home/property-listing/${item?.id}`}
                          item={item}
                          className=''
                        />
                      </div>
                    ))}
                  </div>
                  <CustomPagination
                    setPageNumber={setPageNumber}
                    pageNumber={pageNumber}
                    totalProperty={totalProperty}
                    pageSize={9}
                  />
                </>
              )}
            </div>
          ) : (
            <MapView
              mapContainerStyle={mapContainerStyle}
              center={center}
              propertyData={propertyData}
            />
          )}
        </div>
      </Container>
    </PropertyListingWrapper>
  );
};

export default PropertyListing;
