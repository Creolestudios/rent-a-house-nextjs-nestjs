import React, { useEffect, useState } from 'react';
import { Container } from '@/globalStyles';
import { useRouter } from 'next/router';
import { Breadcrumb } from 'antd';
import Icon from '@ant-design/icons';
import rightArrow from '@/assets/images/icons/DownArrowSvg';
import homeOutline from '@/assets/images/icons/HomeOutlineSvg';
import heartIcon from '@/assets/images/icons/HeartBorderSvg';
import heartFilled from '@/assets/images/icons/HeartFillSvg';

import shareIcon from '@/assets/images/icons/ShareSvg';
import {
  HeaderBreadcrumbs,
  PropertyDetailWrapper,
} from './PropertyDetail.styles';
import PropertyDetailView from './PropertyDetailView';
import SimilarProperty from './SimilarProperty';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/propertyListing/propertyListing.action';
import Link from 'next/link';
interface Liked {
  liked: number;
  propertyId: number;
}
import ToastNotification from '../Admin/Notification/ToastNotification';

const PropertyDetail: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [liked, setLiked] = useState<Boolean>(true);
  const [showLiked, setShowLiked] = useState<Boolean>(false);

  const propertyData = useSelector(
    (state: any) => state.propertyListingReducer.singleProperty
  );

  const fav = useSelector(
    (state: any) => state.propertyListingReducer.favouritePropertyList
  );

  const propertyId = router.query;

  const handleSave = () => {
    let searchPayload = {
      area: [],
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
    setShowLiked(!showLiked);
    setLiked(!liked);

    let value: Liked;
    liked === true
      ? (value = {
          liked: 1,
          propertyId: parseInt(propertyData.id),
        })
      : (value = {
          liked: 0,
          propertyId: parseInt(propertyData.id),
        });

    dispatch(
      actions.addFavourite({
        favoritePayload: value,
        pageNumber: { pageNo: 1 },
        searchPayload: searchPayload,
      })
    );
  };

  useEffect(() => {
    let a = fav.find((x: any) => x.id == propertyId.id);

    if (a) {
      setLiked(!liked);
      setShowLiked(true);
    }
  }, []);
  const copyToClipboard = () => {
    ToastNotification({
      type: 'success',
      message: 'URL Copied!',
    });
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {});
  };
  useEffect(() => {
    let data = {
      id: Number(propertyId.id),
    };
    propertyId.id && dispatch(actions.getSingleProperty(data));
  }, [propertyId]);

  return (
    <PropertyDetailWrapper>
      <Container>
        <HeaderBreadcrumbs className=''>
          <Breadcrumb
            items={[
              {
                title: (
                  <Link href='/home/property-listing?::'>
                    <Icon component={homeOutline} />
                  </Link>
                ),
              },
              {
                title: propertyData?.city_details?.name,
              },
              { title: propertyData?.name },
            ]}
            separator={<Icon component={rightArrow} />}
          />
          <div className='right'>
            <ul>
              {/* <li onClick={copyToClipboard}>
                <Icon component={shareIcon} />
                <span>share</span>
              </li> */}
              <li onClick={handleSave}>
                {showLiked !== true ? (
                  <Icon component={heartIcon} />
                ) : (
                  <Icon component={heartFilled} />
                )}
                <span>save</span>
              </li>
            </ul>
          </div>
        </HeaderBreadcrumbs>
        <PropertyDetailView />
        <SimilarProperty />
      </Container>
    </PropertyDetailWrapper>
  );
};

export default PropertyDetail;
