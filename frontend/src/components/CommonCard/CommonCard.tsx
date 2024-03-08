import { fontFamily } from '@/styles/variable';
import React, { useEffect, useState } from 'react';
import SubTitle from '../SubTitle/SubTitle';
import CardSlider from './CardSlider';
import {
  CardContent,
  CardImgWrapper,
  CommonCardWrapper,
} from './CommonCard.styles';
import Icon from '@ant-design/icons';
import longRightArrow from '@/assets/images/icons/LongRightArrowSvg';
import moment from 'moment';
import heartBorder from '@/assets/images/icons/HeartBorderSvg';
import heartFill from '@/assets/images/icons/HeartFillSvg';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import actions from '@/redux/propertyListing/propertyListing.action';

interface Iprop {
  item: {
    id?: number;
    images?: string[];
    name: string;
    type: string;
    space_overview: {
      bedrooms: number;
      size: number;
    };
    rent: number;
    available_from: string;
    is_favorite?: boolean;
  };
  route: string;
  className: string;
}

interface Liked {
  liked: number;
  propertyId: number;
}

const CommonCard = ({ item, route, className }: Iprop) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userToken, SetUserToken] = useState(null);
  const [liked, setLiked] = useState<Boolean>(true);
  const pageNumber = useSelector(
    (state: any) => state.propertyListingReducer.pageNumber
  );

  const handleLike = (propertyId) => {
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
    setLiked(!liked);
    let value: Liked;
    liked === true
      ? (value = {
          liked: 1,
          propertyId: parseInt(propertyId),
        })
      : (value = {
          liked: 0,
          propertyId: parseInt(propertyId),
        });

    dispatch(
      actions.addFavourite({
        favoritePayload: value,
        pageNumber: { pageNo: pageNumber },
        searchPayload: searchPayload,
      })
    );
  };
  useEffect(() => {
    SetUserToken(window.sessionStorage.getItem('token'));
    window.addEventListener('storage', () => {
      SetUserToken(sessionStorage.getItem('token') ?? '');
    });

    item.is_favorite === null ? setLiked(true) : setLiked(false);
  }, []);
  return (
    <CommonCardWrapper className={`card ${className ?? ''}`}>
      <CardImgWrapper>
        <CardSlider propertyImage={item.images} />
        {userToken && (
          <div className='icon' onClick={() => handleLike(item.id)}>
            {item?.is_favorite !== null ? (
              <Icon component={heartFill} />
            ) : (
              <Icon component={heartBorder} />
            )}
          </div>
        )}
      </CardImgWrapper>
      <CardContent onClick={() => router.push(route)}>
        <SubTitle
          title={item?.name}
          marginBottom={'4px'}
          fontFamily={`${fontFamily?.ptBold}`}
        />
        <ul className='list-wrapper'>
          {`${item?.type} · ${item?.space_overview?.bedrooms} Bedroom · ${item?.space_overview?.size} Sq. Ft. `}
        </ul>
        <div className='footer'>
          <div className='left'>
            <div className='rate'>
              CA${item?.rent}
              <span>/month</span>
            </div>
            <div className='date'>
              From {moment(item?.available_from).format('DD MMMM YYYY')}
            </div>
          </div>
          <div className='right'>
            <div className='icon'>
              <Icon component={longRightArrow} />
            </div>
          </div>
        </div>
      </CardContent>
    </CommonCardWrapper>
  );
};

export default CommonCard;
